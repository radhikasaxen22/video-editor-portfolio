import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { toolGroups } from "@/data/site"

export function Tools() {
  return (
    <section id="tools" className="section-container">
      <SectionHeading
        label="Tools"
        title="The kit"
        subtitle="Only list what you can open cold and use under deadline. Delete anything you would not want tested."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((group, index) => (
          <FadeInView key={group.label} delay={index * 0.05}>
            <div className="card h-full p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.tools.map((tool) => (
                  <li key={tool} className="flex items-start gap-2 text-sm text-text-dark-secondary">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
