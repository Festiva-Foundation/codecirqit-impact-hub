import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FoundersSection = () => {
  const founders = [
    {
      name: "Rohith S V",
      role: "Founder",
      quote: "Engineers can build humanity. This is how we code with compassion.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Saritha",
      role: "MIT NGO Representative",
      quote: "MIT NGO welcomes this youth-led wave of social change.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Bhuvan",
      role: "Co-Founder",
      quote: "CodeCirqit isn't just a program. It's a movement of responsible engineers.",
      image: "/api/placeholder/300/300"
    }
  ];

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
            Words from Our <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the visionaries who started this movement of change
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="ngo-card text-center hover:scale-105"
            >
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-24 rounded-lg mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <Quote className="text-primary/20 absolute -top-2 -right-2" size={24} />
              </div>
              
              <blockquote className="text-lg font-medium text-foreground mb-4 italic">
                "{founder.quote}"
              </blockquote>
              
              <div>
                <h4 className="font-bold text-foreground">{founder.name}</h4>
                <p className="text-primary font-medium">{founder.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;