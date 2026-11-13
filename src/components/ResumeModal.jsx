import React from 'react';
import { X, Download, Printer, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo, educationData, certificationsData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-sage-50 text-walnut-900 rounded-3xl shadow-2xl border border-amberGlow-500/40 overflow-hidden my-6">
        
        {/* Modal Top Action Bar */}
        <div className="bg-walnut-900 text-white px-6 py-4 flex items-center justify-between border-b border-amberGlow-500/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amberGlow-400" />
            <h3 className="font-display font-bold text-sm sm:text-base text-white">
              Curriculum Vitae Preview — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-walnut-800 hover:bg-walnut-700 text-xs font-semibold text-amberGlow-400 hover:text-white border border-amberGlow-500/30 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Keerthana_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amberGlow-500 hover:bg-amberGlow-400 text-xs font-bold text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-sage-200 hover:text-white hover:bg-walnut-800 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (Printable Layout) */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-sage-50 text-walnut-900 font-sans print:p-0 print:max-h-none print:bg-white print:text-gray-900">
          
          {/* Header */}
          <div className="border-b-2 border-amberGlow-500/40 pb-6 mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-black text-walnut-950 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold text-amberGlow-700 mt-0.5">
                  {personalInfo.subtitle} • {personalInfo.careerInterest}
                </p>
                <p className="text-xs text-walnut-700 mt-1 font-medium">
                  {personalInfo.college} (Batch {personalInfo.duration})
                </p>
              </div>

              <div className="text-xs text-walnut-800 space-y-1 sm:text-right font-medium">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amberGlow-600" />
                  <span>{personalInfo.email}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amberGlow-600" />
                  <span>{personalInfo.personalEmail}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amberGlow-600" />
                  <span>{personalInfo.phoneFormatted}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-amberGlow-600" />
                  <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="text-walnut-900 underline font-bold">
                    LinkedIn Profile
                  </a>
                  <span>•</span>
                  <Github className="w-3.5 h-3.5 text-amberGlow-600" />
                  <a href={personalInfo.gitHub} target="_blank" rel="noreferrer" className="text-walnut-900 underline font-bold">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-amberGlow-700 uppercase tracking-widest border-b border-amberGlow-500/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-walnut-800 leading-relaxed font-medium">
              {personalInfo.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-amberGlow-700 uppercase tracking-widest border-b border-amberGlow-500/20 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-walnut-950">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="text-amberGlow-600 font-extrabold">{edu.score}</span>
                  </div>
                  <div className="text-walnut-600 text-xs flex justify-between mt-0.5">
                    <span>Duration: {edu.duration}</span>
                    <span>{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-amberGlow-700 uppercase tracking-widest border-b border-amberGlow-500/20 pb-1 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-amberGlow-500/25">
                  <span className="font-bold text-amberGlow-700 block mb-1">{cat.category}:</span>
                  <span className="text-walnut-800 font-medium">
                    {cat.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-amberGlow-700 uppercase tracking-widest border-b border-amberGlow-500/20 pb-1 mb-3">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-walnut-950">
                    <span className="text-walnut-950 font-extrabold text-sm">{proj.title} — {proj.tagline}</span>
                    <span className="text-xs font-bold text-amberGlow-600">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-walnut-800 mt-1 mb-1.5 font-medium">{proj.description}</p>
                  <ul className="list-disc list-inside text-xs text-walnut-700 space-y-0.5 pl-1">
                    {proj.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-amberGlow-700 uppercase tracking-widest border-b border-amberGlow-500/20 pb-1 mb-3">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-amberGlow-500/25">
                  <p className="font-bold text-walnut-950">{cert.title}</p>
                  <p className="text-walnut-700">{cert.issuer}</p>
                  <p className="text-[10px] text-amberGlow-600 font-bold mt-1">✓ {cert.credentialStatus}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-sage-100 px-6 py-4 border-t border-walnut-600/15 flex flex-wrap items-center justify-between gap-3 text-xs text-walnut-800 font-bold">
          <span>Prepared for IT / Software Development opportunities</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-walnut-800 text-white hover:bg-walnut-700 font-semibold transition-colors ml-auto shadow-sm"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
