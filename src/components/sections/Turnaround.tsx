import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { commitments, site } from "@/data/site"

export function Turnaround() {
  return (
    <section id="turnaround" className="section-container">
      <SectionHeading
        label="How I work with you"
        title="The part most portfolios skip"
        subtitle="You are not buying a showreel, you are buying a reliable pipeline. These are the things that actually decide whether an editor survives a fast channel."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((item, index) => (
          <FadeInView key={item.label} delay={index * 0.04}>
            <div className="card h-full p-6">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-2xl font-semibold text-primary">{item.value}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-text-dark-secondary">
                  {item.label}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-dark-secondary">{item.body}</p>
            </div>
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.1}>
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-text-dark-secondary">
            <span className="font-semibold text-text-dark">No silent misses.</span> If a day is going
            to run long, you hear it as soon as I know — before the deadline, not after it. The
            colorist never waits on a quietly unfinished timeline.
          </p>
          <a href={`mailto:${site.email}`} className="btn-outline shrink-0">
            Ask about a test edit
          </a>
        </div>
      </FadeInView>
    </section>
  )
}
