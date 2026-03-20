import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Skills", href: "/skills" },
    { label: "System", href: "/system" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-bold text-teal-600">📊</div>
              <span className="text-lg font-bold text-slate-900 hidden sm:inline">DataAnalyst</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white hidden sm:inline-flex">
                Get in Touch
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block text-slate-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
