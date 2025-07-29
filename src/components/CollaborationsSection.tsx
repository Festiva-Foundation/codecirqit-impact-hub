import { motion } from 'framer-motion';
import { FileText, Award, Handshake, Building } from 'lucide-react';
import mitLogo from '../assets/mit-logo.jpeg';
import festivaLogo from '@/assets/festiva-logo.png';
import cybertrinetra from '@/assets/cybertrinetra-logo.png';

const CollaborationsSection = () => {
  const collaborators = [
    {
      name: "MIT NGO",
      type: "Primary Partner",
      logo: mitLogo,
      description: "Registered charitable organization with 80G, 12A, and CSR compliance"
    },
    {
      name: "Festiva Moments",
      type: "Parent Organization",
      logo: festivaLogo,
      description: "Institutional support and organizational guidance"
    },
    {
      name: "CyberTrinetra",
      type: "Technology Partner",
      logo: cybertrinetra,
      description: "Your Guardian Against Digital Threats"
    }

  ];

  const certifications = [
    {
      icon: Award,
      title: "80G Certification",
      description: "Tax exemption for donors under Income Tax Act",
      color: "text-green-500"
    },
    {
      icon: FileText,
      title: "12A Registration",
      description: "Income tax exemption for charitable activities",
      color: "text-blue-500"
    },
    {
      icon: Building,
      title: "CSR Compliance",
      description: "Corporate Social Responsibility activities approval",
      color: "text-purple-500"
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
            Our <span className="text-gradient">MoUs & Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            Festiva Foundation operates through strategic partnerships with registered NGOs, educational institutions, 
            and corporate organizations to ensure legal compliance and maximum impact.
          </p>
        </motion.div>

        {/* Legal Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Legal Compliance & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.title} className="ngo-card text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${cert.color} bg-current/10`}>
                  <cert.icon size={32} className={cert.color} />
                </div>
                <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="ngo-card mb-12"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Handshake className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">MIT NGO Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Our primary partnership is with MIT NGO, a fully registered charitable organization 
                holding all necessary certifications including 80G tax exemption status, 12A registration, 
                and CSR compliance approvals. This partnership ensures that all our activities are 
                legally compliant, transparent, and properly documented for maximum impact and 
                accountability. Through this collaboration, we can offer volunteers official 
                certificates, maintain proper financial records, and provide tax benefits to our donors.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Trusted Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborators.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ngo-card text-center hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-24 mx-auto mb-2 object-contain"
                />
                <h4 className="font-bold mb-1">{partner.name}</h4>
                <p className="text-primary text-sm font-medium mb-1">{partner.type}</p>
                <p className="text-muted-foreground text-xs">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MoU Documents Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <FileText className="text-primary" size={20} />
            <span className="text-primary font-medium">
              Official MoU documents available for transparency and verification
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationsSection;