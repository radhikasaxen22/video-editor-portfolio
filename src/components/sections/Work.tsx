import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { deliverables, type PosterTone } from "@/data/site"

const toneStyles: Record<PosterTone, string> = {
  amber: "linear-gradient(135deg, rgba(240,180,41,0.20), rgba(240,180,41,0.02) 65%)",
  violet: "linear-gradient(135deg, rgba(139,92,246,0.20), rgba(139,92,246,0.02) 65%)",
  teal: "linear-gradient(135deg, rgba(45,212,191,0.18), rgba(45,212,191,0.02) 65%)",
  rose: "linear-gradient(135deg, rgba(244,114,182,0.18), rgba(244,114,182,0.02) 65%)",
}

export function Work() {
  return (
    <section id="work" className="section-container">
      <SectionHeading
        label="What I edit"
        title="Four formats, one pipeline"
        subtitle="The shapes of edit I build for food channels, with the specs I hand them over at."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {deliverables.map((item, index) => (
          <FadeInView key={item.title} delay={index * 0.05}>
            <article className="card group h-full overflow-hidden">
              <div className="relative aspect-video w-full print:hidden" style={{ background: toneStyles[item.tone] }}>
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="chip bg-black/40!">{item.category}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">spec</span>
                  </div>
                  <span className="font-mono text-2xl font-medium text-white/85">{item.duration}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark-secondary">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip text-[11px]!">{item.role}</span>
                  {item.tools.map((tool) => (
                    <span key={tool} className="chip bg-transparent! text-[11px]! text-text-dark-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
