import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white grid place-items-center font-bold">n</div>
          <span className="font-semibold tracking-tight text-slate-900">niomag</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link className="hover:text-slate-900" to="/">Home</Link>
          <Link className="hover:text-slate-900" to="/hub">SnapNGo Hub</Link>
          <Link className="hover:text-slate-900" to="/mini">SnapNGo Mini</Link>
          <Link className="hover:text-slate-900" to="/faq">FAQ</Link>
          <Link className="hover:text-slate-900" to="/about">About</Link>
          <Link className="hover:text-slate-900" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

function CTAButton({ to, children, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const styles = variant === 'primary'
    ? 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900'
    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-300';
  return <Link to={to} className={`${base} ${styles}`}>{children}</Link>
}

function HeroImage({ banks = 3, color = 'grey', type = 'hub' }) {
  const backend = import.meta.env.VITE_BACKEND_URL || ''
  const url = `${backend}/image/${type}?${type === 'hub' ? `pack=${banks}&` : ''}color=${color}`
  return (
    <img src={url} alt="SnapNGo" className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-slate-200" />
  )
}

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Never Charge Your Phone the Old Way Again.</h1>
            <p className="text-lg text-slate-600 mb-8">Snap-in, swappable MagSafe power banks that live in a sleek hub—always charged, always ready.</p>
            <div className="flex flex-wrap gap-3">
              <CTAButton to="/hub">Shop SnapNGo Hub</CTAButton>
              <CTAButton to="/mini" variant="secondary">Shop SnapNGo Mini</CTAButton>
            </div>
          </div>
          <div className="relative">
            <HeroImage banks={3} color="grey" type="hub" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">How SnapNGo Works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Snap', desc: 'Attach the thin niomag power bank to the back of your phone.' },
              { title: 'Go', desc: 'Charge wirelessly while you move.' },
              { title: 'Swap', desc: 'Drop used bank back into the hub and grab a fresh one.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white grid place-items-center mb-4">{idx+1}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">Product Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 bg-white">
              <div className="sm:w-1/3"><HeroImage banks={3} color="grey" type="hub" /></div>
              <div className="sm:flex-1">
                <h3 className="font-semibold text-slate-900">SnapNGo Hub</h3>
                <p className="text-slate-600 text-sm mb-4">Best for home & families.</p>
                <CTAButton to="/hub">View details</CTAButton>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 bg-white">
              <div className="sm:w-1/3"><HeroImage banks={2} color="grey" type="mini" /></div>
              <div className="sm:flex-1">
                <h3 className="font-semibold text-slate-900">SnapNGo Mini</h3>
                <p className="text-slate-600 text-sm mb-4">Best for desk, workplace & car.</p>
                <CTAButton to="/mini">View details</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Features Strip */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-6 overflow-x-auto no-scrollbar text-sm text-slate-700">
            {[
              '50% phone charge in 1 hour',
              'Ultra-slim 0.65 cm (6.5 mm) power banks',
              'Auto-cooling temperature control',
              'MagSafe / Qi2 compatible',
              'Lightweight, premium aluminum design',
              'Smart LED indicators per bank'
            ].map((f, i) => (
              <div key={i} className="flex-none px-4 py-2 rounded-full bg-white border border-slate-200">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Now my family never fights over chargers.',
              'Feels like Apple made it.',
              'Slim, cool, and always ready.'
            ].map((q, i) => (
              <blockquote key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-slate-700">“{q}”</blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
          <div className="flex flex-wrap gap-4 mb-4">
            <Link to="/hub" className="hover:text-slate-900">SnapNGo Hub</Link>
            <Link to="/mini" className="hover:text-slate-900">SnapNGo Mini</Link>
            <Link to="/faq" className="hover:text-slate-900">FAQ</Link>
            <Link to="/about" className="hover:text-slate-900">About</Link>
            <Link to="/contact" className="hover:text-slate-900">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} niomag</p>
        </div>
      </footer>
    </main>
  )
}

function FeatureList() {
  const items = [
    '50% phone charge in 1 hour*',
    'Ultra-slim 0.65 cm (6.5 mm) power banks',
    'Auto-cooling feature for safer, cooler charging',
    'MagSafe / Qi2 wireless snap-on design',
    'Lightweight, pocket-friendly design',
    'Smart individual LEDs – white while charging, green when full',
    'Dock keeps every bank topped up automatically',
  ]
  return (
    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
      {items.map((t,i)=> <li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{t}</li>)}
    </ul>
  )
}

function SpecsTable() {
  const rows = [
    ['Capacity per power bank', '5000 mAh'],
    ['Dimensions', '100 x 68 x 6.5 mm'],
    ['Input/Output', 'USB-C in • 15W wireless out (Qi2/MagSafe)'],
    ['Compatibility', 'iPhone MagSafe models; Qi-enabled Android (with magnetic ring adapter)']
  ]
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="min-w-full text-sm">
        <tbody>
          {rows.map((r,i)=> (
            <tr key={i} className="even:bg-slate-50">
              <td className="p-3 font-medium text-slate-900 w-56">{r[0]}</td>
              <td className="p-3 text-slate-700">{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PackSelector({ value, onChange }) {
  const packs = [
    { id: 3, name: '1 Person Pack', desc: 'Dock + 3 power banks', price: 199 },
    { id: 4, name: '2 Person Pack', desc: 'Dock + 4 power banks', price: 239 },
    { id: 6, name: 'Family Pack', desc: 'Dock + 6 power banks', price: 299 },
  ]
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {packs.map(p => (
        <button key={p.id} onClick={()=>onChange(p)} className={`rounded-2xl border p-4 text-left transition ${value.id===p.id ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
          <div className="font-semibold">{p.name}</div>
          <div className="text-sm opacity-80">{p.desc}</div>
          <div className="mt-2 text-sm">${p.price}</div>
        </button>
      ))}
    </div>
  )
}

function ColorSelector({ value, onChange }) {
  const colors = [
    { id: 'grey', label: 'Grey', class: 'bg-gray-300' },
    { id: 'black', label: 'Black', class: 'bg-gray-900' },
    { id: 'blue', label: 'Blue', class: 'bg-blue-600' },
  ]
  return (
    <div className="flex gap-4">
      {colors.map(c => (
        <button key={c.id} onClick={()=>onChange(c.id)} className={`flex items-center gap-2 px-3 py-2 rounded-full border ${value===c.id ? 'border-slate-900' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
          <span className={`w-5 h-5 rounded-full ${c.class}`}></span>
          <span className="text-sm">{c.label}</span>
        </button>
      ))}
    </div>
  )
}

function StickyBar({ price, onBuy }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 pointer-events-none">
      <div className="max-w-3xl mx-auto rounded-full border border-slate-200 bg-white shadow/50 shadow-lg p-2 flex items-center justify-between pointer-events-auto">
        <div className="px-4 py-2 text-slate-900 font-semibold">${price} • Free shipping</div>
        <button onClick={onBuy} className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800">Add to Cart</button>
      </div>
    </div>
  )
}

function HubPage() {
  const [pack, setPack] = useState({ id: 3, name: '1 Person Pack', desc: 'Dock + 3 power banks', price: 199 })
  const [color, setColor] = useState('grey')
  const whatsInTheBox = useMemo(()=> `Dock + ${pack.id} power banks + USB-C cable + quick start guide`, [pack])

  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-10 items-start">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">SnapNGo Hub by niomag</h1>
          <p className="text-slate-600 mb-6">Dock + swappable power banks that keep everyone’s phone topped up all day.</p>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Choose your pack</h3>
              <PackSelector value={pack} onChange={setPack} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <ColorSelector value={color} onChange={setColor} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Elite features</h3>
              <FeatureList />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Specs</h3>
              <SpecsTable />
            </div>
            <div>
              <h3 className="font-semibold mb-2">What’s in the box</h3>
              <p className="text-sm text-slate-700">{whatsInTheBox}</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <HeroImage banks={pack.id} color={color} type="hub" />
        </div>
      </section>
      <StickyBar price={pack.price} onBuy={()=>alert('Added to cart')} />
    </main>
  )
}

function MiniPage() {
  const [color, setColor] = useState('grey')
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-10 items-start">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">SnapNGo Mini</h1>
          <p className="text-slate-600 mb-6">Two ultra-slim banks always charging, perfect for workspace and daily commute.</p>
          <div className="space-y-8">
            <div>
              <div className="rounded-2xl border p-4 bg-white">Mini Hub – Dock + 2 power banks.</div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <ColorSelector value={color} onChange={setColor} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Why Mini</h3>
              <p className="text-sm text-slate-700">Great for office desks, coworking spaces, and car center consoles. Keeps one bank on your phone and one always charging in the hub.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <FeatureList />
              <p className="text-xs text-slate-500 mt-2">Perfect footprint for tight spaces and cup-holder mounts.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <HeroImage banks={2} color={color} type="mini" />
        </div>
      </section>
      <StickyBar price={149} onBuy={()=>alert('Added to cart')} />
    </main>
  )
}

function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About niomag</h1>
      <p className="text-slate-700 mb-4">Our mission is simple: eliminate low-battery anxiety by making charging invisible and effortless. We build ultra-slim, swappable MagSafe power bank systems that live in your space—and move with you.</p>
      <p className="text-slate-700 mb-4">We obsess over premium materials, safety, and durability. Every edge, finish, and curve is tuned for a clean, modern aesthetic that complements your devices.</p>
      <div className="my-8 p-6 rounded-2xl border bg-white">
        <h3 className="font-semibold mb-2">How we started</h3>
        <p className="text-sm text-slate-700">Born from a simple frustration—cables everywhere, dead phones, and ugly chargers—niomag set out to design a system that feels inevitable. After countless prototypes and user tests, SnapNGo was created to keep power always topped up with zero fuss.</p>
      </div>
      <div className="my-8 p-6 rounded-2xl border bg-white">
        <h3 className="font-semibold mb-2">Safety & certifications</h3>
        <p className="text-sm text-slate-700">All products undergo rigorous testing and include protections for over-current, over-voltage, temperature monitoring, and foreign object detection. Certifications: CE, FCC, RoHS (placeholders).</p>
      </div>
    </main>
  )
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b">
      <button onClick={()=>setOpen(!open)} className="w-full py-4 text-left flex items-center justify-between">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-4 text-sm text-slate-700">{a}</div>}
    </div>
  )
}

function FAQPage() {
  const faqs = [
    {q:'How does SnapNGo stay charged?', a:'Each bank recharges automatically when you drop it into the dock. Smart LEDs show white while charging and turn green when full.'},
    {q:'Which phones are compatible?', a:'iPhone MagSafe models work out of the box. Qi-enabled Android phones work with a magnetic ring adapter.'},
    {q:'Can I use SnapNGo with a case?', a:'Yes—use a MagSafe case or a slim case with a magnetic ring. Thicker cases may reduce magnetic strength.'},
    {q:'How long does a power bank last?', a:'Enough to add about 50% battery in roughly an hour under typical conditions.'},
    {q:'Is it safe to keep the dock plugged in 24/7?', a:'Yes. Auto-cooling and smart power management keep temperatures in check and protect batteries.'},
    {q:'What happens if one bank fails?', a:'Banks are modular. If one fails, the rest still work. Contact support for a replacement.'},
    {q:'What is the warranty and return policy?', a:'1-year limited warranty and 30-day returns (placeholders).'},
  ]
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">FAQ</h1>
      <div className="rounded-2xl border bg-white divide-y">
        {faqs.map((f,i)=> <AccordionItem key={i} q={f.q} a={f.a} />)}
      </div>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Contact us</h1>
      <p className="text-slate-600 mb-6">Questions about SnapNGo Hub or SnapNGo Mini? Reach out.</p>
      <div className="rounded-2xl border bg-white p-6">
        <form className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-600">Subject</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="How can we help?" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Message</label>
            <textarea rows="5" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Tell us a bit more"></textarea>
          </div>
          <button type="button" onClick={()=>alert('Submitted')} className="justify-self-start px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800">Send</button>
        </form>
        <p className="text-sm text-slate-600 mt-6">Email: support@niomag.com • Typical reply time: 24–48 hours.</p>
      </div>
    </main>
  )
}

function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/mini" element={<MiniPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default function AppRouterWrapper(){
  // We mount our internal router under the top-level BrowserRouter already defined in main.jsx
  return <Layout />
}
