import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

// Enhanced Blog data with more content
const blogData = {
  'WSP001': {
    id: 'WSP001',
    title: 'Building a Cleaner Tomorrow — Waste Segregation & Plastic-Free Initiative',
    excerpt: 'How Festiva Foundation empowered 100+ villagers through waste segregation awareness and distributed 500+ paper bags to promote eco-friendly practices.',
    author: 'Rohith S V',
    role: 'Founder',
    date: '2024-12-15',
    image: '/src/assets/wastesegregation.jpg',
    category: 'Environment & Sustainability',
    readTime: '12 min read',
    sections: [
      {
        title: '🌍 The Environmental Challenge',
        content: `
          <p class="text-lg leading-relaxed mb-6">In the bustling neighborhoods of Seegehalli, Bangalore, we witnessed firsthand the environmental challenges that plague our urban communities. Improper waste disposal, overflowing garbage bins, and the rampant use of single-use plastics had created a crisis that demanded immediate action.</p>

          <p class="text-lg leading-relaxed mb-6">Our team at Festiva Foundation, in partnership with MIT NGO, recognized that sustainable change begins with awareness and education at the grassroots level. The timing couldn't have been more perfect - with World Environment Day approaching, we saw an opportunity to create lasting impact.</p>
        `
      },
      {
        title: '🚮 The Waste Segregation Drive',
        content: `
          <p class="text-lg leading-relaxed mb-6">On June 4th, 2024, we launched our comprehensive door-to-door awareness campaign with a clear mission: to educate communities about proper waste segregation and the harmful effects of plastic pollution.</p>

          <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
            <h4 class="font-semibold text-green-800 mb-3">Campaign Highlights:</h4>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>Direct Outreach:</strong> 400+ houses reached through personal visits</li>
              <li>• <strong>Community Education:</strong> Comprehensive training on wet/dry waste separation</li>
              <li>• <strong>Plastic Awareness:</strong> Detailed sessions on environmental impact of single-use plastics</li>
              <li>• <strong>Eco-friendly Alternatives:</strong> Distribution of 500+ paper bags to replace plastic bags</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">Our team of 50+ dedicated volunteers from various engineering colleges brought energy and expertise to every interaction. Each volunteer was trained to communicate effectively in local languages, ensuring that our message resonated with every household.</p>
        `
      },
      {
        title: '♻️ Implementation Strategy',
        content: `
          <p class="text-lg leading-relaxed mb-6">Our approach was methodical and community-centered. We began each day with team briefings, dividing into smaller groups to cover different sectors of Seegehalli systematically.</p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-3">Morning Sessions (8 AM - 12 PM)</h4>
              <ul class="text-blue-700 space-y-1">
                <li>• Household visits and waste segregation demos</li>
                <li>• Distribution of color-coded bins information</li>
                <li>• Q&A sessions with residents</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-semibold text-purple-800 mb-3">Afternoon Sessions (1 PM - 5 PM)</h4>
              <ul class="text-purple-700 space-y-1">
                <li>• Community gathering presentations</li>
                <li>• Paper bag distribution and usage training</li>
                <li>• Follow-up visits to interested households</li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed mb-6">The response from the community was overwhelming. Residents showed genuine interest in learning proper waste management techniques, with many expressing gratitude for bringing this crucial knowledge to their doorsteps.</p>
        `
      },
      {
        title: '🎯 Measurable Impact',
        content: `
          <p class="text-lg leading-relaxed mb-6">The success of our initiative exceeded all expectations. The quantifiable results speak to the power of grassroots environmental action:</p>

          <div class="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl my-8">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-green-600 mb-2">400+</div>
                <div class="text-sm text-gray-600">Houses Reached</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div class="text-sm text-gray-600">Pledge Commitment</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div class="text-sm text-gray-600">Paper Bags Distributed</div>
              </div>
            </div>
          </div>

          <p class="text-lg leading-relaxed mb-6">The municipal officers not only appreciated our efforts but also requested us to expand the program to other areas. This official recognition validated our approach and opened doors for future collaborations.</p>

          <blockquote class="border-l-4 border-green-500 pl-6 my-8 text-xl italic text-green-700 bg-green-50 py-4 rounded-r-lg">
            "The change we witnessed in just one day was remarkable. Families that had never thought about waste segregation were suddenly asking detailed questions about composting and recycling." - Volunteer Feedback
          </blockquote>
        `
      },
      {
        title: '🌱 Long-term Vision',
        content: `
          <p class="text-lg leading-relaxed mb-6">This campaign was just the beginning of our environmental mission. The enthusiasm and commitment shown by the Seegehalli community has inspired us to develop a comprehensive sustainability program across Karnataka.</p>

          <p class="text-lg leading-relaxed mb-6">We're currently planning follow-up visits to track the progress of waste segregation practices and provide ongoing support to households that need additional guidance. Our ultimate goal is to create a network of environmentally conscious communities that can serve as models for sustainable living.</p>

          <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8">
            <h4 class="font-semibold text-yellow-800 mb-3">🎯 Future Initiatives:</h4>
            <ul class="text-yellow-700 space-y-2">
              <li>• Monthly community clean-up drives</li>
              <li>• Composting workshops for organic waste management</li>
              <li>• Plastic-free market initiatives</li>
              <li>• School education programs on environmental conservation</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">The success of this initiative proves that with dedication, proper planning, and community engagement, we can create lasting environmental change. Every small action contributes to a cleaner, healthier planet for future generations.</p>
        `
      }
    ]
  },
  'DIG002': {
    id: 'DIG002',
    title: 'Towards a Cashless Rural India — Digital Empowerment Initiative',
    excerpt: 'Our digital literacy drive enabled 150+ villagers to perform their first UPI transactions and built trust in cashless payment systems.',
    author: 'Rohith S V',
    role: 'Founder',
    date: '2024-12-10',
    image: '/src/assets/digitalpay.jpg',
    category: 'Digital Literacy',
    readTime: '10 min read',
    sections: [
      {
        title: '📱 Digital Divide in Rural India',
        content: `
          <p class="text-lg leading-relaxed mb-6">In the bustling weekly markets of Kolar District, we observed a stark reality: while urban India was rapidly adopting digital payments, rural vendors were still heavily dependent on cash transactions. This digital divide wasn't just about technology access—it was about trust, literacy, and understanding.</p>

          <p class="text-lg leading-relaxed mb-6">Festiva Foundation recognized this gap as an opportunity to bridge the urban-rural digital divide. Our mission was clear: empower local vendors and customers with the knowledge and confidence to embrace digital payment systems safely and effectively.</p>
        `
      },
      {
        title: '💡 The Digital Payment Revolution',
        content: `
          <p class="text-lg leading-relaxed mb-6">Our comprehensive digital payment awareness campaign was designed to address the unique challenges faced by rural vendors. We established training desks right in the heart of weekly haats (markets), where commerce naturally flows.</p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h4 class="font-semibold text-blue-800 mb-3">Training Program Features:</h4>
            <ul class="space-y-2 text-blue-700">
              <li>• <strong>Localized Content:</strong> All tutorials created in Kannada for better understanding</li>
              <li>• <strong>Hands-on Learning:</strong> Real-time practice with actual transactions</li>
              <li>• <strong>Security Education:</strong> Comprehensive training on safe digital practices</li>
              <li>• <strong>Technical Support:</strong> Ongoing assistance for troubleshooting and queries</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">The beauty of our approach lay in its simplicity. We didn't just teach technology; we built relationships. Our volunteers spent hours with each vendor, patiently explaining every step and ensuring they felt confident before moving to the next person.</p>
        `
      },
      {
        title: '🎯 Implementation in Action',
        content: `
          <p class="text-lg leading-relaxed mb-6">The transformation was remarkable. We witnessed elderly vendors who had never owned smartphones successfully completing their first UPI transactions. The look of amazement and pride on their faces was truly priceless.</p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-800 mb-3">Week 1: Foundation Building</h4>
              <ul class="text-green-700 space-y-1">
                <li>• Basic smartphone navigation training</li>
                <li>• UPI app installation and setup</li>
                <li>• Understanding QR codes and scanning</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-3">Week 2: Practical Application</h4>
              <ul class="text-orange-700 space-y-1">
                <li>• Live transaction demonstrations</li>
                <li>• QR code board creation for shops</li>
                <li>• Customer interaction training</li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed mb-6">Women vendors showed exceptional enthusiasm for digital payments. Many shared how this technology could help them manage their finances better and reduce the risk of carrying large amounts of cash.</p>
        `
      },
      {
        title: '📊 Transformative Results',
        content: `
          <p class="text-lg leading-relaxed mb-6">The impact of our digital empowerment initiative went far beyond simple transaction training. We witnessed a fundamental shift in how rural vendors perceived and interacted with technology.</p>

          <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl my-8">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-purple-600 mb-2">300+</div>
                <div class="text-sm text-gray-600">Vendors Trained</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-pink-600 mb-2">150+</div>
                <div class="text-sm text-gray-600">Active Digital Users</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div class="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <blockquote class="border-l-4 border-purple-500 pl-6 my-8 text-xl italic text-purple-700 bg-purple-50 py-4 rounded-r-lg">
            "I never thought I could use a smartphone for business. Now my customers can pay me from anywhere in the world!" - Lakshmi, Local Vegetable Vendor
          </blockquote>

          <p class="text-lg leading-relaxed mb-6">The confidence boost among participants was evident. Many vendors started exploring other smartphone features and even began teaching their family members, creating a ripple effect of digital literacy in their communities.</p>
        `
      },
      {
        title: '🌟 Building Digital Confidence',
        content: `
          <p class="text-lg leading-relaxed mb-6">Beyond the technical training, our program focused heavily on building digital confidence. We established WhatsApp support groups where vendors could ask questions, share experiences, and help each other troubleshoot issues.</p>

          <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8">
            <h4 class="font-semibold text-yellow-800 mb-3">🚀 Ongoing Support System:</h4>
            <ul class="text-yellow-700 space-y-2">
              <li>• Weekly follow-up calls to address concerns</li>
              <li>• Monthly refresher workshops in the community</li>
              <li>• Peer-to-peer learning circles</li>
              <li>• Digital safety reminders and updates</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">The success of this initiative has inspired us to expand our digital literacy programs to other districts. We're now working on developing a comprehensive digital empowerment curriculum that addresses banking, e-commerce, and digital governance services.</p>

          <p class="text-lg leading-relaxed mb-6">This campaign proved that digital inclusion isn't just about providing technology—it's about building trust, providing support, and creating sustainable learning communities that can thrive in our increasingly digital world.</p>
        `
      }
    ]
  },
  'EDU003': {
    id: 'EDU003',
    title: 'Empowering Through Education — Bridging Rural Gaps with AI',
    excerpt: 'Using AI-powered tools and digital content, we reached 300+ children across 5 rural belts, creating mentorship circles and educational resources.',
    author: 'Rohith S V',
    role: 'Founder',
    date: '2024-12-05',
    image: '/src/assets/education.jpg',
    category: 'Education & Innovation',
    readTime: '11 min read',
    sections: [
      {
        title: '🎓 The Education Revolution in Rural India',
        content: `
          <p class="text-lg leading-relaxed mb-6">In the government schools of Chintamani, we discovered an incredible hunger for learning that was limited only by access to modern educational tools. Students were eager to explore beyond traditional textbooks, but lacked exposure to the digital resources that could transform their learning experience.</p>

          <p class="text-lg leading-relaxed mb-6">Festiva Foundation launched an ambitious Digital & AI Literacy Camp with a vision to democratize access to cutting-edge educational technology. Our goal was to introduce rural students to AI tools that could accelerate their learning and open new pathways for academic growth.</p>
        `
      },
      {
        title: '🤖 AI-Powered Learning Experience',
        content: `
          <p class="text-lg leading-relaxed mb-6">The centerpiece of our program was introducing students to ChatGPT and other AI educational tools. We created safe, structured environments where students could explore AI assistance for their academic queries while learning about responsible AI usage.</p>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
            <h4 class="font-semibold text-indigo-800 mb-3">AI Workshop Components:</h4>
            <ul class="space-y-2 text-indigo-700">
              <li>• <strong>Interactive ChatGPT Sessions:</strong> Guided practice with academic problem-solving</li>
              <li>• <strong>Multilingual Learning:</strong> AI assistance in Kannada and English</li>
              <li>• <strong>Creative Applications:</strong> Using AI for essay writing and project ideas</li>
              <li>• <strong>Digital Safety:</strong> Understanding AI limitations and responsible usage</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">The most magical moment came when a 12-year-old student asked ChatGPT to explain a complex math concept in Kannada. Seeing the AI respond in her native language sparked an excitement that rippled through the entire classroom.</p>
        `
      },
      {
        title: '📚 Comprehensive Digital Literacy',
        content: `
          <p class="text-lg leading-relaxed mb-6">Our program extended beyond AI to cover comprehensive digital literacy. Students gained hands-on experience with smartboards, tablets, and educational software that transformed their understanding of interactive learning.</p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-cyan-50 p-6 rounded-lg">
              <h4 class="font-semibold text-cyan-800 mb-3">Technical Skills Development</h4>
              <ul class="text-cyan-700 space-y-1">
                <li>• Smartboard navigation and interaction</li>
                <li>• Educational app usage and exploration</li>
                <li>• Internet research and information literacy</li>
                <li>• Basic coding concepts introduction</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-6 rounded-lg">
              <h4 class="font-semibold text-teal-800 mb-3">Creative & Critical Thinking</h4>
              <ul class="text-teal-700 space-y-1">
                <li>• AI-assisted creative writing workshops</li>
                <li>• Problem-solving with digital tools</li>
                <li>• Collaborative project development</li>
                <li>• Presentation skills with technology</li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed mb-6">Our B.Tech and M.Tech student volunteers brought fresh perspectives and relatable experiences to the classroom. These young mentors could connect with students' curiosity while providing practical guidance on educational technology.</p>
        `
      },
      {
        title: '🎯 Measuring Educational Impact',
        content: `
          <p class="text-lg leading-relaxed mb-6">The transformation in student engagement was immediately visible. Pre and post-assessment surveys showed significant improvements in digital literacy scores and, more importantly, in students' confidence to explore new technologies independently.</p>

          <div class="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-xl my-8">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-emerald-600 mb-2">300+</div>
                <div class="text-sm text-gray-600">Students Impacted</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-teal-600 mb-2">5</div>
                <div class="text-sm text-gray-600">Schools Covered</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-cyan-600 mb-2">85%</div>
                <div class="text-sm text-gray-600">Improvement in Digital Skills</div>
              </div>
            </div>
          </div>

          <blockquote class="border-l-4 border-emerald-500 pl-6 my-8 text-xl italic text-emerald-700 bg-emerald-50 py-4 rounded-r-lg">
            "These students showed us that curiosity knows no geographical boundaries. They asked questions that even challenged our understanding of AI capabilities." - Student Volunteer
          </blockquote>

          <p class="text-lg leading-relaxed mb-6">Teachers were equally engaged, requesting additional training sessions so they could incorporate these tools into their regular curriculum. This enthusiasm from educators ensures the sustainability and long-term impact of our initiative.</p>
        `
      },
      {
        title: '🌐 Building Learning Communities',
        content: `
          <p class="text-lg leading-relaxed mb-6">The most sustainable aspect of our program was creating ongoing mentorship networks. We established WhatsApp groups connecting students with our volunteer mentors, enabling continuous support and guidance beyond the camp duration.</p>

          <div class="bg-rose-50 border border-rose-200 p-6 rounded-lg my-8">
            <h4 class="font-semibold text-rose-800 mb-3">🎯 Ongoing Support Structure:</h4>
            <ul class="text-rose-700 space-y-2">
              <li>• Weekly doubt-clearing sessions via video calls</li>
              <li>• Monthly project showcases and competitions</li>
              <li>• Career guidance and higher education counseling</li>
              <li>• Scholarship and opportunity sharing network</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-6">Several students have already started using AI tools to assist with their homework and projects. More importantly, they're sharing this knowledge with their peers, creating organic learning communities within their schools.</p>

          <p class="text-lg leading-relaxed mb-6">This initiative opened our eyes to the immense potential that exists in rural areas. These children don't just need access to technology—they need someone to believe in their capabilities and provide the right guidance to unlock their potential.</p>

          <p class="text-lg leading-relaxed mb-6">As we expand this program to more districts, we're confident that we're not just teaching technology—we're nurturing the next generation of rural innovators and leaders who will bridge the digital divide from within their own communities.</p>
        `
      }
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

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

  const JoinTeamPopup = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setShowPopup(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Join Our Team!</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPopup(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="text-center space-y-6">
          <div className="text-6xl">🤝</div>

          <div>
            <p className="text-gray-600 mb-4">
              Ready to make a difference? Get in touch with the Festiva Team!
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Email us at:</p>
                <a
                  href="mailto:festivamoments77@gmail.com"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  festivamoments77@gmail.com
                </a>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3">Join our WhatsApp Group:</p>
                <a
                  href="https://chat.whatsapp.com/COJcvjigUoiIC0otyMYllG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic">
            Together, we can create meaningful change in our communities!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
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
              <Badge className="mb-4 text-sm px-3 py-1">{blog.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-muted-foreground mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{blog.author}</span>
                    <span className="text-sm block">{blog.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="space-y-12">
                  {blog.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="ngo-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                        <CardContent className="p-10">
                          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b border-gray-200 pb-4">
                            {section.title}
                          </h2>
                          <div
                            className="prose prose-xl max-w-none prose-headings:text-foreground prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:text-primary prose-li:mb-2"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  {/* Get Involved */}
                  <Card className="ngo-card border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-6 text-gray-800">🚀 Get Involved</h3>
                      <div className="space-y-4">
                        <Button
                          onClick={() => setShowPopup(true)}
                          className="w-full btn-ngo-primary text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          Join Our Team
                        </Button>
                        <Button asChild variant="outline" className="w-full py-6 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300">
                          <Link to="/blogs">Read More Stories</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="ngo-card border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-6 text-gray-800">📊 Impact Summary</h3>
                      <div className="space-y-4">
                        {blog.id === 'WSP001' && (
                          <>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Houses Reached</span>
                              <span className="font-bold text-green-600">400+</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Pledge Rate</span>
                              <span className="font-bold text-blue-600">80%</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Paper Bags</span>
                              <span className="font-bold text-purple-600">500+</span>
                            </div>
                          </>
                        )}
                        {blog.id === 'DIG002' && (
                          <>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Vendors Trained</span>
                              <span className="font-bold text-purple-600">300+</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Active Users</span>
                              <span className="font-bold text-pink-600">150+</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Satisfaction</span>
                              <span className="font-bold text-indigo-600">95%</span>
                            </div>
                          </>
                        )}
                        {blog.id === 'EDU003' && (
                          <>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Students Impacted</span>
                              <span className="font-bold text-emerald-600">300+</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Schools Covered</span>
                              <span className="font-bold text-teal-600">5</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-sm text-gray-600">Skill Improvement</span>
                              <span className="font-bold text-cyan-600">85%</span>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Author Info */}
                  <Card className="ngo-card border-1 shadow-lg bg-gradient-to-br from-orange-60 to-red-40">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-6 text-gray-800">✍️ About the Author</h3>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User size={24} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-lg text-gray-800">{blog.author}</h4>
                        <p className="text-gray-600 mb-4">{blog.role}</p>
                        <p className="text-s text-gray-500 italic text-justify">
                          Dedicated to creating positive change in communities through innovative initiatives and grassroots engagement.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </article>

      {/* Popup */}
      {showPopup && <JoinTeamPopup />}

      <Footer />
    </div>
  );
};

export default BlogDetail;