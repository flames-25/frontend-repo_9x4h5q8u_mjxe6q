import { Code2, Globe, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'Personal Website',
    description: 'A fast, minimal portfolio built with React and Tailwind, optimized for SEO and performance.',
    icon: Globe,
    link: 'https://zdienos.com',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'UI Components',
    description: 'Reusable, accessible React components with modern design tokens and themes.',
    icon: Code2,
    link: '#',
    tags: ['React', 'A11y', 'Design'],
  },
  {
    title: 'Launch Toolkit',
    description: 'A starter kit to ship landing pages quickly with analytics, SEO, and forms.',
    icon: Rocket,
    link: '#',
    tags: ['Vite', 'Tailwind', 'Best Practices'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600">A few things I’ve been working on recently.</p>
          </div>
          <a href="#contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Request a project →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, link, tags }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-200/60 to-indigo-200/40 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center ring-1 ring-blue-100">
                  <Icon size={20} />
                </div>
                <span className="text-xs text-gray-500">Explore</span>
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="relative mt-2 text-sm text-gray-600">{description}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
