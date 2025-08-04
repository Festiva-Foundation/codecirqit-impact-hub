import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ngo-neutral to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our mission? Have questions about volunteering? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <a 
                    href="mailto:festivamoments77@gmail.com"
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    festivamoments77@gmail.com
                  </a>
                  <p className="text-muted-foreground mt-1">
                    For general inquiries, volunteer applications, and partnership opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-foreground font-medium">
                    Bangalore, Karnataka
                  </p>
                  <p className="text-muted-foreground">
                    Serving communities across Karnataka through structured volunteering programs
                  </p>
                </div>
              </div>
            </div>

            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Clock className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Response Time</h3>
                  <p className="text-foreground font-medium">
                    Within 24-48 hours
                  </p>
                  <p className="text-muted-foreground">
                    We respond to all volunteer applications and inquiries promptly
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collaboration Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="ngo-card">
              <h3 className="text-2xl font-bold mb-4">Our Partnerships</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-primary">MIT NGO</h4>
                  <p className="text-muted-foreground">
                    Registered charitable organization with 80G, 12A, and CSR compliance. 
                    Our primary partner for all legal and structured social activities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary">Festiva Moments</h4>
                  <p className="text-muted-foreground">
                    The parent organization under which Festiva Foundation operates, providing
                    institutional support and guidance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary">Educational Institutions</h4>
                  <p className="text-muted-foreground">
                    Partnerships with leading engineering colleges across Bangalore for 
                    student engagement and volunteer recruitment.
                  </p>
                </div>
              </div>
            </div>

            <div className="ngo-card">
              <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
              <p className="text-muted-foreground mb-4">
                Interested in partnering with us? We welcome collaborations with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Educational institutions and colleges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Corporate organizations for CSR activities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  NGOs and charitable organizations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Government bodies and civic organizations
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;