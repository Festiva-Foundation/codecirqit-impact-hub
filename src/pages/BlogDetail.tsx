import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

// Blog data
const blogData = {
  'WSP001': {
    id: 'WSP001',
    title: 'Building a Cleaner Tomorrow — Waste Segregation & Plastic-Free Initiative',
    excerpt: 'How Festiva Foundation empowered 800+ villagers through waste segregation awareness and distributed 500+ paper bags to promote eco-friendly practices.',
    author: 'Rohith S V',
    role: 'Founder',
    date: '2024-12-15',
    image: '/src/assets/wastesegregation.jpg',
    category: 'Environment & Sustainability',
    readTime: '8 min read',
    content: `
      <h2>🚮 Waste Segregation Drive & Say No to Plastic Awareness Campaign</h2>
      
      <p>On June 4th, 2024, just before World Environment Day, Festiva Foundation collaborated with MIT NGO to organize a powerful awareness campaign focused on waste segregation and reducing plastic use.</p>
      
      <h3>♻️ What We Did:</h3>
      <ul>
        <li>Door-to-door awareness campaigns</li>
        <li>Educated communities about wet/dry waste separation</li>
        <li>Spoke against single-use plastic consumption</li>
        <li>Shared eco-friendly daily habits with residents</li>
      </ul>
      
      <h3>📍 Campaign Details:</h3>
      <p><strong>Location:</strong> Seegehalli, Bangalore</p>
      <p><strong>Volunteers:</strong> 50+ youth from engineering colleges</p>
      
      <h3>🎯 Impact Achieved:</h3>
      <ul>
        <li>400+ houses reached directly</li>
        <li>80% of households pledged to segregate waste</li>
        <li>Received appreciation from municipal officers</li>
        <li>Distributed eco-friendly alternatives</li>
      </ul>
      
      <blockquote>
        <p>"Say no to plastic. Segregate waste. Sustain the Earth."</p>
      </blockquote>
      
      <p>This initiative represents our commitment to creating lasting environmental change through grassroots awareness and community engagement. By working directly with residents, we've seen firsthand how small actions can lead to significant behavioral shifts.</p>
      
      <p>The success of this campaign has inspired us to expand our environmental initiatives across more communities in Karnataka, proving that dedicated volunteers can indeed create meaningful change.</p>
    `
  },
  'DIG002': {
    id: 'DIG002',
    title: 'Towards a Cashless Rural India — Digital Empowerment Initiative',
    excerpt: 'Our digital literacy drive enabled 150+ villagers to perform their first UPI transactions and built trust in cashless payment systems.',
    author: 'Priya Sharma',
    role: 'Digital Coordinator',
    date: '2024-12-10',
    image: '/src/assets/digitalpay.jpg',
    category: 'Digital Literacy',
    readTime: '6 min read',
    content: `
      <h2>💳 Digital Payment Awareness Drive in Village Markets</h2>
      
      <p>Festiva Foundation launched a comprehensive campaign to promote UPI-based payments in rural markets, working to bridge the digital gap and promote financial safety for vendors and customers alike.</p>
      
      <h3>🔍 What We Implemented:</h3>
      <ul>
        <li>Set up UPI training desks in weekly haats (markets)</li>
        <li>Created Kannada tutorials specifically for vendors</li>
        <li>Helped local businesses set up QR code payment boards</li>
        <li>Provided ongoing technical support</li>
      </ul>
      
      <h3>📍 Campaign Details:</h3>
      <p><strong>Location:</strong> Kolar District, Karnataka</p>
      <p><strong>Participants:</strong> 20+ volunteers, local shopkeepers, and farmers</p>
      
      <h3>🎯 Remarkable Outcomes:</h3>
      <ul>
        <li>300+ vendors received comprehensive training</li>
        <li>150+ successfully adopted digital QR payments</li>
        <li>Significant boost in women's digital confidence</li>
        <li>Reduced dependency on cash transactions</li>
      </ul>
      
      <blockquote>
        <p>"Digital India begins at the roots."</p>
      </blockquote>
      
      <p>One of the most rewarding aspects of this initiative was witnessing elderly vendors, who had never used smartphones before, successfully completing their first digital transactions. The pride and confidence on their faces was truly inspiring.</p>
      
      <p>The women vendors, in particular, showed remarkable enthusiasm for learning these new skills, recognizing how digital payments could enhance their business security and customer reach.</p>
      
      <p>This campaign has laid the foundation for future digital literacy programs, proving that with the right approach and patience, technology can truly empower rural communities.</p>
    `
  },
  'EDU003': {
    id: 'EDU003',
    title: 'Empowering Through Education — Bridging Rural Gaps with AI',
    excerpt: 'Using AI-powered tools and digital content, we reached 300+ children across 5 rural belts, creating mentorship circles and educational resources.',
    author: 'Arjun Kumar',
    role: 'Education Lead',
    date: '2024-12-05',
    image: '/src/assets/education.jpg',
    category: 'Education & Innovation',
    readTime: '7 min read',
    content: `
      <h2>📚 Empowering Rural Students with Digital and AI Tools</h2>
      
      <p>Festiva Foundation organized a groundbreaking Digital & AI Literacy Camp for rural school students, introducing them to future-ready learning tools and technologies that could transform their educational journey.</p>
      
      <h3>🧠 Program Highlights:</h3>
      <ul>
        <li>Interactive ChatGPT demonstration sessions</li>
        <li>Comprehensive digital safety education</li>
        <li>Hands-on experience with smartboards and tablets</li>
        <li>AI-assisted learning workshops</li>
      </ul>
      
      <h3>📍 Campaign Details:</h3>
      <p><strong>Location:</strong> Government Schools, Chintamani</p>
      <p><strong>Mentors:</strong> B.Tech & M.Tech student volunteers</p>
      
      <h3>🎯 Transformative Outcomes:</h3>
      <ul>
        <li>150+ students introduced to AI technologies</li>
        <li>Schools requested follow-up sessions</li>
        <li>WhatsApp mentorship groups created for ongoing support</li>
        <li>Improved digital literacy scores across participating schools</li>
      </ul>
      
      <blockquote>
        <p>"Let children dream beyond chalkboards."</p>
      </blockquote>
      
      <p>The most remarkable moment came when a 12-year-old student from a remote village asked ChatGPT to help solve a math problem in Kannada. Seeing AI respond in her native language sparked a curiosity that was immediately visible.</p>
      
      <p>Our volunteers, being engineering students themselves, were able to relate to the children's questions and curiosity, creating natural mentorship relationships that continue through our WhatsApp support groups.</p>
      
      <p>The teachers were equally engaged, requesting additional training sessions so they could incorporate these tools into their regular curriculum. This enthusiasm from educators ensures the sustainability of our impact.</p>
      
      <p>This initiative has opened our eyes to the immense potential that exists in rural areas - these children just need access to the right tools and guidance to unlock their capabilities.</p>
    `
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = id ? blogData[id as keyof typeof blogData] : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blogs')}>
            <ArrowLeft className="mr-2" size={16} />
            Back to Blogs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = blog.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blogs')}
              className="mb-8 hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to All Stories
            </Button>
            
            <div className="mb-6">
              <Badge className="mb-4">{blog.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-medium">{blog.author}</span>
                  <span className="text-sm">• {blog.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden mb-12"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3"
              >
                <Card className="ngo-card">
                  <CardContent className="p-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:text-primary"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  {/* Share */}
                  <Card className="ngo-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Share2 size={16} />
                        Share this story
                      </h3>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="w-full justify-start"
                        >
                          <Facebook size={16} className="mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="w-full justify-start"
                        >
                          <Twitter size={16} className="mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="w-full justify-start"
                        >
                          <Linkedin size={16} className="mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Related Actions */}
                  <Card className="ngo-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Get Involved</h3>
                      <div className="space-y-3">
                        <Button asChild className="w-full btn-ngo-primary">
                          <Link to="/register">Join Our Team</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/blogs">Read More Stories</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;