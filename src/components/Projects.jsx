import React from 'react';
import { Github, Star, CheckCircle2, Layers, Cpu, ShoppingBag, Scale, FolderLock, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const projectIcons = {
  vaultiq: FolderLock,
  buywise: ShoppingBag,
  legalease: Scale,
};

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.isFeatured);
  const regularProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-sage-600/25 border-t border-walnut-700/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-walnut-800 mt-3 max-w-2xl mx-auto font-medium">
            Practical software applications designed and developed to solve real-world workflows. View full source code, architecture, and documentation directly on GitHub.
          </p>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* =========================================================================
            FEATURED PROJECT: VaultIQ (Prominent Card Design)
           ========================================================================= */}
        {featuredProject && (
          <div className="mb-14">
            <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 glass-card-featured shadow-featured overflow-hidden border-2 border-amberGlow-500/60">
              
              {/* Highlight ribbon in Amber Glow */}
              <div className="absolute top-0 right-0">
                <div className="bg-amberGlow-500 text-white text-xs font-black px-6 py-2 rounded-bl-2xl shadow-sm border-l border-b border-amberGlow-600 flex items-center gap-1.5 uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>Featured Project</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side: Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amberGlow-500 text-white flex items-center justify-center shadow-md">
                      <FolderLock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amberGlow-600 uppercase tracking-widest block">
                        AI & Document Intelligence
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-walnut-800 mb-3">
                    {featuredProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-walnut-900 leading-relaxed mb-6 font-medium">
                    {featuredProject.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-walnut-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-amberGlow-600" />
                      <span>Key Architectural Features</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {featuredProject.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/95 border border-amberGlow-500/30 text-xs sm:text-sm text-walnut-950 font-medium shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amberGlow-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-8">
                    <span className="text-xs font-bold text-walnut-700 uppercase tracking-wider block mb-2">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-bold bg-sage-100 text-walnut-900 border border-amberGlow-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Action */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-walnut-700 hover:bg-walnut-800 border border-amberGlow-500/40 shadow-md hover:shadow-lg transition-all group"
                    >
                      <Github className="w-5 h-5 text-amberGlow-400 group-hover:scale-110 transition-transform" />
                      <span>View VaultIQ on GitHub</span>
                      <ArrowUpRight className="w-4 h-4 text-amberGlow-400" />
                    </a>
                  </div>
                </div>

                {/* Right side: Visual Showcase Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl p-6 bg-walnut-800 text-sage-100 shadow-card border border-amberGlow-500/40 relative">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-walnut-600/50">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amberGlow-500" />
                        <span className="w-3 h-3 rounded-full bg-sage-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[11px] font-mono text-amberGlow-400">VaultIQ Core UI</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-sage-100">
                      <div className="p-3 rounded-xl bg-walnut-900/80 border border-amberGlow-500/30">
                        <p className="text-amberGlow-400 font-semibold mb-1">▶ OCR & AI Engine Active</p>
                        <p className="text-[11px] text-sage-200 font-sans">
                          Ingesting scanned documents, running optical character extraction and semantic embedding generation.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-walnut-900/80 border border-amberGlow-500/30">
                        <p className="text-sage-100 font-semibold mb-1">▶ Smart Query & Summarization</p>
                        <p className="text-[11px] text-sage-200 font-sans">
                          Multi-page PDF synthesized into actionable bullet points in seconds.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-amberGlow-500/20 border border-amberGlow-500/40 text-amberGlow-300 flex items-center justify-between text-[11px] font-sans">
                        <span>Status: Architecture Ready</span>
                        <span className="font-bold text-amberGlow-300">v1.0</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TWO REGULAR PROJECTS: BuyWise & LegalEase
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project) => {
            const IconComp = projectIcons[project.id] || FolderLock;
            return (
              <div
                key={project.id}
                className="bg-white/90 rounded-3xl p-7 sm:p-8 border border-amberGlow-500/30 shadow-card hover:border-amberGlow-500/60 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sage-100 text-amberGlow-600 border border-amberGlow-500/25 flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-amberGlow-600" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amberGlow-600 uppercase tracking-wider block">
                          {project.badge}
                        </span>
                        <h3 className="text-2xl font-display font-extrabold text-walnut-950">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-walnut-800 mb-2">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-walnut-900 leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-walnut-950 uppercase tracking-wider mb-2.5">
                      Included Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-walnut-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amberGlow-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sage-50 text-walnut-800 border border-amberGlow-500/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions - Only GitHub */}
                <div className="pt-5 border-t border-walnut-600/15">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white bg-walnut-700 hover:bg-walnut-800 border border-amberGlow-500/30 transition-all shadow-sm hover:shadow-md group"
                  >
                    <Github className="w-4 h-4 text-amberGlow-400 group-hover:scale-110 transition-transform" />
                    <span>View {project.title} on GitHub</span>
                    <ArrowUpRight className="w-4 h-4 text-amberGlow-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project note for recruiters */}
        <div className="mt-12 text-center text-xs text-walnut-800 font-bold">
          <span>* All project repositories, codebases, and architectural details are maintained on GitHub.</span>
        </div>

      </div>
    </section>
  );
}
