import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, BarChart3, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", proficiency: "Advanced", description: "Data analysis, automation, machine learning, dashboards" },
        { name: "R", proficiency: "Advanced", description: "Statistical analysis, data visualization, capstone projects" },
        { name: "TypeScript", proficiency: "Intermediate", description: "Backend development, financial systems" },
        { name: "JavaScript/HTML/CSS", proficiency: "Advanced", description: "Web development, responsive design" },
      ],
    },
    {
      title: "Data Analysis & Tools",
      icon: BarChart3,
      skills: [
        { name: "Data Cleaning", proficiency: "Expert", description: "Handling missing values, duplicates, outliers" },
        { name: "Statistical Analysis", proficiency: "Advanced", description: "Hypothesis testing, distributions, regression" },
        { name: "Data Visualization", proficiency: "Advanced", description: "Charts, dashboards, interactive visualizations" },
        { name: "Google Analytics", proficiency: "Advanced", description: "Web analytics, conversion tracking, insights" },
      ],
    },
    {
      title: "Financial Analytics & AI/ML",
      icon: Zap,
      skills: [
        { name: "Financial Analytics", proficiency: "Expert", description: "Financial dashboards, KPI tracking, metrics analysis" },
        { name: "Machine Learning", proficiency: "Intermediate", description: "Clustering, classification, pattern recognition" },
        { name: "AI Tools", proficiency: "Intermediate", description: "AI-powered solutions, consistency checking" },
        { name: "Predictive Analytics", proficiency: "Intermediate", description: "Forecasting, trend analysis, insights" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: [
        { name: "GitHub", proficiency: "Advanced", description: "Version control, collaboration, code management" },
        { name: "Jupyter Notebook", proficiency: "Advanced", description: "Interactive analysis, code documentation" },
        { name: "Google Workspace", proficiency: "Advanced", description: "Sheets, Docs, Forms, Drive, Analytics" },
        { name: "Web Development", proficiency: "Intermediate", description: "React, full-stack, responsive design" },
      ],
    },
  ];

  const certifications = [
    { name: "Google Data Analytics Professional Certificate", issuer: "Google", year: "2024" },
    { name: "Capstone Project: Cyclistic Bike-Share Analysis", issuer: "Google", year: "2024" },
    { name: "Finance Graduate", issuer: "University", year: "2023" },
  ];

  const tools = [
    "Python", "R", "TypeScript", "JavaScript", "HTML", "CSS",
    "Jupyter Notebook", "GitHub", "Google Analytics", "Google Sheets",
    "React", "Data Visualization", "Machine Learning", "Statistical Analysis",
    "Financial Analytics", "Dashboard Development", "Web Development", "Git"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Technical proficiency in data analysis, financial analytics, AI/ML, and full-stack web development.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  <div className="flex items-center mb-8">
                    <Icon className="h-8 w-8 text-teal-500 mr-3" />
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="border-l-4 border-teal-500 pl-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
                          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                            {skill.proficiency}
                          </span>
                        </div>
                        <p className="text-slate-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proficiency Levels</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-4">⭐⭐⭐</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Expert</h3>
              <p className="text-slate-600">
                Deep expertise with years of practical experience. Can solve complex problems independently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-4">⭐⭐</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Advanced</h3>
              <p className="text-slate-600">
                Strong working knowledge with ability to handle most scenarios independently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">⭐</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Intermediate</h3>
              <p className="text-slate-600">
                Solid understanding with ability to work independently on standard tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-white border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Certifications & Learning</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{cert.name}</h3>
                  <p className="text-slate-600">{cert.issuer}</p>
                </div>
                <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-4 py-2 rounded-full">{cert.year}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Continuously learning and staying updated with latest tools, techniques, and industry trends in data analytics and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Tools I Use */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technologies & Tools</h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => (
              <div key={tool} className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow">
                <p className="font-semibold text-slate-900">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Put These Skills to Work</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need data analysis, financial dashboards, or AI solutions, I'm ready to help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
