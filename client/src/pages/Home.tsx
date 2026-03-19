import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Analysis",
      description: "Analyzed 2 years of sales data to identify trends, forecast revenue, and optimize pricing strategy.",
      metrics: "15% Revenue Increase",
      skills: ["Python", "SQL", "Tableau"],
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Segmented customer base into 5 distinct personas using clustering analysis and behavioral data.",
      metrics: "4 High-Value Segments",
      skills: ["Python", "Machine Learning", "Analytics"],
    },
    {
      id: 3,
      title: "Job Market Analysis",
      description: "Analyzed 50K+ job postings to identify emerging skills, salary trends, and market opportunities.",
      metrics: "Key Insights Discovered",
      skills: ["Web Scraping", "Data Visualization", "Excel"],
    },
  ];

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "R", "JavaScript"] },
    { category: "Tools", items: ["Excel", "Tableau", "Power BI", "Google Analytics"] },
    { category: "Methods", items: ["Data Cleaning", "Statistical Analysis", "A/B Testing", "Forecasting"] },
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
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Data Analyst & Growth Operator
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              I transform raw data into actionable insights that drive business growth. Specialized in sales analysis, customer segmentation, and market research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Real-world data analysis projects that demonstrate impact and methodology.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-50 rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="h-8 w-8 text-teal-500" />
                  <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {project.metrics}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
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
            <p className="text-lg text-slate-600">Technical proficiency across tools, languages, and analytical methodologies.</p>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need data analysis, insights, or a growth partner, let's explore how I can help your business.
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
