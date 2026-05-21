import { ExternalLink } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["Excel (Advanced)", "SQL/MySQL", "R", "Python (Pandas)", "Statistical Analysis", "Data Cleaning"],
    },
    {
      title: "Business Intelligence & Visualization",
      skills: ["Tableau", "Power BI", "Google Analytics", "Data Visualization", "Dashboard Development", "Financial Reporting"],
    },
    {
      title: "AI & Cloud",
      skills: ["Google Cloud Platform", "Vertex AI", "Gemini AI", "Firebase", "Machine Learning Fundamentals", "GenAI Tools"],
    },
    {
      title: "Finance & Business",
      skills: ["Financial Statement Analysis", "Business Research", "CRM", "KYC", "Banking Operations", "Business Intelligence"],
    },
    {
      title: "Development & Tools",
      skills: ["GitHub", "Jupyter Notebook", "Google Workspace", "HTML/CSS", "TypeScript (basic)"],
    },
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate (v2)",
      issuer: "Coursera/Google",
      date: "Sep 2025",
      link: "#",
    },
    {
      title: "Google Data Analytics Professional Certificate (v3)",
      issuer: "Coursera/Google",
      date: "Apr 2026",
      link: "#",
    },
    {
      title: "SAS AI and Machine Learning Skills Fest",
      issuer: "SAS",
      date: "Nov 2025",
      link: "#",
    },
    {
      title: "Data Analytics & Business Intelligence",
      issuer: "DigiSkills DSTP 3.0, Ministry of IT Pakistan",
      date: "Dec 2025",
      link: "#",
      credentialId: "ID: H5BNSDYMK",
    },
    {
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Nov 2025",
      link: "#",
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "2025",
      link: "#",
    },
    {
      title: "Discover Data Analysis",
      issuer: "Microsoft Learn",
      date: "2025",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-slate-300">
            Technical skills, certifications, and professional development
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="space-y-16">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{category.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">Certifications & Credentials</h2>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:border-teal-500 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-slate-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-slate-500">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-sm text-slate-500 mt-2">{cert.credentialId}</p>
                    )}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap"
                  >
                    Verify <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Developer Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Google Developer Community</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Active member of the Google Developer ecosystem with 12+ official badges including Google Cloud Innovator, Gemini Enterprise Agent Ready, and Firebase Studio Developer Community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
