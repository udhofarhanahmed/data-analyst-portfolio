import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "6+ Projects Completed", value: "6+" },
    { label: "Google Certified Data Analyst", value: "Certified" },
    { label: "Finance + Tech Background", value: "Dual" },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis & BI",
      description: "Turning raw datasets into actionable dashboards and reports",
    },
    {
      icon: TrendingUp,
      title: "Financial Analytics",
      description: "Applying finance knowledge to business data and metrics",
    },
    {
      icon: Zap,
      title: "AI-Powered Solutions",
      description: "Using modern AI tools to automate and accelerate analysis",
    },
  ];

  const featuredProjects = [
    {
      title: "Financial Analytics Dashboard",
      description: "Comprehensive financial metrics and KPI tracking system",
      tags: ["Python", "Tableau", "Finance"],
      href: "/portfolio",
    },
    {
      title: "Cyclistic Bike-Share Analysis",
      description: "Google Data Analytics Capstone - Customer behavior analysis",
      tags: ["R", "SQL", "Data Analysis"],
      href: "/portfolio",
    },
    {
      title: "AI Ad Creative Generator",
      description: "Machine learning system for automated creative optimization",
      tags: ["Python", "AI/ML", "Automation"],
      href: "/portfolio",
    },
  ];

  const certifications = [
    "Google Data Analytics (v2 & v3)",
    "DigiSkills DSTP 3.0",
    "Tata GenAI Forage",
    "SAS AI & ML",
    "Microsoft Learn",
    "Google AI Essentials",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Farhan Ahmed
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              Data Analyst · Finance Graduate · Business Intelligence
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Transforming raw data into decisions that drive real business growth. Based in Sindh, Pakistan — available remotely worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg flex items-center gap-2">
                  View My Work <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-slate-400 text-white hover:bg-slate-700 px-8 py-6 text-lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-sm text-slate-600 mb-2 uppercase tracking-wide">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What I Do</h2>
            <p className="text-lg text-slate-600">Three core areas where I deliver real value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Real-world data analysis and AI projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-slate-200 hover:border-teal-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg">
                View All Projects <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="container">
          <p className="text-sm text-slate-600 uppercase tracking-wide mb-8 text-center">Certifications & Credentials</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="text-center py-4 px-3 bg-slate-50 rounded-lg">
                <p className="text-sm font-medium text-slate-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to work with a data analyst who understands both numbers and business? Let's talk.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
