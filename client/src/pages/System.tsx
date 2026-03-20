import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, BookOpen, Zap, Target, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function System() {
  const [activeTab, setActiveTab] = useState("overview");

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
      description: "Full documentation of all components, integrations, and workflows (14,000+ words)",
      icon: "📐",
      downloadName: "DATA_ANALYST_AGENT_SYSTEM.md",
    },
    {
      title: "Tracker Setup Guide",
      description: "Step-by-step instructions for creating and configuring all Google Sheets trackers",
      icon: "📊",
      downloadName: "TRACKER_SETUP_GUIDE.md",
    },
    {
      title: "Outreach Templates",
      description: "Ready-to-use email and message templates for all outreach scenarios",
      icon: "✉️",
      downloadName: "OUTREACH_TEMPLATES.md",
    },
    {
      title: "30-Day Execution Plan",
      description: "Daily action checklist with specific tasks, targets, and success metrics",
      icon: "📅",
      downloadName: "30_DAY_EXECUTION_PLAN.md",
    },
    {
      title: "Implementation Checklist",
      description: "Phase-by-phase setup guide with troubleshooting and success tracking",
      icon: "✅",
      downloadName: "IMPLEMENTATION_CHECKLIST.md",
    },
    {
      title: "Quick Start Guide",
      description: "5-minute overview to get started immediately",
      icon: "🚀",
      downloadName: "README_DATA_ANALYST_SYSTEM.md",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Analyst Agent System</h1>
            <p className="text-xl text-slate-300 mb-8">
              A complete, free, automated system to accelerate your data analyst career. Build your portfolio, track opportunities, manage outreach, and create income — all in one integrated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
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
              <h2 className="text-3xl font-bold text-slate-900">Documentation & Resources</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, idx) => (
                  <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{resource.icon}</span>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600">{resource.description}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-teal-50 border-teal-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📚 Quick Start</h3>
                <ol className="space-y-3 text-slate-700">
                  <li>
                    <strong>1. Read Quick Start Guide</strong> - 5-minute overview of the entire system
                  </li>
                  <li>
                    <strong>2. Follow Setup Checklist</strong> - Create trackers and configure tools (2-3 hours)
                  </li>
                  <li>
                    <strong>3. Start 30-Day Plan</strong> - Follow daily tasks and track progress
                  </li>
                  <li>
                    <strong>4. Use Templates</strong> - Personalize and send outreach messages
                  </li>
                  <li>
                    <strong>5. Measure & Optimize</strong> - Review metrics weekly and adjust strategy
                  </li>
                </ol>
              </Card>
            </TabsContent>

            {/* Metrics Tab */}
            <TabsContent value="metrics" className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">30-Day Goals & Metrics</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {metrics.map((metric, idx) => (
                  <Card key={idx} className="p-6 text-center">
                    <div className="text-3xl mb-3">{metric.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{metric.label}</h3>
                    <p className="text-lg text-teal-600 font-semibold">{metric.target}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Success Indicators</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Week 1</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>✅ All systems operational</li>
                      <li>✅ Portfolio website live</li>
                      <li>✅ First 5 applications submitted</li>
                      <li>✅ First 2 outreach messages sent</li>
                      <li>✅ First 3 posts published</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Week 4</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>✅ 40+ applications sent</li>
                      <li>✅ 15+ outreach messages</li>
                      <li>✅ 12 posts published</li>
                      <li>✅ 2-3 meetings held</li>
                      <li>✅ 1-2 proposals sent</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-teal-50 border-teal-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📊 Tracking Your Progress</h3>
                <p className="text-slate-700 mb-4">
                  Use the Control Dashboard to monitor all metrics. Track daily actions, weekly summaries, and monthly reviews. The dashboard automatically calculates response rates, engagement metrics, and pipeline value.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• <strong>Daily:</strong> Log applications, outreach, and posts</p>
                  <p>• <strong>Weekly:</strong> Compile metrics and send summary email</p>
                  <p>• <strong>Monthly:</strong> Analyze trends and plan next month</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            The system is complete and ready to use. Download the resources, follow the setup guide, and start executing the 30-day plan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Download All Resources
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Quick Start
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
