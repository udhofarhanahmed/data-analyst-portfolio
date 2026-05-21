export default function About() {
  const facts = [
    { label: "Location", value: "Shikarpur, Sindh, Pakistan" },
    { label: "Background", value: "Finance + Data Analytics" },
    { label: "Experience", value: "Sindh Bank Internship (2020), Excelerate AI Project Lead (2025)" },
    { label: "Education", value: "BBA Finance, University of Sindh | DIT, SBTE Karachi" },
    { label: "Certifications", value: "Google, DigiSkills, SAS, Microsoft, Forage" },
    { label: "Languages", value: "Urdu, Sindhi, English" },
    { label: "Availability", value: "Remote globally + Pakistan on-site" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300">
            Data Analyst with a Finance background, based in Sindh, Pakistan
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm Farhan Ahmed — a Data Analyst with a Finance background, based in Shikarpur, Sindh, Pakistan. I completed my BBA (Hons) in Finance from the University of Sindh and hold the Google Data Analytics Professional Certificate (v2 and v3) alongside several other certifications in AI, machine learning, and business intelligence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My edge is simple: most data analysts don't understand finance, and most finance graduates don't know data. I sit at that intersection — which means I don't just run numbers, I understand what they mean for a business.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a member of the Google Developer community with 12+ official badges, and I'm actively building my freelance practice while seeking analytical roles in data, banking, and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8">
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-3 font-semibold">{fact.label}</p>
                <p className="text-lg text-slate-900 font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">My Approach</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Tells Stories</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Raw numbers are meaningless without context. I believe in turning data into narratives that drive decisions. Every dashboard, every report, every analysis should answer a real business question.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Finance Matters</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                My finance background means I understand revenue, costs, margins, and cash flow. I don't just analyze data — I analyze business metrics that actually impact the bottom line.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Enables</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                From Python scripts to AI tools to interactive dashboards, I use the right technology for each problem. Tools are means to an end, not the goal itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
