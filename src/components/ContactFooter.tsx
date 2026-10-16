import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Background Video: Same HLS source as hero, flipped vertically (scale-y-[-1]), heavier overlay bg-black/60
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

  // GSAP Marquee: repeated 10x, xPercent: -50, duration 40, ease "none", repeat -1
  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeText = Array(10).fill("BRINGING VISIONS TO LIFE • CREATIVE VIDEO EDITING • ").join("");

  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden text-text-primary"
    >
      {/* Background Video (Flipped vertically scale-y-[-1], Heavier overlay: bg-black/60) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-40"
        />
        {/* Dark overlay: bg-black/60 */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* GSAP Marquee Bar */}
      <div className="relative z-10 w-full overflow-hidden py-6 border-y border-stroke/50 bg-surface/20 backdrop-blur-sm mb-16 md:mb-24">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex text-sm sm:text-base font-mono uppercase tracking-[0.4em] text-muted/80 select-none will-change-transform"
        >
          <span className="inline-block mr-4">{marqueeText}</span>
          <span className="inline-block mr-4">{marqueeText}</span>
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center mb-20 md:mb-28">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            Get In Touch
          </span>
          <span className="w-8 h-px bg-stroke" />
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-text-primary mb-6">
          Have a project in mind? <br className="hidden sm:block" />
          <span className="font-display italic font-normal text-white block sm:inline">
            Let’s bring your vision to life.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-muted max-w-lg mb-10 font-light leading-relaxed">
          Open for music videos, commercial cuts, visual storytelling, and freelance collaborations using modern AI &amp; creative editing workflows.
        </p>

        {/* CTA Email button with gradient hover border ring */}
        <div className="relative group p-[2px] rounded-full inline-block">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
          <a
            href="mailto:om.visualcreator@gmail.com"
            className="relative inline-flex items-center gap-3 rounded-full bg-surface border border-stroke px-8 sm:px-10 py-4 text-sm sm:text-base font-medium text-text-primary hover:text-white transition-all group-hover:border-transparent z-10 backdrop-blur-md shadow-2xl"
          >
            <Mail className="w-4 h-4 text-[#89AACC]" />
            <span>om.visualcreator@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
          {/* Availability Status with green pulsing dot */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono uppercase tracking-wider text-text-primary/90">
              Available for freelance projects
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-text-primary transition-colors duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-muted/60">
            &copy; 2026 Om. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
