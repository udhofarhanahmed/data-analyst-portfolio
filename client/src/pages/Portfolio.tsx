import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "The Ultimate Financial Analytics Dashboard",
      category: "Financial Analytics",
      description: "Comprehensive financial analytics dashboard built with Python. Demonstrates advanced data analysis techniques for financial metrics, trends analysis, and performance visualization.",
      technologies: ["Python", "Data Analysis", "Dashboard", "Financial Metrics"],
      github: "https://github.com/udhofarhanahmed/The-Ultimate-Financial-Analytics-Dashboard",
      date: "Feb 2026",
      impact: "Enables financial data analysis and decision-making",
      icon: "📊",
    },
    {
      id: 2,
      title: "Cyclistic Bike-Share Analysis",
      category: "Data Analysis",
      description: "Google Data Analytics Capstone Project. Comprehensive analysis of bike-share data comparing casual riders vs. annual members using R, with data cleaning, processing, and visualization.",
      technologies: ["R", "Data Cleaning", "Statistical Analysis", "Visualization"],
      github: "https://github.com/udhofarhanahmed/cyclistic-bike-share-analysis1",
      date: "Feb 2026",
      impact: "Identified key differences between casual and annual members",
      icon: "🚴",
    },
    {
      id: 3,
      title: "AI Ad Creative Generator",
      category: "AI/Machine Learning",
      description: "AI-powered tool for generating and validating ad creatives. Uses machine learning to ensure brand consistency across advertising materials and campaigns.",
      technologies: ["Python", "Machine Learning", "Jupyter Notebook", "AI"],
      github: "https://github.com/udhofarhanahmed/AI-Ad-Creative-Generator-Consistency-Checker",
      date: "Feb 2026",
      impact: "Automates ad creative validation and consistency checking",
      icon: "🤖",
    },
    {
      id: 4,
      title: "GDP Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for GDP data analysis and visualization. Provides insights into economic indicators and trends through comprehensive data visualization.",
      technologies: ["Python", "Data Visualization", "Dashboard"],
      github: "https://github.com/udhofarhanahmed/gdp-dashboard",
      date: "Feb 2026",
      impact: "Visualizes economic data for analysis and insights",
      icon: "📈",
    },
    {
      id: 5,
      title: "Financial Intelligence Engine",
      category: "Financial Analytics",
      description: "Advanced financial intelligence system built with TypeScript. Processes and analyzes financial data to generate actionable intelligence.",
      technologies: ["TypeScript", "Financial Analytics", "Backend"],
      github: "https://github.com/udhofarhanahmed/Financial-Intelligence-Engine",
      date: "Mar 2026",
      impact: "Powers financial data processing and analysis",
      icon: "💼",
    },
    {
      id: 6,
      title: "Data Analyst Portfolio",
      category: "Web Development",
      description: "Personal portfolio website showcasing data analysis projects and skills. Built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      github: "https://github.com/udhofarhanahmed/DataAnalystPortfolio",
      date: "Nov 2024",
      impact: "Professional portfolio for career growth",
      icon: "🌐",
    },
  ];

  const categories = ["All", "Financial Analytics", "Data Analysis", "AI/Machine Learning", "Data Visualization", "Web Development"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A collection of data analysis, AI/ML, and financial analytics projects demonstrating practical skills and real-world impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={cat === "All" ? "default" : "outline"}
                  className={cat === "All" ? "bg-teal-500 hover:bg-teal-600" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl">
                  {project.icon}
                </div>
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600 pt-4 border-t border-slate-200">
                      <span className="text-xs">💡 {project.impact}</span>
                    </div>
                    
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interested in Collaboration?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm open to freelance projects, consulting opportunities, and collaborations. Let's discuss how we can work together.
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white gap-2">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
