import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import kavya from '@/assets/Kavya.jpeg';
import tejaswini from '@/assets/tejaswini.jpeg';
import shravanthi from '@/assets/shravanthi.jpeg';
import sdgLogo from "@/assets/SDG Wheel_Transparent_WEB.png";


const SocialImpactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Fixed ambassadors array (removed duplicate)
  const ambassadors = [
    {
      id: 1,
      name: "G KAVYA RAO",
      college: "Cambridge Institute of Technology",
      image: kavya,
      description: "I am a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aim to use technology not just to build systems but to build communities."
    },
    {
      id: 2,
      name: "Naga Tejaswini P",
      college: "Cambridge Institute of Technology",
      image: tejaswini,
      description: "I am a 3rd-year CSE-IOT student who codes with purpose and occasionally caffeinated chaos. I build small systems, support peers, and sneak empathy into tech. Currently social-interning my way through community impact with Festiva Foundation. If it solves problems and brings people together, I'm in."
    },
    {
      id: 3,
      name: "Durga Shravanthi P",
      college: "Sai Vidya Institute of Technology",
      image: shravanthi,
      description: "I am Durga Shravanthi P, a final-year CSE - AIML student at SVIT and President of the NSS Cell. I have organized health camps, cleanliness drives, and awareness programs with 50+ volunteers, focusing on community service. Passionate about social work and leadership, I aim to create a positive impact through both technology and volunteering."
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ambassadors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [ambassadors.length, isAutoScrolling]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + ambassadors.length) % ambassadors.length);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % ambassadors.length);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Get 3 cards to display (current, next, and next+1)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % ambassadors.length;
      cards.push({ ...ambassadors[index], displayIndex: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="social-impact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Social Impact <span className="text-gradient">Ambassadors</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet our dedicated ambassadors who are making a real difference in their communities
            through technology, leadership, and social responsibility.
          </motion.p>
        </motion.div>

        {/* 3-Card Carousel Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-20">
            <motion.button
              onClick={handlePrevious}
              className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Cards Container - Only showing 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleCards.map((ambassador, index) => (
              <motion.div
                key={`${ambassador.id}-${currentIndex}-${index}`}
                className="group"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  scale: 0.8,
                  transition: { duration: 0.4 }
                }}
                whileHover={{
                  y: -15,
                  rotateY: 8,
                  transition: { duration: 0.4 }
                }}
              >
                <Card className="h-full overflow-hidden bg-card/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 transform-gpu">
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden h-72 sm:h-80 lg:h-96">
                      <motion.img
                        src={ambassador.image}
                        alt={ambassador.name}
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.08, rotateZ: 1 }}
                        style={{
                          objectPosition: 'center center',
                          objectFit: 'cover'
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        whileHover={{ opacity: 1 }}
                      />

                      {/* Enhanced 3D Floating Badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg border border-white/20"
                        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                        whileHover={{
                          scale: 1.1,
                          rotateZ: 360,
                          boxShadow: "0 0 25px hsl(var(--primary) / 0.5)",
                          transition: { duration: 0.4 }
                        }}
                      >
                        Social Impact Ambassador
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors font-bold">
                        {ambassador.name}
                      </CardTitle>

                      <div className="flex items-center space-x-2 mb-3 text-muted-foreground">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap size={16} className="text-primary flex-shrink-0" />
                        </motion.div>
                        <CardDescription className="text-xs sm:text-sm font-medium">
                          {ambassador.college}
                        </CardDescription>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-5 transition-all duration-500"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                    >
                      {ambassador.description}
                    </motion.p>

                    <motion.div
                      className="pt-3 border-t border-border/50"
                      whileHover={{ borderColor: "hsl(var(--primary))" }}
                    >
                      <div className="flex items-center justify-between">
                        <motion.span
                          className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))",
                            boxShadow: "0 4px 15px hsl(var(--primary) / 0.3)"
                          }}
                        >
                          Impact Leader
                        </motion.span>
                        <div className="flex space-x-1.5">
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                '0 0 0 0 hsl(var(--primary) / 0.4)',
                                '0 0 0 4px hsl(var(--primary) / 0)',
                                '0 0 0 0 hsl(var(--primary) / 0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-secondary rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                '0 0 0 0 hsl(var(--secondary) / 0.4)',
                                '0 0 0 4px hsl(var(--secondary) / 0)',
                                '0 0 0 0 hsl(var(--secondary) / 0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-accent rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                '0 0 0 0 hsl(var(--accent) / 0.4)',
                                '0 0 0 4px hsl(var(--accent) / 0)',
                                '0 0 0 0 hsl(var(--accent) / 0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {ambassadors.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/30 rounded-3xl p-8 sm:p-12 mx-auto max-w-4xl shadow-xl">
            <motion.div
              className="mb-8"
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Want to become a <span className="text-gradient">Social Impact Ambassador</span> or see more inspiring stories?
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Join our community of change-makers and help us create a positive impact in the world.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base w-full sm:w-auto group"
                >
                  Join Our Mission
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link to="/social-impact-ambassadors">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-base w-full sm:w-auto group hover:shadow-lg"
                  >
                    View All Ambassadors
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* UN SDG Partner Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 pt-6 border-t border-border/20"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={sdgLogo}
                    alt="UN SDG Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-bold text-foreground">UN SDG Partner</p>
                    <p className="text-xs text-muted-foreground">Act4SDGs Global Campaign</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpactSection;