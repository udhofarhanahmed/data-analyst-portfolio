import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "The Ultimate Financial Analytics Dashboard",
      description: "Comprehensive financial analytics dashboard built with Python. Analyzes financial data, trends, and metrics to provide actionable insights for decision-making.",
      metrics: "Financial Data Analysis",
      skills: ["Python", "Data Analysis", "Dashboard"],
      github: "https://github.com/udhofarhanahmed/The-Ultimate-Financial-Analytics-Dashboard",
    },
    {
      id: 2,
      title: "Cyclistic Bike-Share Analysis",
      description: "Google Data Analytics Capstone Project. Analyzed bike-share data using R to compare casual riders vs. annual members, with comprehensive data cleaning, processing, and visualization.",
      metrics: "Google Analytics Capstone",
      skills: ["R", "Data Cleaning", "Visualization"],
      github: "https://github.com/udhofarhanahmed/cyclistic-bike-share-analysis1",
    },
    {
      id: 3,
      title: "AI Ad Creative Generator",
      description: "AI-powered tool for generating and checking consistency of ad creatives. Uses machine learning to ensure brand consistency across advertising materials.",
      metrics: "AI/ML Project",
      skills: ["Python", "Machine Learning", "Jupyter"],
      github: "https://github.com/udhofarhanahmed/AI-Ad-Creative-Generator-Consistency-Checker",
    },
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "R", "TypeScript", "HTML", "CSS", "JavaScript"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["Jupyter Notebook", "Google Analytics", "GitHub", "Data Visualization"] 
    },
    { 
      category: "Expertise", 
      items: ["Data Analysis", "Financial Analytics", "AI/ML", "Dashboard Development"] 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Farhan Ahmed
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Finance Graduate | Data Analyst | AI/ML Enthusiast
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Transforming financial and business data into actionable insights. Specialized in data analysis, financial analytics, and building intelligent data solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View My Projects
                </Button>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/udhofarhanahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/farhan-ahmed-5511a3176" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            </div>
            {/* LinkedIn Badge */}
            <div className="hidden md:flex justify-center">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="farhan-ahmed-5511a3176" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/farhan-ahmed-5511a3176?trk=profile-badge">Farhan Ahmed</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Real-world data analysis and AI projects demonstrating practical skills and impact.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-50 rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="h-8 w-8 text-teal-500" />
                  <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {project.metrics}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
                  >
                    View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-900">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-600">Technical proficiency across programming languages, tools, and analytical methodologies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 text-teal-500 mr-2" />
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center text-slate-700">
                      <span className="h-2 w-2 bg-teal-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                I'm Farhan Ahmed, a Finance graduate and aspiring data analyst based in Sindh, Pakistan. With a passion for transforming raw data into actionable insights, I combine financial knowledge with technical skills to solve real-world business problems.
              </p>
              <p>
                My journey into data analysis started with the Google Data Analytics Professional Certificate, where I completed the Cyclistic Bike-Share capstone project. Since then, I've been building practical data solutions using Python, R, and modern data tools.
              </p>
              <p>
                I'm particularly interested in financial analytics, AI/ML applications, and building intelligent systems that help businesses make data-driven decisions. Currently, I'm focused on developing my portfolio and exploring opportunities to apply data analytics in real business contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need data analysis, insights, or a growth partner, let's explore how I can help your business or project succeed.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
