import { Film, LayoutTemplate, Music2, Smartphone, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { services } from "@/data/site"

const icons: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  audio: Music2,
  film: Film,
  layout: LayoutTemplate,
}

export function Services() {
  return (
    <section id="services" className="section-container">
      <SectionHeading
        label="What I edit"
        title="Built for a food channel"
        subtitle="Short-form that has to stop the scroll, and the calmer long-form version for your site — both from the same shoot."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[service.icon] ?? Film
          return (
            <FadeInView key={service.title} delay={index * 0.05}>
              <div className="card h-full p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark-secondary">{service.body}</p>
              </div>
            </FadeInView>
          )
        })}
      </div>
    </section>
  )
}
