import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Finance Graduate | Aspiring Data Analyst | Building data solutions and AI tools from Sindh, Pakistan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg p-8 text-white text-center mb-8">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-2">Data Analyst</h3>
                <p className="text-teal-100">Growth Operator</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li><strong>Location:</strong> Sindh, Pakistan</li>
                  <li><strong>Background:</strong> Finance Graduate</li>
                  <li><strong>Specialization:</strong> Financial Analytics, AI/ML</li>
                  <li><strong>Certifications:</strong> Google Data Analytics</li>
                  <li><strong>Availability:</strong> Freelance & Projects</li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">My Journey</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I'm Farhan Ahmed, a Finance graduate from Sindh, Pakistan, passionate about transforming data into actionable insights. My journey into data analytics began with a desire to understand how data drives business decisions and creates real impact.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  I've completed the Google Data Analytics Professional Certificate and built several real-world projects including financial dashboards, bike-share analysis, and AI-powered tools. My work combines financial knowledge with technical skills to solve practical business problems.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">My Expertise</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I specialize in financial analytics, data visualization, and building intelligent systems using Python, R, and TypeScript. My background in finance gives me unique insight into business metrics and financial decision-making.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  I'm particularly interested in AI/ML applications, building practical data solutions, and exploring how technology can solve real-world business problems. I'm always learning and staying current with the latest tools and techniques in data analytics.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">My Approach</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">1. Understand the Business</h4>
                    <p className="text-slate-700">Before diving into data, I take time to understand your business goals, challenges, and constraints. This context is crucial for meaningful analysis.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">2. Ask the Right Questions</h4>
                    <p className="text-slate-700">Rather than analyzing everything, I focus on questions that matter most to your business. This keeps analysis focused and actionable.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">3. Tell a Story</h4>
                    <p className="text-slate-700">Data is only valuable if it's understood and acted upon. I focus on clear communication and visualization to make insights accessible to everyone.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">4. Drive Action</h4>
                    <p className="text-slate-700">The ultimate goal is action. I provide specific, implementable recommendations that lead to measurable business outcomes.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Beyond Work</h2>
                <p className="text-slate-700 leading-relaxed">
                  When I'm not analyzing data, you'll find me reading about business strategy, exploring new data tools, or discussing the latest trends in analytics and AI. I'm passionate about continuous learning and staying at the forefront of the data analytics field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Values</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Accuracy</h3>
              <p className="text-slate-600">Precision in analysis and honesty in findings, even when results are unexpected.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600">Working closely with teams to understand needs and deliver solutions that matter.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Impact</h3>
              <p className="text-slate-600">Focusing on outcomes that drive real business growth and measurable results.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Learning</h3>
              <p className="text-slate-600">Continuously evolving skills and staying current with industry trends and tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 md:py-32 bg-white border-t border-slate-200">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing data projects, collaborating with like-minded professionals, or exploring new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://www.linkedin.com/in/farhan-ahmed-5511a3176" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/udhofarhanahmed" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="border-slate-300">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
