'use client'

import { Instagram, Facebook, MapPin, FileText, Video, FolderOpen, Scroll, BookOpen, HelpCircle, Tag, Sparkles, ExternalLink, Clock, Calendar } from 'lucide-react'
import Image from 'next/image'

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

// Primary CTAs - Registration forms
const primaryLinks = [
  {
    title: 'Class Pre-Registration',
    description: 'Book your spot in our upcoming classes',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfCc_wl6-jLKubONJleb96NPFrNjew3M09_MigoBeG8MrD7FQ/viewform',
    icon: FileText,
  },
  {
    title: 'A10DANCE',
    description: 'Register for A10DANCE classes',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScDnrYghM0qKVDNKbWdI6mShY3asU9J4n1DcJtaG1lD03Kb9g/viewform?usp=dialog',
    icon: Sparkles,
  },
  {
    title: 'PRODUCT10N Class Bundles',
    description: 'For single class, please proceed to Class Pre-reg',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScTKetr9TM7ZgFsE_OWLPh_fSMELFNF--vZ5cHdbJI8vhGj2A/viewform?usp=dialog',
    icon: Calendar,
  },
  {
    title: 'Studio Rentals',
    description: 'Reserve our space for your next event',
    href: 'https://clique-booking.vercel.app/',
    icon: Video,
  },
]

// Secondary links - Standard actions
const secondaryLinks = [
  {
    title: 'Class Footage',
    href: 'https://drive.google.com/drive/folders/1ndBLcz374d2ev2ou8EH7IePlhWcVldw3',
    icon: FolderOpen,
  },
  {
    title: 'FAQs',
    href: 'https://powerful-wormhole-95c.notion.site/Clique-Studio-FAQs-342448b8f60b800ebb2dd941505be647?pvs=73',
    icon: HelpCircle,
  },
]

// Tertiary links - Less prominent
const tertiaryLinks = [
  {
    title: 'House Rules',
    href: 'https://canva.link/cliquestudios-house-rules',
    icon: Scroll,
  },
  {
    title: 'Rates',
    href: 'https://canva.link/cliquestudio-rates',
    icon: BookOpen,
  },
]

const socials = [
  { title: 'Instagram', href: 'https://www.instagram.com/cliquestudio.ph/', icon: Instagram },
  { title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578416800288', icon: Facebook },
  { title: 'TikTok', href: 'https://www.tiktok.com/@cliquestudio.ph', icon: TikTokIcon },
]

const address = {
  text: '2nd Floor, Curamed Building, 12 Aspiras - Palispis Hwy, Baguio, 2600 Benguet',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('2nd Floor, Curamed Building, 12 Aspiras - Palispis Hwy, Baguio, 2600 Benguet'),
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050301] text-white relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050301] via-[#050301]/70 to-[#050301]" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#ecb840]/5 to-transparent z-0" />
      
      {/* Floating Particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />

      {/* Main Content */}
      <main className="flex-1 w-full relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-8 px-6 lg:pt-16 lg:pb-10">
          <div className="max-w-xl mx-auto">
            {/* Logo */}
            <div className="flex flex-col items-center text-center fade-in-up">
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-[#ecb840]/10 rounded-full blur-3xl animate-pulse" />
                <Image
                  src="/logo.png"
                  alt="Clique Studio Logo"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>

            {/* Intro Text - Overlapping logo */}
            <div className="text-center fade-in-up -mt-16 relative z-20" style={{ animationDelay: '0.1s' }}>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-md mx-auto">
                A Dance Studio and Creative Space in Baguio, built for the community. Regular classes, open training, intensives, and events. Rooted in culture, designed to grow.
              </p>
              <p className="text-[#ecb840] text-sm lg:text-base font-medium mt-3">
                Home of <span className="font-bold">10TATIVE</span>.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-5 mt-8 fade-in-up" style={{ animationDelay: '0.15s' }}>
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#ecb840]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div 
                        className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(236, 184, 64, 0.15), rgba(236, 184, 64, 0.05))',
                          border: '1.5px solid rgba(236, 184, 64, 0.4)',
                          boxShadow: '0 0 20px rgba(236, 184, 64, 0.1)',
                        }}
                      >
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#ecb840] transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* VIP Pass - Hero Element */}
        <section className="px-6 pb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-xl mx-auto">
            <a
              href="https://darylblairgonzales.my.canva.site/clique-studio-vip-pass"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #ecb840 0%, #d4a335 50%, #c49730 100%)',
                  boxShadow: '0 10px 40px rgba(236, 184, 64, 0.3), 0 0 0 1px rgba(236, 184, 64, 0.5)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative p-4 lg:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-black/20 flex items-center justify-center backdrop-blur-sm">
                      <Tag className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-black">VIP Pass</h3>
                      <p className="text-xs lg:text-sm text-black/70">Unlock exclusive perks & discounts</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Primary CTAs - Registration Forms */}
        <section className="px-6 pb-6 fade-in-up" style={{ animationDelay: '0.25s' }}>
          <div className="max-w-xl mx-auto space-y-3">
            {primaryLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div 
                    className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(236, 184, 64, 0.12), rgba(236, 184, 64, 0.05))',
                      border: '1px solid rgba(236, 184, 64, 0.4)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div className="p-4 lg:p-5 flex items-center gap-3 lg:gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#ecb840]/20 flex items-center justify-center group-hover:bg-[#ecb840]/30 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#ecb840]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-[#ecb840] transition-colors">
                          {link.title}
                        </h3>
                        {link.description && (
                          <p className="text-xs lg:text-sm text-gray-400 mt-0.5 truncate">{link.description}</p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Secondary Links Grid */}
        <section className="px-6 pb-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {secondaryLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div 
                      className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-[1.03] h-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div className="p-4 flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#ecb840]/20 transition-colors">
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#ecb840] transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-xl mx-auto px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* Location Card */}
        <section className="px-6 pb-6 fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="max-w-xl mx-auto">
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(236, 184, 64, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 184, 64, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }} />
                </div>
                
                <div className="relative p-4 lg:p-5">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#ecb840]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ecb840]/25 transition-colors">
                      <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-[#ecb840] group-hover:animate-bounce" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm lg:text-base font-semibold text-[#ecb840] mb-1">Visit Our Studio</h3>
                      <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                        {address.text}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Tap to get directions</span>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#ecb840]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ecb840]/20 transition-colors">
                      <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-[#ecb840]" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Tertiary Links - House Rules & Rates */}
        <section className="px-6 pb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-xl mx-auto">
            <div className="flex gap-3">
              {tertiaryLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group"
                  >
                    <div 
                      className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <div className="p-3 lg:p-4 flex items-center justify-center gap-2">
                        <Icon className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
                        <span className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 border-t border-gray-800/30">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Clique Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
