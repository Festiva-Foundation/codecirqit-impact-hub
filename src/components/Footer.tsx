import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import codecirqitLogo from '@/assets/codecirqit-logo.png';

const Footer = () => {
  const scrollToVolunteer = () => {
    const element = document.querySelector('#volunteer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ngo-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img 
                src={codecirqitLogo} 
                alt="CodeCirqit Logo" 
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold">CodeCirqit</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              A student-led social initiative under Festiva in collaboration with MIT NGO, 
              empowering engineers to build humanity through structured volunteering programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/codecirqit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/codecirqit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:codecirqit@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#vision" className="text-gray-300 hover:text-primary transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Admin */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={scrollToVolunteer}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Volunteer With Us
                </button>
              </li>
              <li>
                <a
                  href="mailto:codecirqit@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  codecirqit@gmail.com
                </a>
              </li>
              <li>
                <Link to="/admin-login" className="text-gray-300 hover:text-primary transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 CodeCirqit. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;