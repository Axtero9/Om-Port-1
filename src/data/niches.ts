export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  filename: string;
  src: string;
  category?: "Creators" | "Gym" | "Store" | "Other" | string;
  badge?: string;
  duration?: string;
  description?: string;
}

export interface Niche {
  id: string;
  folderName: string;
  title: string;
  italicWord: string;
  category: string;
  year: string;
  colSpan: string;
  coverVideo: string;
  countLabel: string;
  description: string;
  tags: string[];
  subcategories?: string[];
  videos: VideoItem[];
}

export const NICHES: Niche[] = [
  {
    id: "ai-fashion-visuals",
    folderName: "AI FASHION VISUALS",
    title: "AI Fashion",
    italicWord: "Visuals",
    category: "Haute Couture & Neural Runway",
    year: "2025",
    colSpan: "md:col-span-7",
    coverVideo: "/videos/AI%20FASHION%20VISUALS/1st.mp4",
    countLabel: "5 Videos",
    description:
      "Avant-garde fashion editorial concepts, neural fabric simulations, and generative runway aesthetics crafted with custom AI pipelines and cinematic post-production.",
    tags: ["ComfyUI", "Deforum", "Runway Gen", "After Effects", "Color Grading"],
    videos: [
      {
        id: "fashion-1",
        title: "Haute Couture Synthesis I",
        subtitle: "Fluid Runway & Editorial Textures",
        filename: "1st.mp4",
        src: "/videos/AI%20FASHION%20VISUALS/1st.mp4",
        badge: "Editorial Reel",
        duration: "0:15",
        description:
          "Surreal fabric motion, high-fashion lighting aesthetics, and fluid runway strides synthesized through diffusion models and optical flow tracking.",
      },
      {
        id: "fashion-2",
        title: "Metamorphic Elegance II",
        subtitle: "Avant-Garde Silhouette & Lighting",
        filename: "2nd.mp4",
        src: "/videos/AI%20FASHION%20VISUALS/2nd.mp4",
        badge: "Silhouette Study",
        duration: "0:12",
        description:
          "Sculptural garment transitions blending organic silk folds with futuristic metallic textiles in dramatic directional studio lighting.",
      },
      {
        id: "fashion-3",
        title: "Neo-Classic Draping III",
        subtitle: "Neural Fabric Physics & Motion",
        filename: "3rd.mp4",
        src: "/videos/AI%20FASHION%20VISUALS/3rd.mp4",
        badge: "Motion Spec",
        duration: "0:25",
        description:
          "Detailed slow-motion simulation of flowing digital fabrics with micro-texturing, refractive specular highlights, and chromatic grading.",
      },
      {
        id: "fashion-4",
        title: "Cybernetic Wardrobe IV",
        subtitle: "Futuristic Streetwear Aesthetic",
        filename: "4th.mp4",
        src: "/videos/AI%20FASHION%20VISUALS/4th.mp4",
        badge: "Concept Lookbook",
        duration: "0:18",
        description:
          "Next-gen streetwear silhouettes infused with bio-luminescent motifs and dynamic handheld camera motion compositing.",
      },
      {
        id: "fashion-5",
        title: "Celestial Runway V",
        subtitle: "High-Fashion Editorial Finale",
        filename: "5th.mp4",
        src: "/videos/AI%20FASHION%20VISUALS/5th.mp4",
        badge: "Runway Finale",
        duration: "0:10",
        description:
          "Grand editorial runway finale featuring atmospheric particle haze, dramatic volumetric backlighting, and ethereal movement.",
      },
    ],
  },
  {
    id: "ai-product-commercial",
    folderName: "AI PRODUCT COMMERCIAL",
    title: "AI Product",
    italicWord: "Commercial",
    category: "Brand Spec & 3D Dynamism",
    year: "2025",
    colSpan: "md:col-span-5",
    coverVideo: "/videos/AI%20PRODUCT%20COMMERCIAL/CAP%20COMMERCIAL.mp4",
    countLabel: "1 Commercial",
    description:
      "High-octane product commercial edit combining snap zooms, match cuts, 3D typography, and hard-hitting sound design for modern streetwear & product drops.",
    tags: ["Commercial", "Speed Ramps", "Sound Design", "Premiere Pro", "3D Staging"],
    videos: [
      {
        id: "product-1",
        title: "Cap Commercial Spec",
        subtitle: "Kinetic Product Promo & Visual Rhythm",
        filename: "CAP COMMERCIAL.mp4",
        src: "/videos/AI%20PRODUCT%20COMMERCIAL/CAP%20COMMERCIAL.mp4",
        badge: "Commercial Spec",
        duration: "0:30",
        description:
          "Aggressive pacing, macro texture close-ups, spatial sound design, and snap zoom transitions crafted to showcase modern headwear with energetic streetwear flair.",
      },
    ],
  },
  {
    id: "music-videos",
    folderName: "MUSIC VIDEOS",
    title: "Music",
    italicWord: "Videos",
    category: "Rhythm Sync & Velocity Editing",
    year: "2025",
    colSpan: "md:col-span-5",
    coverVideo: "/videos/MUSIC%20VIDEOS/FREE%20VERSE.mp4",
    countLabel: "3 Releases",
    description:
      "Surgical downbeat cuts, seamless speed ramping, whip transitions, and visual rhythm matching artists' cadences for maximum sensory impact.",
    tags: ["Beat Sync", "Speed Ramping", "Premiere Pro", "Sound FX", "Color Grade"],
    videos: [
      {
        id: "music-1",
        title: "Free Verse",
        subtitle: "Fast-Paced Rap Flow & Punchy Beat Cuts",
        filename: "FREE VERSE.mp4",
        src: "/videos/MUSIC%20VIDEOS/FREE%20VERSE.mp4",
        badge: "Hip-Hop Edit",
        duration: "1:15",
        description:
          "Relentless rhythmic editing keyed to rap bars, 808 hits, speed ramps, and subtle digital distortions that match the artist's lyrical momentum.",
      },
      {
        id: "music-2",
        title: "Ashu Music Video",
        subtitle: "Atmospheric Narrative & Cinematic Grade",
        filename: "ASHU_MUSIC.webm",
        src: "/videos/MUSIC%20VIDEOS/ASHU_MUSIC.webm",
        badge: "Official Cut",
        duration: "2:40",
        description:
          "Cinematic music visual featuring moody anamorphic lens flares, rich nocturnal color palettes, and emotional performance framing.",
      },
      {
        id: "music-3",
        title: "XDG Music Project",
        subtitle: "High-Energy Hip-Hop Performance Visuals",
        filename: "XDG.mp4",
        src: "/videos/MUSIC%20VIDEOS/XDG.mp4",
        badge: "Energy Cut",
        duration: "2:10",
        description:
          "Electrifying music video cut with whip transitions, strobe accent hits, dynamic framing, and seamless camera match-cuts.",
      },
    ],
  },
  {
    id: "visual-storytelling",
    folderName: "VISUAL STORYTELLING",
    title: "Visual",
    italicWord: "Storytelling",
    category: "Cinematic Narrative & Mood Films",
    year: "2024–2025",
    colSpan: "md:col-span-7",
    coverVideo: "/videos/VISUAL%20STORYTELLING/TALHA%20ANJUM.mp4",
    countLabel: "4 Films",
    description:
      "Evocative narrative films exploring human emotion, solitude, and poetic Urdu lyrical depth with nostalgic 35mm film emulations and deliberate pacing.",
    tags: ["Talha Anjum", "Narrative", "35mm Film Look", "Atmospheric Tone", "Mood Film"],
    videos: [
      {
        id: "story-1",
        title: "Talha Anjum — Visual Tribute",
        subtitle: "Poetic Rap Cadence & Melodic Cinema",
        filename: "TALHA ANJUM.mp4",
        src: "/videos/VISUAL%20STORYTELLING/TALHA%20ANJUM.mp4",
        badge: "Poetic Montage",
        duration: "0:45",
        description:
          "Cinematic tribute to Talha Anjum's poetic lyricism, blending melancholic urban cinematography with evocative negative space and emotional pacing.",
      },
      {
        id: "story-2",
        title: "Joh Ishq Hua",
        subtitle: "Emotive Romantic Nostalgia & Warm Film Grade",
        filename: "JOH ISHQ HUA.mp4",
        src: "/videos/VISUAL%20STORYTELLING/JOH%20ISHQ%20HUA.mp4",
        badge: "Mood Film",
        duration: "0:30",
        description:
          "Intimate visual narrative soaked in golden-hour warmth, subtle grain textures, and rhythmic pacing synced to soulful acoustic melodies.",
      },
      {
        id: "story-3",
        title: "Khali Ghar (Final Cut)",
        subtitle: "Atmospheric Solitude & Cinematic Mood",
        filename: "KHALI GHAR FINAL.mp4",
        src: "/videos/VISUAL%20STORYTELLING/KHALI%20GHAR%20FINAL.mp4",
        badge: "Narrative Short",
        duration: "0:35",
        description:
          "Deep, introspective mood piece centered around an empty house, memories, desaturated tones, and lingering cinematic compositions.",
      },
      {
        id: "story-4",
        title: "Raw Narrative Cut",
        subtitle: "Gritty Dynamic Montage & Atmospheric Sound",
        filename: "BITCH FINAL.mp4",
        src: "/videos/VISUAL%20STORYTELLING/BITCH%20FINAL.mp4",
        badge: "Raw Cut",
        duration: "0:40",
        description:
          "High-contrast, visceral storytelling cut using punchy edits, textured sound design, and raw documentary-style visual framing.",
      },
    ],
  },
  {
    id: "ai-visual-motion",
    folderName: "AI VISUAL & MOTION",
    title: "AI Visual &",
    italicWord: "Motion",
    category: "Generative Motion & Neural VFX",
    year: "2024–2025",
    colSpan: "md:col-span-5",
    coverVideo: "/videos/AI%20VISUAL%20%26%20MOTION/1ST.mp4",
    countLabel: "4 Visuals",
    description:
      "Experimental generative particle flows, morphing optical landscapes, and neural synthesis composited with After Effects optical flares and fluid pacing.",
    tags: ["Generative AI", "Frame Interpolation", "VFX", "After Effects", "Neural Motion"],
    videos: [
      {
        id: "motion-1",
        title: "Kinetic Synthesis 01",
        subtitle: "Neural Motion & Optical Fluidity",
        filename: "1ST.mp4",
        src: "/videos/AI%20VISUAL%20%26%20MOTION/1ST.mp4",
        badge: "Neural Flow",
        duration: "0:15",
        description:
          "Fluid digital dynamics transitioning between crystalline structures and organic motion with reactive lighting highlights.",
      },
      {
        id: "motion-2",
        title: "Spatial Drift 02",
        subtitle: "Generative Dimension & Depth Warp",
        filename: "2ND.mp4",
        src: "/videos/AI%20VISUAL%20%26%20MOTION/2ND.mp4",
        badge: "Depth Study",
        duration: "0:12",
        description:
          "Hypnotic depth-warped dimensional fly-through combining latent space interpolation with camera parallax compositing.",
      },
      {
        id: "motion-3",
        title: "Fluid Particle Pulse 03",
        subtitle: "Abstract Chromatic Simulation",
        filename: "3RD.mp4",
        src: "/videos/AI%20VISUAL%20%26%20MOTION/3RD.mp4",
        badge: "Particle Physics",
        duration: "0:14",
        description:
          "Vibrant chromatic particle pulse reacting to sub-bass audio frequencies and iridescent prism refraction.",
      },
      {
        id: "motion-4",
        title: "Vortex Motion 04",
        subtitle: "Hypnotic Frame Interpolation & Pacing",
        filename: "4TH.mp4",
        src: "/videos/AI%20VISUAL%20%26%20MOTION/4TH.mp4",
        badge: "Vortex Loop",
        duration: "0:10",
        description:
          "Swirling visual vortex with seamless loop geometry and high-speed motion blur enhancements.",
      },
    ],
  },
  {
    id: "contents",
    folderName: "CONTENTS",
    title: "Content",
    italicWord: "Creation",
    category: "Creators, Fitness & Commercials",
    year: "2024–2025",
    colSpan: "md:col-span-7",
    coverVideo: "/videos/CONTENTS/OTHER/BREAK%20THE%20PATTERN.mp4",
    countLabel: "15 Videos",
    description:
      "High-retention social edits optimized for viral engagement. Spans creator talking-heads, adrenaline-pumping gym reels, apparel store showcases, and motivational cuts.",
    tags: ["Short-Form", "Gym Reels", "Retention Hooks", "E-Commerce", "Creators"],
    subcategories: ["All", "Creators", "Gym", "Store", "Other"],
    videos: [
      // Creators
      {
        id: "content-c1",
        title: "Creator Showcase #1",
        subtitle: "High-Retention Talking Head & Fast B-Roll",
        filename: "1.mp4",
        category: "Creators",
        src: "/videos/CONTENTS/CREATORS/1.mp4",
        badge: "Creator Reel",
        duration: "0:30",
        description:
          "Engaging talking-head pace cut with instant visual hooks, punch-ins, sound effects, and clean aesthetic framing.",
      },
      {
        id: "content-c2",
        title: "Creator Showcase #2",
        subtitle: "Kinetic Hook & Dynamic SFX",
        filename: "2.mp4",
        category: "Creators",
        src: "/videos/CONTENTS/CREATORS/2.mp4",
        badge: "Viral Hook",
        duration: "0:45",
        description:
          "Dynamic content edit engineered with snappy match-cuts, graphic pop-ins, and retention-maximizing audio design.",
      },
      {
        id: "content-c3",
        title: "Creator Showcase #3",
        subtitle: "Visual Pacing & Micro-Cuts",
        filename: "3.mp4",
        category: "Creators",
        src: "/videos/CONTENTS/CREATORS/3.mp4",
        badge: "Micro-Cut Spec",
        duration: "0:35",
        description:
          "Smooth narrative rhythm designed for lifestyle influencers, keeping viewers hooked through every beat.",
      },
      {
        id: "content-c4",
        title: "Creator Showcase #4",
        subtitle: "Storytelling Cadence & Polish",
        filename: "4.mp4",
        category: "Creators",
        src: "/videos/CONTENTS/CREATORS/4.mp4",
        badge: "Creator Polish",
        duration: "0:25",
        description:
          "Polished short-form video edit blending cinematic B-roll with crisp vocal clarity and expressive sound effects.",
      },
      // Gym
      {
        id: "content-g1",
        title: "Gym Motivation Reel #1",
        subtitle: "Peak Intensity & Adrenaline Bass",
        filename: "1.mp4",
        category: "Gym",
        src: "/videos/CONTENTS/GYM/1.mp4",
        badge: "Gym Adrenaline",
        duration: "0:40",
        description:
          "Aggressive gym motivation reel edited with heavy downbeat cuts, speed ramps, and bass-heavy audio impacts.",
      },
      {
        id: "content-g2",
        title: "Iron & Sweat Cut #2",
        subtitle: "Speed Ramps & Match Cuts",
        filename: "2.mp4",
        category: "Gym",
        src: "/videos/CONTENTS/GYM/2.mp4",
        badge: "Workout Reel",
        duration: "0:42",
        description:
          "High-energy fitness montage featuring seamless lifting match-cuts, contrasty lighting, and motivating audio.",
      },
      {
        id: "content-g3",
        title: "Hypertrophy Edit #3",
        subtitle: "Rhythmic Lifting Drops",
        filename: "3.mp4",
        category: "Gym",
        src: "/videos/CONTENTS/GYM/3.mp4",
        badge: "Hypertrophy Reel",
        duration: "0:20",
        description:
          "Fast-paced workout short with snap transitions and rhythmic barbell impact sound accents.",
      },
      {
        id: "content-g4",
        title: "Beast Mode Anthem #4",
        subtitle: "Dramatic Lighting & Heavy Impact",
        filename: "4.mp4",
        category: "Gym",
        src: "/videos/CONTENTS/GYM/4.mp4",
        badge: "Peak Impact",
        duration: "0:45",
        description:
          "Moody, high-contrast fitness reel designed to inspire, with dramatic slow-motion peaks and explosive speed ramp releases.",
      },
      // Store
      {
        id: "content-s1",
        title: "Retail & Apparel Spotlight #1",
        subtitle: "Smooth Lookbook Transition",
        filename: "1.mp4",
        category: "Store",
        src: "/videos/CONTENTS/STORE/1.mp4",
        badge: "Store Showcase",
        duration: "0:25",
        description:
          "Sleek commercial reel for modern apparel stores, highlighting fabric drape, store vibes, and outfit aesthetics.",
      },
      {
        id: "content-s2",
        title: "Product Showcase #2",
        subtitle: "Snappy Angles & Detail Zoom",
        filename: "2.mp4",
        category: "Store",
        src: "/videos/CONTENTS/STORE/2.mp4",
        badge: "Product Cut",
        duration: "0:35",
        description:
          "Snappy retail video cut engineered for Instagram Reels and TikTok e-commerce conversions.",
      },
      {
        id: "content-s3",
        title: "Store Collection Reel #3",
        subtitle: "Aesthetic Motion & Color Tone",
        filename: "3.mp4",
        category: "Store",
        src: "/videos/CONTENTS/STORE/3.mp4",
        badge: "Collection Drop",
        duration: "0:20",
        description:
          "Clean visual presentation of seasonal items with smooth gimbal movement and tasteful warm color grading.",
      },
      {
        id: "content-s4",
        title: "Catalog Highlight #4",
        subtitle: "Sleek Commercial Flow",
        filename: "4.mp4",
        category: "Store",
        src: "/videos/CONTENTS/STORE/4.mp4",
        badge: "E-Commerce",
        duration: "0:22",
        description:
          "Fast, elegant product rotations with modern music cadence and crisp typography layout.",
      },
      // Other
      {
        id: "content-o1",
        title: "Break The Pattern",
        subtitle: "Viral Mindset & Retention Hook",
        filename: "BREAK THE PATTERN.mp4",
        category: "Other",
        src: "/videos/CONTENTS/OTHER/BREAK%20THE%20PATTERN.mp4",
        badge: "Viral Reel",
        duration: "0:28",
        description:
          "Captivating viral mindset reel designed with immediate visual pattern-interrupts and cinematic sound effects.",
      },
      {
        id: "content-o2",
        title: "Honorable",
        subtitle: "Cinematic Short-Form Edit",
        filename: "HONORABLE.mp4",
        category: "Other",
        src: "/videos/CONTENTS/OTHER/HONORABLE.mp4",
        badge: "Cinematic Reel",
        duration: "0:22",
        description:
          "Dramatic short-form visual cut combining gritty texture, emotional vocal overtones, and sharp editing.",
      },
      {
        id: "content-o3",
        title: "Creative Cut 14823",
        subtitle: "Dynamic Visual Montage",
        filename: "Video-14823.mp4",
        category: "Other",
        src: "/videos/CONTENTS/OTHER/Video-14823.mp4",
        badge: "Montage",
        duration: "0:15",
        description:
          "Rapid-fire montage showcasing visual pacing, kinetic framing, and seamless camera motion.",
      },
    ],
  },
];
