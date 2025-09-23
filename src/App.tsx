import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { initializeRemoteConfig } from '@/config/firebase';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import EnhancedVolunteerDashboard from "./pages/EnhancedVolunteerDashboard";
import Gallery from "./pages/Gallery";
import ActivityDetail from "./pages/ActivityDetail";
import ActivityDetail2 from "./pages/ActivityDetail2";
import ActivityDetail3 from "./pages/ActivityDetail3";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SocialImpactAmbassadors from "./pages/SocialImpactAmbassadors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Firebase Remote Config when app starts
  useEffect(() => {
    const initFirebase = async () => {
      try {
        await initializeRemoteConfig();
        console.log('Firebase Remote Config initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Firebase Remote Config:', error);
      }
    };

    initFirebase();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/social-impact-ambassadors" element={<SocialImpactAmbassadors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/activity/:id" element={<ActivityDetail />} />
              <Route path="/activity-2" element={<ActivityDetail2 />} />
              <Route path="/activity-3" element={<ActivityDetail3 />} />
              <Route path="/admin-login" element={<AdminLogin />} />

              {/* Protected Routes - Require Firebase Authentication */}
              <Route
                path="/volunteer-dashboard"
                element={
                  <ProtectedRoute>
                    <EnhancedVolunteerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;