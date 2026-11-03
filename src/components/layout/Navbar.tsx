import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { site } from "@/data/site"

const links = [
  { href: "#reel", label: "Reel" },
  { href: "#work", label: "Work" },
  { href: "#turnaround", label: "Turnaround" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-mono text-xs font-bold text-[#14100a]">
            RS
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-dark-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2! px-4!">
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg p-2 text-text-dark-secondary transition-colors hover:text-primary md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-text-dark-secondary transition-colors hover:bg-white/5 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
