const { useState, useEffect, useRef } = React;

// Wider desktop canvas — mirrors max-w-6xl on mobile/tablet but stretches out on real desktops
// instead of staying pinned to a narrow phone-width column.
const WRAP = "max-w-[1400px]";

const WA_NUMBER = "5491162310105";
function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function useReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.524 5.854L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.18-1.357l-.37-.219-3.835.909.971-3.75-.241-.385A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["#servicios", "Servicios"],
    ["#clientes", "Clientes"],
    ["#inversion", "Inversión"],
    ["#nosotros", "Nosotros"],
    ["#contacto", "Contacto"],
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-16 ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src="assets/logo-white.svg" alt="Carmi Ads" className="h-9 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-white/70 hover:text-brand-blue font-body font-medium text-sm transition-colors">
              {label}
            </a>
          ))}
          <a href="#contacto" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-all active:scale-95">
            Hablemos
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen((o) => !o)} aria-label="Abrir menú">
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark shadow-lg flex flex-col items-center gap-6 py-8">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-white font-body font-medium text-base">
              {label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="bg-brand-blue text-white font-semibold text-sm px-6 py-3 rounded-full">
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    if (typeof gsap === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.set(".hero-word", { yPercent: 110 });
      gsap.set(".hero-anim", { opacity: 0, y: 20 });
      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(".hero-word", { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.07 }).to(
        ".hero-anim",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 },
        "-=0.5"
      );
      // Slow parallax drift on the background photo as you scroll past the hero.
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".hero-photo", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const words = ["TU NEGOCIO", "NO TIENE", "SEÑAL."];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="hero-photo absolute inset-0 -top-[10%] h-[120%]">
        <img src="assets/hero/laguna-olavarria.jpg" alt="Laguna de Olavarría" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-brand-dark/60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center pt-24">
        <div className="hero-anim inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-10 border border-white/15">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
          Ads + Diseño Web en Olavarría
        </div>

        <h1
          className="font-display text-white uppercase mx-auto"
          style={{ fontSize: "clamp(3.2rem, 10vw, 9.5rem)", lineHeight: 0.86, letterSpacing: "-0.01em", maxWidth: "1200px" }}
        >
          {words.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="hero-word inline-block">
                {i === 2 ? <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-sky-300 to-brand-orange">{line}</span> : line}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-anim font-body text-white/75 leading-relaxed mt-10 max-w-xl" style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.35rem)" }}>
          <span className="text-white font-semibold">Nosotros se la damos.</span> Campañas de Google y Meta Ads que traen clientes, y sitios web que los convierten. Sin jerga de agencia, sin reportes eternos — resultados que se ven en tu WhatsApp.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={waLink("Hola! Vi la web de Carmi Ads y quiero el diagnóstico gratis.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-body font-semibold px-8 py-4 rounded-full transition-all active:scale-95 text-base shadow-lg shadow-[#25D36633]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Escribinos por WhatsApp
          </a>
          <a href="#servicios" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-brand-blue hover:bg-white/10 text-white font-body font-semibold px-8 py-4 rounded-full transition-all active:scale-95 text-base">
            Ver servicios
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="hero-anim flex items-center gap-10 sm:gap-14 mt-16 pt-10 border-t border-white/20">
          {[
            ["6", "Clientes activos"],
            ["3 años", "En Olavarría"],
            ["100%", "Local"],
          ].map(([n, label]) => (
            <div key={label}>
              <div className="font-heading font-bold text-3xl text-white">{n}</div>
              <div className="font-body text-white/60 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
        <div className="flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="bg-brand-base-alt border-y border-white/10 py-6 overflow-hidden">
      <div className="marquee-track flex items-center gap-16 w-max">
        {items.map((c, i) => (
          <span key={i} className="font-heading font-bold text-xl text-white/25 hover:text-white/60 transition-colors whitespace-nowrap tracking-tight">
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-base-alt">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-4">
            Dos cosas.
            <br />
            Bien hechas.
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-2xl mx-auto">
            Nada de paquetes de diez servicios que no necesitás. Ads que traen gente y un sitio que los convierte — eso alcanza para crecer online.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="service-card reveal bg-brand-panel rounded-3xl p-10 border border-white/10">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-7">
              <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">Google & Meta Ads</h3>
            <p className="font-body text-brand-muted text-base leading-relaxed">Campañas de Google y Meta Ads armadas para negocios locales. Pagás por clic, no por promesas — vemos el gasto juntos cada semana.</p>
          </div>
          <div className="service-card reveal bg-brand-panel rounded-3xl p-10 border border-white/10">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-7">
              <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">Diseño Web</h3>
            <p className="font-body text-brand-muted text-base leading-relaxed">Sitios rápidos y mobile-first, hechos para vender. Tu sitio es el primer vendedor que ve un cliente — que no lo espante.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href={waLink("Hola! Vi la sección de servicios de Carmi Ads y quiero saber qué necesita mi negocio.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-body font-semibold px-8 py-3.5 rounded-full transition-all active:scale-95"
          >
            Consultá gratis qué necesitás
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ client }) {
  const [failed, setFailed] = useState(!client.logoUrl);
  if (!failed) {
    return (
      <img
        src={client.logoUrl}
        alt={client.name}
        className="w-16 h-16 rounded-2xl object-cover"
        onError={() => setFailed(true)}
      />
    );
  }
  const initials = client.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className="client-logo-fallback w-16 h-16 rounded-2xl text-xl"
      style={{ background: `${client.accent}22`, color: client.accent, border: `1px solid ${client.accent}44` }}
    >
      {initials}
    </div>
  );
}

function Clientes() {
  return (
    <section id="clientes" className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Nuestros clientes</span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-4">
            Negocios reales de Olavarría
            <br />
            que ya trabajan con nosotros
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-xl mx-auto">Nada de logos de stock. Estos son negocios de la ciudad, con nombre y apellido.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client) => (
            <a
              key={client.name}
              href={client.igUrl}
              target="_blank"
              rel="noopener"
              className="client-card reveal bg-brand-panel rounded-3xl p-8 border border-white/10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <ClientLogo client={client} />
                <div>
                  <div className="font-heading font-bold text-white text-base">{client.name}</div>
                  <div className="font-body text-brand-muted text-xs">{client.category}</div>
                </div>
              </div>
              <p className="font-body text-brand-muted text-sm leading-relaxed flex-1">{client.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {client.services.map((s) => (
                  <span key={s} className="font-body text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}>
                    {s}
                  </span>
                ))}
              </div>
              {client.result && (
                <div className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ background: `${client.accent}22`, border: `1px solid ${client.accent}44` }}>
                  <span className="font-body font-semibold text-sm" style={{ color: client.accent }}>
                    {client.result}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-brand-muted text-xs font-body font-medium">
                <InstagramIcon className="w-3.5 h-3.5" />
                {client.igHandle}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  const steps = [
    ["01", "Diagnóstico gratuito", "Analizamos tu presencia digital actual y la de tu competencia en Olavarría."],
    ["02", "Estrategia a medida", "Diseñamos un plan específico para tu negocio, tu presupuesto y tus objetivos."],
    ["03", "Ejecución y optimización", "Implementamos, medimos y ajustamos semana a semana para maximizar resultados."],
    ["04", "Reportes claros", "Cada mes recibís un informe simple que muestra exactamente qué logramos juntos."],
  ];
  return (
    <section className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-base-alt">
      <div className="max-w-[1250px] mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Cómo trabajamos</span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-4">Simple, transparente, efectivo</h2>
          <p className="font-body text-brand-muted text-lg max-w-xl mx-auto">Sin contratos eternos ni lenguaje técnico. Un proceso claro de cuatro pasos para que veas resultados desde el primer mes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map(([n, title, desc], i) => (
            <div key={n} className="relative flex flex-col items-center text-center reveal">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-heading font-bold text-base mb-4 relative z-10">{n}</div>
              {i < steps.length - 1 && <div className="step-line hidden lg:block"></div>}
              <h3 className="font-heading font-bold text-base text-white mb-2">{title}</h3>
              <p className="font-body text-brand-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oferta() {
  return (
    <section id="inversion" className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-base-alt">
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Inversión</span>
        <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-6 reveal">
          Planes desde
          <br />
          <span className="text-brand-blue">$200.000 ARS/mes</span>
        </h2>
        <p className="font-body text-brand-muted text-lg max-w-xl mx-auto reveal">
          El número final depende de tu negocio y de qué necesitás — por eso el primer paso siempre es el diagnóstico gratis, donde te decimos exactamente qué plan te conviene antes de que decidas nada.
        </p>
        <a
          href={waLink("Hola! Vi que los planes arrancan desde $200.000/mes y quiero el diagnóstico gratis para saber qué necesita mi negocio.")}
          target="_blank"
          rel="noopener"
          className="reveal inline-flex items-center gap-2 mt-10 bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-semibold px-8 py-4 rounded-full transition-all active:scale-95"
        >
          Quiero mi diagnóstico gratis
          <ArrowIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-base-alt">
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative w-full max-w-md">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
              <img src="assets/guido-desk.jpg" alt="Guido Carminatti, fundador de Carmi Ads" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-brand-blue text-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="font-heading font-bold text-base leading-tight">Carmi Ads</div>
              <div className="font-body text-blue-100 text-xs">Olavarría, BA</div>
            </div>
          </div>
          <div className="text-center md:text-left mt-2">
            <div className="font-heading font-bold text-2xl text-white">Guido Carminatti</div>
            <div className="font-body text-brand-muted text-base">Fundador & Director, Carmi Ads</div>
          </div>
        </div>
        <div>
          <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Sobre nosotros</span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-6">
            Marketing digital
            <br />
            hecho por alguien
            <br />
            de acá.
          </h2>
          <p className="font-body text-brand-muted text-base leading-relaxed mb-8">
            Soy Guido, fundador de Carmi Ads. Nací y crecí en Olavarría, y vi de primera mano cómo los negocios locales perdían clientes frente a competidores que simplemente tenían mejor presencia digital.
            <br />
            <br />
            Creé Carmi Ads para resolver ese problema: traer marketing digital de calidad directamente a los negocios de la ciudad, sin precios de agencia porteña ni resultados genéricos. Cada cliente es un vecino — eso cambia cómo trabajamos.
          </p>
          <div className="space-y-5">
            {[
              ["Transparencia total", "Reportes claros cada mes. Siempre sabés en qué se invierte tu presupuesto y qué resultados estamos logrando."],
              ["Resultados medibles", "Sin métricas de vanidad: trabajamos sobre números que impactan directamente en tus ventas y tu negocio."],
              ["Comunicación directa", "Tenés acceso directo a quien trabaja tu cuenta. Sin intermediarios, sin demoras, sin sorpresas."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-white mb-1">{title}</div>
                  <div className="font-body text-brand-muted text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      // FormSubmit (mismo servicio que ya usa storm-site) — sin backend propio, funciona en GitHub Pages.
      await fetch("https://formsubmit.co/ajax/carminattiguido@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: new URLSearchParams(new FormData(formRef.current)).toString(),
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-body font-semibold text-brand-blue text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mt-3 mb-4">Hablamos?</h2>
          <p className="font-body text-brand-muted text-lg max-w-xl mx-auto">El primer diagnóstico es gratis. Escribinos por WhatsApp y te decimos exactamente qué haríamos para hacer crecer tu negocio.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-brand-blue rounded-2xl p-7 text-white">
              <div className="font-heading font-bold text-xl mb-2">Diagnóstico digital gratuito</div>
              <p className="font-body text-blue-100 text-sm leading-relaxed mb-5">Analizamos tu presencia digital actual y la de tu competencia, sin costo.</p>
              <a href={waLink("Hola, me interesa el diagnóstico digital gratuito.")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white text-brand-blue font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-all active:scale-95">
                <WhatsAppIcon className="w-5 h-5" />
                Escribinos por WhatsApp
              </a>
            </div>
            <div className="bg-brand-panel rounded-2xl p-6 border border-white/10">
              <h3 className="font-heading font-bold text-lg text-white mb-4">Otras formas de contacto</h3>
              <a href="mailto:hola@carmiads.com.ar" className="flex items-center gap-4 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 hover:bg-brand-blue/15 transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-white text-sm">Email</div>
                  <div className="font-body text-brand-muted text-sm">hola@carmiads.com.ar</div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-brand-muted text-sm mb-4">Preferís escribir? Completá el formulario y te contactamos.</p>
            {status === "sent" ? (
              <div className="bg-brand-panel rounded-2xl p-8 border border-white/10 text-center py-10">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">¡Mensaje enviado!</h3>
                <p className="font-body text-brand-muted text-sm">Te contactamos en las próximas horas.</p>
              </div>
            ) : (
              <form ref={formRef} name="carmi-ads-leads" onSubmit={handleSubmit} className="bg-brand-panel rounded-2xl p-8 border border-white/10 space-y-5">
                <input type="hidden" name="_subject" value="Nuevo lead — Carmi Ads" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body font-medium text-white text-sm mb-1.5">Nombre *</label>
                    <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-white text-sm mb-1.5">Email *</label>
                    <input type="email" name="email" required placeholder="tu@email.com" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-body font-medium text-white text-sm mb-1.5">Negocio (opcional)</label>
                  <input type="text" name="negocio" placeholder="Nombre de tu negocio" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-blue transition-colors" />
                </div>
                <div>
                  <label className="block font-body font-medium text-white text-sm mb-1.5">Mensaje *</label>
                  <textarea name="mensaje" required rows="4" placeholder="Contanos de tu negocio y qué querés lograr..." className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
                </div>
                <button type="submit" disabled={status === "sending"} className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-semibold py-3.5 rounded-xl transition-all active:scale-95 text-base disabled:opacity-60">
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
                {status === "error" && <p className="text-red-400 text-sm font-body">Hubo un error. Escribinos por WhatsApp mejor.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-base-alt text-white py-14 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <img src="assets/logo-white.svg" alt="Carmi Ads" className="h-10 w-auto mb-3" />
            <div className="w-8 h-0.5 bg-brand-blue mb-4 rounded"></div>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              Hacemos crecer negocios en Olavarría.
              <br />
              Olavarría, Buenos Aires, Argentina.
            </p>
          </div>
          <div>
            <div className="font-body font-semibold text-white text-sm mb-4">Navegación</div>
            <ul className="space-y-2">
              {[
                ["#servicios", "Servicios"],
                ["#clientes", "Clientes"],
                ["#inversion", "Inversión"],
                ["#nosotros", "Nosotros"],
                ["#contacto", "Contacto"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="font-body text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-body font-semibold text-white text-sm mb-4">Contacto</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <WhatsAppIcon className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <a href={waLink("Hola! Te escribo desde el sitio de Carmi Ads.")} className="font-body text-slate-400 hover:text-white text-sm transition-colors">+54 9 11 6231-0105</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-body text-slate-400 text-sm">hola@carmiads.com.ar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-slate-500 text-sm">© 2026 Carmi Ads — Olavarría, Buenos Aires, Argentina.</p>
          <p className="font-body text-slate-600 text-xs">Hecho con ❤️ en Olavarría</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola! Estaba viendo la web de Carmi Ads y quiero consultar.")}
      target="_blank"
      rel="noopener"
      aria-label="Chateá con Carmi Ads por WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}

function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Servicios />
      <ComoTrabajamos />
      <Clientes />
      <Oferta />
      <Nosotros />
      <Contacto />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
