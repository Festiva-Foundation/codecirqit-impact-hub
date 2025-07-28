import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Upload, Eye, FileText, Download, Play, Target, TreePine, CheckCircle, BookOpen, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(0);
  
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
    },
    {
      id: 6,
      name: "Waste Segregation & Plastic-Free Awareness Campaign",
      activityNo: "06",
      startDate: "2025-07-20",
      endDate: "2025-08-10",
      points: 25,
      hours: 80,
      mode: "Community Interaction, On-Ground Tasks & Awareness Campaign",
      description: "Educate and empower communities about waste segregation and plastic alternatives through hands-on awareness campaigns.",
      fullDescription: "The improper disposal and mixing of biodegradable and non-biodegradable waste is one of the key contributors to environmental pollution, blocked drainage, and health hazards. Through this activity, we aim to educate, engage, and empower students and local communities about the importance of waste segregation, plastic alternatives, and sustainable habits.",
      image: "/api/placeholder/600/400",
      isWasteCampaign: true
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

  // Video data for waste campaign
  const videoData = [
    {
      title: "What is Waste Segregation?",
      url: "https://youtu.be/0ZiD_Lb3Tm0?si=TOKn7_Udot26r9jT",
      embedId: "0ZiD_Lb3Tm0"
    },
    {
      title: "The Problems of Single Use Plastic",
      url: "https://youtu.be/J8QKy1nh5Ek?si=di0eSsuSWp19C0Qj",
      embedId: "J8QKy1nh5Ek"
    },
    {
      title: "How Plastic Bags Impact Environment?",
      url: "https://youtu.be/CubtcwIZEWc?si=QdQz8YFTXmXT0NeC",
      embedId: "CubtcwIZEWc"
    },
    {
      title: "Paper Bag Making at Home!",
      url: "https://youtu.be/uncLL1SC8xg?si=-OGjVuytfCNkHwAO",
      embedId: "uncLL1SC8xg"
    },
    {
      title: "Swachh Bharat Mission – Awareness Video",
      url: "https://youtu.be/dQw4w9WgXcQ",
      embedId: "dQw4w9WgXcQ"
    }
  ];

  const renderWasteCampaignContent = () => (
    <div className="space-y-8">
      {/* Why This Activity Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Why This Activity?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {activity.fullDescription}
          </p>
        </CardContent>
      </Card>

      {/* Objectives Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              Develop a clear understanding of waste segregation
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              Spread awareness about single-use plastics
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              Promote eco-friendly alternatives like paper bags
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              Involve students in real-life impact-driven tasks
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Impact on Society Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="w-5 h-5 text-primary" />
            Impact on Society
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              Reduces environmental pollution
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              Encourages eco-conscious habits among citizens
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              Minimizes plastic consumption at street-level
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              Provides sustainable solutions to small vendors and households
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              Builds a generation of responsible, informed youth
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Video Resource Player Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Video Resource Player
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${videoData[selectedVideo].embedId}`}
                  title={videoData[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-lg font-semibold mt-4">{videoData[selectedVideo].title}</h3>
            </div>
            
            {/* Video Selection Buttons */}
            <div className="space-y-3">
              {videoData.map((video, index) => (
                <Button
                  key={index}
                  variant={selectedVideo === index ? "default" : "outline"}
                  onClick={() => setSelectedVideo(index)}
                  className="w-full text-left justify-start text-sm h-auto py-3 px-4"
                >
                  <Play className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{video.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Breakdown Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Task Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Task 1 */}
          <div className="border-l-4 border-primary pl-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">Task 1</Badge>
              <span className="text-sm text-muted-foreground">15 Hours</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Understanding Waste Segregation (Awareness Phase)</h4>
            <p className="text-muted-foreground mb-3">
              <strong>Objective:</strong> Learn the importance and process of waste segregation at source.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Instructions:</strong></p>
              <ul className="space-y-1 ml-4 text-muted-foreground">
                <li>• Research biodegradable vs. non-biodegradable waste</li>
                <li>• Learn two-bin/three-bin disposal methods</li>
                <li>• Create awareness posters/infographics</li>
                <li>• Prepare a basic explanation module or PPT</li>
              </ul>
            </div>
          </div>

          {/* Task 2 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">Task 2</Badge>
              <span className="text-sm text-muted-foreground">25 Hours</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Street-Level Awareness Drive (Execution Phase)</h4>
            <p className="text-muted-foreground mb-3">
              <strong>Objective:</strong> Engage local vendors, residents, and students.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Instructions:</strong></p>
              <ul className="space-y-1 ml-4 text-muted-foreground">
                <li>• Form groups of 4–5</li>
                <li>• Identify areas with poor disposal practices</li>
                <li>• Conduct door-to-door or street interactions</li>
                <li>• Use posters, flyers, or short street plays</li>
                <li>• Collect documentation: Photos, Short videos, Impact summaries</li>
              </ul>
            </div>
          </div>

          {/* Task 3 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">Task 3</Badge>
              <span className="text-sm text-muted-foreground">25 Hours</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Say NO to Plastic – Promote Paper Bags</h4>
            <p className="text-muted-foreground mb-3">
              <strong>Objective:</strong> Discourage plastic use by promoting paper bags.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Instructions:</strong></p>
              <ul className="space-y-1 ml-4 text-muted-foreground">
                <li>• Learn to make durable paper bags</li>
                <li>• Make and distribute 20–50 bags per group</li>
                <li>• Educate vendors through demos</li>
                <li>• Collect: Photos, Testimonials, Count of bags given</li>
              </ul>
            </div>
          </div>

          {/* Task 4 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">Task 4</Badge>
              <span className="text-sm text-muted-foreground">15 Hours</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Final Community Awareness Showcase (Report & Reflect)</h4>
            <p className="text-muted-foreground mb-3">
              <strong>Objective:</strong> Compile results and reflect on community impact.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Instructions:</strong></p>
              <ul className="space-y-1 ml-4 text-muted-foreground">
                <li>• Submit a brief report (2–3 pages)</li>
                <li>• Include: Total people reached, Posters created, Number of paper bags, Feedback received, Media (photos/videos)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Materials Section */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            Tools & Materials Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Colored paper/newspapers</li>
              <li>• Glue, scissors, stapler</li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Poster boards, markers</li>
              <li>• Mobile phone for documentation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Final Note */}
      <Card className="ngo-card bg-gradient-to-r from-primary/10 to-green-500/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Final Note</h3>
            <p className="text-muted-foreground leading-relaxed">
              This activity is not just academic – it's about shaping a mindset.
              Every shared poster, every avoided plastic bag, and every informed vendor contributes to a cleaner, more conscious India.
              <br />
              <span className="font-semibold text-primary">Let's inspire real change. 🌱</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

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
            {activity.isWasteCampaign ? renderWasteCampaignContent() : (
              <>
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
              </>
            )}
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
                <CardTitle>Guidelines{activity.isWasteCampaign ? ' for All Volunteers' : ''}</CardTitle>
              </CardHeader>
              <CardContent>
                {activity.isWasteCampaign ? (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Wear ID badges (if issued)</li>
                    <li>• Maintain discipline and decorum</li>
                    <li>• Respect privacy for photo/video documentation</li>
                    <li>• Avoid plagiarism – submit original work</li>
                    <li>• Submit on time to your activity coordinator</li>
                  </ul>
                ) : (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete all required documentation</li>
                    <li>• Submit regular progress updates</li>
                    <li>• Follow safety protocols for offline activities</li>
                    <li>• Maintain professional conduct</li>
                    <li>• Seek guidance when needed</li>
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityDetail;