'use client'

import { Instagram, Facebook, MapPin, FileText, Video, FolderOpen, Scroll, BookOpen, HelpCircle, Tag, Sparkles } from 'lucide-react'
import Image from 'next/image'

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const socials = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/cliquestudio.ph/',
    icon: Instagram,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61578416800288',
    icon: Facebook,
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@cliquestudio.ph',
    icon: TikTokIcon,
  },
]

const links = [
  {
    title: 'FAQs',
    href: 'https://docs.google.com/faqs',
    icon: HelpCircle,
  },
  {
    title: 'Class Pre-Registration',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfCc_wl6-jLKubONJleb96NPFrNjew3M09_MigoBeG8MrD7FQ/viewform',
    icon: FileText,
  },
  {
    title: 'Studio Rentals',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdlh_KGD54tMnkLCCWlRYwIGIOIa-V7h4CjxXfB_qWArLhcAw/viewform',
    icon: Video,
  },
  {
    title: 'A10DANCE',
    href: 'https://docs.google.com/a10dance',
    icon: Sparkles,
  },
  {
    title: 'Class Footage',
    href: 'https://drive.google.com/drive/folders/1ndBLcz374d2ev2ou8EH7IePlhWcVldw3',
    icon: FolderOpen,
  },
]

const halfButtons = [
  {
    title: 'House Rules',
    href: 'https://docs.google.com/house-rules',
    icon: Scroll,
  },
  {
    title: 'Rates',
    href: 'https://docs.google.com/rates',
    icon: BookOpen,
  },
]

const address = {
  text: '2nd Floor, Curamed Building, 12 Aspiras - Palispis Hwy, Baguio, 2600 Benguet',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('2nd Floor, Curamed Building, 12 Aspiras - Palispis Hwy, Baguio, 2600 Benguet'),
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050301] text-white relative overflow-hidden">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[20s] hover:scale-105"
        style={{ 
          backgroundImage: 'url(/bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
      
      {/* Floating Particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050301]/80 via-[#050301]/60 to-[#050301]/90" />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-12 flex flex-col items-center relative z-10">
        {/* Logo */}
        <div className="relative w-96 h-96 rounded-2xl overflow-hidden pointer-events-none fade-in-up logo-pulse">
          <Image
            src="/logo.png"
            alt="Clique Studio Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm text-center tracking-wide -mt-20 fade-in-up fade-in-up-delay-1">Dance Studio & Creative Space</p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-8 fade-in-up fade-in-up-delay-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="group cursor-pointer social-pulse"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border-glow-animate"
                  style={{ 
                    background: 'rgba(30, 30, 30, 0.8)',
                    border: '1px solid rgba(236, 184, 64, 0.2)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#ecb840] transition-all duration-300 group-hover:scale-110" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Main Links */}
        <div className="w-full space-y-3 fade-in-up fade-in-up-delay-3">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-xl btn-glow btn-shimmer"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(236, 184, 64, 0.05), rgba(212, 163, 58, 0.03))',
                    border: '1px solid rgba(236, 184, 64, 0.3)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(236, 184, 64, 0.1) 0%, transparent 70%)',
                    }}
                  />
                  <div className="relative flex items-center justify-center gap-3 py-4 px-6 font-medium text-base text-white/90 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 flex-shrink-0 text-[#ecb840]/80 group-hover:text-[#ecb840] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="group-hover:tracking-wider transition-all duration-300">{link.title}</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Half-width Buttons */}
        <div className="w-full flex gap-3 mt-3 fade-in-up fade-in-up-delay-4">
          {halfButtons.map((button) => {
            const Icon = button.icon
            return (
              <a
                key={button.title}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group cursor-pointer"
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-xl btn-glow btn-shimmer"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(236, 184, 64, 0.05), rgba(212, 163, 58, 0.03))',
                    border: '1px solid rgba(236, 184, 64, 0.3)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(236, 184, 64, 0.1) 0%, transparent 70%)',
                    }}
                  />
                  <div className="relative flex flex-col items-center justify-center gap-2 py-4 px-4 font-medium text-sm text-white/90 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#ecb840]/80 group-hover:text-[#ecb840] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="group-hover:tracking-wider transition-all duration-300">{button.title}</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Location */}
        <div className="w-full mt-6 fade-in-up fade-in-up-delay-5">
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full group"
          >
            <div 
              className="rounded-2xl p-4 transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-xl btn-glow"
              style={{ 
                background: 'rgba(5, 3, 1, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#ecb840]/20 rounded-lg group-hover:bg-[#ecb840]/30 transition-all duration-300 backdrop-blur-sm group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-[#ecb840] group-hover:animate-bounce" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#ecb840]/90 mb-1 group-hover:text-[#ecb840] transition-colors">Our Location</p>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {address.text}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* VIP Pass */}
        <div className="w-full mt-6 fade-in-up fade-in-up-delay-5">
          <a
            href="https://docs.google.com/vip-pass"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full group cursor-pointer"
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-xl btn-glow btn-shimmer border-glow-animate"
              style={{ 
                background: 'linear-gradient(135deg, rgba(236, 184, 64, 0.05), rgba(212, 163, 58, 0.03))',
                border: '1px solid rgba(236, 184, 64, 0.3)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(236, 184, 64, 0.1) 0%, transparent 70%)',
                }}
              />
              <div className="relative flex items-center justify-center gap-3 py-4 px-6 font-medium text-base text-white/90 group-hover:text-white transition-all duration-300">
                <Tag className="w-5 h-5 flex-shrink-0 text-[#ecb840]/80 group-hover:text-[#ecb840] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="group-hover:tracking-wider transition-all duration-300">VIP Pass</span>
              </div>
            </div>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-gray-800/50 relative z-10 bg-[#050301]/80 backdrop-blur-sm">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Clique Studio. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
