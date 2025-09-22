import { motion } from 'framer-motion';
import { Users, Activity, MapPin, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const CounterAnimation = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), target));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
      {count}{suffix}
    </div>
  );
};

const MetricsSection = () => {
  const metrics = [
    {
      icon: Activity,
      number: 120,
      suffix: "+",
      label: "CSR Activities Conducted",
      color: "text-orange-500"
    },
    {
      icon: Users,
      number: 350,
      suffix: "+",
      label: "Active Volunteers",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      number: 35,
      suffix: "+",
      label: "Events Across Karnataka",
      color: "text-green-500"
    },
    {
      icon: Heart,
      number: 150,
      suffix: "+",
      label: "Meals Distributed",
      color: "text-red-500"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every number tells a story of lives touched and communities transformed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="metric-card group hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-full mb-6 ${metric.color} bg-current/10`}>
                <metric.icon size={32} className={metric.color} />
              </div>
              <CounterAnimation target={metric.number} suffix={metric.suffix} />
              <p className="text-muted-foreground font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;