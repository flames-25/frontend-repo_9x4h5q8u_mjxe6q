import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} zdienos. All rights reserved.</p>
          <a href="#home" className="text-sm font-medium text-blue-600 hover:text-blue-700">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
