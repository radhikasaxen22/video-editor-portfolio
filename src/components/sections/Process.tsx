import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { process } from "@/data/site"

export function Process() {
  return (
    <section id="process" className="section-container">
      <SectionHeading
        label="Process"
        title="Footage in, finished cut out"
        subtitle="No discovery calls that eat a day. Four steps, with the clock running from the moment the files land."
      />

      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary/40 via-primary/15 to-transparent lg:block"
        />
        {process.map((item, index) => (
          <FadeInView key={item.step} delay={index * 0.06}>
            <div className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/30 bg-surface-dark font-mono text-sm text-primary">
                {item.step}
              </span>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dark-secondary">{item.body}</p>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
