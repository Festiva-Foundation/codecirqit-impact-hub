import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft, Users, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import festivaLogo from '@/assets/festiva-logo.png';

const Register = () => {
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
            <span className="text-gradient">Volunteer</span> Registration
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of the change you want to see in the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="ngo-card">
            {/* Initiative Banner */}
            <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-primary">
                An Initiative of Festiva Foundation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join our mission to drive meaningful social change in communities across the nation.
                We're building a network of passionate volunteers committed to creating lasting impact
                through collaborative social drives and community outreach programs.
              </p>
            </div>

            {/* Registration Process */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold text-center">How to Register</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Step 1</h4>
                  <p className="text-sm text-muted-foreground">Contact our team via email</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Step 2</h4>
                  <p className="text-sm text-muted-foreground">Connect with your local SPOC</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Step 3</h4>
                  <p className="text-sm text-muted-foreground">Join upcoming social drives</p>
                </motion.div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center mb-6">Get in Touch with Festiva Foundation</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Registration & General Inquiries
                    </h4>
                    <a
                      href="mailto:contact@festivafoundation.org"
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                    >
                      contact@festivafoundation.org
                    </a>
                  </div>

                  <div className="pt-4 border-t border-blue-200">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      📧 Send us your details and we'll connect you with opportunities to make a difference
                      <br />
                      🤝 Our team will help you find the perfect volunteer role matching your interests
                      <br />
                      🌟 Get updates about upcoming social change drives in your area
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <Phone className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-green-800">Call Us</h5>
                  <p className="text-green-700 text-sm">+91 98765 43210</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-purple-800">Visit Our Office</h5>
                  <p className="text-purple-700 text-sm">Bangalore, Karnataka</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center pt-4">
                <Button
                  asChild
                  className="btn-ngo-primary px-8 py-3 text-lg"
                >
                  <a href="mailto:contact@festivafoundation.org?subject=Volunteer Registration Interest&body=Hi Festiva Foundation Team,%0A%0AI am interested in volunteering for your social change drives. Please provide me with more information about registration and upcoming opportunities.%0A%0AThank you!">
                    <Mail className="mr-2" size={20} />
                    Contact Us for Registration
                  </a>
                </Button>
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 text-center space-y-4 pt-6 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">
                Already registered with us?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Login here
                </Link>
              </p>

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
    </div>
  );
};

export default Register;