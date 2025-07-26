import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Upload, Eye, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock activity data - in real app, fetch based on ID
  const activities = [
    {
      id: 1,
      name: "Efficient Garbage Disposal System",
      activityNo: "01", 
      startDate: "2025-08-05",
      endDate: "2025-08-15",
      points: 20,
      hours: 80,
      mode: "Online",
      description: "Implement and design efficient waste management systems for local communities. This comprehensive project involves researching current waste management practices, identifying inefficiencies, and developing innovative solutions that can be implemented at a community level.",
      fullDescription: "This activity focuses on developing sustainable waste management solutions for urban and rural communities. Participants will engage in comprehensive research, system design, and implementation planning. The project includes analyzing current waste disposal methods, identifying environmental impacts, and proposing technology-driven solutions that can reduce waste, improve recycling rates, and create cleaner communities. Participants will work in teams to develop practical implementations that can be scaled across different community sizes.",
      image: "/api/placeholder/600/400"
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
      fullDescription: "Focus on creating accessible digital payment systems for small businesses, street vendors, and rural entrepreneurs. This project involves understanding the challenges faced by small-scale businesses in adopting digital payments, designing user-friendly interfaces, and developing solutions that work in low-connectivity environments. Participants will research existing payment technologies, identify gaps in current systems, and propose innovative solutions that can increase financial inclusion and economic empowerment.",
      image: "/api/placeholder/600/400"
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
      fullDescription: "Develop innovative educational tools, digital resources, and learning methodologies to bridge the education gap for underprivileged students. This comprehensive project involves creating interactive learning materials, designing low-cost educational technologies, and developing teaching methodologies that can be implemented in resource-constrained environments. Participants will focus on making quality education accessible through technology and innovative teaching approaches.",
      image: "/api/placeholder/600/400"
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
      fullDescription: "Engage in comprehensive cleanliness and hygiene awareness programs as part of the Swachh Bharat initiative. This hands-on project involves organizing community clean-up drives, conducting awareness campaigns about sanitation and hygiene, and implementing sustainable cleanliness practices. Participants will work directly with communities to promote behavioral change, install waste management systems, and create long-term strategies for maintaining clean environments.",
      image: "/api/placeholder/600/400"
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
      fullDescription: "Research and develop innovative food preservation and packaging technologies that reduce food waste and environmental impact. This project focuses on creating sustainable packaging materials, developing preservation techniques that extend shelf life, and designing cost-effective solutions for food storage and transportation. Participants will work on biodegradable packaging alternatives, preservation methods suitable for different climates, and distribution strategies that minimize food loss.",
      image: "/api/placeholder/600/400"
    }
  ];

  const activity = activities.find(a => a.id === parseInt(id || '1'));

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Activity Not Found</h1>
          <Button onClick={() => navigate('/volunteer-dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

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

  const { status, color } = getActivityStatus(activity.startDate, activity.endDate);
  const isCompleted = status === 'Completed';

  const handleExternalLink = (url: string) => {
    // Simulate opening external links
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-ngo-neutral">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button 
            variant="outline" 
            onClick={() => navigate('/volunteer-dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Button>
        </motion.div>

        {/* Activity Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={`${color} text-white`}>
                  {status}
                </Badge>
                <Badge variant="outline">
                  Activity #{activity.activityNo}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">{activity.name}</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-semibold">{activity.startDate} - {activity.endDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Hours</p>
                    <p className="font-semibold">{activity.hours} Hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Mode</p>
                    <p className="font-semibold">{activity.mode}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Points</p>
                    <p className="font-semibold">{activity.points} Points</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Activity Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="ngo-card">
              <CardHeader>
                <CardTitle>Activity Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="ngo-card">
              <CardHeader>
                <CardTitle>Objectives & Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Develop practical solutions for real-world challenges</li>
                  <li>• Gain hands-on experience in community development</li>
                  <li>• Collaborate with teams and stakeholders</li>
                  <li>• Create measurable impact in target communities</li>
                  <li>• Document and share learnings with the community</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            <Card className="ngo-card">
              <CardHeader>
                <CardTitle>Activity Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleExternalLink('https://drive.google.com')}
                >
                  <Upload className="mr-2" size={16} />
                  Upload Activity Images
                </Button>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleExternalLink('https://drive.google.com')}
                >
                  <Eye className="mr-2" size={16} />
                  View Sample Report
                </Button>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleExternalLink('https://forms.google.com')}
                >
                  <FileText className="mr-2" size={16} />
                  Submit Activity Report
                </Button>
                
                <Button 
                  className={`w-full ${isCompleted ? 'btn-ngo-primary' : ''}`}
                  variant={isCompleted ? "default" : "outline"}
                  disabled={!isCompleted}
                  onClick={() => isCompleted && handleExternalLink('https://drive.google.com')}
                >
                  <Download className="mr-2" size={16} />
                  {isCompleted ? 'Download Certificate' : 'Certificate (Complete Activity)'}
                </Button>
              </CardContent>
            </Card>

            <Card className="ngo-card">
              <CardHeader>
                <CardTitle>Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete all required documentation</li>
                  <li>• Submit regular progress updates</li>
                  <li>• Follow safety protocols for offline activities</li>
                  <li>• Maintain professional conduct</li>
                  <li>• Seek guidance when needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityDetail;