import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-walnut-900 text-sage-100 pt-16 pb-12 border-t-2 border-amberGlow-500/30 relative overflow-hidden">
      {/* Background ambient shape */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sage-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-walnut-800">
          
          {/* Brand info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-walnut-800 text-amberGlow-400 flex items-center justify-center font-display font-extrabold text-lg border border-amberGlow-500/40">
                KS
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-bold text-amberGlow-400 uppercase tracking-widest">
                  Aspiring Software Developer
                </p>
              </div>
            </div>

            <p className="text-sm text-sage-200 max-w-md mt-2 leading-relaxed">
              B.Tech Information Technology student at Sri Shakthi Institute of Engineering and Technology.
              Committed to engineering clean, reliable software solutions and continuously mastering modern web & computing stacks.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-walnut-800 border border-amberGlow-500/25 hover:border-amberGlow-500 hover:text-white text-amberGlow-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-walnut-800 border border-amberGlow-500/25 hover:border-amberGlow-500 hover:text-white text-amberGlow-400 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-walnut-800 border border-amberGlow-500/25 hover:border-amberGlow-500 hover:text-white text-amberGlow-400 flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-amberGlow-400 uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {footerNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sage-200 hover:text-amberGlow-300 hover:translate-x-0.5 transition-all py-1 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Academic meta */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs text-sage-300 block mb-1">Affiliation</span>
              <span className="text-xs font-semibold text-sage-100 block text-left md:text-right">
                Sri Shakthi Institute of Engineering and Technology
              </span>
              <span className="text-[11px] text-amberGlow-400 font-mono block text-left md:text-right mt-1 font-bold">
                2024 – 2028
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-walnut-800 border border-amberGlow-500/30 hover:border-amberGlow-500 text-amberGlow-400 hover:text-white text-xs font-semibold transition-all"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-300">
          <p>© 2025 Keerthana S. All rights reserved.</p>
          <p className="flex items-center gap-1 text-sage-300">
            <span>Designed with</span>
            <span className="text-amberGlow-400 font-bold">Sage Green, Walnut Brown & Amber Glow</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
