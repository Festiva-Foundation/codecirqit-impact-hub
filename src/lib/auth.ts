import { supabase } from './supabase';

// Secure mapping of allowed emails to display names
// In production, this would come from environment variables or remote config
const getAllowedUsers = () => {
  // These would ideally be stored in environment variables or fetched from a secure endpoint
  return {
    'svrohith824@gmail.com': 'Rohith S V',
    'svrohith248@gmail.com': 'SVR', 
    'volunteer1@festivafoundation.org': 'Volunteer One',
    'volunteer2@festivafoundation.org': 'Volunteer Two'
  };
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    // Check if user is in allowlist
    const allowedUsers = getAllowedUsers();
    if (!allowedUsers[email as keyof typeof allowedUsers]) {
      // Sign out immediately if not authorized
      await supabase.auth.signOut();
      throw new Error('Access denied. This email is not authorized.');
    }

    return { 
      user: data.user, 
      displayName: allowedUsers[email as keyof typeof allowedUsers] 
    };
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = () => {
  return supabase.auth.getUser();
};

export const getDisplayName = (email: string | undefined): string => {
  if (!email) return 'Volunteer';
  
  const allowedUsers = getAllowedUsers();
  return allowedUsers[email as keyof typeof allowedUsers] || 'Unauthorized User';
};

// Auth state listener
export const onAuthStateChange = (callback: (user: any, displayName: string) => void) => {
  return supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      const email = session.user.email;
      const allowedUsers = getAllowedUsers();
      
      // Double-check authorization
      if (!email || !allowedUsers[email as keyof typeof allowedUsers]) {
        await supabase.auth.signOut();
        callback(null, '');
        return;
      }
      
      callback(session.user, allowedUsers[email as keyof typeof allowedUsers]);
    } else {
      callback(null, '');
    }
  });
};