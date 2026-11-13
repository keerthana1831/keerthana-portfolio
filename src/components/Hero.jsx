import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, GraduationCap, CheckCircle2, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-sage-500 bg-grid-subtle"
    >
      {/* Decorative ambient gradients: Amber Glow & Sage Green */}
      <div className="absolute top-12 right-0 -mr-20 w-96 h-96 bg-amberGlow-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -ml-20 w-80 h-80 bg-walnut-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-amberGlow-500/35 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amberGlow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amberGlow-600"></span>
              </span>
              <span className="text-xs font-bold text-walnut-900 tracking-wide uppercase">
                Aspiring Software Developer • Class of 2028
              </span>
            </div>

            {/* Main Heading in Walnut Brown with Amber Glow Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-walnut-950 tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="text-walnut-900 underline decoration-amberGlow-500 decoration-wavy decoration-2 underline-offset-8">{personalInfo.name}</span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-bold text-walnut-800 mb-5">
              <span>{personalInfo.subtitle}</span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-walnut-900/90 leading-relaxed max-w-2xl mb-8 font-medium">
              Passionate about software engineering, modern web technologies, and architecting practical digital solutions.
              Focused on mastering core computing principles, building real-world projects, and preparing for high-impact software development roles.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-walnut-700 hover:bg-walnut-800 active:bg-walnut-900 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-amberGlow-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/RESUME.pdf"
                download="Keerthana_S_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-amberGlow-500 hover:bg-amberGlow-400 active:bg-amberGlow-600 border border-amberGlow-600/30 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-walnut-900 bg-white/85 hover:bg-white border border-walnut-600/20 transition-colors text-sm shadow-sm"
                title="Preview resume online"
              >
                <FileText className="w-4 h-4 text-amberGlow-600" />
                <span>Quick View</span>
              </button>
            </div>

            {/* Social & Contact Snapshot Bar */}
            <div className="pt-6 border-t border-walnut-700/20 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/85 border border-walnut-600/20 text-walnut-800 hover:text-amberGlow-600 hover:border-amberGlow-500 hover:bg-white transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/85 border border-walnut-600/20 text-walnut-800 hover:text-amberGlow-600 hover:border-amberGlow-500 hover:bg-white transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/85 border border-walnut-600/20 text-walnut-800 hover:text-amberGlow-600 text-xs font-bold transition-all shadow-sm"
                  title="Copy institutional email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-700" />
                      <span className="text-green-800">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-amberGlow-600" />
                      <span>{personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-walnut-800">
                <MapPin className="w-3.5 h-3.5 text-amberGlow-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo & Identity Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amberGlow-400/25 via-sage-300/30 to-amberGlow-500/15 blur-xl opacity-80" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-6 sm:p-7 glass-card shadow-card border border-amberGlow-500/40">
                
                {/* Photo Presentation */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
                  {/* Rotating decorative accent ring in Amber Glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amberGlow-500/50 animate-[spin_40s_linear_infinite]" />
                  
                  {/* Glow ring in Amber Glow */}
                  <div className="absolute inset-2 rounded-full border-4 border-amberGlow-500 shadow-amber-glow opacity-90" />
                  
                  {/* Inner Photo Container */}
                  <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-b from-walnut-600 via-walnut-700 to-walnut-950 border-4 border-white flex flex-col items-center justify-center shadow-inner">
                    
                    {/* SVG Profile Avatar Artwork styled with Sage Green, Walnut Brown & Amber Glow */}
                   <img
  src="/keerthana.jpg.jpeg"
  alt="Keerthana Profile"
  className="w-full h-full object-cover"
/>
                  </div>

                  {/* Corner Tech Emblem */}
                  <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-2xl shadow-md border border-amberGlow-500/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-xl bg-walnut-700 text-amberGlow-400 flex items-center justify-center font-bold text-xs">
                      IT
                    </div>
                  </div>
                </div>

                {/* Profile Meta Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-white/80 border border-walnut-600/15 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amberGlow-600 uppercase tracking-wider">Education</p>
                      <p className="text-sm font-bold text-walnut-950">{personalInfo.college}</p>
                      <p className="text-xs text-walnut-800">{personalInfo.degree} ({personalInfo.duration})</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-2xl bg-white/80 border border-walnut-600/15">
                      <p className="text-[11px] font-bold text-walnut-700 uppercase">Focus</p>
                      <p className="text-xs font-bold text-walnut-950">Software Dev</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/80 border border-walnut-600/15">
                      <p className="text-[11px] font-bold text-walnut-700 uppercase">Academic Standing</p>
                      <p className="text-xs font-bold text-amberGlow-600">8.5* CGPA</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
