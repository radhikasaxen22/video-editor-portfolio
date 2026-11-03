import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { credits } from "@/data/site"

export function Credits() {
  return (
    <section id="credits" className="section-container">
      <SectionHeading
        label="Credits"
        title="Channels I edit for"
        subtitle="Published work, not mock-ups. Both links open in a new tab."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {credits.map((item, index) => (
          <FadeInView key={item.url} delay={index * 0.05}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex h-full items-center justify-between gap-4 p-5"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                  {item.platform} · {item.channel}
                </p>
                <p className="mt-1 text-base font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-text-dark-secondary">{item.role}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
