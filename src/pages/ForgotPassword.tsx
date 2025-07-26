import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, X, Eye, EyeOff, ArrowLeft, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import codecirqitLogo from '@/assets/codecirqit-logo.png';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const passwordCriteria = [
    { label: "8-12 characters", check: password.length >= 8 && password.length <= 12 },
    { label: "One uppercase letter", check: /[A-Z]/.test(password) },
    { label: "One lowercase letter", check: /[a-z]/.test(password) },
    { label: "One number", check: /\d/.test(password) },
    { label: "One special character", check: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];

  const sendOTP = () => {
    setOtpSent(true);
    setStep(2);
    toast({
      title: "OTP Sent!",
      description: "Please check your email for the verification code.",
    });
  };

  const verifyOTP = () => {
    setOtpVerified(true);
    setStep(3);
    toast({
      title: "OTP Verified!",
      description: "Please set your new password.",
    });
  };

  const onSubmit = (data: any) => {
    if (step === 1) {
      sendOTP();
    } else if (step === 2) {
      verifyOTP();
    } else if (step === 3) {
      toast({
        title: "Password Reset Successful!",
        description: "Your password has been updated. Redirecting to login...",
      });
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-ngo-neutral flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="ngo-card">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <img 
                src={codecirqitLogo} 
                alt="CodeCirqit Logo" 
                className="w-12 h-12 transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold">CodeCirqit</span>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
            <p className="text-muted-foreground">
              {step === 1 && "Enter your email to receive a reset code"}
              {step === 2 && "Enter the OTP sent to your email"}
              {step === 3 && "Create your new password"}
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <div className={`w-8 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <div className={`w-8 h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="email">Email Address</Label>
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
                    placeholder="Enter your registered email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>
                  )}
                </div>

                <Button type="submit" className="w-full btn-ngo-primary">
                  <Mail className="mr-2" size={20} />
                  Send Reset Code
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    maxLength={6}
                    {...register('otp', { required: 'OTP is required' })}
                    className="mt-1 text-center text-lg tracking-widest"
                    placeholder="000000"
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm mt-1">{String(errors.otp.message)}</p>
                  )}
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 btn-ngo-primary">
                    Verify OTP
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  {/* Password Criteria */}
                  <div className="mt-2 space-y-1">
                    {passwordCriteria.map((criteria, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        {criteria.check ? (
                          <Check className="text-green-500" size={16} />
                        ) : (
                          <X className="text-red-500" size={16} />
                        )}
                        <span className={criteria.check ? 'text-green-500 line-through' : 'text-muted-foreground'}>
                          {criteria.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register('confirmPassword', { 
                        required: 'Please confirm your password',
                        validate: (value) => value === password || 'Passwords do not match'
                      })}
                      className="pr-10"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{String(errors.confirmPassword.message)}</p>
                  )}
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 btn-ngo-primary">
                    Update Password
                  </Button>
                </div>
              </motion.div>
            )}
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-4">
            <Link to="/login" className="text-sm text-primary hover:underline font-medium">
              Back to Login
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
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

export default ForgotPassword;