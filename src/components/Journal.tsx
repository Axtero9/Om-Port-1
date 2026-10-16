import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X, BookOpen, Clock, Tag, Sparkles } from "lucide-react";

export interface JournalArticle {
  id: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const JOURNAL_ENTRIES: JournalArticle[] = [
  {
    id: "journal-1",
    title: "Sculpting Fabric in Latent Space: Directing AI Fashion Visuals with Runway Fluidity",
    tag: "AI Fashion Visuals",
    date: "Oct 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Directing high-fashion visuals through neural diffusion models requires treating prompt weights like physical garment drapery and lighting cues like studio fresnels.",
    content: [
      "In traditional fashion filmmaking, an editor relies on physical lighting, high-speed camera rigs, and garment movement captured on physical sets. When stepping into AI fashion visual direction, the role shifts into that of an architect of latent physics. You are not just prompting for an outfit; you are directing the tension of virtual silk, the refraction of synthetic sequins, and the cadence of a model's stride.",
      "The key breakthrough comes from combining ComfyUI latent interpolation with After Effects optical flow tracking. Rather than accepting random AI frame glitches, we guide frame interpolation through depth passes and directional motion vectors. This ensures silk folds drape naturally over the body as the camera tracks through the space.",
      "Color grading remains the ultimate anchor of reality. Running neural generations through DaVinci Resolve or Premiere Pro with custom 35mm Kodak film emulation LUTs, subtle halation, and organic grain bridges the gap between synthetic dreamscapes and tangible haute couture lookbooks.",
    ],
  },
  {
    id: "journal-2",
    title: "The Anatomy of Nostalgia: Cutting Cinematic Narrative for 'Khali Ghar' & 'Joh Ishq Hua'",
    tag: "Visual Storytelling",
    date: "Aug 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Cinematic pacing isn't about speed; it's about holding the frame until the silence resonates. Exploring desaturated cyan-amber palettes and Urdu poetic cadence.",
    content: [
      "When editing narrative pieces like 'Khali Ghar' (Empty House) or cutting visuals to the poetic cadences of artists like Talha Anjum, the greatest mistake an editor can make is rushing to the next cut. True visual storytelling is built in negative space—the seconds after a door closes or the lingering gaze across a deserted street.",
      "In 'Khali Ghar', every cut was calibrated to the rhythm of human breath and acoustic piano decay. By slightly delaying the cut after a spoken line, the viewer is forced to absorb the emotional weight of solitude. We paired this deliberate pacing with a desaturated cyan shadow and warm honey-amber highlight grade, recreating the visual texture of classic Urdu literature brought to the modern screen.",
      "Layering subtle room tone, wind hum, and resonant foley beneath the dialogue turns a flat video cut into an immersive physical space that stays in the viewer's memory long after the screen fades to black.",
    ],
  },
  {
    id: "journal-3",
    title: "Velocity & Impact: Editing Fast-Paced Music Videos That Hit Every 808",
    tag: "Music Videos",
    date: "Jun 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Cutting strictly on the downbeat is only the beginning. True music video editing breathes with syncopation, speed ramps, and resonant micro-beats.",
    content: [
      "If you cut on every kick and snare, your music video will look like a mechanical slideshow. Dynamic music video editing thrives on syncopation—cutting just ahead of an 808 drop to build anticipation, or holding through a vocal run before exploding into a flurry of match-cuts.",
      "In high-energy rap projects like 'Free Verse', speed ramping is the core engine of visual rhythm. Snapping from 50% slow-motion into 400% acceleration on a punchline propels the camera through the performer's gestures. Adding directional whip pans and subtle optical distorts at the transition point makes the camera feel like an active participant in the track.",
      "Furthermore, color harmony plays a vital role. Switching from cool desaturated verses to saturated, glowing highlights on the chorus gives the edit visual musicality without cluttering the screen.",
    ],
  },
  {
    id: "journal-4",
    title: "Hook Rate Engineering: Pacing Short-Form Visuals for Gym & Creator Brands",
    tag: "Content & Commercials",
    date: "May 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "The psychological architecture of the 1.5-second visual hook. How sound design, micro-cuts, and kinetic typography hold 80%+ audience retention curves.",
    content: [
      "In short-form content, the battle for attention is decided within the first 1.5 seconds. For fitness brands, gym creators, and apparel stores, passive intros guarantee high drop-off rates. Successful short-form editing uses pattern interrupts: high-velocity camera zooms, impactful sound effects, or unexpected match-cuts that instantly stop the thumb from scrolling.",
      "For gym content, rhythm is physical. We sync speed ramps to the concentric and eccentric phases of lifts—slowing down right as the barbell reaches maximum tension, then accelerating into the lockout with a resonant bass drop. This gives viewers a visceral, adrenaline-fueled sensation.",
      "For product specs like the 'Cap Commercial', precision framing and kinetic sound design turn ordinary merchandise into an aspirational lifestyle artifact. When every cut has a purpose and every frame is polished, short-form video stops being disposable and becomes brand equity.",
    ],
  },
];

export const Journal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="bg-bg py-20 md:py-28 border-t border-stroke/40">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#4E85BF]" />
              <span className="text-xs text-[#89AACC] uppercase tracking-[0.3em] font-medium font-mono">
                Director's Log • Insights & Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Recent <span className="font-display italic text-white">thoughts</span>
            </h2>

            <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
              Personal essays and field notes on video editing philosophy, generative AI fashion pipelines, Urdu poetic cinema, and short-form retention engineering.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted">
              4 Essays Published
            </span>
          </div>
        </motion.div>

        {/* 4 Journal entries displayed as horizontal interactive cards */}
        <div className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setActiveArticle(entry)}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 rounded-[28px] sm:rounded-full bg-surface/40 hover:bg-surface border border-stroke transition-all duration-300 hover:border-[#4E85BF]/60 hover:shadow-xl hover:shadow-black/20 cursor-pointer overflow-hidden"
            >
              {/* Left: Thumbnail & Title */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-full overflow-hidden flex-shrink-0 border border-stroke">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1 sm:hidden">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-bg border border-stroke text-[#89AACC]">
                      {entry.tag}
                    </span>
                    <span className="text-[11px] text-muted font-mono">{entry.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-normal text-text-primary group-hover:text-white transition-colors duration-200 truncate sm:whitespace-normal">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1 mt-0.5 hidden md:block font-light">
                    {entry.excerpt}
                  </p>
                </div>
              </div>

              {/* Right: Meta & Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-5 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stroke/40">
                <div className="hidden sm:flex items-center gap-4 text-xs text-muted font-mono">
                  <span className="px-3 py-1 rounded-full bg-bg border border-stroke text-[#89AACC]">
                    {entry.tag}
                  </span>
                  <span>{entry.readTime}</span>
                  <span>•</span>
                  <span>{entry.date}</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-[#4E85BF] transition-all duration-300 flex-shrink-0 ml-auto sm:ml-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-surface border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 text-text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-stroke bg-bg/80 flex items-center justify-center hover:border-white/30 text-muted hover:text-white transition-colors cursor-pointer"
              title="Close Essay"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-4">
              <span className="px-2.5 py-1 rounded-full bg-bg border border-stroke">
                {activeArticle.tag}
              </span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display italic text-white mb-6 leading-tight">
              {activeArticle.title}
            </h3>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-6 border border-stroke">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted/95 font-light leading-relaxed">
              {activeArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stroke flex items-center justify-between">
              <span className="text-xs font-mono text-muted">
                Written by Om — Video Editor & Visual Creator
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest bg-bg border border-stroke text-muted hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Journal;
