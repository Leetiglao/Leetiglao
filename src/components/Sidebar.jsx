import { useState, useEffect } from 'react'

const socials = [ 
		{ name: 'GitHub', href: 'https://github.com/Leetiglao', icon: 'github' },
		{ name: 'Tiktok', href: 'https://www.tiktok.com/@just_lee16?is_from_webapp=1&sender_device=pc', icon: 'tiktok' },
		{ name: 'Facebook', href: 'https://www.facebook.com/justine.lee.bustria', icon: 'facebook' },
	    { name: 'Email', href: 'mailto:leetiglao5@email.com', icon: 'gmail' },
]

const links = [
 
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
{ id: 'experience', label: 'Experience' },
]



function Sidebar() {
  const [active, setActive] = useState('projects')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    // sticky = nananatili sa taas habang nag-scroll, pero nasa loob ng container
    <aside className="p-8 flex flex-col items-center justify-center text-center  lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      {/* Picture na may glow */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-30" />
        <img
          src="src/assets/profile.jpg"
          alt="Justine Lee Tiglao"
          className="relative w-36 h-36 rounded-full object-cover ring-4 ring-emerald-400/70"
        />
      </div>

      <h1 className="mt-5 text-2xl font-extrabold text-white">
        Justine Lee Tiglao
      </h1>
      <p className="mt-1 text-emerald-400 font-medium">Computer Science Student</p>

      {/* Open to work badge */}
      <div className="mt-4 inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs px-3 py-1 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        Open for freelance
      </div>

      <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
        I build web apps with React and Tailwind. I also create content on
        YouTube and love turning ideas into real projects.
      </p>

      {/* Navigation */}
      <nav className="mt-8 w-full max-w-xs flex flex-col items-start gap-1 px-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`group flex items-center gap-3 py-1.5 text-sm font-medium transition ${
              active === link.id
                ? 'text-emerald-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span
              className={`h-px transition-all ${
                active === link.id
                  ? 'w-10 bg-emerald-400'
                  : 'w-5 bg-slate-600 group-hover:w-10 group-hover:bg-white'
              }`}
            />
            {link.label}
          </a>
        ))}
      </nav>

      {/* Links sa baba */}
   {/* Socials + Contact */}
		<div className="mt-8 w-full max-w-xs flex flex-col items-center gap-5">
		{/* Icons row (yung ginawa mo sa Step 2) */}
		<div className="flex gap-4">
			{socials.map((social) => (
			 <a key={social.icon} href={social.href} target="_blank" rel="noreferrer">
				<img src={`https://cdn.simpleicons.org/${social.icon}/white`} alt={social.name} className="w-5 h-5" />
			</a>
			))}
		</div>

		{/* Contact Me button, ito yung dati mong button */}
		<a
			href="mailto:your@email.com"
			className="w-full bg-emerald-400 text-slate-900 font-semibold rounded-lg py-2 text-sm hover:bg-emerald-300 shadow-lg shadow-emerald-400/20 transition"
		>
			Contact Me
		</a>
		</div>
    </aside>
  )
}

export default Sidebar