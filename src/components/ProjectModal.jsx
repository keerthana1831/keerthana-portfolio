import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Star, Terminal } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-sage-50 text-walnut-900 rounded-3xl shadow-2xl border border-amberGlow-500/40 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-walnut-900 text-white p-6 flex items-start justify-between border-b border-amberGlow-500/30">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {project.isFeatured && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amberGlow-500 text-white uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </span>
              )}
              <span className="text-xs font-bold text-amberGlow-400 uppercase tracking-wider">
                Project Deep-Dive
              </span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-sage-200 mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-sage-200 hover:text-white hover:bg-walnut-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-sm text-walnut-900">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-amberGlow-700 uppercase tracking-wider mb-2">
              Application Overview
            </h4>
            <p className="text-sm text-walnut-900 leading-relaxed bg-white p-4 rounded-2xl border border-amberGlow-500/25 font-medium">
              {project.description}
            </p>
          </div>

          {/* Detailed Features */}
          <div>
            <h4 className="text-xs font-bold text-amberGlow-700 uppercase tracking-wider mb-3">
              Included Functional Features
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-walnut-600/15 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-amberGlow-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-walnut-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Architecture Stack */}
          <div>
            <h4 className="text-xs font-bold text-amberGlow-700 uppercase tracking-wider mb-2.5">
              Architectural Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-sage-100 text-walnut-900 border border-amberGlow-500/30 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder Notification Notice */}
          <div className="p-4 rounded-2xl bg-amberGlow-50/80 border border-amberGlow-500/35 text-xs text-walnut-900 flex items-start gap-3 font-medium">
            <Terminal className="w-4 h-4 text-amberGlow-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amberGlow-800 block">Developer Note on Repository & Live Demo:</span>
              <p className="text-walnut-800 mt-0.5">
                In adherence to requirements, live demo and repository links currently use configured placeholders (`{project.githubUrl}`). As production endpoints are spun up, they can be swapped instantly in `src/data/portfolioData.js`.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-sage-100 px-6 py-4 border-t border-walnut-600/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-walnut-700 hover:bg-walnut-800 text-white font-bold text-xs border border-amberGlow-500/30 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4 text-amberGlow-400" />
              <span>View GitHub</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amberGlow-500 hover:bg-amberGlow-400 text-white font-bold text-xs border border-amberGlow-600/30 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo Endpoint</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-walnut-700 hover:bg-sage-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
