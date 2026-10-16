import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  sub: string;
}

const STATS: StatItem[] = [
  {
    number: 1,
    suffix: "+",
    label: "Year Hands-on",
    sub: "Dedicated video editing, music videos, visual storytelling & freelance craft",
  },
  {
    number: 35,
    suffix: "+",
    label: "Projects Delivered",
    sub: "Music videos, brand reels, motion graphics & AI-enhanced visual assets",
  },
  {
    number: 100,
    suffix: "%",
    label: "Creative Dedication",
    sub: "Committed to turning ideas into polished, modern, and purposeful stories",
  },
];

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [count0, setCount0] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const animateNumber = (target: number, setter: (val: number) => void, duration: number) => {
      const startTime = performance.now();
      const frame = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        setter(current);
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setter(target);
        }
      };
      requestAnimationFrame(frame);
    };

    animateNumber(STATS[0].number, setCount0, 1000);
    animateNumber(STATS[1].number, setCount1, 1600);
    animateNumber(STATS[2].number, setCount2, 2000);
  }, [isInView]);

  const counts = [count0, count1, count2];

  return (
    <section id="stats" ref={ref} className="bg-bg py-16 md:py-24 border-t border-stroke/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-3xl bg-surface/40 border border-stroke/60 hover:border-stroke hover:bg-surface/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-display text-text-primary tracking-tight mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                {counts[index]}
                {stat.suffix}
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {stat.sub}
                </p>
              </div>

              {/* Accent bottom line on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
