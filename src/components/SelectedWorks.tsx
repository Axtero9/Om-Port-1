import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Film,
  Sparkles,
  Layers,
  Sliders,
} from "lucide-react";
import { NICHES, type Niche, type VideoItem } from "../data/niches";

export const SelectedWorks: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<Niche | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string>("All");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  // When a niche is selected, default to the first video
  const handleOpenNiche = (niche: Niche) => {
    setSelectedNiche(niche);
    setActiveSubcategory("All");
    setActiveVideo(niche.videos[0] || null);
    setIsPlaying(true);
  };

  // Close modal and reset
  const handleCloseModal = () => {
    setSelectedNiche(null);
    setActiveVideo(null);
    setIsPlaying(false);
  };

  // Keyboard navigation: ESC to close, Left/Right arrow for video switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedNiche) return;

      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowRight") {
        handleNextVideo();
      } else if (e.key === "ArrowLeft") {
        handlePrevVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNiche, activeVideo, activeSubcategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedNiche) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNiche]);

  // Handle switching video in player
  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.currentTime = 0;
      videoPlayerRef.current.play().catch(() => {});
    }
  };

  // Get filtered video list based on subcategory in modal
  const getModalVideos = (): VideoItem[] => {
    if (!selectedNiche) return [];
    if (!selectedNiche.subcategories || activeSubcategory === "All") {
      return selectedNiche.videos;
    }
    return selectedNiche.videos.filter(
      (v) => v.category?.toLowerCase() === activeSubcategory.toLowerCase()
    );
  };

  // Next / Previous Video handlers
  const handleNextVideo = () => {
    if (!selectedNiche || !activeVideo) return;
    const currentList = getModalVideos();
    const currentIndex = currentList.findIndex((v) => v.id === activeVideo.id);
    if (currentIndex !== -1 && currentIndex < currentList.length - 1) {
      handleSelectVideo(currentList[currentIndex + 1]);
    } else if (currentList.length > 0) {
      handleSelectVideo(currentList[0]);
    }
  };

  const handlePrevVideo = () => {
    if (!selectedNiche || !activeVideo) return;
    const currentList = getModalVideos();
    const currentIndex = currentList.findIndex((v) => v.id === activeVideo.id);
    if (currentIndex > 0) {
      handleSelectVideo(currentList[currentIndex - 1]);
    } else if (currentList.length > 0) {
      handleSelectVideo(currentList[currentList.length - 1]);
    }
  };

  // Toggle fullscreen on the cinema video player
  const handleFullscreen = () => {
    if (videoPlayerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        videoPlayerRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  // Filter niches on the page
  const filteredNiches =
    activeFilter === "all"
      ? NICHES
      : NICHES.filter((n) => n.id === activeFilter);

  return (
    <section id="work" className="bg-bg py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#4E85BF]" />
              <span className="text-xs text-[#89AACC] uppercase tracking-[0.3em] font-medium font-mono">
                Selected Work • Niches & Archives
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Featured <span className="font-display italic text-white">niches</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
              Explore each creative discipline. Click on any niche box to open its interactive cinema vault and stream every single video project.
            </p>
          </div>

          {/* Quick Info & Stats Pill */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-4 py-2 rounded-full border border-stroke bg-surface/70 backdrop-blur-md text-xs font-mono text-muted flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-[#4E85BF]" />
              <span>
                <strong className="text-text-primary font-semibold">6</strong> Niches •{" "}
                <strong className="text-text-primary font-semibold">31</strong> Playable Videos
              </span>
            </div>
          </div>
        </motion.div>

        {/* Niche Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#4E85BF] text-white shadow-lg shadow-[#4E85BF]/20"
                : "bg-surface border border-stroke text-muted hover:text-white hover:border-stroke/80"
            }`}
          >
            <span>All Niches</span>
            <span className="px-1.5 py-0.2 rounded-full bg-black/30 text-[10px]">
              {NICHES.length}
            </span>
          </button>

          {NICHES.map((niche) => (
            <button
              key={niche.id}
              onClick={() => setActiveFilter(niche.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === niche.id
                  ? "bg-[#4E85BF] text-white shadow-lg shadow-[#4E85BF]/20"
                  : "bg-surface border border-stroke text-muted hover:text-white hover:border-stroke/80"
              }`}
            >
              <span>{niche.folderName}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-black/30 text-[10px]">
                {niche.videos.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {filteredNiches.map((niche, index) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => handleOpenNiche(niche)}
              className={`${
                activeFilter === "all" ? niche.colSpan : "md:col-span-12"
              } group relative rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer min-h-[400px] md:min-h-[480px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:border-[#4E85BF]/60 hover:shadow-2xl hover:shadow-[#4E85BF]/10`}
            >
              {/* Background Looping Ambient Video */}
              <div className="absolute inset-0 overflow-hidden bg-black">
                <video
                  src={niche.coverVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-85"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Halftone & Noise Texture */}
              <div className="absolute inset-0 halftone-pattern opacity-15 mix-blend-overlay pointer-events-none" />

              {/* Top Bar inside card */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                {/* Niche Folder Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="tracking-wide font-medium">{niche.folderName}</span>
                </div>

                {/* Video Count Pill */}
                <div className="px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-stroke text-xs font-mono text-muted group-hover:text-white transition-colors flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-[#4E85BF]" />
                  <span>{niche.countLabel}</span>
                </div>
              </div>

              {/* Hover Center Indicator */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs">
                <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 animated-gradient-border" />
                  <div className="relative px-6 py-3 rounded-full bg-surface/95 text-text-primary text-sm font-medium flex items-center gap-2.5">
                    <Play className="w-4 h-4 fill-white text-white" />
                    <span>Watch All</span>
                    <span className="font-display italic text-base">
                      {niche.videos.length} Videos
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#89AACC]" />
                  </div>
                </div>
              </div>

              {/* Card Bottom Meta Content */}
              <div className="relative z-10 pt-16">
                <div className="flex items-center justify-between text-xs text-muted mb-2 font-mono">
                  <span className="text-[#89AACC]">{niche.category}</span>
                  <span>{niche.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-text-primary tracking-tight mb-2">
                  {niche.title}{" "}
                  <span className="font-display italic text-white/95">
                    {niche.italicWord}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-muted/90 line-clamp-2 mb-4 leading-relaxed max-w-lg">
                  {niche.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {niche.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-bg/80 border border-stroke/70 text-muted/90 group-hover:border-stroke group-hover:text-text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          NICHE VIDEO LIGHTBOX & CINEMA PLAYER MODAL
          Streams every video in the clicked niche
          ========================================================================= */}
      <AnimatePresence>
        {selectedNiche && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-start sm:justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[96vh] sm:max-h-[92vh] bg-surface/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-stroke/60 bg-bg/80 backdrop-blur-md flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <div className="w-8 h-8 rounded-full bg-[#4E85BF]/20 border border-[#4E85BF]/40 flex items-center justify-center flex-shrink-0">
                    <Film className="w-4 h-4 text-[#89AACC]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#89AACC]">
                        NICHE ARCHIVE:
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#4E85BF]/20 text-[#89AACC] border border-[#4E85BF]/30">
                        {selectedNiche.folderName}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-normal text-white truncate">
                      {selectedNiche.title}{" "}
                      <span className="font-display italic">
                        {selectedNiche.italicWord}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-muted">
                    {getModalVideos().length} Videos Available
                  </span>
                  <button
                    onClick={handleCloseModal}
                    className="w-9 h-9 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-white hover:bg-surface transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content: Player + Playlist Grid */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 min-h-0">
                {/* Left/Main Column: Active Cinema Player */}
                <div className="lg:col-span-8 flex flex-col bg-black/60 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-stroke/60">
                  {/* High Quality Cinema Video Player */}
                  <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group/player">
                    {activeVideo ? (
                      <video
                        ref={videoPlayerRef}
                        key={activeVideo.src}
                        src={activeVideo.src}
                        autoPlay
                        controls
                        playsInline
                        muted={isMuted}
                        className="w-full h-full object-contain"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
                    ) : (
                      <div className="text-muted text-sm">Select a video to play</div>
                    )}

                    {/* Floating Controls Overlay (Top Right) */}
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-2 opacity-90 group-hover/player:opacity-100 transition-opacity">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-colors cursor-pointer"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-red-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </button>

                      <button
                        onClick={handleFullscreen}
                        className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-colors cursor-pointer"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Left / Right Quick Prev/Next Overlay buttons on video */}
                    <button
                      onClick={handlePrevVideo}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition-all opacity-0 group-hover/player:opacity-100 cursor-pointer"
                      title="Previous Video (←)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextVideo}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition-all opacity-0 group-hover/player:opacity-100 cursor-pointer"
                      title="Next Video (→)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Active Video Info Bar */}
                  {activeVideo && (
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {activeVideo.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#4E85BF]/20 text-[#89AACC] border border-[#4E85BF]/30">
                              {activeVideo.badge}
                            </span>
                          )}
                          <span className="text-xs font-mono text-muted">
                            File: {activeVideo.filename}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-medium text-white">
                          {activeVideo.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                          {activeVideo.description || activeVideo.subtitle}
                        </p>
                      </div>

                      {/* Video Player Quick Prev/Next Navigation */}
                      <div className="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
                        <button
                          onClick={handlePrevVideo}
                          className="px-3 py-1.5 rounded-full bg-bg border border-stroke text-xs text-muted hover:text-white hover:border-stroke/80 flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Prev</span>
                        </button>
                        <button
                          onClick={handleNextVideo}
                          className="px-3 py-1.5 rounded-full bg-bg border border-stroke text-xs text-muted hover:text-white hover:border-stroke/80 flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>Next</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Playlist of all videos in this niche */}
                <div className="lg:col-span-4 flex flex-col p-4 sm:p-5 bg-surface/50">
                  {/* Playlist Header & Subcategory Tabs */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#4E85BF]" />
                        <span>All Videos ({getModalVideos().length})</span>
                      </span>
                      <span className="text-[11px] font-mono text-muted/80">
                        Click to stream
                      </span>
                    </div>

                    {/* Subcategories (for CONTENTS: Creators, Gym, Store, Other) */}
                    {selectedNiche.subcategories && (
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                        {selectedNiche.subcategories.map((subcat) => (
                          <button
                            key={subcat}
                            onClick={() => {
                              setActiveSubcategory(subcat);
                              const filtered =
                                subcat === "All"
                                  ? selectedNiche.videos
                                  : selectedNiche.videos.filter(
                                      (v) =>
                                        v.category?.toLowerCase() ===
                                        subcat.toLowerCase()
                                    );
                              if (filtered.length > 0) {
                                handleSelectVideo(filtered[0]);
                              }
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors flex-shrink-0 cursor-pointer ${
                              activeSubcategory === subcat
                                ? "bg-[#4E85BF] text-white"
                                : "bg-bg border border-stroke text-muted hover:text-white"
                            }`}
                          >
                            {subcat}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Scrollable Playlist Items */}
                  <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[380px] lg:max-h-[520px] pr-1">
                    {getModalVideos().map((video, idx) => {
                      const isCurrent = activeVideo?.id === video.id;
                      return (
                        <div
                          key={video.id}
                          onClick={() => handleSelectVideo(video)}
                          className={`group/item flex items-center gap-3 p-2.5 rounded-2xl border transition-all cursor-pointer ${
                            isCurrent
                              ? "bg-[#4E85BF]/15 border-[#4E85BF] shadow-lg shadow-[#4E85BF]/10"
                              : "bg-bg/60 border-stroke/70 hover:bg-bg hover:border-stroke hover:border-white/20"
                          }`}
                        >
                          {/* Video Thumbnail with live hover preview */}
                          <div className="relative w-20 sm:w-24 aspect-video rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                            <video
                              src={video.src}
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay icon */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/item:bg-black/20 transition-colors">
                              {isCurrent ? (
                                <div className="flex items-end gap-0.5 h-3.5">
                                  <span className="w-1 bg-emerald-400 animate-[bounce_0.6s_ease-in-out_infinite] h-full" />
                                  <span className="w-1 bg-emerald-400 animate-[bounce_0.8s_ease-in-out_infinite_0.1s] h-3/4" />
                                  <span className="w-1 bg-emerald-400 animate-[bounce_0.7s_ease-in-out_infinite_0.2s] h-full" />
                                </div>
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-white text-white opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all" />
                              )}
                            </div>
                          </div>

                          {/* Video details */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span
                                className={`text-[10px] font-mono truncate ${
                                  isCurrent ? "text-emerald-400 font-semibold" : "text-muted"
                                }`}
                              >
                                {isCurrent ? "▶ NOW PLAYING" : `REEL #${idx + 1}`}
                              </span>
                              {video.category && (
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface border border-stroke text-muted/80">
                                  {video.category}
                                </span>
                              )}
                            </div>

                            <h5
                              className={`text-xs sm:text-sm font-medium leading-snug truncate ${
                                isCurrent
                                  ? "text-white"
                                  : "text-text-primary group-hover/item:text-white"
                              }`}
                            >
                              {video.title}
                            </h5>

                            <p className="text-[11px] text-muted truncate mt-0.5 font-light">
                              {video.filename}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-stroke/60 bg-bg/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted font-mono flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
                  <span>
                    Direct playback from{" "}
                    <code className="text-white bg-surface px-1.5 py-0.5 rounded border border-stroke">
                      /videos/{selectedNiche.folderName}/
                    </code>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Use ← → keys to switch videos</span>
                  <span>•</span>
                  <button
                    onClick={handleCloseModal}
                    className="hover:text-white underline cursor-pointer"
                  >
                    Close (Esc)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
