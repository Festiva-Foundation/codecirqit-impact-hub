import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import rohithSvImage from '@/assets/rohith-sv.png';

const FoundersSection = () => {
  const founder = {
    name: "Rohith S V",
    role: "Founder & Visionary",
    quote: "True success isn't measured by what you achieve for yourself, but by how many lives you touch and transform along the way. Festiva Foundation is my commitment to building bridges between opportunity and impact.",
    image: rohithSvImage,
    story: "From a young engineering student with big dreams to the founder of Festiva Foundation, Rohith's journey has been driven by a simple yet powerful belief: that every individual has the potential to create meaningful change. After witnessing the gap between privilege and need in society, he realized that sustainable impact requires more than good intentions—it needs structured action, community collaboration, and unwavering commitment to service. Today, through Festiva Foundation, he's building a platform where passion meets purpose, creating lasting change one volunteer at a time."
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ngo-neutral to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Words from Our <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the visionary who started this movement of change
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="ngo-card"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Founder Image */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-64 h-64 rounded-xl mx-auto object-cover border-4 border-primary/20"
                  />
                  <Quote className="text-primary/30 absolute -top-4 -right-4" size={48} />
                </div>
              </div>
              
              {/* Founder Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium text-lg">{founder.role}</p>
                </div>
                
                <blockquote className="text-lg font-medium text-foreground italic leading-relaxed">
                  "{founder.quote}"
                </blockquote>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.story}
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

export default FoundersSection;