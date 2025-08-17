import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Brush, Mail, Instagram, ShoppingCart, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// --- Helper components ---
const Section = ({ id, title, eyebrow, children }: any) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mb-10">
      {eyebrow && (
        <div className="mb-2">
          <Badge className="rounded-2xl px-3 py-1 text-xs" variant="secondary">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const NavLink = ({ href, children }: any) => (
  <a href={href} className="text-sm md:text-base hover:opacity-80 transition-opacity">
    {children}
  </a>
);

const Tag = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">{children}</span>
);

// --- Main Page ---
export default function OilPaintingPortfolio() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Load Lemon Squeezy checkout script for overlay/embeds
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.lemonsqueezy.com/lemon.js";
    s.defer = true;
    s.async = true;
    document.body.appendChild(s);
    return () => {
      if (s && s.parentNode) s.parentNode.removeChild(s);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl grid place-items-center bg-gradient-to-br from-rose-200 via-amber-200 to-emerald-200">
              <Palette className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-base md:text-lg font-semibold">Angela Hurt</p>
              <p className="text-[11px] md:text-xs text-muted-foreground">Oil Painter · Designer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#commissions">Commissions</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#commissions"><Calendar className="h-4 w-4 mr-2"/>Book a Commission</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight"
            >
              Painting Emotion Into <span className="underline decoration-wavy decoration-amber-300 underline-offset-8">Light</span>
            </motion.h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Contemporary oil paintings that blend classical technique with modern storytelling — portraits, florals, and celestial motifs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Tag>Portraits</Tag>
              <Tag>Florals</Tag>
              <Tag>Zodiac & Myth</Tag>
              <Tag>Commissioned Heirlooms</Tag>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#work"><Sparkles className="h-4 w-4 mr-2"/>View Portfolio</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="#contact"><Mail className="h-4 w-4 mr-2"/>Say Hello</a>
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
                <Instagram className="h-4 w-4"/>
                <span className="text-sm">Instagram</span>
              </a>
              <a href="#shop" className="inline-flex items-center gap-2 hover:opacity-80">
                <ShoppingCart className="h-4 w-4"/>
                <span className="text-sm">Shop Prints</span>
              </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden shadow-sm">
                <img src={src} alt="Oil painting" className="w-full h-48 md:h-64 object-cover"/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <Section id="work" title="Featured Work" eyebrow="Portfolio">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Celestial Reverie (Sagittarius)", src: "https://images.unsplash.com/photo-1475274228472-8f8855b9fd95?q=80&w=1200&auto=format&fit=crop", tags:["Oil on linen","24×30 in"] },
            { title: "Violet Flora No. 3", src: "https://images.unsplash.com/photo-1495078065017-564723da1408?q=80&w=1200&auto=format&fit=crop", tags:["Oil on panel","12×16 in"] },
            { title: "Portrait of M. in Gold", src: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1200&auto=format&fit=crop", tags:["Oil on linen","30×40 in"] },
            { title: "Luminous Garden", src: "https://images.unsplash.com/photo-1496275068113-fff8c90750d0?q=80&w=1200&auto=format&fit=crop", tags:["Oil on canvas","18×24 in"] },
            { title: "Sea & Sky Study", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", tags:["Oil on panel","9×12 in"] },
            { title: "The Quiet Hour", src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop", tags:["Oil on linen","24×24 in"] },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <CardHeader className="p-0">
                <img src={item.src} alt={item.title} className="w-full h-56 object-cover"/>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {item.tags.map((t, idx) => <Tag key={idx}>{t}</Tag>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Commissions */}
      <Section id="commissions" title="Commission an Heirloom" eyebrow="Commissions">
        <p className="text-muted-foreground max-w-2xl mb-8">I take a limited number of bespoke oil painting commissions each quarter. Portraits, florals, and symbolic works (zodiac/myth) welcome.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Petite", price: "$450+", desc: "Oil on panel · 9×12–11×14 in", bullets: ["1 subject","Varnished & wired","Certificate of Authenticity"] },
            { name: "Classic", price: "$1,200+", desc: "Oil on linen · 16×20–18×24 in", bullets: ["Up to 2 subjects","Archival materials","Proof sketch included"] },
            { name: "Statement", price: "$2,800+", desc: "Oil on linen · 24×30–30×40 in", bullets: ["Complex composition","Premium frame option","Studio sitting or photo guide"] },
          ].map((tier, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Brush className="h-5 w-5"/>{tier.name}</CardTitle>
                <CardDescription>{tier.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {tier.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900"/>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-2xl" asChild>
                  <a href="#contact">Request Availability</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" title="From Spark to Canvas" eyebrow="Process">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Discovery", text: "We chat about subject, mood, size, and budget." },
            { step: "2", title: "Design", text: "Reference photos or sitting; tonal sketch for approval." },
            { step: "3", title: "Painting", text: "Layers of oil glazes build depth and light." },
            { step: "4", title: "Deliver", text: "Varnish, frame (optional), and ship with COA." },
          ].map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <Badge variant="outline" className="rounded-2xl">Step {s.step}</Badge>
                <CardTitle className="mt-2">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.text}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About Angela" eyebrow="Studio Notes">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1513366884929-f0b3bedfb547?q=80&w=1200&auto=format&fit=crop" alt="Artist in studio" className="w-full h-80 object-cover"/>
          </div>
          <div className="md:col-span-3">
            <p className="text-muted-foreground leading-relaxed">
              I’m an oil painter and designer creating contemporary work infused with symbolism and light. My practice blends classical technique with a modern sensibility — from intimate portraits to mythic zodiac pieces.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>Oil on Linen</Tag>
              <Tag>Alla Prima</Tag>
              <Tag>Glazing</Tag>
              <Tag>Archival</Tag>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Collector Kind Words" eyebrow="Testimonials">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "The portrait is luminous — she captured our daughter’s spirit.", name: "M. Rivera" },
            { quote: "A modern heirloom. The golds absolutely glow in evening light.", name: "J. Chen" },
            { quote: "Professional, communicative, and the results exceeded expectations.", name: "T. Patel" },
          ].map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-xs text-muted-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Shop (optional) */}
      <Section id="shop" title="Shop Fine Art Prints" eyebrow="Limited Editions">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <CardHeader className="p-0">
                <img src={`https://images.unsplash.com/photo-15${i}585888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop`} alt="Print" className="w-full h-56 object-cover"/>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-lg">Celestial Study No. {i}</CardTitle>
                <CardDescription>Archival giclée print</CardDescription>
                <p className="mt-2 text-sm">From $85</p>
              </CardContent>
              <CardFooter>
                {/* Replace PRODUCTID with your Lemon Squeezy product ID, or use a direct product URL */}
                <a
                  href="https://yourstore.lemonsqueezy.com/checkout/buy/PRODUCTID"
                  className="w-full inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm hover:opacity-90 lemonsqueezy-button"
                  data-ls-mode="overlay"
                >
                  Buy Now
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section id="newsletter" title="Studio Letters" eyebrow="Newsletter">
        <div className="rounded-2xl border p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-medium">Get first look at new originals & drops</h3>
              <p className="mt-2 text-sm text-muted-foreground">Occasional emails with new work, behind-the-scenes, and commission openings.</p>
            </div>
            <form className="flex gap-3" onSubmit={(e)=>{e.preventDefault(); alert("Subscribed (demo)");}}>
              <Input type="email" placeholder="Your email" required className="rounded-2xl"/>
              <Button type="submit" className="rounded-2xl">Subscribe</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s Create Something Beautiful" eyebrow="Contact">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border p-6">
            {/* Formspree integration — replace YOUR_FORM_ID with your actual ID */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="New commission inquiry via AngelaHurt.com" />
              {/* Optional: redirect to a thank-you page */}
              {/* <input type="hidden" name="_redirect" value="https://angelahurt.com/thank-you" /> */}
              {/* Spam honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="text-sm" htmlFor="name">Name</label>
                <Input id="name" name="name" placeholder="Your name" className="rounded-2xl mt-1" required/>
              </div>
              <div>
                <label className="text-sm" htmlFor="email">Email</label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" className="rounded-2xl mt-1" required/>
              </div>
              <div>
                <label className="text-sm" htmlFor="details">Project details</label>
                <Textarea id="details" name="message" placeholder="Tell me about your idea, size, timeline…" className="rounded-2xl mt-1" rows={5} required/>
              </div>
              <Button type="submit" className="rounded-2xl w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526312426976-593c128eea49?q=80&w=1200&auto=format&fit=crop" alt="Palette and brushes" className="w-full h-72 object-cover"/>
            </div>
            <ul className="mt-6 text-sm space-y-2">
              <li><strong>Email:</strong> hello@angelahurt.studio</li>
              <li><strong>Instagram:</strong> @angelahurt.art</li>
              <li><strong>Location:</strong> United States · Ships worldwide</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Angela Hurt — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
