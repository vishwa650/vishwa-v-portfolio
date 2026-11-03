import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration and mini badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-1">{intern.role}</h3>
        <p className="text-xs uppercase tracking-widest font-bold text-red-200 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider font-bold text-white/80 mb-2">
              Skills Gained:
            </p>
            <ul className="space-y-1.5">
              {intern.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-red-50">
                  <span className="text-black font-black mt-0.5">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies bottom section */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="pt-4 border-t border-white/10 mt-auto">
          <p className="text-[11px] uppercase tracking-wider font-mono text-white/60 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top edge torn-paper SVG divider connecting with previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star: Bottom Left at 20% opacity */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute bottom-8 left-8 w-12 h-12 text-black opacity-20 animate-pulse pointer-events-none z-0"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base">
            Professional internships, training programs, and practical applied experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
