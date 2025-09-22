import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

const SocialImpactSection = () => {
  const ambassadors = [
    {
      id: 1,
      name: "G KAVYA RAO",
      college: "Cambridge Institute of Technology",
      image: "/api/placeholder/300/300", // You can replace with actual image
      description: "I am a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aim to use technology not just to build systems but to build communities."
    },
    {
      id: 2,
      name: "PRIYA SHARMA",
      college: "RV College of Engineering",
      image: "/api/placeholder/300/300", // You can replace with actual image
      description: "As a final-year student in Electronics Engineering, I believe in the power of technology to create positive social change. Through Festiva Foundation, I've been able to contribute to digital literacy programs and environmental awareness campaigns in rural communities."
    },
    {
      id: 3,
      name: "ARJUN KRISHNA",
      college: "PES University",
      image: "/api/placeholder/300/300", // You can replace with actual image
      description: "Being part of Festiva Foundation has allowed me to combine my passion for software development with social service. I've led multiple initiatives focused on education technology and skill development for underprivileged youth."
    }
  ];

  return (
    <section id="social-impact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social Impact <span className="text-gradient">Ambassadors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated ambassadors who are making a real difference in their communities
            through technology, leadership, and social responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-foreground">
                    {ambassador.name}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-2 mb-4 text-muted-foreground">
                    <GraduationCap size={16} className="text-primary" />
                    <CardDescription className="text-sm font-medium">
                      {ambassador.college}
                    </CardDescription>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {ambassador.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Social Impact Ambassador
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to become a Social Impact Ambassador?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Mission
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpactSection;