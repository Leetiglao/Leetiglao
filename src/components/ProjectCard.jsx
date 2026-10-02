// Walang kahon: image + text lang, parang entry sa CV
function ProjectCard({ title, description, image, tags, link }) {
  return (
    <a href={link} target="_blank" className="group block">
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-semibold text-white group-hover:text-emerald-400 transition">
          {title}
        </h3>
        <span className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition">
          ↗
        </span>
      </div>

      <p className="mt-1 text-sm text-slate-400">{description}</p>

      {/* Tags na simpleng text, may " · " sa pagitan */}
      <p className="mt-2 text-xs text-emerald-300/80">{tags.join(' · ')}</p>
    </a>
  )
}

export default ProjectCard