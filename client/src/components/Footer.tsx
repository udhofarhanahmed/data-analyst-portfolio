import { Mail, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">📊</div>
              <span className="text-lg font-bold text-white">DataAnalyst</span>
            </div>
            <p className="text-sm text-slate-400">
              Transforming data into actionable insights that drive business growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/skills" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:dataanalystfarhan@gmail.com" 
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://pk.linkedin.com/in/farhan-ahmed-5511a3176" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/udhofarhanahmed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://pk.linkedin.com/in/farhan-ahmed-5511a3176"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/udhofarhanahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:dataanalystfarhan@gmail.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-slate-400 flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-teal-500" /> by Farhan Ahmed
            </p>
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Data Analyst Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
