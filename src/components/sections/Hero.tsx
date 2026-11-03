import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { site } from "@/data/site"

const facts = [
  { value: "24h", label: "first cut" },
  { value: "10–15", label: "videos / month" },
  { value: "Same day", label: "revisions" },
]

export function Hero() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Test edit — 30 second cut")}`

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="section-container relative !py-0">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Short-form editor · Food & lifestyle
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {site.name}
              <span className="mt-4 block text-xl font-medium leading-snug text-text-dark-secondary sm:text-2xl">
                You shoot it. I cut it.{" "}
                <span className="text-primary">Back in 24 hours.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-dark-secondary"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#reel" className="btn-primary">
                Watch the reel <ArrowRight size={16} />
              </a>
              <a href={mailto} className="btn-outline">
                <Mail size={16} /> Send a test clip
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/5 pt-6"
            >
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-text-dark-secondary">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-mono text-lg font-medium text-primary">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Timeline />
          </motion.div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-white/5 py-3">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-8 pr-8 font-mono text-xs uppercase tracking-[0.2em] text-text-dark-secondary">
              {["Recipe reels", "ASMR cuts", "Tutorial edits", "Captions", "Colourist handoff", "24h turnaround", "10–15 / month"].map((item) => (
                <span key={item} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span className="text-primary">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type Clip = { start: number; width: number; tone?: "primary" | "muted" }

const trackRows: { label: string; clips: Clip[] }[] = [
  { label: "V2", clips: [{ start: 6, width: 12, tone: "muted" }, { start: 38, width: 16 }, { start: 68, width: 20, tone: "muted" }] },
  { label: "V1", clips: [{ start: 2, width: 22 }, { start: 26, width: 18 }, { start: 46, width: 26 }, { start: 74, width: 22 }] },
  { label: "A1", clips: [{ start: 2, width: 46, tone: "muted" }, { start: 50, width: 46, tone: "muted" }] },
  { label: "A2", clips: [{ start: 2, width: 94 }] },
]

function Timeline() {
  return (
    <div aria-hidden="true" className="card overflow-hidden p-3">
      <div className="flex items-center justify-between px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] text-text-dark-secondary">
            recipe_reel_v3.prproj
          </span>
        </div>
        <span className="font-mono text-[11px] text-primary">00:00:32:14</span>
      </div>

      <div className="relative space-y-1.5 rounded-lg bg-black/40 p-3">
        {trackRows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-6 shrink-0 font-mono text-[10px] text-text-dark-secondary/70">
              {row.label}
            </span>
            <div className="relative h-7 flex-1 overflow-hidden rounded bg-white/[0.03]">
              {row.clips.map((clip, i) => (
                <div
                  key={i}
                  className={clip.tone === "muted" ? "absolute inset-y-0 rounded-sm border border-white/10 bg-white/[0.06]" : "timeline-clip absolute inset-y-0"}
                  style={{ left: `${clip.start}%`, width: `${clip.width}%` }}
                >
                  {row.label === "A2" && (
                    <div className="flex h-full items-center gap-[2px] px-1">
                      {Array.from({ length: 48 }).map((_, bar) => (
                        <span
                          key={bar}
                          className="w-[2px] shrink-0 rounded-full bg-primary/70"
                          style={{ height: `${25 + Math.abs(Math.sin(bar * 0.7)) * 60}%` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pointer-events-none absolute inset-y-2 left-[62%] w-px bg-primary">
          <span className="absolute -top-1 -left-[3px] h-[7px] w-[7px] rotate-45 bg-primary" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-2 pb-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dark-secondary/70">
          Cut · caption · handoff
        </span>
        <span className="chip text-[10]px!">ready for grade</span>
      </div>
    </div>
  )
}
