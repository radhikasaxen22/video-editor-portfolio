import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { about, site } from "@/data/site"

export function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading label="About" title={about.headline} />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <FadeInView>
          <div className="relative mx-auto max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-surface-dark-alt">
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-2xl font-semibold text-primary">
                  RS
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dark-secondary">
                  Photo slot
                </p>
                <p className="max-w-[16rem] text-xs leading-relaxed text-text-dark-secondary/70">
                  Add a well-lit portrait at{" "}
                  <code className="font-mono text-[10px] text-text-dark-secondary">public/portrait.jpg</code>.
                  A face converts better than initials.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-lg border border-primary/25 bg-surface-dark px-3 py-1.5 font-mono text-[11px] text-primary">
              {site.timezone}
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.08}>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-text-dark-secondary">
                {paragraph}
              </p>
            ))}

            <dl className="mt-8 divide-y divide-white/5 border-t border-white/5">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-text-dark-secondary">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
