import { site } from "@/data/site"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-text-dark-secondary sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {site.name}. {site.role}.
        </p>
        <p className="font-mono">
          {site.timezone} · 24h turnaround
        </p>
      </div>
    </footer>
  )
}
