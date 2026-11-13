import React from 'react';
import { BookOpen, Target, Sparkles, Building2, Calendar, Mail, Check } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-sage-500 border-t border-walnut-700/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Statement & Core Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white/90 p-8 sm:p-10 rounded-3xl border border-amberGlow-500/30 shadow-card h-full flex flex-col justify-between backdrop-blur-md">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-walnut-950 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amberGlow-500 ring-4 ring-amberGlow-500/30" />
                  Engineering Practical Solutions with Purpose
                </h3>

                {/* Primary quoted paragraph in Walnut Brown */}
                <blockquote className="relative p-5 rounded-2xl bg-sage-50 border-l-4 border-amberGlow-500 mb-8 text-walnut-900 text-base sm:text-lg font-medium leading-relaxed italic">
                  "{personalInfo.aboutBio}"
                </blockquote>

                {/* Highlights breakdown */}
                <div className="space-y-4">
                  {aboutHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white border border-walnut-600/15 hover:border-amberGlow-500/60 transition-colors shadow-sm flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-sage-100 text-amberGlow-600 flex items-center justify-center shrink-0 mt-0.5 border border-amberGlow-500/20">
                        <Check className="w-4 h-4 text-amberGlow-600 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-walnut-950">{highlight.title}</h4>
                        <p className="text-xs sm:text-sm text-walnut-800 mt-0.5 leading-relaxed font-normal">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="mt-8 pt-6 border-t border-walnut-600/15 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-walnut-800">
                <span>Looking for: Internships & Software Engineering Roles</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-amberGlow-500 text-white font-bold shadow-sm">
                  Ready to Contribute
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Facts & Academic Anchor */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Facts Card */}
            <div className="bg-white/90 p-7 rounded-3xl border border-amberGlow-500/30 shadow-card backdrop-blur-md">
              <h3 className="text-lg font-display font-bold text-walnut-950 mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-amberGlow-600" />
                <span>Academic & Career Snapshot</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 pb-3.5 border-b border-walnut-600/15">
                  <Building2 className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-walnut-600 block uppercase font-bold">Institution</span>
                    <span className="font-bold text-walnut-950">{personalInfo.college}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-walnut-600/15">
                  <BookOpen className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-walnut-600 block uppercase font-bold">Degree & Branch</span>
                    <span className="font-bold text-walnut-950">{personalInfo.degree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-walnut-600/15">
                  <Calendar className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-walnut-600 block uppercase font-bold">Academic Duration</span>
                    <span className="font-bold text-walnut-950">{personalInfo.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-walnut-600/15">
                  <Target className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-walnut-600 block uppercase font-bold">Career Interest</span>
                    <span className="font-bold text-walnut-950">{personalInfo.careerInterest}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-amberGlow-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-xs text-walnut-600 block uppercase font-bold">Primary Contact</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-bold text-walnut-950 hover:text-amberGlow-600 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational Recruiter Callout */}
            <div className="bg-walnut-700 p-7 rounded-3xl text-white shadow-card border border-amberGlow-500/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amberGlow-500/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-amberGlow-400 uppercase tracking-wider block mb-2">
                  Recruiter Note
                </span>
                <p className="text-sm text-sage-100 leading-relaxed font-normal">
                  "As a B.Tech IT student at Sri Shakthi Institute of Engineering and Technology, I bring an active appetite for full-stack web applications, algorithmic reasoning, and collaborating on high-standard software products."
                </p>
                <div className="mt-4 pt-4 border-t border-walnut-600/50 flex items-center justify-between text-xs text-sage-200">
                  <span>CGPA: 8.5*</span>
                  <span className="text-amberGlow-400 font-bold">2024 – 2028</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
