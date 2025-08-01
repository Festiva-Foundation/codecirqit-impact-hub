import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { Check, X, Eye, EyeOff, UserPlus, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import festivaLogo from '@/assets/festiva-logo.png';

const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
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

  const sendOTP = () => {
    setOtpSent(true);
    toast({
      title: "OTP Sent!",
      description: "Please check your email for the verification code.",
    });
  };

  const verifyOTP = () => {
    setOtpVerified(true);
    toast({
      title: "Email Verified!",
      description: "You can now proceed to the next step.",
    });
  };

  const onSubmit = (data) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      console.log('Registration data:', data);
      // Set login status and save for 7 days
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginTime', Date.now().toString());
      localStorage.setItem('volunteerName', data.name);
      
      toast({
        title: "Registration Successful!",
        description: "Welcome to Festiva Foundation! Redirecting to dashboard...",
      });
      setTimeout(() => {
        navigate('/volunteer-dashboard');
      }, 1500);
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

                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        {...register('password', { required: 'Password is required' })}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
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
                    <Button type="submit" className="flex-1 btn-ngo-primary">
                      <UserPlus className="mr-2" size={20} />
                      Register
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