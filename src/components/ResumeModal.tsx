import React from "react";
import { X, Download, Briefcase, Award, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 text-text-primary"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-stroke bg-bg/80 flex items-center justify-center hover:border-white/30 text-muted hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stroke mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#89AACC]">
              Visual Creator Profile
            </span>
            <h2 className="text-3xl sm:text-5xl font-display italic text-text-primary mt-1">
              Om
            </h2>
            <p className="text-sm text-muted mt-1 font-light">
              Video Editor &amp; Visual Creator • 1 Year Hands-on Craft
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:om.visualcreator@gmail.com?subject=Project Inquiry for Om"
              className="inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-4 py-2 text-xs uppercase tracking-wider text-muted hover:text-white hover:border-white/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-8 mb-10">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#89AACC]">
            <Briefcase className="w-4 h-4" />
            <span>Hands-on Experience</span>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-stroke pl-4 hover:border-[#89AACC] transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-1">
                <span>Video Editor &amp; Visual Creator</span>
                <span>2025 — Present</span>
              </div>
              <h4 className="text-lg font-medium text-text-primary">Freelance Visual Projects</h4>
              <p className="text-xs text-muted/90 mt-1 font-light leading-relaxed">
                Editing music videos, brand narratives, and digital content. Combining creative storytelling with AI-powered workflows to produce polished, modern, and engaging visuals.
              </p>
            </div>

            <div className="border-l-2 border-stroke pl-4 hover:border-[#89AACC] transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-1">
                <span>Music Video Post-Production &amp; Colorist</span>
                <span>2025</span>
              </div>
              <h4 className="text-lg font-medium text-text-primary">Independent Music Releases</h4>
              <p className="text-xs text-muted/90 mt-1 font-light leading-relaxed">
                Pacing cuts, speed ramping, sound sync, and crafting custom color grades in Adobe Premiere Pro and After Effects to capture the intended mood and energy.
              </p>
            </div>

            <div className="border-l-2 border-stroke pl-4 hover:border-[#89AACC] transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-1">
                <span>Digital Design &amp; AI Experimentation</span>
                <span>2024 — 2025</span>
              </div>
              <h4 className="text-lg font-medium text-text-primary">Creative Visual Studies</h4>
              <p className="text-xs text-muted/90 mt-1 font-light leading-relaxed">
                Developing thumbnails, title sequences, motion typography, and generative AI concept art in Photoshop and After Effects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-4">
            <Code2 className="w-4 h-4" />
            <span>Tools &amp; Creative Disciplines</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Adobe Premiere Pro",
              "Adobe After Effects",
              "Adobe Photoshop",
              "AI Visual Tools & Workflows",
              "Music Video Editing",
              "Visual Storytelling",
              "Cinematic Color Grading",
              "Sound Design & Audio Sync",
              "Pacing & Rhythm Cutting",
              "Motion Graphics & Titles",
              "Creative Freelance Execution",
            ].map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-3 py-1.5 rounded-full text-xs font-mono bg-bg border border-stroke text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Creative Philosophy */}
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-4">
            <Award className="w-4 h-4" />
            <span>Creative Mindset</span>
          </div>
          <div className="p-4 rounded-2xl bg-bg border border-stroke text-xs text-muted leading-relaxed font-light">
            &ldquo;I enjoy turning ideas into visually compelling stories that feel modern, polished, and purposeful. I’m always looking to work on new projects, explore new creative techniques, and continuously learn and improve my skills as a visual creator.&rdquo;
          </div>
        </div>

        {/* Close Button at bottom */}
        <div className="mt-10 pt-6 border-t border-stroke flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest border border-stroke text-muted hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
