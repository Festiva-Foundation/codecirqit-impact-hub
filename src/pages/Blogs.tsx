import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      id: 'FCM001',
      title: 'Coding Compassion: 1000 Meals Distributed in Our First Food Drive',
      excerpt: 'How technology students came together to serve the community and make a real impact through organized food distribution.',
      author: 'Rohith S V',
      role: 'Founder',
      date: '2024-12-15',
      image: '/api/placeholder/600/300',
      category: 'Food Drive',
      readTime: '5 min read'
    },
    {
      id: 'ENV002',
      title: 'Green Code: Planting 500 Trees Through Engineering Teamwork',
      excerpt: 'Our environmental initiative brought together 50+ volunteers for a massive tree plantation drive across Bangalore.',
      author: 'Priya Sharma',
      role: 'Environmental Lead',
      date: '2024-12-10',
      image: '/api/placeholder/600/300',
      category: 'Environment',
      readTime: '4 min read'
    },
    {
      id: 'EDU003',
      title: 'Teaching Tomorrow: Digital Literacy Program in Rural Schools',
      excerpt: 'Engineering students bridge the digital divide by teaching computer basics to rural children.',
      author: 'Arjun Kumar',
      role: 'Education Coordinator',
      date: '2024-12-05',
      image: '/api/placeholder/600/300',
      category: 'Education',
      readTime: '6 min read'
    },
    {
      id: 'ORG004',
      title: 'Building CodeCirqit: From Idea to 150+ Volunteer Community',
      excerpt: 'The journey of creating a structured platform for engineering students to contribute to society.',
      author: 'Bhuvan',
      role: 'Co-Founder',
      date: '2024-11-28',
      image: '/api/placeholder/600/300',
      category: 'Organization',
      readTime: '8 min read'
    },
    {
      id: 'HEALTH005',
      title: 'Code for Care: Health Awareness Campaign in IT Corridors',
      excerpt: 'How we organized health checkups and awareness sessions for IT professionals and students.',
      author: 'Dr. Meera Nair',
      role: 'Health Initiative Lead',
      date: '2024-11-20',
      image: '/api/placeholder/600/300',
      category: 'Health',
      readTime: '5 min read'
    },
    {
      id: 'TECH006',
      title: 'Technology for Good: Building Apps for NGO Management',
      excerpt: 'Student developers create management systems for local NGOs to track their community impact.',
      author: 'Karthik Reddy',
      role: 'Tech Lead',
      date: '2024-11-15',
      image: '/api/placeholder/600/300',
      category: 'Technology',
      readTime: '7 min read'
    }
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['All', 'Food Drive', 'Environment', 'Education', 'Organization', 'Health', 'Technology'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryFilteredBlogs = selectedCategory === 'All' 
    ? filteredBlogs 
    : filteredBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-ngo-neutral to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Our <span className="text-gradient">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories from the field, insights from volunteers, and updates on our impact
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search blogs by title, category, or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryFilteredBlogs.map((blog, index) => (
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User size={16} />
                          <span>{blog.author}</span>
                          <span>•</span>
                          <span className="text-primary">{blog.role}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-primary font-medium group-hover:underline">
                        Read Full Story
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {categoryFilteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No blogs found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;