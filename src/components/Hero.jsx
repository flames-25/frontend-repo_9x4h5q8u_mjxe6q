import { ArrowRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background 3D visual */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2zQ9vbQhT2Oix9vW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient veil so text stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/60 px-3 py-1 text-xs font-medium text-blue-700">
              <Sparkles size={14} /> Available for select projects
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Signature interfaces that feel premium
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              I design and engineer refined web experiences with React, Next.js, and motion. Performance-first, detail-obsessed.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative h-[420px] rounded-2xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/50 via-indigo-100/40 to-purple-100/50" />
              <div className="relative h-full w-full grid place-items-center p-8">
                <img
                  src="https://avatars.githubusercontent.com/u/22766216?v=4"
                  alt="Zdienos portrait"
                  className="h-40 w-40 rounded-full object-cover shadow-xl ring-4 ring-white/80"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Zaki Dienos</h3>
                  <p className="text-sm text-gray-600">Frontend Engineer • UI Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
