import { Play } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { site } from "@/data/site"

function toEmbed(url: string): string | null {
  if (!url) return null
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return null
}

export function Showreel() {
  const embed = toEmbed(site.showreel.url)

  return (
    <section id="reel" className="section-container">
      <SectionHeading
        label="Showreel"
        title="Watch this first"
        subtitle="Ninety seconds of pacing, captions and sound. If the cut does not hold you, nothing else on this page matters."
      />

      <FadeInView>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-surface-dark-alt">
          <div className="aspect-video w-full">
            {embed ? (
              <iframe
                src={embed}
                title={`${site.name} — ${site.showreel.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed border-white/15 p-8 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                  <Play size={22} />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Showreel slot empty
                </p>
                <p className="max-w-sm text-sm text-text-dark-secondary">
                  Paste an unlisted YouTube or Vimeo link into{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[11px] text-text-dark">
                    src/data/site.ts
                  </code>{" "}
                  → <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[11px] text-text-dark">showreel.url</code>.
                  It embeds here automatically.
                </p>
                <p className="max-w-sm text-xs text-text-dark-secondary/70">{site.showreel.note}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-4 py-3">
            <span className="text-sm font-medium">{site.showreel.title}</span>
            <span className="font-mono text-xs text-primary">{site.showreel.duration}</span>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}
