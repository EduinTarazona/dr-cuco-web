import heroImg from '../../assets/dr-cuco-inicio-azul.jpg'

const stats = [
  { icon: 'calendar_month', value: '+25', label: 'Años de experiencia' },
  { icon: 'people', value: '+150K', label: 'Seguidores' },
  { icon: 'favorite', value: '+200K', label: 'Pacientes atendidas' },
]

const condiciones = [
  'Incontinencia urinaria',
  'Resequedad vaginal',
  'Menopausia',
  'Molestias durante las relaciones',
  'Cambios después del parto',
  'Labioplastia y rejuvenecimiento íntimo',
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Columna izquierda */}
          <div>
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(0,88,188,0.08)', color: 'var(--g1)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--g1)' }} />
              Ginecología sin tabúes
            </span>

            {/* Título */}
            <h1
              className="font-extrabold leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4rem)', color: '#0a1628' }}
            >
              Tu salud íntima en{' '}
              <span className="gradient-text">manos expertas</span>
            </h1>

            {/* Subtítulo */}
            <p className="mb-7 leading-relaxed" style={{ fontSize: '1.15rem', color: '#4a6080', maxWidth: '30rem' }}>
              Recupera la confianza en tu salud íntima.
            </p>

            {/* Chips de síntomas */}
            <div className="flex flex-wrap gap-1.5 mb-8" style={{ maxWidth: '32rem' }}>
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

            {/* Botones */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>calendar_month</span>
                Agendar consulta
              </a>
              <a href="/tratamientos" className="btn-outline">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>medical_services</span>
                Ver tratamientos
              </a>
            </div>

            {/* Cita discreta */}
            <p className="text-sm italic leading-relaxed mt-6" style={{ color: '#8a9ab0', maxWidth: '30rem' }}>
              "Ayudo a mujeres a recuperar su calidad de vida, autoestima y bienestar íntimo mediante tratamientos mínimamente invasivos respaldados por evidencia científica."
            </p>

            {/* Cifras */}
            <div
              className="flex flex-wrap gap-10 mt-8 pt-8"
              style={{ borderTop: '1px solid rgba(0,88,188,0.12)' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--g1)' }}>{s.icon}</span>
                    <p
                      className="font-extrabold leading-none"
                      style={{ fontSize: '2rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: 'var(--g1)' }}
                    >
                      {s.value}
                    </p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#5b7290' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs font-medium" style={{ color: '#5b7290' }}>
              📍 Bogotá y Villavicencio
            </p>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full" style={{ maxWidth: 560 }}>
              {/* Forma decorativa azul suave detrás */}
              <div
                className="absolute rounded-[2rem]"
                style={{
                  inset: 0,
                  transform: 'translate(22px, -22px)',
                  background: 'linear-gradient(135deg, rgba(0,88,188,0.16), rgba(0,218,241,0.12))',
                }}
              />
              <img
                src={heroImg}
                alt="Dr. Germán González, ginecólogo estético, conocido como Dr. Cuco"
                fetchpriority="high"
                decoding="async"
                className="relative rounded-[2rem] object-cover w-full"
                style={{
                  height: 640,
                  objectPosition: 'center 22%',
                  boxShadow: '0 24px 64px rgba(0,88,188,0.18)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
