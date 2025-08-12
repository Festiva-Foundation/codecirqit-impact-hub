import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import wastesegregation from '@/assets/wastesegregation.jpg';
import digital from '@/assets/digitalpay.jpg';
import education from '@/assets/education.jpg';

const BlogSection = () => {
  const featuredBlogs = [
    {
      id: 'WSP001',
      title: 'Building a Cleaner Tomorrow — Waste Segregation & Plastic-Free Initiative',
      excerpt: 'How Festiva Foundation empowered 800+ villagers through waste segregation awareness and distributed 500+ paper bags to promote eco-friendly practices.',
      author: 'Rohith S V',
      role: 'Founder',
      date: '2024-12-15',
      image: wastesegregation,
      category: 'Environment & Sustainability',
      readTime: '8 min read'
    },
    {
      id: 'DIG002',
      title: 'Towards a Cashless Rural India — Digital Empowerment Initiative',
      excerpt: 'Our digital literacy drive enabled 150+ villagers to perform their first UPI transactions and built trust in cashless payment systems.',
      author: 'Priya Sharma',
      role: 'Digital Coordinator',
      date: '2024-12-10',
      image: digital,
      category: 'Digital Literacy',
      readTime: '6 min read'
    },
    {
      id: 'EDU003',
      title: 'Empowering Through Education — Bridging Rural Gaps with AI',
      excerpt: 'Using AI-powered tools and digital content, we reached 300+ children across 5 rural belts, creating mentorship circles and educational resources.',
      author: 'Arjun Kumar',
      role: 'Education Lead',
      date: '2024-12-05',
      image: education,
      category: 'Education & Innovation',
      readTime: '7 min read'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read about our impact, volunteer experiences, and community transformation stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="ngo-card group cursor-pointer"
            >
              <Link to={`/blog/${blog.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="text-xs font-medium text-primary">{blog.role}</div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild className="btn-ngo-primary">
            <Link to="/blogs">
              <BookOpen className="mr-2" size={20} />
              Read All Stories
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
