import SectionTitle from './SectionTitle'

const logo = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 70, icon: 'react' },
      { name: 'Tailwind CSS', level: 75, icon: 'tailwindcss' },
      { name: 'HTML & CSS', level: 75, icon: 'html5' },
      { name: 'JavaScript', level: 50, icon: 'javascript' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Python', level: 65, icon: 'python' },
      { name: 'MySQL', level: 45, icon: 'mysql' },
      { name: 'MongoDB', level: 30, icon: 'mongodb' },
      { name: 'Java', level: 20, icon: 'java' },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'GitHub', level: 70, icon: 'github', invert: true },
      { name: 'Vercel', level: 70, icon: 'vercel', invert: true },
      { name: 'Netlify', level: 70, icon: 'netlify' },
      { name: 'Git (CLI)', level: 40, icon: 'git' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-10">
      <SectionTitle>Skills</SectionTitle>

      {/* Walang kahon, columns lang na may maliit na heading */}
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
              {group.category}
            </h3>

            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <div className="flex items-center gap-2">
                      <img
                        src={logo(item.icon)}
                        alt={item.name}
                        className={`w-4 h-4 ${item.invert ? 'invert' : ''}`}
                      />
                      <span className="text-slate-200">{item.name}</span>
                    </div>
                    <span className="text-slate-500 text-xs">{item.level}%</span>
                  </div>

                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="bar-grow h-full bg-emerald-400 rounded-full"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills