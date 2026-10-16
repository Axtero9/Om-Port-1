import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
  onSeeWorks?: () => void;
  onReachOut?: () => void;
}

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const ROLES = ["Video Editor", "Visual Creator", "Motion Designer", "Storyteller"];

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSeeWorks, onReachOut }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState<number>(0);

  // Initialize HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Cycle roles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSeeWorks = () => {
    if (onSeeWorks) {
      onSeeWorks();
    } else if (onNavigate) {
      onNavigate("work");
    } else {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReachOut = () => {
    if (onReachOut) {
      onReachOut();
    } else if (onNavigate) {
      onNavigate("contact");
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20 pb-16"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
        {/* Dark overlay: bg-black/30 */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8 font-medium">
          VISUAL STORYTELLING &amp; VIDEO CREATOR
        </div>

        {/* Name */}
        <h1 className="name-reveal text-7xl sm:text-8xl md:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 select-none">
          Om
        </h1>

        {/* Role line */}
        <p className="blur-in text-lg md:text-2xl text-text-primary/90 mb-4 font-light">
          A passionate{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block font-normal text-2xl md:text-3xl text-white"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          crafting modern stories.
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-6 leading-relaxed">
          Turning ideas into visually compelling stories that feel modern, polished, and purposeful. Combining creative editing with AI-powered workflows to elevate music videos, digital narratives, and freelance projects.
        </p>

        {/* Software & Tool badges */}
        <div className="blur-in flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 text-xs font-mono text-muted/90">
          <span className="px-3 py-1 rounded-full bg-surface/80 border border-stroke">Premiere Pro</span>
          <span className="px-3 py-1 rounded-full bg-surface/80 border border-stroke">After Effects</span>
          <span className="px-3 py-1 rounded-full bg-surface/80 border border-stroke">Photoshop</span>
          <span className="px-3 py-1 rounded-full bg-surface/80 border border-stroke text-text-primary/90">AI Tools &amp; Workflows</span>
        </div>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* See Works */}
          <button
            onClick={handleSeeWorks}
            className="group relative rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-0 rounded-full bg-text-primary group-hover:bg-bg transition-colors duration-300 -z-0" />
            <span className="relative z-10 text-bg group-hover:text-text-primary font-semibold transition-colors duration-300">
              See Works
            </span>
          </button>

          {/* Reach out */}
          <button
            onClick={handleReachOut}
            className="group relative rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-0 rounded-full border-2 border-stroke bg-bg/80 group-hover:border-transparent group-hover:bg-surface transition-all duration-300 -z-0" />
            <span className="relative z-10 text-text-primary transition-colors duration-300">
              Reach out...
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em] font-medium text-[10px]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-4 accent-gradient animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
