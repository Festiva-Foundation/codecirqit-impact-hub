import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, FileText, Download, Upload, Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const VolunteerDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  
  // Simulated user data
  const volunteerName = "John Doe";
  
  const activities = [
    {
      id: 1,
      name: "Waste Segregation & Plastic-Free Awareness Campaign",
      activityNo: "01", 
      startDate: "2025-07-26",
      endDate: "2025-08-15",
      points: 20,
      hours: 80,
      mode: "Online",
      description: "Implement and design efficient waste management systems for local communities.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      name: "Digitized Transactions",
      activityNo: "02",
      startDate: "2025-08-16", 
      endDate: "2025-08-28",
      points: 20,
      hours: 80,
      mode: "Online",
      description: "Develop digital payment solutions for small businesses and vendors.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      name: "Ensuring Quality Education",
      activityNo: "03",
      startDate: "2025-08-29",
      endDate: "2025-09-10", 
      points: 20,
      hours: 80,
      mode: "Online",
      description: "Create educational tools and resources for underprivileged students.",
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      // Route to specific activity pages
      if (activity.id === 2) {
        navigate('/activity-2');
      } else if (activity.id === 3) {
        navigate('/activity-3');
      } else {
        navigate(`/activity/${activity.id}`);
      }
    } else {
      setSelectedActivity(activity);
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-ngo-neutral">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome, <span className="text-gradient">{volunteerName}</span>!
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thank you for choosing to make an impact. Your dedication to social change is transforming communities.
          </p>
        </motion.div>

        {/* Orientation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="ngo-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">
                <span className="text-gradient">Orientation Video</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Placeholder for video embed */}
                <div className="text-center">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Orientation Video</p>
                  <p className="text-sm text-gray-500">YouTube/Drive video will be embedded here</p>
                </div>
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
            Your <span className="text-gradient">Activities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const { status, color } = getActivityStatus(activity.startDate, activity.endDate);
              const isClickable = isActivityClickable(activity.startDate);
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative ${!isClickable ? 'opacity-60' : ''}`}
                >
                  <Card 
                    className={`ngo-card h-full transition-all duration-300 ${
                      isClickable 
                        ? 'hover:scale-105 cursor-pointer' 
                        : 'cursor-not-allowed'
                    }`}
                    onClick={() => handleActivityClick(activity)}
                  >
                    {/* Lock Icon for Not Started Activities */}
                    {!isClickable && (
                      <div className="absolute top-4 right-4 z-10">
                        <Lock className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                    
                    <CardHeader className="pb-3">
                      <div className="relative">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <Badge className={`absolute top-2 left-2 ${color} text-white`}>
                          {status}
                        </Badge>
                        <Badge variant="outline" className="absolute top-2 right-2 bg-white">
                          #{activity.activityNo}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg font-bold line-clamp-2">
                        {activity.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {activity.description}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{activity.startDate} - {activity.endDate}</span>
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
                          <Users className="w-4 h-4 text-primary" />
                          <span>{activity.points} Points</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="btn-ngo-secondary"
          >
            Back to Home
          </Button>
        </motion.div>

        {/* Activity Not Started Popup */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                ⚠️ Activity Not Yet Active
              </DialogTitle>
              <DialogDescription className="text-center space-y-2">
                <p className="text-lg">📅 This activity will begin on:</p>
                <p className="text-xl font-semibold text-primary">
                  {selectedActivity?.startDate && new Date(selectedActivity.startDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-base text-muted-foreground">
                  Please check back then to participate.
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowPopup(false)}>
                Got it!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default VolunteerDashboard;