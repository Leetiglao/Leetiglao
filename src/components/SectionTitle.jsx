// Reusable na heading para pare-pareho ang itsura ng bawat section
function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-sm font-bold tracking-[0.25em] uppercase text-emerald-400">
        {children}
      </h2>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
  )
}

export default SectionTitle