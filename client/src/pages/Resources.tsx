import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, BookOpen, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Resources() {
  const [downloadedFiles, setDownloadedFiles] = useState<string[]>([]);

  const documentationFiles = [
    {
      id: 1,
      title: "Quick Start Guide",
      description: "5-minute overview to get started immediately with the system",
      category: "Getting Started",
      icon: "🚀",
      size: "~50 KB",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Complete System Architecture",
      description: "Full documentation of all 7 components, integrations, workflows, and technical details (14,000+ words)",
      category: "Core Documentation",
      icon: "📐",
      size: "~200 KB",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Tracker Setup Guide",
      description: "Step-by-step instructions for creating and configuring all Google Sheets trackers with formulas and automation",
      category: "Setup",
      icon: "📊",
      size: "~150 KB",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Outreach Templates",
      description: "10+ ready-to-use email and message templates for cold outreach, follow-ups, proposals, and job applications",
      category: "Templates",
      icon: "✉️",
      size: "~100 KB",
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "30-Day Execution Plan",
      description: "Daily action checklist with specific tasks, weekly targets, success metrics, and troubleshooting guide",
      category: "Execution",
      icon: "📅",
      size: "~180 KB",
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Implementation Checklist",
      description: "Phase-by-phase setup guide with success tracking, troubleshooting, and monthly reflection templates",
      category: "Setup",
      icon: "✅",
      size: "~120 KB",
      downloadUrl: "#",
    },
  ];

  const categories = ["All", "Getting Started", "Core Documentation", "Setup", "Templates", "Execution"];

  const handleDownload = (fileId: number, fileName: string) => {
    setDownloadedFiles([...downloadedFiles, fileName]);
    // In a real app, this would trigger an actual download
    alert(`${fileName} would be downloaded here`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Documentation</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Complete documentation, templates, and guides to set up and execute your Data Analyst Agent System. All files are ready to download and use immediately.
          </p>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">All Documentation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant="outline"
                  className="justify-start"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationFiles.map((file) => (
              <Card key={file.id} className="p-8 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{file.icon}</span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {file.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{file.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{file.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{file.size}</span>
                  <Button
                    size="sm"
                    className="bg-teal-500 hover:bg-teal-600 text-white gap-2"
                    onClick={() => handleDownload(file.id, file.title)}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Getting Started in 5 Steps</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: "Read Quick Start",
                desc: "5-minute overview",
                icon: "📖",
              },
              {
                step: 2,
                title: "Create Trackers",
                desc: "Set up Google Sheets",
                icon: "📊",
              },
              {
                step: 3,
                title: "Optimize Profile",
                desc: "LinkedIn & website",
                icon: "👤",
              },
              {
                step: 4,
                title: "Start Day 1",
                desc: "Follow execution plan",
                icon: "🚀",
              },
              {
                step: 5,
                title: "Track & Optimize",
                desc: "Review metrics weekly",
                icon: "📈",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-teal-600 mb-2">{item.step}</div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does setup take?",
                a: "Initial setup takes 2-3 hours. You'll create trackers, optimize your profile, and deploy the website. After that, daily execution takes about 2 hours.",
              },
              {
                q: "Do I need to pay for anything?",
                a: "No. The entire system uses free tools: Google Workspace, GitHub, Netlify, and Zapier's free tier. No paid subscriptions required.",
              },
              {
                q: "Can I customize the templates?",
                a: "Absolutely. All templates are starting points. Personalize them for your specific situation, industry, and target audience.",
              },
              {
                q: "What if I don't get responses?",
                a: "The system includes troubleshooting guides. Common issues: improve personalization, enhance targeting, follow up consistently, and review your materials.",
              },
              {
                q: "How do I track progress?",
                a: "Use the Control Dashboard to monitor all metrics: applications sent, response rates, outreach performance, content engagement, and pipeline value.",
              },
              {
                q: "Can this work for freelance/contract work?",
                a: "Yes. The outreach templates and lead tracker are perfect for finding freelance clients. Adjust the messaging for project-based work.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Free Tools & Services Used</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Google Workspace",
                uses: ["Sheets", "Forms", "Drive", "Gmail", "Calendar", "Analytics"],
                icon: "🔵",
              },
              {
                name: "GitHub & Netlify",
                uses: ["Version Control", "Code Hosting", "Web Deployment", "CI/CD"],
                icon: "⚫",
              },
              {
                name: "Zapier (Free Tier)",
                uses: ["Workflow Automation", "Service Integration", "Email Triggers"],
                icon: "🟠",
              },
            ].map((tool, idx) => (
              <Card key={idx} className="p-8">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{tool.name}</h3>
                <ul className="space-y-2">
                  {tool.uses.map((use, i) => (
                    <li key={i} className="text-slate-600 flex items-center">
                      <span className="h-2 w-2 bg-teal-500 rounded-full mr-3"></span>
                      {use}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What You Can Achieve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Month 1",
                items: ["40+ applications sent", "15+ outreach messages", "12 LinkedIn posts", "2-3 meetings scheduled"],
              },
              {
                title: "Month 2-3",
                items: ["Consistent pipeline", "First clients/offers", "Growing visibility", "Refined strategy"],
              },
              {
                title: "Month 4+",
                items: ["Sustainable income", "Strong personal brand", "Quality opportunities", "Scalable system"],
              },
            ].map((phase, idx) => (
              <Card key={idx} className="p-8 border-teal-200 bg-teal-50">
                <h3 className="text-lg font-bold text-slate-900 mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <span className="h-2 w-2 bg-teal-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Download all documentation, follow the setup guide, and start your 30-day execution plan today. Everything you need is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white gap-2">
              <Download className="h-5 w-5" />
              Download All Files
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              View System Overview <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
