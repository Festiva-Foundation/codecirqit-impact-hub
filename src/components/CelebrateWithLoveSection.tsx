import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Gift, Award, Sparkles, ArrowRight } from 'lucide-react';

const CelebrateWithLoveSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Heart,
      title: "Make It Meaningful",
      description: "Turn your celebrations into acts of kindness"
    },
    {
      icon: Award, 
      title: "Digital Certificate",
      description: "Receive a personalized certificate of gratitude"
    },
    {
      icon: Gift,
      title: "Thank You Note",
      description: "Get a heartfelt note of appreciation"
    }
  ];

  return (
    <section id="celebrate-with-love" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50/50 via-background to-pink-50/50 dark:from-rose-950/20 dark:via-background dark:to-pink-950/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-500 fill-rose-500" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Celebrate Your Special Day with <span className="text-gradient bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Love</span> 💝
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Instead of just a party, make your birthday, anniversary, or any milestone truly meaningful!
            <br className="hidden sm:block" />
            Donate to support our initiatives and spread smiles.
          </motion.p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-rose-200/50 dark:hover:border-rose-800/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10 border-b border-border/20">
              <CardTitle className="text-xl sm:text-2xl text-center font-bold text-foreground">
                Every donation comes with a personalized certificate of gratitude
              </CardTitle>
              <CardDescription className="text-center text-base sm:text-lg">
                — a memory of love that lasts forever.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground mb-4"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  🌸 Your little act of kindness can create a big impact.
                </motion.p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-background/50 to-rose-50/30 dark:to-rose-950/30 border border-border/20 hover:border-rose-200/50 dark:hover:border-rose-800/50 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex justify-center mb-3">
                      <motion.div
                        className="p-3 bg-rose-500/10 rounded-full"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-6 h-6 text-rose-500" />
                      </motion.div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Donate Now
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-muted-foreground mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Click to get in touch and start your meaningful celebration
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-rose-300/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-16 w-6 h-6 bg-pink-300/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-300/30 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default CelebrateWithLoveSection;