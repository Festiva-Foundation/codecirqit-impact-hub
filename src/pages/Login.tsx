// Login.tsx - Secure Firebase Authentication
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, LogIn, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import festivaLogo from '@/assets/festiva-logo.png';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';
import { auth } from '@/config/firebase'; // Your Firebase config
import { getRemoteConfig, getValue } from 'firebase/remote-config';

interface FormData {
  email: string;
  password: string;
}

interface WelcomeMapping {
  [email: string]: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Secure function to fetch authorized users from Firebase Remote Config
  const fetchAuthorizedUsers = async (): Promise<WelcomeMapping> => {
    try {
      const remoteConfig = getRemoteConfig();

      // Fetch from Remote Config (recommended approach)
      const welcomeMappingJson = getValue(remoteConfig, 'authorized_volunteers').asString();

      if (welcomeMappingJson) {
        return JSON.parse(welcomeMappingJson);
      }

      // Fallback to environment variables if Remote Config fails
      const envMapping = import.meta.env.VITE_AUTHORIZED_VOLUNTEERS;
      if (envMapping) {
        return JSON.parse(envMapping);
      }

      throw new Error('No authorized users configuration found');
    } catch (error) {
      console.error('Failed to fetch authorized users:', error);
      // Return empty object to deny all access if config fails
      return {};
    }
  };

  // Check if user is authorized and get their display name
  const checkUserAuthorization = async (user: User): Promise<string | null> => {
    try {
      const authorizedUsers = await fetchAuthorizedUsers();
      const userEmail = user.email?.toLowerCase();

      if (!userEmail || !authorizedUsers[userEmail]) {
        return null;
      }

      return authorizedUsers[userEmail];
    } catch (error) {
      console.error('Authorization check failed:', error);
      return null;
    }
  };

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticating(true);

      if (user) {
        console.log('User authenticated, checking authorization...');

        const displayName = await checkUserAuthorization(user);

        if (!displayName) {
          // User not authorized - sign them out immediately
          toast({
            title: "Access Denied",
            description: "This email is not authorized to access the system.",
            variant: "destructive"
          });

          await signOut(auth);
          setIsAuthenticating(false);
          return;
        }

        // User is authorized - store secure session data
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', Date.now().toString());
        localStorage.setItem('volunteerName', displayName);
        localStorage.setItem('userEmail', user.email || '');

        toast({
          title: "Login Successful!",
          description: `Welcome back, ${displayName}!`,
        });

        // Navigate to dashboard
        navigate('/volunteer-dashboard', { replace: true });
      }

      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, [navigate, toast]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      console.log('Attempting Firebase authentication...');

      // Firebase handles all password validation and security
      await signInWithEmailAndPassword(auth, data.email, data.password);

      // onAuthStateChanged will handle the rest of the authentication flow

    } catch (error: any) {
      console.error('Firebase authentication error:', error);

      let errorMessage = 'Login failed. Please try again.';

      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please wait before trying again.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
      }

      toast({
        title: "Authentication Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking authentication
  if (isAuthenticating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent mx-auto" />
          <p className="text-gray-600">Checking authentication...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <img
                src={festivaLogo}
                alt="Festiva Foundation Logo"
                className="w-12 h-12 transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-gray-800">Festiva Foundation</span>
            </Link>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Welcome Back Champ!</h1>
            <p className="text-gray-600">Login to access your volunteer dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="mt-1"
                placeholder="Enter your authorized email"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                  className="pr-10"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Authenticating...
                </>
              ) : (
                <>
                  <LogIn className="mr-2" size={20} />
                  Secure Login
                </>
              )}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800 text-center">
              🔒 This is a secure login system. Only authorized volunteers can access the dashboard.
            </p>
          </div>

          {/* Links */}
          <div className="mt-6 text-center space-y-4">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="mr-1" size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;