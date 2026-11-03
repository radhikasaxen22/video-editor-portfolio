import { ArrowUpRight, Mail, MessageSquare, Zap } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { site } from "@/data/site"

const socialLabels: { key: keyof typeof site.links; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "behance", label: "Behance" },
]

export function Contact() {
  const socials = socialLabels.filter((entry) => site.links[entry.key])
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Video editing — test edit")}`

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        label="Contact"
        title="Send footage. Get a cut."
        subtitle="Tell me the turnaround you need and the style you are after. If it is a fit, I can start on the next upload."
      />

      <FadeInView>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-dark-alt">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="section-label">Open now</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                {site.availability}
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={mailto} className="btn-primary">
                  <Mail size={16} /> Email me
                </a>
                {site.resumeUrl && (
                  <a href={site.resumeUrl} target="_blank" rel="noreferrer noopener" className="btn-outline">
                    CV <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <dl className="mt-8 space-y-3 border-t border-white/5 pt-6 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-dark-secondary">Email</dt>
                  <dd className="font-mono text-[13px]">{site.email}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-dark-secondary">Time zone</dt>
                  <dd className="font-mono text-[13px]">{site.timezone}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-dark-secondary">Turnaround</dt>
                  <dd className="font-mono text-[13px] text-primary">24 hours or faster</dd>
                </div>
              </dl>

              {socials.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {socials.map((entry) => (
                    <a
                      key={entry.key}
                      href={site.links[entry.key]}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="chip text-[11]px! hover:!bg-primary/20"
                    >
                      {entry.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {site.testEdit.enabled && (
              <div className="border-t border-white/5 bg-primary/[0.04] p-8 sm:p-10 lg:border-l lg:border-t-0">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Zap size={18} />
                </span>
                <h4 className="mt-4 text-lg font-semibold">Try before you commit</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-dark-secondary">{site.testEdit.body}</p>

                <div className="mt-6 flex items-start gap-3 rounded-lg border border-white/5 bg-black/20 p-4">
                  <MessageSquare size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-text-dark-secondary">
                    One clip, one sentence on the style, and two references. That is the whole brief.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </FadeInView>
    </section>
  )
}
