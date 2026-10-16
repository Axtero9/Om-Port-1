import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Journal } from "./components/Journal";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { ContactFooter } from "./components/ContactFooter";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-[#4E85BF]/30 selection:text-white">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Floating Centered Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative w-full">
        {/* Section 2: Hero */}
        <Hero
          onSeeWorks={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          onReachOut={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        />

        {/* Section 3: Selected Works */}
        <SelectedWorks />

        {/* Section 4: Journal */}
        <Journal />

        {/* Section 5: Explorations (Parallax Gallery) */}
        <Explorations />

        {/* Section 6: Stats */}
        <Stats />

        {/* Section 7: Contact / Footer */}
        <ContactFooter />
      </main>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
