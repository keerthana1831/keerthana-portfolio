import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.personalEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.subject,
          _replyto: formData.email,
        }),
      });
      const result = await response.json();

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'The message could not be submitted. Please try again.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitError(error.message || 'Could not connect to the email service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-sage-500 border-t border-walnut-700/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-amberGlow-500/35 text-walnut-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amberGlow-600" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-walnut-950 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-walnut-800 mt-3 max-w-xl mx-auto font-medium">
            Have a project, internship, or collaborative opportunity in mind? Feel free to reach out directly through the form or via direct contact channels.
          </p>
          <div className="w-16 h-1 bg-amberGlow-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/90 p-7 sm:p-8 rounded-3xl border border-amberGlow-500/30 shadow-card backdrop-blur-md">
              <h3 className="text-xl font-display font-bold text-walnut-950 mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-walnut-800 mb-6 font-medium">
                Open to discussions regarding software engineering internships, technical projects, and technology stacks.
              </p>

              <div className="space-y-4">
                {/* College Email */}
                <div className="p-4 rounded-2xl bg-sage-50 border border-walnut-600/15 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amberGlow-500 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-walnut-700 uppercase block">College Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-bold text-walnut-950 hover:text-amberGlow-600 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, 'inst-email')}
                    className="p-2 rounded-lg hover:bg-sage-100 text-walnut-700 hover:text-amberGlow-600 transition-colors"
                    title="Copy institutional email"
                  >
                    {copiedKey === 'inst-email' ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Personal Email */}
                <div className="p-4 rounded-2xl bg-sage-50 border border-walnut-600/15 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amberGlow-500 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-walnut-700 uppercase block">Personal Email</span>
                      <a
                        href={`mailto:${personalInfo.personalEmail}`}
                        className="text-xs sm:text-sm font-bold text-walnut-950 hover:text-amberGlow-600 truncate block transition-colors"
                      >
                        {personalInfo.personalEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.personalEmail, 'pers-email')}
                    className="p-2 rounded-lg hover:bg-sage-100 text-walnut-700 hover:text-amberGlow-600 transition-colors"
                    title="Copy personal email"
                  >
                    {copiedKey === 'pers-email' ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-sage-50 border border-walnut-600/15 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amberGlow-500 text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-walnut-700 uppercase block">Phone / Mobile</span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-bold text-walnut-950 hover:text-amberGlow-600 truncate block transition-colors"
                      >
                        {personalInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg hover:bg-sage-100 text-walnut-700 hover:text-amberGlow-600 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-walnut-600/15">
                <span className="text-xs font-bold text-walnut-700 uppercase tracking-wider block mb-3">
                  Online Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amberGlow-500 hover:bg-amberGlow-400 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalInfo.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-walnut-700 hover:bg-walnut-800 text-white font-bold text-xs border border-amberGlow-500/30 transition-colors shadow-sm"
                  >
                    <Github className="w-4 h-4 text-amberGlow-400" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-5 rounded-3xl bg-walnut-700 text-white flex items-center justify-between border border-amberGlow-500/35 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amberGlow-400 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-amberGlow-400 uppercase tracking-wider">Opportunity Status</p>
                  <p className="text-xs text-sage-100">Open for Summer 2025/2026 Internships</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-lg bg-walnut-800 text-amberGlow-400 border border-amberGlow-500/40">
                Coimbatore / Remote
              </span>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 p-8 sm:p-10 rounded-3xl border border-amberGlow-500/30 shadow-card backdrop-blur-md">
              
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-walnut-950 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-walnut-700 font-medium">
                  Fill in the details below to dispatch an inquiry directly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-7 rounded-2xl bg-sage-50 border-2 border-amberGlow-500/40 animate-fadeIn text-center">
                  <div className="w-14 h-14 rounded-full bg-amberGlow-500 text-white mx-auto flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-extrabold text-walnut-950 mb-2">
                    Request Accepted
                  </h4>
                  <p className="text-sm text-walnut-800 max-w-md mx-auto mb-5 leading-relaxed font-medium">
                    If this is the first submission, FormSubmit will email an activation link to{' '}
                    <span className="font-bold text-walnut-950">{personalInfo.personalEmail}</span>. Click that link to activate delivery. If this inquiry is not delivered, submit it again after activation.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmitError('');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-walnut-800 bg-white border border-walnut-600/30 hover:bg-sage-100 transition-colors"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {submitError && (
                    <p role="alert" className="p-3 rounded-xl bg-red-50 border border-red-300 text-sm text-red-700 font-medium">
                      {submitError}
                    </p>
                  )}
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-walnut-900 uppercase tracking-wider mb-2">
                      Your Name <span className="text-amberGlow-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-walnut-950 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-amberGlow-500 transition-all font-medium ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-walnut-600/25 hover:border-amberGlow-500/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-walnut-900 uppercase tracking-wider mb-2">
                      Your Email Address <span className="text-amberGlow-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-walnut-950 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-amberGlow-500 transition-all font-medium ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-walnut-600/25 hover:border-amberGlow-500/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-walnut-900 uppercase tracking-wider mb-2">
                      Subject <span className="text-amberGlow-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineering Internship Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-walnut-950 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-amberGlow-500 transition-all font-medium ${
                        errors.subject ? 'border-red-500 bg-red-50/20' : 'border-walnut-600/25 hover:border-amberGlow-500/50'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-walnut-900 uppercase tracking-wider mb-2">
                      Message <span className="text-amberGlow-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project, role, or questions you have..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-walnut-950 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-amberGlow-500 transition-all resize-y font-medium ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-walnut-600/25 hover:border-amberGlow-500/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button in Amber Glow */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-white bg-amberGlow-500 hover:bg-amberGlow-400 active:bg-amberGlow-600 border border-amberGlow-600/30 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-walnut-700 font-bold pt-1">
                    Your details are only used to reply to your inquiry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
