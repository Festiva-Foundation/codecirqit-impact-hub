import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import kavya from '@/assets/Kavya.jpeg';
import tejaswini from '@/assets/tejaswini.jpeg';

const SocialImpactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const ambassadors = [
    {
      id: 1,
      name: "G KAVYA RAO",
      college: "Cambridge Institute of Technology",
      image: kavya, // You can replace with actual image
      description: "I am a 4th-year B.E. CSE student passionate about coding, problem-solving, and technology. Beyond academics, I support peers in gaining AICTE activity certificates, organize awareness programs, and engage in social causes. Currently serving as a Social Intern with Festiva Foundation, I aim to use technology not just to build systems but to build communities."
    },
    {
      id: 2,
      name: "Naga Tejaswini P",
      college: "Cambridge Institute of Technology",
      image: tejaswini, // You can replace with actual image
      description: "I am a 3rd-year CSE-IOT student who codes with purpose and occasionally caffeinated chaos. I build small systems, support peers, and sneak empathy into tech. Currently social-interning my way through community impact with Festiva Foundation. If it solves problems and brings people together, I’m in."
    },
    {
      id: 3,
      name: "ARJUN KRISHNA",
      college: "PES University",
      image: "/api/placeholder/300/300", // You can replace with actual image
      description: "Being part of Festiva Foundation has allowed me to combine my passion for software development with social service. I've led multiple initiatives focused on education technology and skill development for underprivileged youth."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ambassadors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [ambassadors.length, isAutoScrolling]);

  // Scroll to current card
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320; // Approximate card width
      const gap = 32; // Gap between cards
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

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

        {/* Mobile-First Scrollable Cards Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10">
            <motion.button
              onClick={handlePrevious}
              className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto -translate-x-4 hover:scale-110"
              whileHover={{ x: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto translate-x-4 hover:scale-110"
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* 3-Card Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8"
                animate={{ 
                  x: `${-currentIndex * (100 / 3)}%` 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                }}
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                {[...ambassadors, ...ambassadors.slice(0, 3)].map((ambassador, index) => {
                  const actualIndex = index % ambassadors.length;
                  return (
                    <motion.div
                      key={`${ambassador.id}-${index}`}
                      className="group min-w-[calc(33.333%-1.5rem)] flex-shrink-0"
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: actualIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10, 
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 transform-gpu">
                        <CardHeader className="p-0 relative">
                          <div className="relative overflow-hidden h-80 md:h-96">
                            <motion.img
                              src={ambassador.image}
                              alt={ambassador.name}
                              className="w-full h-full object-cover object-center transition-transform duration-700"
                              whileHover={{ scale: 1.1, rotateZ: 2 }}
                              style={{
                                objectPosition: 'center top'
                              }}
                            />
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              initial={false}
                              whileHover={{ opacity: 1 }}
                            />
                            
                            {/* Enhanced 3D Floating Badge */}
                            <motion.div
                              className="absolute top-6 right-6 bg-primary/95 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-xl border border-white/20"
                              initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                              transition={{ delay: actualIndex * 0.1 + 0.5, type: "spring" }}
                              whileHover={{ 
                                scale: 1.1, 
                                rotateZ: 360,
                                boxShadow: "0 0 30px hsl(var(--primary) / 0.6)",
                                transition: { duration: 0.5 }
                              }}
                            >
                              Ambassador
                            </motion.div>

                            {/* Animated Corner Accent */}
                            <motion.div
                              className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-transparent"
                              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                              animate={{ 
                                background: [
                                  'linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent)',
                                  'linear-gradient(135deg, hsl(var(--secondary) / 0.3), transparent)',
                                  'linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent)'
                                ]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-6 space-y-4">
                          <motion.div
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <CardTitle className="text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors font-bold">
                              {ambassador.name}
                            </CardTitle>
                            
                            <div className="flex items-center space-x-3 mb-4 text-muted-foreground">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <GraduationCap size={20} className="text-primary flex-shrink-0" />
                              </motion.div>
                              <CardDescription className="text-sm font-medium">
                                {ambassador.college}
                              </CardDescription>
                            </div>
                          </motion.div>
                          
                          <motion.p 
                            className="text-sm text-muted-foreground leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-6 transition-all duration-500"
                            whileHover={{ color: "hsl(var(--foreground))" }}
                          >
                            {ambassador.description}
                          </motion.p>
                          
                          <motion.div 
                            className="pt-4 border-t border-border/50"
                            whileHover={{ borderColor: "hsl(var(--primary))" }}
                          >
                            <div className="flex items-center justify-between">
                              <motion.span 
                                className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30"
                                whileHover={{ 
                                  scale: 1.05, 
                                  backgroundColor: "hsl(var(--primary))", 
                                  color: "hsl(var(--primary-foreground))",
                                  boxShadow: "0 4px 20px hsl(var(--primary) / 0.3)"
                                }}
                              >
                                Impact Leader
                              </motion.span>
                              <div className="flex space-x-2">
                                <motion.div 
                                  className="w-3 h-3 bg-primary rounded-full"
                                  animate={{ 
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                      '0 0 0 0 hsl(var(--primary) / 0.4)',
                                      '0 0 0 6px hsl(var(--primary) / 0)',
                                      '0 0 0 0 hsl(var(--primary) / 0)'
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div 
                                  className="w-3 h-3 bg-secondary rounded-full"
                                  animate={{ 
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                      '0 0 0 0 hsl(var(--secondary) / 0.4)',
                                      '0 0 0 6px hsl(var(--secondary) / 0)',
                                      '0 0 0 0 hsl(var(--secondary) / 0)'
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                />
                                <motion.div 
                                  className="w-3 h-3 bg-accent rounded-full"
                                  animate={{ 
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                      '0 0 0 0 hsl(var(--accent) / 0.4)',
                                      '0 0 0 6px hsl(var(--accent) / 0)',
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
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Mobile scroll indicators */}
          <div className="flex md:hidden justify-center mt-6 space-x-2">
            {ambassadors.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 sm:p-8 mx-auto max-w-2xl">
            <motion.p 
              className="text-muted-foreground mb-6 text-sm sm:text-base"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6 }}
            >
              Want to become a Social Impact Ambassador or see more inspiring stories?
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  Join Our Mission
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/social-impact-ambassadors">
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:border-primary hover:bg-primary/5 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base w-full sm:w-auto group"
                  >
                    View All Ambassadors
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpactSection;