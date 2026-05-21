import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, Database, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Data Analysis & Reporting",
      description: "I clean, analyze, and summarize your data into clear reports with actionable recommendations. Ideal for small businesses and startups needing to understand their numbers.",
      timeline: "3–7 days",
      deliverable: "Report + Excel/Sheets Dashboard",
    },
    {
      icon: BarChart3,
      title: "Financial Dashboard Development",
      description: "Custom Excel or Google Sheets dashboards tracking your key financial metrics — revenue, costs, profit trends, and KPIs — updated automatically.",
      timeline: "5–10 days",
      deliverable: "Interactive Dashboard File",
    },
    {
      icon: Zap,
      title: "Business Intelligence Setup",
      description: "Connect your data sources and build a live dashboard in Google Looker Studio or Power BI so you always know what's happening in your business.",
      timeline: "1–2 weeks",
      deliverable: "Live BI Dashboard",
    },
    {
      icon: Database,
      title: "Data Cleaning & Preparation",
      description: "Raw, messy data turned into clean, analysis-ready datasets. Handling duplicates, missing values, formatting, and standardization.",
      timeline: "1–5 days",
      deliverable: "Clean Dataset + Documentation",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What I Can Do For You</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Freelance data analysis services for businesses, startups, and individuals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="space-y-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="border border-slate-200 rounded-lg p-8 md:p-12 hover:border-teal-500 transition-colors">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-7 w-7 text-teal-600" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-6 md:gap-12">
                        <div>
                          <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Timeline</p>
                          <p className="text-lg font-semibold text-slate-900">{service.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Deliverable</p>
                          <p className="text-lg font-semibold text-slate-900">{service.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container text-center">
          <p className="text-lg text-slate-700 mb-8">
            Pricing is flexible based on project scope. Contact me to discuss your needs.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto">
              Start a Project <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
