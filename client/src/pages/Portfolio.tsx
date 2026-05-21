import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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
    },
    {
      id: 2,
      title: "Cyclistic Bike-Share Analysis",
      category: "Data Analysis",
      description: "Google Data Analytics Capstone Project. Comprehensive analysis of bike-share data comparing casual riders vs. annual members using R, with data cleaning, processing, and visualization.",
      technologies: ["R", "Data Cleaning", "Statistical Analysis", "Visualization"],
      github: "https://github.com/udhofarhanahmed/cyclistic-bike-share-analysis1",
      date: "Feb 2026",
    },
    {
      id: 3,
      title: "AI Ad Creative Generator",
      category: "AI/Machine Learning",
      description: "AI-powered tool for generating and validating ad creatives. Uses machine learning to ensure brand consistency across advertising materials and campaigns.",
      technologies: ["Python", "Machine Learning", "Jupyter Notebook", "AI"],
      github: "https://github.com/udhofarhanahmed/AI-Ad-Creative-Generator-Consistency-Checker",
      date: "Feb 2026",
    },
    {
      id: 4,
      title: "GDP Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for GDP data analysis and visualization. Provides insights into economic indicators and trends through comprehensive data visualization.",
      technologies: ["Python", "Data Visualization", "Dashboard"],
      github: "https://github.com/udhofarhanahmed/gdp-dashboard",
      date: "Feb 2026",
    },
    {
      id: 5,
      title: "Financial Intelligence Engine",
      category: "Financial Analytics",
      description: "Advanced financial intelligence system built with TypeScript. Processes and analyzes financial data to generate actionable intelligence.",
      technologies: ["TypeScript", "Financial Analytics", "Backend"],
      github: "https://github.com/udhofarhanahmed/Financial-Intelligence-Engine",
      date: "Mar 2026",
    },
    {
      id: 6,
      title: "Data Analyst Portfolio",
      category: "Web Development",
      description: "Personal portfolio website showcasing data analysis projects and skills. Built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Web Design"],
      github: "https://github.com/udhofarhanahmed/data-analyst-portfolio",
      date: "Nov 2024",
    },
  ];

  const categories = ["All", "Financial Analytics", "Data Analysis", "AI/Machine Learning", "Data Visualization", "Web Development"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A collection of data analysis, AI/ML, and financial analytics projects demonstrating practical skills and real-world impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-lg p-8 hover:border-teal-500 transition-colors flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500">{project.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm pt-4 border-t border-slate-200"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Interested in Collaboration?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm open to freelance projects, consulting opportunities, and collaborations. Let's discuss how we can work together.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
