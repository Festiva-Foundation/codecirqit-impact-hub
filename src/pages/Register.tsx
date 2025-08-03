import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { Check, X, Eye, EyeOff, UserPlus, ArrowLeft, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { getDisplayName } from '@/lib/auth';
import festivaLogo from '@/assets/festiva-logo.png';

const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('Festiva@CIT#2026'); // Pre-fill with shared password
  const { toast } = useToast();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();

  const colleges = [
    "Cambridge Institute Of Technology",
    "Sai Vidya Institute Of Technology",
    "Bengalore Technological Institute",
    "Nitte Meenakshi Institute of Technology",
    "BMS Institute of Technology",
    "JSS Academy of Technical Education",
    "Other"
  ];

  const branches = [
    "CSE", "ISE", "AIML", "DS", "IOT", "MECH", "CIVIL", "ECE", "EEE", "Others"
  ];

  const passwordCriteria = [
    { label: "8-12 characters", check: password.length >= 8 && password.length <= 12 },
    { label: "One uppercase letter", check: /[A-Z]/.test(password) },
    { label: "One lowercase letter", check: /[a-z]/.test(password) },
    { label: "One number", check: /\d/.test(password) },
    { label: "One special character", check: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];

  const userType = watch('userType');

  const onSubmit = async (data: any) => {
    if (step === 1) {
      // Check if email is in allowed list
      const displayName = getDisplayName(data.email);
      if (displayName === 'Unauthorized User') {
        toast({
          title: "Registration Not Allowed",
          description: "This email is not authorized for registration. Please contact the administrator.",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setIsLoading(true);
      
      try {
        // Register with Supabase using the shared password
        const { data: authData, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              full_name: data.name,
              phone: data.phone,
              location: data.location,
              user_type: data.userType,
              college: data.college,
              semester: data.semester,
              branch: data.branch
            }
          }
        });

        if (error) throw error;

        if (authData.user) {
          // Get display name for this email
          const displayName = getDisplayName(data.email);
          
          // Store user info
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('loginTime', Date.now().toString());
          localStorage.setItem('volunteerName', displayName);
          localStorage.setItem('userEmail', data.email);
          
          toast({
            title: "Registration Successful!",
            description: `Welcome to Festiva Foundation, ${displayName}! Redirecting to dashboard...`,
          });
          
          setTimeout(() => {
            navigate('/volunteer-dashboard');
          }, 1500);
        }
      } catch (error: any) {
        toast({
          title: "Registration Failed",
          description: error.message || "Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-ngo-neutral">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <img
              src={festivaLogo}
              alt="Festiva Foundation Logo"
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />
            <span className="text-3xl font-bold">Festiva Foundation</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Volunteer</span> Registration!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of changemakers and start making a difference
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="ngo-card">
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
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
                  <h3 className="text-2xl font-semibold text-center mb-6">Basic Details</h3>

                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1"
                      placeholder="Enter Full Name (Ex: John E)"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="mt-1"
                      placeholder="Enter Mobile Number (Ex: 9876543210)"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="mt-1"
                      placeholder="Enter Mail ID (Ex: john2@gmail.com)"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-ngo-primary"
                  >
                    Continue to Step 2
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-center mb-6">Extended Details</h3>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      {...register('location', { required: 'Location is required' })}
                      className="mt-1"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.location.message)}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="userType">Are You *</Label>
                    <Controller
                      name="userType"
                      control={control}
                      rules={{ required: 'Please select your type' }}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="employee">Employee</SelectItem>
                            <SelectItem value="mentor">Mentor</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.userType && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.userType.message)}</p>
                    )}
                  </div>

                  {userType === 'student' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label htmlFor="college">College Name *</Label>
                        <Controller
                          name="college"
                          control={control}
                          rules={{ required: userType === 'student' ? 'College is required' : false }}
                          render={({ field }) => (
                            <Select value={field.value} onValueChange={field.onChange}>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select your college" />
                              </SelectTrigger>
                              <SelectContent>
                                {colleges.map((college) => (
                                  <SelectItem key={college} value={college}>
                                    {college}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.college && (
                          <p className="text-red-500 text-sm mt-1">{String(errors.college.message)}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="semester">Semester *</Label>
                          <Controller
                            name="semester"
                            control={control}
                            rules={{ required: userType === 'student' ? 'Semester is required' : false }}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue placeholder="SEM" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1,2,3,4,5,6,7,8].map((sem) => (
                                    <SelectItem key={sem} value={sem.toString()}>
                                      {sem}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.semester && (
                            <p className="text-red-500 text-sm mt-1">{String(errors.semester.message)}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="branch">Branch *</Label>
                          <Controller
                            name="branch"
                            control={control}
                            rules={{ required: userType === 'student' ? 'Branch is required' : false }}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue placeholder="Branch" />
                                </SelectTrigger>
                                <SelectContent>
                                  {branches.map((branch) => (
                                    <SelectItem key={branch} value={branch}>
                                      {branch}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.branch && (
                            <p className="text-red-500 text-sm mt-1">{String(errors.branch.message)}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Information about pre-filled password */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="text-blue-500 mt-0.5" size={16} />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">Shared Password Information</h4>
                        <p className="text-sm text-blue-700">
                          All volunteers use the same password: <code className="bg-blue-100 px-1 rounded">Festiva@CIT#2026</code>
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          This password has been pre-filled for your convenience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        {...register('password', { 
                          required: 'Password is required',
                          validate: (value) => value === 'Festiva@CIT#2026' || 'Please use the provided shared password'
                        })}
                        className="pr-10"
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.password.message)}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative mt-1">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        {...register('confirmPassword', {
                          required: 'Please confirm your password',
                          validate: (value) => value === password || 'Passwords do not match'
                        })}
                        className="pr-10"
                        defaultValue="Festiva@CIT#2026"
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{String(errors.confirmPassword.message)}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Controller
                      name="terms"
                      control={control}
                      rules={{ required: 'You must agree to terms' }}
                      render={({ field }) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms & Conditions *
                    </Label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm">{String(errors.terms.message)}</p>
                  )}

                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button type="submit" disabled={isLoading} className="flex-1 btn-ngo-primary">
                      <UserPlus className="mr-2" size={20} />
                      {isLoading ? 'Creating Account...' : 'Register'}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Login here
                </Link>
              </p>
              
              <Link
                to="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mt-4"
              >
                <ArrowLeft className="mr-1" size={16} />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;