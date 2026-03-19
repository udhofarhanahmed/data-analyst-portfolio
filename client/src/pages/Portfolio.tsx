import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Analysis",
      description: "Comprehensive analysis of 2 years of sales data identifying trends, revenue forecasting, and pricing optimization strategies.",
      category: "Sales Analytics",
      metrics: ["15% Revenue Increase", "3 Key Trends", "5 Recommendations"],
      skills: ["Python", "SQL", "Tableau", "Statistical Analysis"],
      image: "📊",
      link: "/case-studies/sales-analysis",
      github: "https://github.com",
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Segmented customer base into 5 distinct personas using clustering analysis, behavioral data, and RFM analysis.",
      category: "Customer Analytics",
      metrics: ["5 Customer Segments", "40% Targeting Improvement", "High-Value Identified"],
      skills: ["Python", "Machine Learning", "K-Means", "RFM Analysis"],
      image: "👥",
      link: "/case-studies/customer-segmentation",
      github: "https://github.com",
    },
    {
      id: 3,
      title: "Job Market Analysis",
      description: "Analyzed 50K+ job postings to identify emerging skills, salary trends, and market opportunities for data analysts.",
      category: "Market Research",
      metrics: ["50K+ Postings", "15 Emerging Skills", "Salary Benchmarks"],
      skills: ["Web Scraping", "Data Visualization", "Excel", "SQL"],
      image: "📈",
      link: "/case-studies/job-market",
      github: "https://github.com",
    },
    {
      id: 4,
      title: "E-Commerce Conversion Optimization",
      description: "A/B testing and funnel analysis to identify conversion bottlenecks and optimize user experience.",
      category: "E-Commerce Analytics",
      metrics: ["25% Conversion Lift", "3 A/B Tests", "ROI Calculated"],
      skills: ["A/B Testing", "Funnel Analysis", "Google Analytics", "Python"],
      image: "🛒",
      link: "/case-studies/ecommerce",
      github: "https://github.com",
    },
    {
      id: 5,
      title: "Financial Performance Dashboard",
      description: "Built interactive KPI dashboard tracking revenue, expenses, profitability, and cash flow metrics.",
      category: "Financial Analytics",
      metrics: ["Real-Time Dashboards", "10+ KPIs", "Automated Reporting"],
      skills: ["Power BI", "Excel", "SQL", "DAX"],
      image: "💰",
      link: "/case-studies/financial",
      github: "https://github.com",
    },
  ];

  const categories = ["All", "Sales Analytics", "Customer Analytics", "Market Research", "E-Commerce Analytics", "Financial Analytics"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A collection of data analysis projects showcasing real-world problem solving, technical skills, and measurable impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  category === "All"
                    ? "bg-teal-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-7xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="mb-6 space-y-2">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-center text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 bg-teal-500 rounded-full mr-3"></span>
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link href={project.link}>
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                        View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-slate-300">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm available for freelance projects, consulting, or full-time opportunities. Let's discuss how I can help your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
