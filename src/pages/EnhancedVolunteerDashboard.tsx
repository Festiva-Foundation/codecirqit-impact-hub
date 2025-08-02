import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, FileText, Trophy, Star, Target, Award, LogOut, Eye, Lock, TrendingUp, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import wastesegregation from '@/assets/wastesegregation.jpg';
import digitalpay from '@/assets/digitalpay.jpg';
import edu from '@/assets/education.jpg';

const EnhancedVolunteerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [showCommunityDialog, setShowCommunityDialog] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [volunteerName, setVolunteerName] = useState("John Doe");
  
  // Check if user is logged in and get name
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginTime = localStorage.getItem('loginTime');
    const savedName = localStorage.getItem('volunteerName');
    
    // Check if login is within 7 days (7 * 24 * 60 * 60 * 1000 ms)
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    const currentTime = Date.now();
    
    if (!isLoggedIn || !loginTime || (currentTime - parseInt(loginTime)) > sevenDaysMs) {
      // Session expired or not logged in
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      localStorage.removeItem('volunteerName');
      navigate('/login');
      return;
    }
    
    if (savedName) {
      setVolunteerName(savedName);
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('volunteerName');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };
  
  const activities = [
    {
      id: 1,
      name: "Waste Segregation & Awareness Campaign",
      activityNo: "01", 
      startDate: "2025-07-26",
      endDate: "2025-08-15",
      points: 20,
      hours: 80,
      mode: "Community Interaction & Awareness Campaign",
      description: "Educate and empower communities about waste segregation and plastic alternatives.",
      image: wastesegregation,
      progress: 0
    },
    {
      id: 2,
      name: "Promoting 100% Digitized Transactions",
      activityNo: "02",
      startDate: "2025-07-16",
      endDate: "2025-08-28",
      points: 20,
      hours: 80,
      mode: "Awareness, Training & Field Execution",
      description: "Develop digital payment solutions for small businesses and vendors.",
      image: digitalpay,
      progress: 75
    },
    {
      id: 3,
      name: "Ensuring Quality Education",
      activityNo: "03",
      startDate: "2025-07-29",
      endDate: "2025-09-10", 
      points: 20,
      hours: 80,
      mode: "Online",
      description: "Create educational tools and resources for underprivileged students.",
      image: edu,
      progress: 45
    },
    {
      id: 4,
      name: "Swachh Bharat",
      activityNo: "04",
      startDate: "2025-08-11",
      endDate: "2025-08-25",
      points: 20,
      hours: 80,
      mode: "Offline", 
      description: "Participate in clean-up drives and awareness campaigns in local communities.",
      image: "/api/placeholder/400/250",
      progress: 0
    },
    {
      id: 5,
      name: "Food Preservation/Packaging",
      activityNo: "05",
      startDate: "2025-09-26",
      endDate: "2025-10-09",
      points: 20,
      hours: 80,
      mode: "Offline",
      description: "Develop sustainable food packaging solutions to reduce waste.",
      image: "/api/placeholder/400/250",
      progress: 0
    }
  ];

  const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getActivityStatus = (startDate: string, endDate: string) => {
    const today = getCurrentDate();
    
    if (today < startDate) {
      return { status: 'Not Started', color: 'bg-gray-500' };
    } else if (today >= startDate && today <= endDate) {
      return { status: 'In Progress', color: 'bg-blue-500' };
    } else {
      return { status: 'Completed', color: 'bg-green-500' };
    }
  };

  const isActivityClickable = (startDate: string) => {
    const today = getCurrentDate();
    return today >= startDate;
  };

  const handleActivityClick = (activity: any) => {
    if (isActivityClickable(activity.startDate)) {
      if (activity.id === 2) {
        // Scroll to top and navigate
        window.scrollTo(0, 0);
        navigate('/activity-2');
      } else if (activity.id === 3) {
        // Scroll to top and navigate
        window.scrollTo(0, 0);
        navigate('/activity-3');
      } else {
        // Scroll to top and navigate
        window.scrollTo(0, 0);
        navigate(`/activity/${activity.id}`);
      }
    } else {
      setSelectedActivity(activity);
      setShowPopup(true);
    }
  };

  // Calculate stats
  const totalPoints = activities.reduce((sum, activity) => {
    const { status } = getActivityStatus(activity.startDate, activity.endDate);
    return sum + (status === 'Completed' ? activity.points : activity.progress * activity.points / 100);
  }, 0);

  const completedActivities = activities.filter(activity => {
    const { status } = getActivityStatus(activity.startDate, activity.endDate);
    return status === 'Completed';
  }).length;

  const inProgressActivities = activities.filter(activity => {
    const { status } = getActivityStatus(activity.startDate, activity.endDate);
    return status === 'In Progress';
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header with Logout */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome Back, <span className="text-gradient">{volunteerName}</span>! 🌟
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Ready to make a difference today? Your dedication is transforming communities one step at a time.
            </p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="hidden md:flex items-center gap-2 hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut size={20} />
            Logout
          </Button>
        </motion.div>

        {/* Mobile Logout Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mb-6"
        >
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut size={20} />
            Logout
          </Button>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="ngo-card border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Points</p>
                  <p className="text-3xl font-bold text-blue-600">{Math.round(totalPoints)}</p>
                </div>
                <Trophy className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="ngo-card border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold text-green-600">{completedActivities}</p>
                </div>
                <Award className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="ngo-card border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-3xl font-bold text-orange-600">{inProgressActivities}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="ngo-card border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Impact Score</p>
                  <p className="text-3xl font-bold text-purple-600">A+</p>
                </div>
                <Star className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="ngo-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">
                <span className="text-gradient">Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-16 flex flex-col items-center gap-2 btn-ngo-primary">
                  <BookOpen size={24} />
                  <span>View Resources</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-16 flex flex-col items-center gap-2"
                  onClick={() => setShowCommunityDialog(true)}
                >
                  <Heart size={24} />
                  <span>Community</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Orientation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="ngo-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-2xl text-center mb-4">
                <span className="text-gradient">📚 Orientation & Training</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/UYcQn_W71vw"
                  title="Festiva Foundation Orientation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-primary">Welcome to Festiva Foundation</p>
                <p className="text-sm text-muted-foreground">Complete orientation to unlock your volunteer journey</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Your <span className="text-gradient">Activities</span> 🎯
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const { status, color } = getActivityStatus(activity.startDate, activity.endDate);
              const isClickable = isActivityClickable(activity.startDate);
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5, scale: isClickable ? 1.02 : 1 }}
                  className={`relative ${!isClickable ? 'opacity-70' : ''}`}
                >
                  <Card 
                    className={`ngo-card h-full transition-all duration-300 ${
                      isClickable 
                        ? 'hover:shadow-2xl cursor-pointer border-primary/20 hover:border-primary/40' 
                        : 'cursor-not-allowed'
                    } ${status === 'In Progress' ? 'ring-2 ring-blue-200 shadow-lg' : ''}`}
                    onClick={() => handleActivityClick(activity)}
                  >
                    {/* Lock Icon for Not Started Activities */}
                    {!isClickable && (
                      <div className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md">
                        <Lock className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                    
                    <CardHeader className="pb-3">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge className={`absolute top-3 left-3 ${color} text-white shadow-lg`}>
                          {status}
                        </Badge>
                        <Badge variant="outline" className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm">
                          #{activity.activityNo}
                        </Badge>
                        
                        {/* Progress indicator for in-progress activities */}
                        {status === 'In Progress' && (
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                              <Progress value={activity.progress} className="h-2" />
                              <p className="text-xs text-center mt-1 font-medium">{activity.progress}% Complete</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className="text-lg font-bold line-clamp-2 mt-3">
                        {activity.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {activity.description}
                      </p>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-medium">{activity.startDate} - {activity.endDate}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{activity.hours} Hours</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{activity.mode}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">{activity.points} Points</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 mb-12"
        >
          <Card className="ngo-card bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">🎉 Keep Going, Champion!</h3>
                <p className="text-muted-foreground">
                  You're making incredible progress. Every small action creates ripples of positive change.
                </p>
              </div>
              
              <div className="flex justify-center items-center gap-8 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">{Math.round(totalPoints)}</div>
                  <div className="text-muted-foreground">Points Earned</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">{activities.length}</div>
                  <div className="text-muted-foreground">Activities</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">85%</div>
                  <div className="text-muted-foreground">Engagement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Not Started Popup */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                ⏰ Activity Not Yet Active
              </DialogTitle>
              <DialogDescription className="text-center space-y-3">
                <p className="text-lg">📅 This activity will begin on:</p>
                <p className="text-2xl font-bold text-primary">
                  {selectedActivity?.startDate && new Date(selectedActivity.startDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-base text-muted-foreground">
                  Get ready to make an impact! We'll notify you when it's time to start.
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-6">
              <Button onClick={() => setShowPopup(false)} className="btn-ngo-primary">
                Got it! 🚀
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Community Dialog */}
        <Dialog open={showCommunityDialog} onOpenChange={setShowCommunityDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold text-gradient">
                🌟 Festiva Community Section
              </DialogTitle>
              <DialogDescription className="text-center space-y-4 pt-4">
                <div className="text-lg leading-relaxed">
                  <p className="text-foreground font-medium mb-3">
                    Welcome to Festiva's vibrant community of changemakers!
                  </p>
                  <p className="text-muted-foreground">
                    Stay tuned for exciting updates, community events, volunteer meetups, and opportunities to connect with fellow volunteers making a difference across Karnataka.
                  </p>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      🚀 Coming Soon: Community chat groups, volunteer leaderboards, and exclusive events!
                    </p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-6 space-x-3">
              <Button onClick={() => setShowCommunityDialog(false)} variant="outline">
                Close
              </Button>
              <Button 
                onClick={() => {
                  setShowCommunityDialog(false);
                  // Future: Add action for joining community
                }} 
                className="btn-ngo-primary"
              >
                Join Community 💫
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
};

export default EnhancedVolunteerDashboard;