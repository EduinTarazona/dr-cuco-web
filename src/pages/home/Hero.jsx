import { useState, useEffect } from 'react'
import heroImg from '../../assets/dr-cuco-inicio-azul.jpg'
import heroImg2 from '../../assets/dr-cuco-retrato-azul.jpg'
import heroImg3 from '../../assets/tratamientos/laser-co2-tensado.jpg'

const condiciones = [
  'Incontinencia urinaria',
  'Resequedad vaginal',
  'Menopausia',
  'Molestias durante las relaciones',
  'Cambios después del parto',
  'Labioplastia y rejuvenecimiento íntimo',
]

const slides = [
  {
    img: heroImg,
    pos: 'center 28%',
    eyebrow: 'Ginecología sin tabúes',
    pre: 'Tu salud íntima en ',
    accent: 'manos expertas',
    post: '',
    tipo: 'intro',
    texto: 'Recupera la confianza en tu salud íntima.',
  },
  {
    img: heroImg2,
    pos: 'center 18%',
    eyebrow: 'Atención integral',
    pre: 'Soluciones para ',
    accent: 'cada etapa de tu vida',
    post: '',
    tipo: 'chips',
  },
  {
    img: heroImg3,
    pos: '60% 18%',
    eyebrow: 'Experiencia que respalda',
    pre: '',
    accent: '+200.000',
    post: ' pacientes atendidas',
    tipo: 'confianza',
    cita: '"Ayudo a mujeres a recuperar su calidad de vida, autoestima y bienestar íntimo mediante tratamientos mínimamente invasivos respaldados por evidencia científica."',
    mini: [
      { value: '+25', label: 'Años de experiencia' },
      { value: '+150K', label: 'Seguidores' },
    ],
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const s = slides[current]

  return (
    <section className="min-h-screen flex items-center pt-28 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Columna izquierda (contenido que cambia por slide) */}
          <div className="order-2 lg:order-1">
            {/* Área que cambia — altura mínima para que no salte el layout */}
            <div key={current} className="hero-fade min-h-[180px] md:min-h-[280px]">
              {/* Etiqueta */}
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(0,88,188,0.08)', color: 'var(--g1)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--g1)' }} />
                {s.eyebrow}
              </span>

              {/* Título */}
              <h1
                className="font-extrabold leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.4rem)', color: '#0a1628' }}
              >
                {s.pre}
                <span className="gradient-text">{s.accent}</span>
                {s.post}
              </h1>

              {/* Cuerpo según el tipo de slide */}
              {s.tipo === 'intro' && (
                <p className="leading-relaxed" style={{ fontSize: '1.15rem', color: '#4a6080', maxWidth: '30rem' }}>
                  {s.texto}
                </p>
              )}

              {s.tipo === 'chips' && (
                <div className="flex flex-wrap gap-1.5" style={{ maxWidth: '32rem' }}>
                  {condiciones.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(0,88,188,0.06)', color: '#0058bc' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {s.tipo === 'confianza' && (
                <>
                  <p className="text-sm italic leading-relaxed mb-6" style={{ color: '#8a9ab0', maxWidth: '30rem' }}>
                    {s.cita}
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-4">
                    {s.mini.map((m) => (
                      <div key={m.label}>
                        <p className="font-extrabold leading-none" style={{ fontSize: '1.75rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: 'var(--g1)' }}>{m.value}</p>
                        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: '#5b7290' }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Botones (fijos en todos los slides) */}
            <div className="flex gap-2 sm:gap-3 mt-8">
              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 sm:flex-none justify-center whitespace-nowrap text-sm sm:text-base"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
                <span className="sm:hidden">Agendar</span>
                <span className="hidden sm:inline">Agendar consulta</span>
              </a>
              <a href="/tratamientos" className="btn-outline flex-1 sm:flex-none justify-center whitespace-nowrap text-sm sm:text-base">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>medical_services</span>
                <span className="sm:hidden">Tratamientos</span>
                <span className="hidden sm:inline">Ver tratamientos</span>
              </a>
            </div>

            {/* Puntitos de navegación */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? 26 : 9,
                    height: 9,
                    background: i === current ? 'var(--g1)' : 'rgba(0,88,188,0.2)',
                  }}
                />
              ))}
            </div>

            <p className="mt-6 text-xs font-medium" style={{ color: '#5b7290' }}>
              📍 Bogotá y Villavicencio
            </p>
          </div>

          {/* Imagen (rota junto con el contenido) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full" style={{ maxWidth: 560 }}>
              <div
                className="absolute rounded-[2rem] hidden lg:block"
                style={{
                  inset: 0,
                  transform: 'translate(22px, -22px)',
                  background: 'linear-gradient(135deg, rgba(0,88,188,0.16), rgba(0,218,241,0.12))',
                }}
              />
              <div
                className="relative rounded-[2rem] overflow-hidden h-[360px] sm:h-[460px] lg:h-[640px]"
                style={{ boxShadow: '0 24px 64px rgba(0,88,188,0.18)' }}
              >
                {slides.map((sl, i) => (
                  <img
                    key={i}
                    src={sl.img}
                    alt="Dr. Germán González, ginecólogo estético, conocido como Dr. Cuco"
                    fetchpriority={i === 0 ? 'high' : undefined}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out"
                    style={{ objectPosition: sl.pos, opacity: i === current ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
