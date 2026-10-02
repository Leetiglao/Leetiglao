import SectionTitle from './SectionTitle'

// Placeholder lang ito. Palitan mo ng totoong detalye mo.
const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Coffee Shop E-commerce (Client Project)',
    period: '20XX – Present',
    points: [
      'Built an online store for a coffee shop using React and Tailwind CSS.',
      'Deployed the site and handled updates based on client feedback.',
    ],
  },
  {
    role: 'Content Creator',
    company: 'YouTube Channel',
    period: '20XX – Present',
    points: [
      'Create and edit videos for my own channel.',
      'Learned storytelling, editing, and audience engagement.',
    ],
  },
  {
    role: 'Barista',
    company: 'Coffee Shop',
    period: '20XX – Present',
    points: [
      'Serve customers in a fast-paced environment.',
      'Developed teamwork, communication, and time management skills.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="fade-up scroll-mt-10">
      <SectionTitle>Experience</SectionTitle>

      {/* Timeline: may linya sa kaliwa at tuldok sa bawat entry */}
      <ol className="border-l border-slate-800 ml-1 space-y-10">
        {experiences.map((job) => (
          <li key={job.role} className="relative pl-8">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950" />

            <p className="text-sm text-slate-500">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{job.role}</h3>
            <p className="text-emerald-400 text-sm">{job.company}</p>

            <ul className="mt-3 space-y-1.5 text-sm text-slate-400 list-disc list-inside marker:text-slate-600">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience