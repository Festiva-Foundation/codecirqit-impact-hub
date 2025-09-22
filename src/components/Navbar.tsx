import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import festivaLogo from '@/assets/festiva-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      const loginTime = localStorage.getItem('loginTime');
      
      if (loginStatus && loginTime) {
        const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
        const currentTime = Date.now();
        
        if ((currentTime - parseInt(loginTime)) <= sevenDaysMs) {
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('loginTime');
          localStorage.removeItem('volunteerName');
          setIsLoggedIn(false);
        }
      }
    };

    checkLoginStatus();
    
    // Check login status when localStorage changes
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically in case of same-tab changes
    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const menuItems = isLoggedIn ? [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Social Impact Ambassador', href: '#social-impact' },
    { label: 'Volunteer Dashboard', href: '/volunteer-dashboard' },
    { label: 'Get In Touch', href: '#contact' },
  ] : [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Social Impact Ambassador', href: '#social-impact' },
    { label: 'Volunteer With Us', href: '/login' },
    { label: 'Get In Touch', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={festivaLogo} 
              alt="Festiva Foundation Logo" 
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Festiva Foundation
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;