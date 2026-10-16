import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, Play, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export interface ExplorationItem {
  id: string;
  title: string;
  medium: string;
  video: string;
  rotation: string;
  description: string;
}

export const EXPLORATION_ITEMS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "AI Kinetic Motion",
    medium: "AI Visual & Motion • Neural Synthesis",
    video: "/media/visual-motion-1.mp4",
    rotation: "-rotate-2",
    description: "Experimental kinetic motion combining generative AI frame interpolation with optical distortion and particle fields.",
  },
  {
    id: "exp-2",
    title: "Joh Ishq Hua",
    medium: "Visual Storytelling • Cinematic Cut",
    video: "/media/storytelling-1.mp4",
    rotation: "rotate-3",
    description: "Moody cinematic visual story with emotive pacing, warm 35mm film emulation, and rhythmic dialogue cadence.",
  },
  {
    id: "exp-3",
    title: "AI Haute Couture Runway",
    medium: "AI Fashion Visuals • Generative Spec",
    video: "/media/fashion-ai-1.mp4",
    rotation: "-rotate-1",
    description: "Avant-garde fashion editorial rendered through generative AI tools and fluid motion tracking in After Effects.",
  },
  {
    id: "exp-4",
    title: "Cap Commercial Spec",
    medium: "AI Product Commercial • High Energy",
    video: "/media/commercial-1.mp4",
    rotation: "rotate-2",
    description: "Fast-paced commercial video cut showcasing product details through snap zooms, match cuts, and punchy sound design.",
  },
  {
    id: "exp-5",
    title: "Khali Ghar — Mood Film",
    medium: "Visual Storytelling • Atmospheric Narrative",
    video: "/media/storytelling-2.mp4",
    rotation: "-rotate-3",
    description: "Evocative visual narrative exploring solitude, memory, and cinematic color grading in Premiere Pro.",
  },
  {
    id: "exp-6",
    title: "Synthetic Motion Study",
    medium: "AI Visual & Motion • Fluid Simulation",
    video: "/media/visual-motion-2.mp4",
    rotation: "rotate-1",
    description: "Abstract generative fluid simulation composited with glowing vector shapes and kinetic pacing.",
  },
];

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<ExplorationItem | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current && rightColRef.current && containerRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 60 },
          {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          rightColRef.current,
          { y: 140 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative min-h-[180vh] md:min-h-[220vh] bg-bg py-24 overflow-hidden border-t border-stroke/30"
    >
      {/* Pinned / Sticky Center Card */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10">
        <div className="max-w-xl mx-auto backdrop-blur-md bg-bg/60 p-6 sm:p-10 rounded-3xl border border-stroke/40 shadow-2xl pointer-events-auto">
          <div className="text-xs text-muted uppercase tracking-[0.3em] mb-4 font-medium">
            EXPLORATIONS
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl text-text-primary font-normal tracking-tight mb-4">
            Visual <span className="font-display italic">playground</span>
          </h2>

          <p className="text-sm md:text-base text-muted mb-8 leading-relaxed">
            Unfiltered experiments in video pacing, AI-generated concept art, kinetic typography, and chromatic color grades.
          </p>

          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-text-primary transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-0 rounded-full border border-stroke bg-surface group-hover:bg-bg transition-colors duration-300 -z-0" />
            <span className="relative z-10 flex items-center gap-2">
              View Visual Archive
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Parallax Columns with Live Video Cards */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 -mt-[75vh] md:-mt-[70vh]">
        <div className="grid grid-cols-2 gap-6 sm:gap-12 md:gap-32 lg:gap-44">
          {/* Column 1 */}
          <div ref={leftColRef} className="flex flex-col gap-12 sm:gap-20">
            {EXPLORATION_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative aspect-square max-w-[340px] w-full mx-auto rounded-3xl overflow-hidden border border-stroke/80 bg-surface shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:border-white/30 ${item.rotation} hover:rotate-0`}
              >
                {/* Looping Ambient Video */}
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Top Badge: Play Indicator */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Play className="w-2.5 h-2.5 fill-white text-white" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white">Reel</span>
                </div>

                {/* Bottom Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-mono">
                    {item.medium}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted font-normal group-hover:text-white transition-colors">
                      Watch &gt;
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={rightColRef} className="flex flex-col gap-12 sm:gap-20 pt-16 sm:pt-24">
            {EXPLORATION_ITEMS.slice(3, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative aspect-square max-w-[340px] w-full mx-auto rounded-3xl overflow-hidden border border-stroke/80 bg-surface shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:border-white/30 ${item.rotation} hover:rotate-0`}
              >
                {/* Looping Ambient Video */}
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Top Badge: Play Indicator */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Play className="w-2.5 h-2.5 fill-white text-white" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white">Reel</span>
                </div>

                {/* Bottom Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-mono">
                    {item.medium}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted font-normal group-hover:text-white transition-colors">
                      Watch &gt;
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Lightbox Player Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Top Controls */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-10 h-10 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors cursor-pointer"
                  title="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High Definition Video Player */}
              <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
                <video
                  key={activeItem.id}
                  src={activeItem.video}
                  autoPlay
                  controls
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="p-6 sm:p-8 bg-surface border-t border-stroke flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#89AACC] uppercase tracking-wider block mb-1">
                    {activeItem.medium}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-text-primary">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-2 max-w-xl leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0 self-start sm:self-center">
                  <span className="text-xs font-mono text-muted/60">
                    Archive Reel #{activeItem.id}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Explorations;
