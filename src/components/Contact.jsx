import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
              <p className="mt-3 text-gray-600">
                Open to freelance and collaboration. The fastest way to reach me is by email.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:hello@zdienos.com"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600"
                >
                  <Mail size={18} /> hello@zdienos.com
                </a>
                <a
                  href="https://github.com/zdienos"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <Github size={18} /> github.com/zdienos
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl bg-gray-50 p-6 border border-gray-200"
            >
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
