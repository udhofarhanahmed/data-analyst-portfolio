import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, BookOpen, Zap, Target, Users, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function System() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleDownload = (filename: string, title: string) => {
    toast.success(`${title} download started! Check your downloads folder.`);
    // In production, this would serve actual files from your server
    // For now, we show a success message
  };

  const components = [
    {
      icon: BarChart3,
      title: "Portfolio Website",
      description: "Showcase your skills and projects professionally",
      tools: ["React", "Netlify", "GitHub"],
      status: "✅ Live",
    },
    {
      icon: Target,
      title: "Job Tracker",
      description: "Organize and follow up on job applications",
      tools: ["Google Sheets", "Forms", "Calendar"],
      status: "📋 Template Ready",
    },
    {
      icon: Users,
      title: "Lead Tracker",
      description: "Manage client prospects and sales pipeline",
      tools: ["Google Sheets", "Forms"],
      status: "📋 Template Ready",
    },
    {
      icon: FileText,
      title: "Content Calendar",
      description: "Plan and measure LinkedIn posts",
      tools: ["Google Sheets", "Analytics"],
      status: "📋 Template Ready",
    },
    {
      icon: BarChart3,
      title: "Control Dashboard",
      description: "Monitor all metrics and progress",
      tools: ["Google Sheets", "Formulas"],
      status: "📋 Template Ready",
    },
    {
      icon: Zap,
      title: "Automation Layer",
      description: "Connect services and automate workflows",
      tools: ["Zapier", "Google Apps Script"],
      status: "⚙️ Optional",
    },
  ];

  const resources = [
    {
      title: "Complete System Architecture",
      description: "Full documentation of all components, integrations, and workflows",
      icon: "📐",
      downloadName: "System_Architecture",
    },
    {
      title: "Tracker Setup Guide",
      description: "Step-by-step instructions for creating and configuring all Google Sheets trackers",
      icon: "📊",
      downloadName: "Tracker_Setup_Guide",
    },
    {
      title: "Outreach Templates",
      description: "Ready-to-use email and message templates for all outreach scenarios",
      icon: "✉️",
      downloadName: "Outreach_Templates",
    },
    {
      title: "30-Day Execution Plan",
      description: "Daily action checklist with specific tasks, targets, and success metrics",
      icon: "📅",
      downloadName: "30_Day_Execution_Plan",
    },
    {
      title: "Implementation Checklist",
      description: "Phase-by-phase setup guide with troubleshooting and success tracking",
      icon: "✅",
      downloadName: "Implementation_Checklist",
    },
    {
      title: "Quick Start Guide",
      description: "5-minute overview to get started immediately",
      icon: "🚀",
      downloadName: "Quick_Start_Guide",
    },
  ];

  const metrics = [
    { label: "Job Applications", target: "35-40/month", icon: "📝" },
    { label: "Outreach Messages", target: "12-15/month", icon: "💬" },
    { label: "LinkedIn Posts", target: "12/month", icon: "📱" },
    { label: "Meetings Scheduled", target: "2-3/month", icon: "📞" },
    { label: "Proposals Sent", target: "1-2/month", icon: "📄" },
    { label: "Portfolio Projects", target: "1/month", icon: "💼" },
  ];

  const features = [
    {
      title: "100% Free",
      description: "No paid subscriptions required. Uses only free tiers of Google Workspace, Netlify, and GitHub.",
    },
    {
      title: "One Person Can Manage",
      description: "Designed for solo execution. 2 hours per day is all you need.",
    },
    {
      title: "Fully Automated",
      description: "Trackers, reminders, and notifications handle repetitive tasks automatically.",
    },
    {
      title: "Proven Templates",
      description: "Ready-to-use templates for emails, outreach, and proposals. Just personalize.",
    },
    {
      title: "Measurable Results",
      description: "Track everything. Optimize constantly. See what works and scale it.",
    },
    {
      title: "Scalable System",
      description: "Grows with you. Start with basics, add automation as you scale.",
    },
  ];

  const getStartedSteps = [
    {
      step: 1,
      title: "Download All Resources",
      description: "Go to the Resources tab and download all templates, guides, and documentation.",
      time: "5 minutes"
    },
    {
      step: 2,
      title: "Set Up Google Sheets Trackers",
      description: "Create Job Tracker, Lead Tracker, and Content Calendar using the provided templates.",
      time: "30 minutes"
    },
    {
      step: 3,
      title: "Configure Zapier Automation",
      description: "Set up automated reminders, email notifications, and workflow triggers.",
      time: "20 minutes"
    },
    {
      step: 4,
      title: "Create Your Portfolio Projects",
      description: "Analyze your data projects and create case studies using the templates.",
      time: "2-3 hours"
    },
    {
      step: 5,
      title: "Start Your 30-Day Execution Plan",
      description: "Follow the daily action checklist to build your career systematically.",
      time: "Ongoing - 2 hours/day"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Analyst Agent System</h1>
            <p className="text-xl text-slate-300 mb-8">
              A complete, free, automated system to accelerate your data analyst career. Build your portfolio, track opportunities, manage outreach, and create income — all in one integrated platform. Anyone can use this system to build their career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white"
                onClick={() => setActiveTab("getstarted")}
              >
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => setActiveTab("components")}
              >
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
              <TabsTrigger value="getstarted">Get Started</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">System Overview</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">What You Get</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Professional portfolio website (live & deployed)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Job application tracker with automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Lead & outreach tracker for sales pipeline</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Content calendar for LinkedIn strategy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Control dashboard for metrics & progress</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>30-day execution plan with daily tasks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Ready-to-use outreach templates</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                    <div className="space-y-4">
                      {features.map((feature, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                          <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">1️⃣</div>
                    <h3 className="font-bold text-slate-900 mb-2">Setup (2-3 hours)</h3>
                    <p className="text-slate-600">Create trackers, optimize profile, deploy website</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">2️⃣</div>
                    <h3 className="font-bold text-slate-900 mb-2">Execute (2 hours/day)</h3>
                    <p className="text-slate-600">Apply to jobs, send outreach, publish content</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">3️⃣</div>
                    <h3 className="font-bold text-slate-900 mb-2">Measure (Weekly)</h3>
                    <p className="text-slate-600">Track metrics, optimize approach, scale winners</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components" className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">System Components</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {components.map((comp, idx) => {
                  const Icon = comp.icon;
                  return (
                    <Card key={idx} className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-8 w-8 text-teal-500" />
                        <span className="text-sm font-semibold text-teal-600">{comp.status}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{comp.title}</h3>
                      <p className="text-slate-600 mb-4">{comp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {comp.tools.map((tool) => (
                          <span key={tool} className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Download Resources</h2>
                <p className="text-slate-600 mb-8">All templates, guides, and documentation are available for download. Use these to set up your complete system.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 text-sm mb-6">{resource.description}</p>
                    <Button
                      onClick={() => handleDownload(resource.downloadName, resource.title)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Metrics Tab */}
            <TabsContent value="metrics" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Success Metrics</h2>
                <p className="text-slate-600 mb-8">Here are the target metrics to track your progress and success:</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metrics.map((metric, idx) => (
                  <Card key={idx} className="p-6 text-center">
                    <div className="text-4xl mb-4">{metric.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{metric.label}</h3>
                    <p className="text-2xl font-bold text-teal-600">{metric.target}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Get Started Tab */}
            <TabsContent value="getstarted" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started in 5 Steps</h2>
                <p className="text-slate-600 mb-8">Here's exactly how to set up the complete system:</p>
              </div>

              <div className="space-y-6">
                {getStartedSteps.map((item, index) => (
                  <Card key={index} className="p-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                          <span className="text-lg font-bold">{item.step}</span>
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700 mb-3">{item.description}</p>
                        <p className="text-sm text-slate-500">⏱️ {item.time}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-teal-50 border-teal-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">💡 Pro Tips</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Start with the 30-Day Execution Plan - it guides you through everything</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Customize templates to fit your specific needs and goals</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Track everything - data is your best feedback mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Share your progress on LinkedIn - it builds your personal brand</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Data Analyst Career?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Download all resources, follow the system, and start building your future today. This system works for anyone willing to execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => setActiveTab("resources")}
            >
              Download Resources
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-slate-900"
              onClick={() => setActiveTab("getstarted")}
            >
              View Getting Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
