import React, { useEffect, useState } from "react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "home", onNavigate, onOpenResume }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSayHiClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("contact");
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:om.visualcreator@gmail.com";
      }
    }
  };

  const isScrolled = scrollY > 100;

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "Resume", id: "stats" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          isScrolled ? "shadow-md shadow-black/30 border-white/15 bg-surface/95" : ""
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border (reverses direction on hover). Inner bg-bg circle with "OM" in font-display italic text-[13px]. Scales 110% on hover */}
        <button
          onClick={(e) => handleNavClick("home", e)}
          aria-label="Om Portfolio Home"
          title="Om — Video Editor & Visual Creator"
          className="w-9 h-9 rounded-full relative p-[1.5px] hover:scale-110 transition-transform duration-300 flex-shrink-0 group overflow-hidden"
        >
          {/* Accent gradient border container */}
          <span className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-500" />
          
          {/* Inner bg-bg circle with "OM" in font-display italic text-[13px] */}
          <span className="relative w-full h-full rounded-full bg-bg flex items-center justify-center text-[13px] font-display italic font-semibold text-text-primary z-10 select-none tracking-tight">
            OM
          </span>
        </button>

        {/* 2. Divider: w-px h-5 bg-stroke mx-1 (hidden on mobile) */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 3. Nav links: ["Home", "Work", "Resume"] */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => {
                  if (link.id === "stats" && onOpenResume) {
                    onOpenResume();
                  } else {
                    handleNavClick(link.id, e);
                  }
                }}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium ${
                  isActive
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 5. "Say hi" button */}
        <div className="relative group p-[2px] rounded-full">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
          
          <button
            onClick={handleSayHiClick}
            className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface backdrop-blur-md text-text-primary flex items-center gap-1 hover:text-white transition-colors z-10"
          >
            <span>Say hi</span>
            <span className="text-[13px] inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
