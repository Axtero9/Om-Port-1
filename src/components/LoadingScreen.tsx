import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ["Design", "Create", "Inspire"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);

  // requestAnimationFrame counter from 000 -> 100 over 2700ms
  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing calculation
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        // 400ms delay after reaching 100 then call onComplete
        const timer = setTimeout(() => {
          setIsFinishing(true);
          const exitTimer = setTimeout(() => {
            onComplete();
          }, 450);
          return () => clearTimeout(exitTimer);
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Center: Rotating words cycling every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full">
        {/* Top-left: "Portfolio" label */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
        >
          Portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs text-muted/60 font-mono"
        >
          COLLECTION &apos;26
        </motion.div>
      </div>

      {/* Center: Rotating words cycling every 900ms */}
      <div className="flex items-center justify-center my-auto py-12">
        <div className="relative h-20 md:h-28 flex items-center justify-center overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={ROTATING_WORDS[wordIndex]}
              initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary/80 tracking-wide text-center"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div className="text-xs text-muted/70 tracking-widest uppercase hidden sm:block font-mono">
            Om • Visual Creator &amp; Video Editor
          </div>

          {/* Bottom-right: Counter display */}
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums ml-auto leading-none tracking-tight">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Bottom progress bar: h-[3px] bg-stroke/50, inner div with .accent-gradient, scaleX(count/100) */}
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden relative">
          <div
            className="h-full accent-gradient transition-transform duration-75 ease-out origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 10px rgba(137, 170, 204, 0.45)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
