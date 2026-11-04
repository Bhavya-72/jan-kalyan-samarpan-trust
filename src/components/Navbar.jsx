import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/jan-kalyan-samarpan.png'
import { trust } from '../data/trustData'

const links = [
  { label: 'Our mission', to: '#mission' },
  { label: 'How we help', to: '#focus' },
  { label: 'About us', to: '#about' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur-xl">
      <div className="container-shell flex min-h-[82px] items-center justify-between gap-4">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3">
          <img src={logo} alt={`${trust.name} emblem`} className="h-14 w-14 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-navy sm:text-lg">Jan Kalyan</span>
            <span className="block truncate font-display text-base font-bold leading-tight text-navy sm:text-lg">Samarpan Trust</span>
            <span className="hindi mt-1 hidden text-[9px] font-medium leading-tight text-muted sm:block">{trust.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map(link => <a key={link.to} href={link.to} className="text-sm font-semibold text-muted transition-colors hover:text-ink">{link.label}</a>)}
          <a href="#donate" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-blue">
            Support us <ArrowUpRight size={15} />
          </a>
        </nav>
        <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-navy md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <nav className="border-t border-line bg-paper px-6 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="container-shell flex flex-col gap-5">
          {links.map(link => <a key={link.to} href={link.to} className="text-sm font-semibold text-muted" onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href="#donate" onClick={() => setOpen(false)} className="text-sm font-bold text-navy">Support us ↗</a>
        </div>
      </nav>}
    </header>
  )
}
