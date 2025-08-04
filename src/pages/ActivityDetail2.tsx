import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Upload, Eye, FileText, Download, Play, Target, CreditCard, CheckCircle, BookOpen, Wrench, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import digitalpay from '@/assets/digitalpay.jpg';

const ActivityDetail2 = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showCertificatePopup, setShowCertificatePopup] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activity = {
    id: 2,
    name: "Promoting 100% Digitized Transactions",
    activityNo: "02",
    startDate: "2025-08-16",
    endDate: "2025-08-28",
    points: 20,
    hours: 80,
    mode: "Awareness, Training & Field Execution",
    initiative: "Festiva Foundation"
  };

  const videoData = [
    {
      title: "Evolution of Money: From Barter to Digital",
      videoId: "YNIAOt7zzmQ",
      description: "Understanding the transformation of monetary systems"
    },
    {
      title: "How UPI Works – Real-Time Payments",
      videoId: "iI2NaN_QVTI",
      description: "Learn the technology behind instant payments"
    },
    {
      title: "Types of Digital Payments",
      videoId: "2ugB_KI7ZR8",
      description: "Explore various digital payment methods"
    },
    {
      title: "How to Set Up a UPI Account",
      videoId: "exH_MFn8g_4",
      description: "Step-by-step guide to UPI setup"
    },
    {
      title: "Digital Payment Security: Best Practices",
      videoId: "3Xn35THKjHA",
      description: "Stay safe while using digital payments"
    }
  ];

  const getActivityStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return { status: 'Not Started', color: 'bg-yellow-500' };
    if (now > end) return { status: 'Completed', color: 'bg-green-500' };
    return { status: 'In Progress', color: 'bg-blue-500' };
  };

  const isCertificateAvailable = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const fifteenDaysAfterEnd = new Date(end.getTime() + (15 * 24 * 60 * 60 * 1000));
    return now >= fifteenDaysAfterEnd;
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCertificateClick = () => {
    if (certificateAvailable) {
      handleExternalLink('/volunteer-dashboard');
    } else {
      setShowCertificatePopup(true);
    }
  };

  const activityStatus = getActivityStatus(activity.startDate, activity.endDate);
  const certificateAvailable = isCertificateAvailable(activity.endDate);

  const renderDigitalTransactionContent = () => (
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
            className="text-lg leading-relaxed text-justify"
          >
            India is on a transformative journey toward becoming a digitally empowered society. Despite wide access to mobile devices and UPI services, a large portion of the population — including shopkeepers, senior citizens, and low-income communities — still rely heavily on cash.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg leading-relaxed mt-4 text-justify"
          >
            This activity aims to bridge the digital divide and support the Digital India mission through awareness drives, hands-on training, and vendor support. The campaign contributes directly to financial inclusion, transparency, digital trust, and a cashless economy.
          </motion.p>
        </CardContent>
      </Card>

      {/* Objectives */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <CheckCircle className="w-6 h-6" />
            Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[
              "Educate people about the importance and security of digital payments",
              "Promote UPI, Mobile Wallets, and Internet Banking usage",
              "Help vendors and low-income groups shift from cash to digital",
              "Create a grassroots-level digital economy"
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

      {/* Impact on Society */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <Users className="w-6 h-6" />
            How It Helps Society
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[
              "Reduces cash dependence",
              "Increases transaction security",
              "Empowers small businesses and street vendors",
              "Promotes financial inclusion",
              "Builds trust and familiarity with digital tools"
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">{impact}</p>
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
            Interactive Video Resources
          </CardTitle>
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

      {/* Task Breakdown */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <BookOpen className="w-6 h-6" />
            Activity Breakdown
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
                    <Badge variant="outline" className="text-xs">15 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-blue-700">Introduction & Understanding Digital Payments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground"><strong>Objective:</strong> Build a strong foundation in digital transactions.</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Instructions:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Study types: UPI, wallets, banking, USSD, AEPS</li>
                      <li>• Understand benefits: speed, traceability, cost</li>
                      <li>• Learn cybersecurity basics and fraud prevention</li>
                    </ul>
                  </div>
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
                    <Badge variant="outline" className="text-xs">25 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-green-700">Community Awareness Drive</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground"><strong>Objective:</strong> Educate small business owners, seniors & the underbanked.</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Instructions:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Conduct 1:1 or group sessions</li>
                      <li>• Distribute simple flyers</li>
                      <li>• Demo PhonePe, GPay, Paytm, BHIM, etc.</li>
                      <li>• Bust common myths and fears</li>
                    </ul>
                    <p className="text-sm font-medium mt-3">Documentation Required:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Number of people educated</li>
                      <li>• Places/communities covered</li>
                      <li>• Photos, testimonials, feedback</li>
                    </ul>
                  </div>
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
                    <Badge variant="outline" className="text-xs">25 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-purple-700">Hands-On Setup & Vendor Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground"><strong>Objective:</strong> Enable street vendors to go digital.</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Instructions:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Identify vendors without digital options</li>
                      <li>• Help set up UPI/QR/app</li>
                      <li>• Conduct mock transactions</li>
                      <li>• Teach record-keeping, refunds, etc.</li>
                    </ul>
                    <p className="text-sm font-medium mt-3">Each group must:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Assist 5–10 vendors</li>
                      <li>• Collect screenshots or responses</li>
                      <li>• Revisit after 1 week (optional)</li>
                    </ul>
                  </div>
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
                    <Badge variant="outline" className="text-xs">15 Hours</Badge>
                  </div>
                  <CardTitle className="text-lg text-orange-700">Final Report & Reflection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground"><strong>Objective:</strong> Summarize outreach, learnings, and recommendations.</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Instructions:</p>
                    <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
                      <li>• Submit a group report (with stats & issues)</li>
                      <li>• Include photo/video content (if available)</li>
                      <li>• Prepare a short presentation or summary reel</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Materials */}
      <Card className="ngo-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient">
            <Wrench className="w-6 h-6" />
            Tools & Materials Needed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Smartphone with UPI apps",
              "Internet/hotspot",
              "Flyers/posters in local language",
              "ID cards",
              "Documentation notebook",
              "Consent forms (for photos)"
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{tool}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Guidelines */}
      <Card className="ngo-card border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <FileText className="w-6 h-6" />
            Important Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              "Work in teams of 3–5",
              "Never handle personal banking details",
              "Ask before installing apps",
              "Use local language for clarity",
              "Respect privacy and document only with consent",
              "Keep clear records – activity may be audited"
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>{guideline}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0 }}
        className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
      >
        <h3 className="text-2xl font-bold text-gradient mb-4">Final Note</h3>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto text-justify">
          This is more than just a digital task — it's about empowering India's citizens. Every senior who sends money confidently or every vendor who accepts UPI is a milestone in building a transparent, inclusive digital economy. <strong>Your effort matters.</strong>
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

          {/* Activity Info Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-white/20">
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

        {/* Full Width Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="-mx-4 mb-8 relative"
        >
          <div className="relative">
            <img
              src= {digitalpay}
              alt="Digital Payments"
              className="w-full md:h-[10px] lg:h-[800px] object-cover shadow-x"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {renderDigitalTransactionContent()}
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
                    className="w-full h-14 flex flex-col items-center gap-1 text-s"
                    onClick={() => handleExternalLink('/volunteer-dashboard')}
                  >
                    <Upload className="w-6 h-6" />
                    Upload Images
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-14 flex flex-col items-center gap-1 text-s"
                    onClick={() => handleExternalLink('/volunteer-dashboard')}
                  >
                    <Eye className="w-6 h-6" />
                    View Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-14 flex flex-col items-center gap-1 text-s"
                    onClick={() => handleExternalLink('/volunteer-dashboard')}
                  >
                    <FileText className="w-6 h-6" />
                    Submit Task
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-14 flex flex-col items-center gap-1 text-s cursor-pointer"
                    onClick={handleCertificateClick}
                  >
                    <Download className="w-6 h-6" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Certificate Popup */}
        {showCertificatePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowCertificatePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertificatePopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certificate Not Available</h3>
                <p className="text-gray-600 mb-4">
                  Your certificate will be available for download 15 days after the activity end date.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Activity ends: {new Date(activity.endDate).toLocaleDateString()}
                  <br />
                  Certificate available: {new Date(new Date(activity.endDate).getTime() + (15 * 24 * 60 * 60 * 1000)).toLocaleDateString()}
                </p>
                <Button
                  onClick={() => setShowCertificatePopup(false)}
                  className="w-full"
                >
                  Got it
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail2;