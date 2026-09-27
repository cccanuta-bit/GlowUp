import { createFileRoute } from "@tanstack/react-router";
import { Armchair, Check, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const WHATSAPP_HREF =
  "https://wa.me/525511922734?text=" +
  encodeURIComponent(
    "Hola GlowUp Detailing, quiero agendar una cita de estética automotriz a domicilio.",
  );

const PHONE_DISPLAY = "55 1192 2734";

const services: {
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Lavado de vestiduras",
    text: "Extracción profunda de asientos, alfombras y cielo. Quitamos manchas, pelo y olores para que el interior se sienta nuevo.",
    points: ["Tela o piel", "Alfombras y tapetes", "Desodorización"],
    icon: Armchair,
  },
  {
    title: "Pulido y encerado",
    text: "Corregimos microarañazos y devolvemos profundidad al color. El encerado sella la pintura contra sol, polvo y agua.",
    points: ["Corrección de pintura", "Cera de protección", "Acabado espejo"],
    icon: Sparkles,
  },
  {
    title: "Tratamiento cerámico",
    text: "Una capa cerámica que repele agua y suciedad, conserva el brillo y reduce el esfuerzo de cada lavado.",
    points: ["Efecto hidrofóbico", "Protección UV", "Brillo de larga duración"],
    icon: ShieldCheck,
  },
];

const steps = [
  { n: "01", title: "Escríbenos", text: "Cuéntanos el auto y el servicio. Te cotizamos sin costo." },
  { n: "02", title: "Llegamos a ti", text: "Casa u oficina. Llevamos agua, energía y el equipo completo." },
  { n: "03", title: "Lo entregamos listo", text: "Sales con el auto como recién salido de agencia." },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.14h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.9c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.37c.12 0 .28-.04.44.34.16.4.56 1.37.61 1.47.05.1.08.22.02.36-.06.14-.1.22-.19.34-.1.12-.2.26-.29.35-.1.1-.2.2-.08.39.11.19.5.83 1.08 1.34.74.66 1.36.87 1.56.97.19.1.31.08.42-.05.11-.14.48-.56.61-.75.13-.19.26-.16.44-.1.18.06 1.14.54 1.34.64.19.1.32.14.37.22.05.08.05.72-.19 1.4Z" />
    </svg>
  );
}

function BookButton({ className }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 " +
        (className ?? "")
      }
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      Agendar Cita por WhatsApp
    </a>
  );
}

function Home() {
  return (
    <div className="relative">
      <header className="sticky top-0 z-30 border-b border-fg/10 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#inicio" className="flex min-h-11 items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-gold/50 text-xs font-semibold tracking-wide text-gold">
              GU
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-wide">GlowUp</span>
              <span className="mt-1 block text-xs font-medium text-muted">Detailing</span>
            </span>
          </a>
          <nav className="flex items-center gap-2 sm:gap-5">
            <a
              href="#servicios"
              className="hidden min-h-11 items-center text-sm font-medium text-muted transition-colors hover:text-fg sm:inline-flex"
            >
              Servicios
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-gold/40 px-4 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-bg"
            >
              Agendar
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="Coupé de lujo con pintura oscura y reflejos dorados de noche"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-45 sm:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg sm:bg-gradient-to-r sm:from-bg sm:via-bg/80 sm:to-bg/25" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 py-16 sm:justify-center sm:px-6 sm:py-24">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">
              Estética automotriz a domicilio
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
              Tu auto como salido de agencia, sin salir de casa
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Lavado profundo de vestiduras, pulido, encerado y recubrimiento cerámico.
              Llegamos a tu casa o a tu trabajo: tú no mueves el auto, ni tu agenda.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <BookButton />
              <p className="text-sm text-muted">Cotización sin costo · {PHONE_DISPLAY}</p>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 border-t border-fg/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Servicios</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuidado de agencia, en tu cochera
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Tres tratamientos pensados para devolverle presencia al auto, con productos de
              grado profesional y sin que tengas que llevarlo a un taller.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li
                    key={service.title}
                    className="flex flex-col rounded-2xl bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <span className="grid size-12 place-items-center rounded-full bg-gold/10 text-gold">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.text}</p>
                    <ul className="mt-5 space-y-2 border-t border-fg/10 pt-4">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm">
                          <Check className="size-4 shrink-0 text-gold" strokeWidth={2} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="agenda" className="scroll-mt-20 border-t border-fg/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="rounded-3xl bg-surface px-5 py-10 shadow-card sm:px-10 sm:py-14">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Agenda en minutos
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                El brillo llega a tu puerta
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Dinos dónde está el auto. Nosotros llevamos el estudio de detailing hasta tu casa
                o tu trabajo, y lo dejamos listo para salir.
              </p>
              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {steps.map((step) => (
                  <li key={step.n} className="rounded-2xl border border-fg/10 p-4">
                    <span className="text-xs font-semibold tracking-widest text-gold">{step.n}</span>
                    <p className="mt-2 font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-col items-start gap-3">
                <BookButton className="w-full sm:w-auto sm:px-8 sm:text-base" />
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted underline-offset-4 hover:text-gold hover:underline">
                  o escríbenos al {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-fg/10 pb-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-muted">© {new Date().getFullYear()} GlowUp Detailing. Todos los derechos reservados.</p>
          <ul className="flex gap-5 text-sm font-medium">
            {[
              ["Instagram", "#instagram"],
              ["Facebook", "#facebook"],
              ["TikTok", "#tiktok"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(event) => event.preventDefault()}
                  className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 max-w-xs items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-bg shadow-card-hover transition duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
      >
        <WhatsAppIcon className="size-5 shrink-0" />
        <span>Agendar Cita por WhatsApp</span>
      </a>
    </div>
  );
}
