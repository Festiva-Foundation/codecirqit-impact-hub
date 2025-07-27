import { motion } from 'framer-motion';
import { Target, Eye, Handshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Festiva Foundation</span>
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Festiva Foundation is a social initiative in collaboration with MIT NGO, 
                a registered charitable organization with 80G, 12A, and CSR compliance. We aim 
                to bridge the gap between youth potential and real-world community needs.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Through structured volunteering programs, we empower students, professionals, 
                and mentors to contribute to causes like food distribution, education, 
                environment, and social upliftment.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Built on the belief that individuals can do more than just their careers, Festiva Foundation 
                provides a platform to serve, lead, and create impact—where passion meets 
                purpose, and technology meets humanity.
              </p>
              
              <p className="text-lg font-semibold text-primary">
                Join us in building not just systems, but a better society.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To build a generation of socially responsible individuals who leverage 
                    their skills, knowledge, and compassion to uplift communities and drive 
                    meaningful change through technology and humanity.
                  </p>
                </div>
              </div>
            </div>

            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To create, manage, and scale student-led CSR activities that address 
                    real-world challenges while empowering volunteers with structured programs 
                    and promoting technology in community service.
                  </p>
                </div>
              </div>
            </div>

            <div className="ngo-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Handshake className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <p className="text-muted-foreground">
                    Collaborative partnerships with 80G, 12A, and CSR-compliant organizations 
                    ensuring legal compliance, transparency, and measurable impact in every 
                    initiative we undertake.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;