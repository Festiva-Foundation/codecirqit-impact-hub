import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import rohit from '@/assets/rohit.jpeg';
import mitLogo from '@/assets/mit-logo.jpeg';

const FoundersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const founders = [
    {
      name: "Rohith S V",
      role: "Founder & Visionary",
      organization: "Festiva Foundation",
      quote: "Festiva Foundation was never about starting another organization — it was about answering a calling. A calling to turn care into impact and vision into action. Today, we're not just running projects; we're inspiring a culture of purpose and change.",
      image: rohit,
    },
    {
      name: "Saritha Kumari",
      role: "Founder",
      organization: "MIT",
      quote: "At MIT, we believe education is not just about learning — it's about transformation. Partnering with Festiva Foundation allows us to turn knowledge into action and create opportunities that shape responsible, compassionate changemakers. Together, we're building a future driven by purpose and powered by people.",
      image: mitLogo,
    },
    {
      name: "Bhuvan B",
      role: "CEO",
      organization: "MIT",
      quote: "As CEO of MIT, I believe true progress happens when innovation meets purpose. Our collaboration with Festiva Foundation is more than a partnership — it's a commitment to empower youth, nurture ideas, and drive meaningful change that impacts communities.",
      image: mitLogo,
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-ngo-neutral to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Words from Our <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the visionaries who started this movement of change
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous founder"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next founder"
          >
            <ChevronRight size={24} />
          </button>

          {/* Founder Cards Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="ngo-card"
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Founder Image */}
                  <div className="text-center md:text-left order-1 md:order-1">
                    <div className="relative inline-block w-full">
                      <img
                        src={founders[currentIndex].image}
                        alt={founders[currentIndex].name}
                        className="w-full max-w-[280px] md:max-w-none h-[320px] md:h-[400px] rounded-xl mx-auto object-cover border-4 border-primary/20"
                      />
                      <Quote className="text-primary/30 absolute -top-2 -right-2 md:-top-4 md:-right-4" size={40} />
                    </div>
                  </div>
                  
                  {/* Founder Content */}
                  <div className="space-y-4 md:space-y-6 order-2 md:order-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {founders[currentIndex].name}
                      </h3>
                      <p className="text-primary font-medium text-base md:text-lg">
                        {founders[currentIndex].role}
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {founders[currentIndex].organization}
                      </p>
                    </div>
                    
                    <blockquote className="text-base md:text-lg font-medium text-foreground italic leading-relaxed">
                      "{founders[currentIndex].quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {founders.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to founder ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
