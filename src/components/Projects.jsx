import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import CoffeegeneyImg from '../assets/projectimages/Coffeegeney.png'

// Dagdag ka lang ng object dito para magdagdag ng project
const projects = [
  {
    title: 'Coffeegeney',
    description: 'Full-stack coffee shop web app.',
    image: CoffeegeneyImg,
    tags: ['React', 'Tailwind', 'Node.js'],
    link: '#',
  },
  {
    title: 'Coffee Shop Store',
    description: 'E-commerce website for a real coffee shop client.',
    image: 'https://placehold.co/600x400/0f172a/34d399?text=Coffee+Shop',
    tags: ['React', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Short description of what it does.',
    image: 'https://placehold.co/600x400/0f172a/34d399?text=Project+3',
    tags: ['JavaScript'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="fade-up scroll-mt-10">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects