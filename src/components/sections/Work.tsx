import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { work, type PosterTone } from "@/data/site"

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
        label="Selected work"
        title="Edits that had to land"
        subtitle="Each slot below is shaped for food content: a hook, a process, a pay-off. Replace the placeholders with your own clips."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {work.map((item, index) => (
          <FadeInView key={item.title} delay={index * 0.05}>
            <article className="card group h-full overflow-hidden">
              <div className="relative aspect-video w-full" style={{ background: toneStyles[item.tone] }}>
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="chip bg-black/40!">{item.category}</span>
                    {item.placeholder && (
                      <span className="rounded-full border border-primary/30 bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-2xl font-medium text-white/85">{item.duration}</span>
                </div>
              </div>

              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dark-secondary">
                  {item.client}
                </p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Watch ${item.title}`}
                      className="mt-1 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <span className="mt-1 shrink-0 text-xs text-text-dark-secondary/50">—</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-dark-secondary">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip text-[11]px!">{item.role}</span>
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
