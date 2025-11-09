import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-blue-600">Hi, I’m Zaki</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Building delightful web experiences
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              Frontend-focused engineer crafting fast, accessible, and aesthetically pleasing interfaces with React, Next.js, and Tailwind CSS.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-1">
              <div className="h-full w-full rounded-2xl bg-white shadow-xl flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22766216?v=4"
                  alt="Profile"
                  className="h-48 w-48 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
