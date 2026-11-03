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
  if (!embed) return null

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
            <iframe
              src={embed}
              title={`${site.name} — ${site.showreel.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
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
