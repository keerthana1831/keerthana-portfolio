import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-sage-600/25 border-t border-walnut-700/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            Education Timeline
          </h2>
          <p className="text-base text-walnut-800 mt-3 max-w-xl mx-auto font-medium">
            Formal technical education and foundational academic qualifications.
          </p>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Spine in Amber Glow */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amberGlow-500 via-amberGlow-400 to-walnut-700" />

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const isCurrent = index === 0;
              return (
                <div key={index} className="relative sm:pl-20">
                  
                  {/* Timeline Node Badge */}
                  <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-white border-4 border-amberGlow-500 shadow-md items-center justify-center z-10">
                    <span className={`w-2.5 h-2.5 rounded-full ${isCurrent ? 'bg-amberGlow-500 animate-pulse' : 'bg-walnut-600'}`} />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`rounded-3xl p-7 sm:p-8 transition-all duration-300 backdrop-blur-md ${
                      isCurrent
                        ? 'bg-white border-2 border-amberGlow-500/60 shadow-card'
                        : 'bg-white/90 border border-amberGlow-500/30 shadow-soft hover:shadow-card hover:border-amberGlow-500/50'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        {isCurrent && (
                          <span className="inline-block px-3 py-1 rounded-full bg-amberGlow-500 text-white text-xs font-bold uppercase tracking-wider mb-2">
                            Current Degree Program
                          </span>
                        )}
                        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-walnut-950">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-walnut-800 mt-1">
                          <School className="w-4 h-4 text-amberGlow-600" />
                          <span>{item.institution}</span>
                        </div>
                      </div>

                      {/* Score Highlight Box */}
                      <div className="px-4 py-2.5 rounded-2xl bg-sage-50 border border-amberGlow-500/40 text-right shadow-sm">
                        <span className="text-[11px] font-bold text-walnut-700 uppercase block">
                          {item.scoreLabel}
                        </span>
                        <span className="text-lg sm:text-xl font-black text-amberGlow-600">
                          {item.score}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-walnut-700 mb-4">
                      <Calendar className="w-4 h-4 text-amberGlow-600" />
                      <span>{item.duration}</span>
                      <span>•</span>
                      <span>{item.status}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-walnut-800 leading-relaxed mb-4 font-medium">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-3 border-t border-walnut-600/15 flex flex-wrap gap-2">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-lg bg-sage-100 text-walnut-800 border border-amberGlow-500/30 font-bold"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
