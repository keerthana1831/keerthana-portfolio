import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-sage-500 border-t border-walnut-700/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Professional Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            Certifications
          </h2>
          <p className="text-base text-walnut-800 mt-3 max-w-xl mx-auto font-medium">
            Structured course credentials verifying proficiency across programming, cloud technologies, and full-stack development.
          </p>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Dedicated Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-3xl p-7 border border-amberGlow-500/30 shadow-card hover:border-amberGlow-500/60 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                {/* Header with Issuer badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amberGlow-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sage-100 text-walnut-800 border border-amberGlow-500/30">
                    {cert.category}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-xl font-display font-bold text-walnut-950 mb-1 group-hover:text-amberGlow-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-sm font-bold text-walnut-800 mb-4">
                  <span>Issued by</span>
                  <span className="text-walnut-950 font-bold underline decoration-amberGlow-500 decoration-2">
                    {cert.issuer}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-walnut-700 leading-relaxed mb-6 font-medium">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Credential Verification Status */}
              <div className="pt-4 border-t border-walnut-600/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amberGlow-700">
                  <ShieldCheck className="w-4 h-4 text-amberGlow-600" />
                  <span>{cert.credentialStatus}</span>
                </div>
                <span className="text-[11px] font-bold text-walnut-600">Official Curriculum</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note indicating strict adherence */}
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-walnut-800 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-amberGlow-600" />
            Authenticated coursework from Hazhtech Institution, NPTEL, and Udemy.
          </span>
        </div>

      </div>
    </section>
  );
}
