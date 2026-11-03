import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BookOpen, HeartPulse, Sprout, HandHeart, Droplets, Recycle, ShieldCheck } from 'lucide-react'
import logo from '../assets/jan-kalyan-samarpan-logo.png'
import { trust, focusAreas } from '../data/trustData'

const introCards = [
  { icon: BookOpen, title: 'Education', text: 'Learning opportunities and educational assistance.' },
  { icon: HeartPulse, title: 'Healthcare', text: 'Medical relief, health awareness and wellbeing.' },
  { icon: Sprout, title: 'Community welfare', text: 'Clean, healthy and supportive communities.' }
]

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute -right-36 -top-32 h-[540px] w-[540px] rounded-full border border-gold/15"/>
        <div className="absolute -right-20 -top-16 h-[400px] w-[400px] rounded-full border border-gold/20"/>
        <div className="container-shell grid min-h-[650px] items-center gap-10 py-16 md:grid-cols-[1.08fr_.92fr] md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-gold"/> A charitable trust · Bawana, Delhi</p>
            <h1 className="display-title mt-7 max-w-2xl text-[3.25rem] sm:text-6xl lg:text-[5rem]"> सेवा, शिक्षा और <span className="text-gold">समर्पण</span> से बेहतर कल।</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">Jan Kalyan Samarpan Trust is established with a commitment to charitable work that supports education, healthcare, cleanliness, community welfare and environmental care.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper transition hover:-translate-y-1 hover:bg-blue">Explore our focus areas <ArrowUpRight size={17}/></Link>
              <Link to="/contact" className="rounded-full border border-line px-7 py-4 text-sm font-bold text-ink transition hover:border-gold hover:bg-cream">Contact the trust</Link>
            </div>
            <div className="mt-14 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-muted"><span className="grid h-9 w-9 place-items-center rounded-full border border-line"><ArrowDown size={15}/></span> सेवा से संस्कार और समर्पण से समाज निर्माण</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto flex min-h-[440px] w-full max-w-[500px] items-center justify-center">
            <div className="soft-pattern absolute inset-8 rounded-[48%]"/>
            <div className="absolute inset-2 rounded-[48%] border border-gold/35"/>
            <div className="absolute inset-0 rounded-[48%] border border-navy/10"/>
            <div className="relative z-10 flex w-[82%] flex-col items-center rounded-[36px] border border-gold/25 bg-paper/90 px-7 py-9 text-center shadow-soft backdrop-blur-sm">
              <img src={logo} alt="Jan Kalyan Samarpan Trust official emblem" className="h-64 w-full object-contain sm:h-72"/>
              <p className="hindi mt-2 text-sm font-semibold leading-7 text-navy">{trust.tagline}</p>
              <span className="mt-3 h-px w-16 bg-gold"/>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[.2em] text-muted">Bawana · Delhi · India</p>
            </div>
            <div className="absolute -bottom-2 -left-1 rounded-2xl border border-line bg-card px-5 py-4 shadow-soft sm:-left-8"><p className="font-display text-2xl text-navy">2026</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted">Established</p></div>
            <div className="absolute -right-1 top-8 grid h-16 w-16 place-items-center rounded-full bg-gold text-paper shadow-soft sm:-right-4"><HandHeart size={27}/></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream/70 py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[.82fr_1.18fr]">
          <div><p className="eyebrow">About the trust</p><h2 className="display-title mt-4 text-4xl md:text-5xl">Working for the <span className="text-gold">wellbeing</span> of all.</h2></div>
          <div>
            <p className="text-lg leading-9 text-muted">Jan Kalyan Samarpan Trust is a charitable trust established to work towards public welfare. Its trust deed sets out objectives covering education, medical relief, sanitation, water conservation, environmental protection and assistance for people in need.</p>
            <p className="mt-5 leading-8 text-muted">The trust’s stated objectives extend to both rural and urban communities, with an emphasis on improving quality of life and supporting institutions and initiatives that serve the public.</p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-gold/20 bg-paper p-5"><ShieldCheck className="mt-0.5 shrink-0 text-gold" size={20}/><p className="text-sm leading-7 text-muted">Our website presents the charitable aims recorded in the trust deed. Specific programmes, services and achievements will be added as they are confirmed by the trust.</p></div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Our purpose</p><h2 className="display-title mt-4 text-4xl md:text-5xl">Focus areas that matter.</h2></div><p className="max-w-md leading-7 text-muted">The trust deed identifies several areas of charitable work intended to support people and strengthen communities.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {introCards.map(({icon: Icon, title, text}) => <div key={title} className="rounded-3xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-soft"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-goldLight/45 text-navy"><Icon size={22}/></span><h3 className="mt-7 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{text}</p></div>)}
        </div>
        <div className="mt-8 text-center"><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:gap-3">View all focus areas <ArrowUpRight size={16}/></Link></div>
      </section>

      <section className="bg-navy py-20 text-paper md:py-24">
        <div className="container-shell">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-goldLight">Trust leadership</p><h2 className="display-title mt-4 text-4xl md:text-5xl">The people named in the trust deed.</h2><p className="mt-5 leading-8 text-paper/70">The following names and roles are taken from the deed. Personal biographies and photographs were not included in the supplied documents.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-paper/15 bg-paper/[.06] p-7"><div className="grid h-14 w-14 place-items-center rounded-full bg-goldLight font-display text-lg text-navy">SK</div><h3 className="mt-6 font-display text-2xl">{trust.settlor}</h3><p className="mt-1 text-xs font-bold uppercase tracking-widest text-goldLight">Settlor</p><p className="mt-4 text-sm leading-7 text-paper/65">Named as the settlor in the trust deed.</p></div>
            {trust.trustees.map(person => <div key={person.name} className="rounded-3xl border border-paper/15 bg-paper/[.06] p-7"><div className="grid h-14 w-14 place-items-center rounded-full bg-goldLight font-display text-lg text-navy">{person.name.split(' ').slice(1).map(x => x[0]).join('')}</div><h3 className="mt-6 font-display text-2xl">{person.name}</h3><p className="mt-1 text-xs font-bold uppercase tracking-widest text-goldLight">{person.role}</p><p className="mt-4 text-sm leading-7 text-paper/65">Named as a trustee in the trust deed.</p></div>)}
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-[#E9E1CF] p-8 md:flex-row md:items-center md:p-14">
          <div className="max-w-xl"><p className="eyebrow">Connect with the trust</p><h2 className="display-title mt-3 text-4xl md:text-5xl">Let’s work towards a better tomorrow.</h2><p className="mt-4 leading-7 text-muted">For enquiries about the trust and its charitable objectives, please get in touch.</p></div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper hover:bg-blue">Contact us <ArrowUpRight size={17}/></Link>
        </div>
      </section>
    </main>
  )
}
