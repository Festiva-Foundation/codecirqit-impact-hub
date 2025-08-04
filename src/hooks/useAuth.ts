// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { getRemoteConfig, getValue } from 'firebase/remote-config';

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthorized: boolean;
  displayName: string | null;
  error: string | null;
}

interface WelcomeMapping {
  [email: string]: string;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthorized: false,
    displayName: null,
    error: null
  });

  // Fetch authorized users securely
  const fetchAuthorizedUsers = async (): Promise<WelcomeMapping> => {
    try {
      const remoteConfig = getRemoteConfig();
      const welcomeMappingJson = getValue(remoteConfig, 'authorized_volunteers').asString();

      if (welcomeMappingJson) {
        return JSON.parse(welcomeMappingJson);
      }

      // Fallback to environment variables
      const envMapping = import.meta.env.VITE_AUTHORIZED_VOLUNTEERS;
      if (envMapping) {
        return JSON.parse(envMapping);
      }

      throw new Error('No authorized users configuration found');
    } catch (error) {
      console.error('Failed to fetch authorized users:', error);
      return {};
    }
  };

  // Check user authorization
  const checkAuthorization = async (user: User): Promise<{ isAuthorized: boolean; displayName: string | null }> => {
    try {
      const authorizedUsers = await fetchAuthorizedUsers();
      const userEmail = user.email?.toLowerCase();

      if (!userEmail || !authorizedUsers[userEmail]) {
        return { isAuthorized: false, displayName: null };
      }

      return { isAuthorized: true, displayName: authorizedUsers[userEmail] };
    } catch (error) {
      console.error('Authorization check failed:', error);
      return { isAuthorized: false, displayName: null };
    }
  };

  // Sign out function
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      localStorage.removeItem('volunteerName');
      localStorage.removeItem('userEmail');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));

      if (user) {
        const { isAuthorized, displayName } = await checkAuthorization(user);

        if (!isAuthorized) {
          // Unauthorized user - sign them out
          await signOut(auth);
          setAuthState({
            user: null,
            loading: false,
            isAuthorized: false,
            displayName: null,
            error: 'Access denied. This email is not authorized.'
          });
          return;
        }

        // Authorized user - store session data
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', Date.now().toString());
        localStorage.setItem('volunteerName', displayName || '');
        localStorage.setItem('userEmail', user.email || '');

        setAuthState({
          user,
          loading: false,
          isAuthorized: true,
          displayName,
          error: null
        });
      } else {
        // No user signed in
        setAuthState({
          user: null,
          loading: false,
          isAuthorized: false,
          displayName: null,
          error: null
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    ...authState,
    logout
  };
};