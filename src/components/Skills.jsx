import React from 'react';
import { Code2, Globe, Database, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Code2,
  Globe,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-sage-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base text-walnut-800 mt-3 max-w-xl mx-auto font-medium">
            Practical programming languages, web engineering stacks, databases, and modern developer utilities.
          </p>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Clean Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillsData.map((category) => {
            const CategoryIcon = categoryIcons[category.icon] || Code2;
            return (
              <div
                key={category.category}
                className="bg-white/90 rounded-3xl p-6 sm:p-7 border border-amberGlow-500/30 shadow-card hover:border-amberGlow-500/60 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-walnut-600/15">
                    <div className="w-11 h-11 rounded-2xl bg-amberGlow-500 text-white flex items-center justify-center shadow-sm">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-walnut-950 leading-tight">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-bold text-walnut-700">
                        {category.items.length} key proficiencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-sage-50/80 border border-walnut-600/15 hover:border-amberGlow-500/40 transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-walnut-950 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amberGlow-500" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sage-100 text-walnut-800 border border-amberGlow-500/30">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-walnut-700 pl-3.5">
                          {skill.experience}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-walnut-600/15 flex items-center gap-1.5 text-[11px] text-walnut-700 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-amberGlow-600" />
                  <span>Applied in coursework & projects</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
