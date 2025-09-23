import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowLeft, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import kavya from '@/assets/Kavya.jpeg';
import tejaswini from '@/assets/tejaswini.jpeg';

const SocialImpactAmbassadors = () => {
  const ambassadors = [
    {
      id: 1,
      name: "G KAVYA RAO",
      college: "Cambridge Institute of Technology",
      year: "4th Year B.E. CSE",
      image: kavya,
      description: "I am a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aim to use technology not just to build systems but to build communities.",
      achievements: [
        "Led AICTE certificate programs for 200+ students",
        "Organized 15+ awareness campaigns",
        "Mentored junior students in tech skills"
      ],
      skills: ["Full Stack Development", "Community Leadership", "Event Management"],
      email: "kavya.rao@example.com",
      linkedin: "https://linkedin.com/in/kavya-rao"
    },
    {
      id: 2,
      name: "Naga Tejaswini P",
      college: "Cambridge Institute of Technology",
      year: "3rd Year CSE-IOT",
      image: tejaswini,
      description: "I am a 3rd-year CSE-IOT student who codes with purpose and occasionally caffeinated chaos. I build small systems, support peers, and sneak empathy into tech. Currently social-interning my way through community impact with Festiva Foundation. If it solves problems and brings people together, I'm in.",
      achievements: [
        "Developed IoT solutions for social good",
        "Conducted tech workshops for underprivileged students",
        "Contributed to digital literacy programs"
      ],
      skills: ["IoT Development", "Community Outreach", "Technical Training"],
      email: "tejaswini.p@example.com",
      linkedin: "https://linkedin.com/in/tejaswini-p"
    },
    {
      id: 3,
      name: "ARJUN KRISHNA",
      college: "PES University",
      year: "Final Year Computer Science",
      image: "/api/placeholder/400/400",
      description: "Being part of Festiva Foundation has allowed me to combine my passion for software development with social service. I've led multiple initiatives focused on education technology and skill development for underprivileged youth.",
      achievements: [
        "Built educational apps for rural schools",
        "Trained 100+ students in programming",
        "Led 5+ community tech projects"
      ],
      skills: ["Software Architecture", "Education Technology", "Team Leadership"],
      email: "arjun.krishna@example.com",
      linkedin: "https://linkedin.com/in/arjun-krishna"
    },
    {
      id: 4,
      name: "PRIYA SHARMA",
      college: "RV College of Engineering",
      year: "Final Year Electronics",
      image: "/api/placeholder/400/400",
      description: "As a final-year student in Electronics Engineering, I believe in the power of technology to create positive social change. Through Festiva Foundation, I've been able to contribute to digital literacy programs and environmental awareness campaigns in rural communities.",
      achievements: [
        "Installed solar systems in 10+ villages",
        "Conducted electronics workshops",
        "Led environmental awareness campaigns"
      ],
      skills: ["Electronics Design", "Renewable Energy", "Rural Development"],
      email: "priya.sharma@example.com",
      linkedin: "https://linkedin.com/in/priya-sharma"
    },
    {
      id: 5,
      name: "ROHIT KUMAR",
      college: "National Institute of Technology",
      year: "3rd Year Mechanical Engineering",
      image: "/api/placeholder/400/400",
      description: "Engineering solutions for social problems is my passion. Through Festiva Foundation, I've worked on sustainable development projects and helped implement mechanical solutions for water purification in rural areas.",
      achievements: [
        "Designed water filtration systems",
        "Led sustainable development projects",
        "Mentored 50+ engineering students"
      ],
      skills: ["Mechanical Design", "Sustainable Technology", "Project Management"],
      email: "rohit.kumar@example.com",
      linkedin: "https://linkedin.com/in/rohit-kumar"
    },
    {
      id: 6,
      name: "ANANYA SINGH",
      college: "Indian Institute of Science",
      year: "PhD Research Scholar",
      image: "/api/placeholder/400/400",
      description: "My research in biotechnology drives my commitment to social impact. I work with Festiva Foundation to bring scientific awareness to communities and bridge the gap between research and real-world applications.",
      achievements: [
        "Published 10+ research papers",
        "Conducted science outreach programs",
        "Developed health awareness initiatives"
      ],
      skills: ["Research & Development", "Science Communication", "Health Advocacy"],
      email: "ananya.singh@example.com",
      linkedin: "https://linkedin.com/in/ananya-singh"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <SEO
        title="Social Impact Ambassadors - Festiva Foundation"
        description="Meet our dedicated Social Impact Ambassadors from top engineering colleges who are making real difference through technology and community service."
        keywords="social impact ambassadors, student volunteers, engineering students, community service, Karnataka colleges"
        url="https://festivafoundation.org/social-impact-ambassadors"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
              
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Social Impact <span className="text-gradient">Ambassadors</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Our ambassadors are passionate students from top engineering colleges who lead by example,
                creating positive change in their communities through technology, innovation, and service.
              </motion.p>
            </motion.div>

            {/* Ambassadors Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {ambassadors.map((ambassador, index) => (
                <motion.div
                  key={ambassador.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500 transform-gpu">
                    <CardHeader className="p-0 relative">
                      <div className="relative overflow-hidden h-64 sm:h-48 md:h-64">
                        <motion.img
                          src={ambassador.image}
                          alt={ambassador.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating Action Buttons */}
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <motion.a
                            href={`mailto:${ambassador.email}`}
                            className="p-2 bg-white/90 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Mail size={16} />
                          </motion.a>
                          <motion.a
                            href={ambassador.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin size={16} />
                          </motion.a>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {ambassador.year}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                          {ambassador.name}
                        </CardTitle>
                        
                        <div className="flex items-center space-x-2 mb-4 text-muted-foreground">
                          <GraduationCap size={16} className="text-primary flex-shrink-0" />
                          <CardDescription className="text-sm font-medium">
                            {ambassador.college}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed text-justify line-clamp-4">
                        {ambassador.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {ambassador.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Achievement Count */}
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {ambassador.achievements.length} Key Achievements
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
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our growing community of Social Impact Ambassadors and help build a better tomorrow through technology and service.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Become an Ambassador
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SocialImpactAmbassadors;