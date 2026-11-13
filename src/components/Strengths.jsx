import React from 'react';
import { Lightbulb, Users, Zap, Clock, Shuffle, Compass } from 'lucide-react';
import { strengthsData } from '../data/portfolioData';

const iconMap = {
  Lightbulb,
  Users,
  Zap,
  Clock,
  Shuffle,
  Compass,
};

export default function Strengths() {
  return (
    <section className="py-14 bg-sage-600/25 border-y border-walnut-700/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-walnut-800 uppercase tracking-widest block mb-1">
            Work Ethic & Professional Attributes
          </span>
          <h3 className="text-2xl font-display font-extrabold text-walnut-950">
            Key Strengths
          </h3>
          <p className="text-sm text-walnut-800 mt-1">
            Core interpersonal and cognitive competencies brought to team workflows
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {strengthsData.map((strength) => {
            const IconComponent = iconMap[strength.icon] || Lightbulb;
            return (
              <div
                key={strength.name}
                className="group p-5 rounded-2xl bg-white/90 border border-amberGlow-500/25 hover:border-amberGlow-500 hover:shadow-card transition-all duration-200 flex flex-col items-center text-center hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-sage-100 group-hover:bg-amberGlow-500 text-amberGlow-600 group-hover:text-white flex items-center justify-center transition-colors mb-3 shadow-sm border border-amberGlow-500/30">
                  <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-bold text-walnut-950 mb-1 leading-snug">
                  {strength.name}
                </h4>
                <p className="text-[11px] text-walnut-800 leading-normal line-clamp-2">
                  {strength.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
