import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Mail, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import festivaLogo from '@/assets/festiva-logo.png';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { title: 'Total Volunteers', value: '1,234', icon: Users, change: '+12%' },
    { title: 'Active Programs', value: '8', icon: Calendar, change: '+2' },
    { title: 'Messages', value: '45', icon: Mail, change: '+15' },
    { title: 'Impact Score', value: '9.2', icon: BarChart3, change: '+0.3' }
  ];

  const recentVolunteers = [
    { id: 1, name: 'John Doe', email: 'john@email.com', program: 'Food Drive', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', program: 'Tree Plantation', status: 'pending', joined: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', program: 'Education', status: 'active', joined: '2024-01-13' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@email.com', program: 'Food Drive', status: 'inactive', joined: '2024-01-12' },
  ];

  const programs = [
    { id: 1, name: 'Food Drive Initiative', volunteers: 45, status: 'active', date: '2024-02-15' },
    { id: 2, name: 'Tree Plantation Drive', volunteers: 32, status: 'active', date: '2024-02-20' },
    { id: 3, name: 'Education Support', volunteers: 28, status: 'planning', date: '2024-03-01' },
    { id: 4, name: 'Healthcare Outreach', volunteers: 15, status: 'completed', date: '2024-01-30' },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'volunteers', label: 'Volunteers', icon: Users },
    { id: 'programs', label: 'Programs', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={festivaLogo} alt="Festiva Foundation" className="w-8 h-8" />
              <span className="text-xl font-bold">Festiva Admin</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View Site
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? 'bg-primary text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <Button className="btn-ngo-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Quick Action
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change}</p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-full">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Volunteers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentVolunteers.slice(0, 4).map((volunteer) => (
                        <div key={volunteer.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{volunteer.name}</p>
                            <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                          </div>
                          <Badge variant={volunteer.status === 'active' ? 'default' : 'secondary'}>
                            {volunteer.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {programs.filter(p => p.status === 'active').map((program) => (
                        <div key={program.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{program.name}</p>
                            <p className="text-sm text-muted-foreground">{program.volunteers} volunteers</p>
                          </div>
                          <Badge variant="default">Active</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === 'volunteers' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Volunteer Management</h1>
                <Button className="btn-ngo-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Volunteer
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentVolunteers.map((volunteer) => (
                        <TableRow key={volunteer.id}>
                          <TableCell className="font-medium">{volunteer.name}</TableCell>
                          <TableCell>{volunteer.email}</TableCell>
                          <TableCell>{volunteer.program}</TableCell>
                          <TableCell>
                            <Badge variant={volunteer.status === 'active' ? 'default' : 'secondary'}>
                              {volunteer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{volunteer.joined}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 'programs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Program Management</h1>
                <Button className="btn-ngo-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Program
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                  <Card key={program.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <Badge variant={program.status === 'active' ? 'default' : 'secondary'}>
                          {program.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {program.volunteers} volunteers enrolled
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Date: {program.date}
                        </p>
                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other tabs would be implemented similarly */}
          {(activeTab === 'messages' || activeTab === 'settings') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">
                {activeTab === 'messages' ? 'Messages' : 'Settings'}
              </h1>
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    {activeTab === 'messages' 
                      ? 'Message management interface coming soon...' 
                      : 'Settings panel coming soon...'
                    }
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
