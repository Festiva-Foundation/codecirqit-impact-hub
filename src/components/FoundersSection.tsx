import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import rohithSvImage from '@/assets/rohith-sv.png';
import rohit from '@/assets/rohit.jpeg';

const FoundersSection = () => {
  const founder = {
    name: "Rohith S V",
    role: "Founder & Visionary",
    quote: "I didn’t start Festiva Foundation just to run an organization — I started it because I saw a need and couldn’t stay quiet. I’ve always believed that real change starts with small, committed actions, and I wanted to create a space where people like me — students, dreamers, doers — could come together and make that change real.",
    image: rohit,
    story: " From my college days, I noticed the gap between those who want to help and those who need it the most. There was so much energy around me, but it needed direction. That’s how Festiva Foundation began — not with a grand plan, but with a strong purpose. Today, we’re building more than projects. We’re building a community that stands for compassion, impact, and action. And this is just the beginning.Today, through Festiva Foundation, he's building a platform where passion meets purpose, creating lasting change one volunteer at a time."
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

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="ngo-card"
          >
            <div className="grid lg:grid-cols-2 gap-2 items-center">
              {/* Founder Image */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-35 h-62 rounded-xl mx-auto object-cover border-4 border-primary/20"
                  />
                  <Quote className="text-primary/30 absolute -top-4 -right-4" size={52} />
                </div>
              </div>
              
              {/* Founder Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium text-lg">{founder.role}</p>
                </div>
                
                <blockquote className="text-lg font-medium text-foreground italic leading-relaxed text-justify">
                  "{founder.quote}"
                </blockquote>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-justify">
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