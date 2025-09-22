import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Globe } from 'lucide-react';
import sdglogo from '@/assets/SDG Wheel_Transparent_WEB.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Content - Top Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient">Festiva Foundation</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-justify">
                Festiva Foundation is a social initiative in collaboration with MIT NGO,
                a registered charitable organization with 80G, 12A, and CSR compliance. We aim
                to bridge the gap between youth potential and real-world community needs.
              </p>

              <p className="text-muted-foreground mb-6 text-justify">
                Through structured volunteering programs, we empower students, professionals,
                and mentors to contribute to causes like food distribution, education,
                environment, and social upliftment.
              </p>

              <p className="text-muted-foreground mb-8 text-justify">
                Built on the belief that individuals can do more than just their careers, Festiva Foundation
                provides a platform to serve, lead, and create impact—where passion meets
                purpose, and technology meets humanity.
              </p>

              <p className="text-lg font-bold text-primary">
                Join us in building not just systems, but a better society.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* First Row - Vision & Mission */}
          <div className="ngo-card">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Eye className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-justify">
                  To build a generation of socially responsible individuals who leverage
                  their skills, knowledge, and compassion to uplift communities and drive
                  meaningful change through technology and humanity.
                </p>
              </div>
            </div>
          </div>

          <div className="ngo-card">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-justify">
                  To create, manage, and scale student-led CSR activities that address
                  real-world challenges while empowering volunteers with structured programs
                  and promoting technology in community service.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Approach & Act4SDGs */}
          <div className="ngo-card">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <img src={sdglogo} alt="SDG Logo" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                <p className="text-muted-foreground text-justify">
                  Collaborative partnerships with 80G, 12A, and CSR-compliant organizations
                  ensuring legal compliance, transparency, and measurable impact in every
                  initiative we undertake.
                </p>
              </div>
            </div>
          </div>

            <motion.div
              className="ngo-card relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="p-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Globe className="text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text" size={28} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">UN SDG Partner</h3>
                      <p className="text-sm text-blue-600 font-medium">Act4SDGs Global Campaign</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>

                <p className="text-muted-foreground text-justify mb-4">
                  Our initiatives align with UN Sustainable Development Goals, giving volunteers
                  internationally recognized certificates for AICTE points, scholarships, and global opportunities.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-blue-600">UN Certified</div>
                    <div className="text-xs text-blue-500">SDG Activities</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-green-600">Global Impact</div>
                    <div className="text-xs text-green-500">Recognition</div>
                  </div>
                </div>

                <motion.a
                  href="https://www.act4sdgs.org/profile/festiva_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="mr-2" size={18} />
                  View UN Profile
                </motion.a>
              </div>
            </motion.div>
                  </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;