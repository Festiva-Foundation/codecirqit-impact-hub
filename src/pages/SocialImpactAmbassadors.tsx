import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import kavya from '@/assets/Kavya.jpeg';
import tejaswini from '@/assets/tejaswini.jpeg';
import shravanthi from '@/assets/shravanthi.jpeg';
import asha from '@/assets/asha.jpeg';
import harsha from '@/assets/harsha.jpeg';
import rohitspoc from "@/assets/rohit_spoc.jpeg";
//harsha image issue fix

const SocialImpactAmbassadors = () => {
  const ambassadors = [
    {
      id: 1,
      name: "G KAVYA RAO",
      college: "Cambridge Institute of Technology",
      year: "4th Year B.E. CSE",
      image: kavya,
      description: "I am a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aim to use technology not just to build systems but to build communities."
    },
    {
      id: 2,
      name: "Naga Tejaswini P",
      college: "Cambridge Institute of Technology",
      year: "3rd Year CSE-IOT",
      image: tejaswini,
      description: "I am a 3rd-year CSE-IOT student who codes with purpose and occasionally caffeinated chaos. I build small systems, support peers, and sneak empathy into tech. Currently social-interning my way through community impact with Festiva Foundation. If it solves problems and brings people together, I'm in."
    },
    {
      id: 3,
      name: "Durga Shravanthi P",
      college: "Sai Vidya Institute of Technology",
      year: "Final Year AI ML ",
      image: shravanthi,
      description: "Being part of Festiva Foundation has allowed me to combine my passion for software development with social service. I've led multiple initiatives focused on education technology and skill development for underprivileged youth."
    },
    {
      id: 4,
      name: "Asha Sai T K",
      college: "Bangalore Technological Institute",
      year: "Final Year CSE ",
      image: asha,
      description: "Hi, I’m Asha Sai T K  a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and actively engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aspire to use technology not just to build systems, but to build communities."
    },
    {
      id: 5,
      name: "K Harshavardhan",
      college: "Sai Vidya Institute of Technology",
      year: "Final Year CSE ",
      image: harsha,
      description: "I’m K Harshavardhan, a final-year CSE - AIML student at SVIT and currently serving as the Technical Head of the NSS Cell. In this role, I have actively contributed to planning and executing several community-driven initiatives, including health camps, cleanliness drives, and awareness programs, supported by a team of over 50 volunteers. With a strong interest in technology and social impact, I aspire to use my technical skills to develop innovative solutions that uplift communities and promote sustainable change."
    },
    {
      id: 6,
      name: "Rohit D",
      college: "Bangalore Technological Institute",
      year: "Final Year ECE ",
      image: rohitspoc,
      description: "Hi, I’m Rohit D, a final-year B.E. student in Electronics and Communication Engineering with a strong passion for coding, technology, and creative problem-solving. Alongside my studies, I assist fellow students in completing AICTE activities, lead awareness initiatives, and take part in various social impact programs. As a Social Intern at Festiva Foundation, my goal is to harness technology not only to create innovative solutions but also to strengthen and uplift communities."
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -30,
      rotateY: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleBecomeAmbassador = () => {
    // Navigate to home page and then scroll to contact section
    const element = document.getElementById('get-in-touch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If on different page, navigate to home with hash
      window.location.href = '/#get-in-touch';
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
              style={{ perspective: '1000px' }}
            >
              {ambassadors.map((ambassador, index) => (
                <motion.div
                  key={ambassador.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    rotateX: 10,
                    rotateY: 10,
                    z: 50,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotateX: -5,
                    transition: { duration: 0.1 }
                  }}
                  className="group cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <Card className="h-full overflow-hidden bg-card/90 backdrop-blur-lg border-2 border-transparent hover:border-primary/30 transition-all duration-500 transform-gpu shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="p-0 relative">
                      <div className="relative overflow-hidden h-64 sm:h-48 md:h-64">
                        <motion.img
                          src={ambassador.image}
                          alt={ambassador.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                          whileHover={{
                            scale: 1.15,
                            rotateZ: 2,
                            transition: { duration: 0.6 }
                          }}
                          style={{ transformStyle: 'preserve-3d' }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />

                        {/* Floating Year Badge with 3D effect */}
                        <motion.div
                          className="absolute bottom-4 left-4 bg-primary/95 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg"
                          whileHover={{
                            scale: 1.1,
                            rotateX: 15,
                            z: 20,
                            transition: { duration: 0.3 }
                          }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {ambassador.year}
                        </motion.div>

                        {/* Floating particles effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-primary/40 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                              }}
                              animate={{
                                y: [-10, -30, -10],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 space-y-4 relative">
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg"
                        whileHover={{ opacity: 1 }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        >
                          <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                            {ambassador.name}
                          </CardTitle>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-2 mb-4 text-muted-foreground"
                          whileHover={{ x: 3, transition: { duration: 0.3 } }}
                        >
                          <motion.div
                            whileHover={{
                              rotateY: 360,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <GraduationCap size={16} className="text-primary flex-shrink-0" />
                          </motion.div>
                          <CardDescription className="text-sm font-medium">
                            {ambassador.college}
                          </CardDescription>
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-sm text-muted-foreground leading-relaxed text-justify relative z-10"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {ambassador.description}
                      </motion.p>

                      {/* Animated border effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{
                          scaleX: 1,
                          transition: { duration: 0.6 }
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="text-center mt-16 p-8 bg-card/60 backdrop-blur-lg rounded-3xl border border-border/30 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Ready to Make an Impact?
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                Join our growing community of Social Impact Ambassadors and help build a better tomorrow through technology and service.
              </motion.p>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateX: 10,
                  rotateY: 5,
                  z: 20
                }}
                whileTap={{
                  scale: 0.95,
                  rotateX: -5,
                  transition: { duration: 0.1 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform-gpu"
                  onClick={handleBecomeAmbassador}
                >
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Become an Ambassador
                  </motion.span>
                </Button>
              </motion.div>

              {/* Floating orbs around CTA */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      x: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SocialImpactAmbassadors;