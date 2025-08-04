// config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Remote Config
const remoteConfig = getRemoteConfig(app);

// Configure Remote Config
remoteConfig.settings = {
  minimumFetchIntervalMillis: 300000, // 5 minutes
  fetchTimeoutMillis: 60000, // 1 minute
};

// Set default values for Remote Config
remoteConfig.defaultConfig = {
  authorized_volunteers: '{}' // Empty object as fallback
};

// Initialize Remote Config
export const initializeRemoteConfig = async () => {
  try {
    await fetchAndActivate(remoteConfig);
    console.log('Remote Config initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Remote Config:', error);
  }
};

export { remoteConfig };
export default app;