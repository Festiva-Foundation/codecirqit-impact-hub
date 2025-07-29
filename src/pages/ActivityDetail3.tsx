import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Upload, Eye, FileText, Download, Play, Target, GraduationCap, CheckCircle, BookOpen, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import education from '@/assets/education.jpg';


const ActivityDetail3 = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(0);
  
  const activity = {
    id: 3,
    name: "Ensuring Quality Education",
    activityNo: "03",
    startDate: "2025-08-29",
    endDate: "2025-09-10",
    points: 20,
    hours: 80,
    mode: "Hybrid (Online + Rural-Friendly Delivery)",
    initiative: "Festiva Foundation"
  };

  const videoData = [
    {
      title: "Right to Education Awareness",
      videoId: "i6PJkd8l64A",
      description: "Understanding education as a fundamental right"
    },
    {
      title: "Rural India is Transforming our Education System!",
      videoId: "eEGV5DoY3HM", 
      description: "How rural communities are driving educational change"
    },
    {
      title: "Adaptive Teaching Techniques",
      videoId: "vRqO30caJR0",
      description: "Modern approaches to personalized learning"
    }
  ];

  const getActivityStatus = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (now < start) return { status: 'Not Started', color: 'bg-yellow-500' };
    if (now > end) return { status: 'Completed', color: 'bg-green-500' };
    return { status: 'In Progress', color: 'bg-blue-500' };
  };

  const activityStatus = getActivityStatus(activity.startDate, activity.endDate);

  const renderQualityEducationContent = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-8"
    >
      {/* Why This Activity */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <Target className="w-6 h-6" />
            Why This Activity?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg leading-relaxed mb-4"
          >
            Access to quality education remains a challenge in many rural and underserved areas. With over 100 million youth globally still illiterate, this activity focuses on bridging the learning gap using AI-powered digital tools and inclusive outreach methods.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg leading-relaxed"
          >
            This initiative aligns with <strong>UN SDG Goal 4: Quality Education</strong>, empowering volunteers and students to build digital & hybrid learning kits with the help of AI tools, gamified worksheets, WhatsApp-based offline dissemination, and adaptive content for first-gen learners.
          </motion.p>
        </CardContent>
      </Card>

      {/* Objectives */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <CheckCircle className="w-6 h-6" />
            Key Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[
              "Bridge rural learning gaps via digital kits",
              "Train teachers to use simple AI tools", 
              "Promote early literacy through gamification",
              "Enable inclusive access (girls, non-English speakers)"
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">{objective}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Video Resources */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <Play className="w-6 h-6" />
            Watch & Explore
          </CardTitle>
          <p className="text-muted-foreground">Click the buttons below to explore videos related to this initiative directly on this page:</p>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="aspect-video rounded-lg overflow-hidden bg-black"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoData[selectedVideo].videoId}?rel=0`}
                  title={videoData[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-4"
              >
                <h3 className="text-xl font-semibold mb-2">{videoData[selectedVideo].title}</h3>
                <p className="text-muted-foreground">{videoData[selectedVideo].description}</p>
              </motion.div>
            </div>

            {/* Video Selection Buttons */}
            <div className="space-y-3">
              {videoData.map((video, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  onClick={() => setSelectedVideo(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all hover:scale-105 ${
                    selectedVideo === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="font-medium text-sm leading-tight">{video.title}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Tasks */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <BookOpen className="w-6 h-6" />
            Main Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Task 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="group hover:scale-102 transition-transform duration-200"
            >
              <Card className="border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Task 1</Badge>
                    <Badge variant="outline" className="text-xs">20 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-blue-700">Create AI-Enabled Learning Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground"><strong>Tools used:</strong> Khan Academy Kids, Read Along, Curipod</p>
                  <p className="text-sm text-muted-foreground"><strong>Output:</strong> Short videos, flashcards, digital worksheets</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Task 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="group hover:scale-102 transition-transform duration-200"
            >
              <Card className="border-l-4 border-green-500 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Task 2</Badge>
                    <Badge variant="outline" className="text-xs">20 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-green-700">Digital Literacy for Teachers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Host Zoom/Meet sessions to train teachers on:</p>
                  <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                    <li>• ChatGPT for content</li>
                    <li>• Canva for visuals</li>
                    <li>• Voice note tools in local language</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Task 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="group hover:scale-102 transition-transform duration-200"
            >
              <Card className="border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">Task 3</Badge>
                    <Badge variant="outline" className="text-xs">20 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-purple-700">WhatsApp Learning Kit Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">PDF activity kits (15–20) with mini-games, QR-linked videos</p>
                  <p className="text-sm text-muted-foreground">Shared via school WhatsApp groups or printed sheets</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Task 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="group hover:scale-102 transition-transform duration-200"
            >
              <Card className="border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">Task 4</Badge>
                    <Badge variant="outline" className="text-xs">20 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-orange-700">Feedback Collection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Use Google Forms or voice surveys to understand:</p>
                  <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                    <li>• Child comprehension</li>
                    <li>• Ease of use for rural parents/teachers</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Subjects Covered */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <GraduationCap className="w-6 h-6" />
            Subjects Covered
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { subject: "English", content: "Story videos, read-aloud exercises" },
              { subject: "Maths", content: "Visual quizzes, basic numeracy kits" },
              { subject: "Kannada", content: "Rhymes, basic literacy flashcards" },
              { subject: "Science & GK", content: "Interactive local content" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                className="p-4 bg-secondary/50 rounded-lg"
              >
                <h4 className="font-semibold text-lg mb-2">{item.subject}</h4>
                <p className="text-muted-foreground">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <Target className="w-6 h-6" />
            Learning Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* For Volunteers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="p-4 border rounded-lg"
            >
              <h4 className="font-semibold text-lg mb-3 text-blue-600">For Volunteers</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Learn to create educational content</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Gain experience with AI tools for teaching</p>
                </div>
              </div>
            </motion.div>

            {/* For Rural Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              className="p-4 border rounded-lg"
            >
              <h4 className="font-semibold text-lg mb-3 text-green-600">For Rural Students</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Access engaging multimedia lessons</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Develop basic reading and numeracy skills</p>
                </div>
              </div>
            </motion.div>

            {/* For Teachers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
              className="p-4 border rounded-lg"
            >
              <h4 className="font-semibold text-lg mb-3 text-purple-600">For Teachers</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Learn low-tech, high-impact AI tools</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Improve lesson delivery for remote learners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Completion Proof */}
      <Card className="ngo-card border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Upload className="w-6 h-6" />
            Completion Proof (Uploadable Evidence)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "PDFs of activity kits",
              "WhatsApp screenshots",
              "Session recordings",
              "Teacher/student feedback forms",
              "Event photos from training camps"
            ].map((proof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.0 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>{proof}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
      >
        <h3 className="text-2xl font-bold text-gradient mb-4">Transform Lives Through Education</h3>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          Every child who gains access to quality education, every teacher who learns new digital tools, and every community that embraces learning is a step toward a more equitable future. Together, we can bridge the education gap and ensure that geography or economic status never limits a child's potential to learn and grow.
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-ngo-neutral">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/volunteer-dashboard')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <img 
                src={education} 
                alt="Quality Education" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  Activity {activity.activityNo}
                </Badge>
                <Badge 
                  className={`${activityStatus.color} text-white px-4 py-2`}
                >
                  {activityStatus.status}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {activity.name}
              </h1>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Start Date</p>
                    <p className="text-muted-foreground">{new Date(activity.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">End Date</p>
                    <p className="text-muted-foreground">{new Date(activity.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-muted-foreground">{activity.hours} Hours</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Mode</p>
                    <p className="text-muted-foreground">{activity.mode}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {renderQualityEducationContent()}
          </div>
          
          {/* Right Side Action Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="sticky top-8"
            >
              <Card className="ngo-card">
                <CardHeader>
                  <CardTitle className="text-center text-gradient">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full h-14 flex flex-col items-center gap-1 text-xs"
                  >
                    <Upload className="w-5 h-5" />
                    Upload Images
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-14 flex flex-col items-center gap-1 text-xs"
                  >
                    <Eye className="w-5 h-5" />
                    View Report
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-14 flex flex-col items-center gap-1 text-xs"
                  >
                    <FileText className="w-5 h-5" />
                    Submit Task
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-14 flex flex-col items-center gap-1 text-xs"
                  >
                    <Download className="w-5 h-5" />
                    Download Resources
                  </Button>
                  {activityStatus.status === 'Completed' && (
                    <Button 
                      className="w-full h-14 flex flex-col items-center gap-1 text-xs"
                    >
                      <Download className="w-5 h-5" />
                      Download Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Action Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7 }}
          className="mt-12"
        >
          <Card className="ngo-card">
            <CardHeader>
              <CardTitle className="text-center text-gradient">Action Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-16">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Images
                </Button>
                <Button variant="outline" className="h-16">
                  <Eye className="w-5 h-5 mr-2" />
                  View/Submit Report
                </Button>
                {activityStatus.status === 'Completed' && (
                  <Button className="h-16">
                    <Download className="w-5 h-5 mr-2" />
                    Download Certificate
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityDetail3;