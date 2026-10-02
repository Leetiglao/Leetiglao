import Sidebar from './components/Sidebar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200">
      {/* Background glow. Nasa sariling wrapper ang overflow-hidden para hindi masira ang sticky */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Centered container: 2fr / 3fr = 40% / 60% */}
      <div className="relative max-w-6xl mx-auto lg:grid lg:grid-cols-[2fr_3fr]">
        <Sidebar />

        <main className="px-6 py-12 lg:px-16 lg:py-16 space-y-20">
          <Projects />
          <Skills />
          <Experience />

          <footer className="text-sm text-slate-500">
            © 2026 Justine Lee Tiglao. Built with React & Tailwind.
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App