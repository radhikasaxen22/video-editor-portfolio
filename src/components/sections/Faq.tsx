import { Plus } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { faq } from "@/data/site"

export function Faq() {
  return (
    <section id="faq" className="section-container">
      <SectionHeading
        label="Straight answers"
        title="The questions you are about to ask"
        subtitle="Better to answer them here than to have them asked after the first call."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map((item, index) => (
          <FadeInView key={item.q} delay={index * 0.04}>
            <details className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-sm font-medium sm:text-base">{item.q}</span>
                <Plus
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-dark-secondary">{item.a}</p>
            </details>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
