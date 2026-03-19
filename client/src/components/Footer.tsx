import { Link } from "wouter";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Skills", href: "/skills" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: "mailto:hello@example.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

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

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <a className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                          {link.label}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
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
              Made with <Heart className="h-4 w-4 text-teal-500" /> by Farhana Ahmed
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
