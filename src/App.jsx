import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-white text-gray-900">
      <div className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200/70 via-purple-200/60 to-pink-200/60 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-200/70 py-10 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} zdienos — Crafted with care.</p>
          <a href="#home" className="text-sm font-medium text-blue-600 hover:text-blue-700">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
