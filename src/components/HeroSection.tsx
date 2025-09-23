import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroMain from '@/assets/hero-main.jpg';
import heroFoodDrive from '@/assets/hero-food-drive.jpg';
import heroPlantation from '@/assets/hero-plantation.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroMain,
      title: "Festiva Foundation – Where Engineers Build Humanity",
      subtitle: "Join the movement of socially responsible engineers making real impact"
    },
    {
      image: heroFoodDrive,
      title: "100+ CSR Activities, 150+ Volunteers",
      subtitle: "Together we've distributed 1000+ meals and conducted 35+ events across Karnataka"
    },
    {
      image: heroPlantation,
      title: "Join Hands. Serve Nation",
      subtitle: "Be part of structured volunteering programs that create lasting change"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToVolunteer = () => {
    const element = document.querySelector('#volunteer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-4 font-medium text-orange-200"
          >
            Small Help Can Make Change
          </motion.p>
          
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={scrollToVolunteer}
              className="btn-ngo-primary text-lg px-8 py-4 hover:shadow-2xl"
            >
              Volunteer With Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;