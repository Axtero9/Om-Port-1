import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import gsap from 'gsap'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

const HLS_STREAM_URL = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
  { name: 'GitHub', url: 'https://github.com' },
]

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  // HLS Video (flipped vertically scale-y-[-1] with heavier overlay bg-black/60)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      })
      hls.loadSource(HLS_STREAM_URL)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_STREAM_URL
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {})
      })
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [])

  // GSAP Marquee: repeated 10x, xPercent: -50, duration: 40, ease: "none", repeat: -1
  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const animation = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      animation.kill()
    }
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('om.visualcreator@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Marquee text repeated 10x
  const marqueeText = Array(10).fill('BRINGING VISIONS TO LIFE • CREATIVE VIDEO EDITING • ').join('')

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden border-t border-stroke/40"
    >
      {/* Background Video flipped vertically scale-y-[-1] with heavy overlay bg-black/60 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-y-[-1] opacity-40"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        {/* GSAP Continuous Marquee Banner */}
        <div className="w-full overflow-hidden py-4 border-y border-stroke/30 bg-surface/20 mb-16 select-none">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap text-xs md:text-sm tracking-[0.35em] text-muted/70 font-mono flex items-center will-change-transform"
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        {/* CTA Content Container */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium block mb-4">
              Get in touch
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-text-primary tracking-tight mb-6">
              Have a project in mind? <br className="hidden sm:block" />
              <span className="font-display italic">Let’s bring your vision to life.</span>
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Always looking to collaborate on music videos, commercial cuts, visual storytelling, and innovative AI-assisted workflows. Let’s create something modern, polished, and purposeful.
            </p>
          </div>

          {/* Email Button with gradient hover border ring */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
            <a
              href="mailto:om.visualcreator@gmail.com"
              className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium text-text-primary transition-transform duration-300 hover:scale-105"
            >
              <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="absolute inset-0 rounded-full border border-stroke bg-surface group-hover:bg-bg transition-colors duration-300 -z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <span>om.visualcreator@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {/* Quick copy button */}
            <button
              onClick={copyEmail}
              title="Copy email address"
              className="w-12 h-12 rounded-full border border-stroke bg-surface/80 hover:bg-surface text-muted hover:text-text-primary flex items-center justify-center transition-all duration-200"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Footer Bar */}
          <div className="pt-8 border-t border-stroke/40 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
            {/* Availability status with green pulsing dot */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-text-primary/90 font-medium tracking-wide">
                Available for freelance projects
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="font-mono text-[11px] text-muted/80">
              © 2026 Om. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
