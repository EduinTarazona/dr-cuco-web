import doctorImg from '../assets/dr-cuco-retrato-azul.jpg'
import Seo from '../components/Seo'
import CTAFinal from './home/CTAFinal'

const formacion = [
  { icon: 'school', titulo: 'Médico General', desc: 'Universidad Nacional de Colombia' },
  { icon: 'school', titulo: 'Especialista en Ginecología y Obstetricia', desc: 'Pontificia Universidad Javeriana' },
  { icon: 'school', titulo: 'Sexólogo Clínico', desc: 'Fundación Universitaria Ciencias de la Salud (FUCS)' },
  { icon: 'school', titulo: 'Especialización en Auditoría Médica', desc: 'Universidad Santo Tomás de Aquino' },
  { icon: 'school', titulo: 'Diplomado en Marketing Farmacéutico', desc: 'Universidad EAN' },
  { icon: 'school', titulo: 'Uroginecología', desc: 'Universidad Nacional de Colombia' },
  { icon: 'bolt', titulo: 'Especialista en Aplicaciones Láser en Medicina', desc: 'Universidad Nacional de Colombia' },
  { icon: 'auto_awesome', titulo: 'Ginecología Estética, Regenerativa y Funcional', desc: 'SAENI — Argentina' },
  { icon: 'workspace_premium', titulo: 'Miembro de la Asociación de Ginecólogos Estéticos Colombianos', desc: 'Membresía profesional' },
]

const habilidades = [
  'Ginecología estética, funcional y regenerativa',
  'Incontinencia urinaria',
  'Menopausia',
  'Recuperación posparto',
  'Rejuvenecimiento íntimo femenino',
  'Cirugía estética genital',
  'Labioplastia',
  'Tecnologías basadas en energía',
  'Medicina regenerativa',
  'Sexología clínica',
]

export default function SobreElDoctor() {
  return (
    <>
      <Seo title="Sobre mí" description="Conoce al Dr. Germán González (Dr. Cuco): especialista en ginecología estética, regenerativa y funcional, con más de 200.000 pacientes atendidas." />
      {/* Header */}
      <section className="pt-28 md:pt-32 pb-0 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pb-16">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full opacity-10 blur-2xl" style={{ background: 'var(--gradient)' }} />
              <img
                src={doctorImg}
                alt="Dr. Germán González - Dr. Cuco"
                loading="lazy"
                decoding="async"
                className="relative rounded-3xl object-contain mx-auto"
                style={{ width: 'auto', maxHeight: 580, maxWidth: '100%', boxShadow: '0 20px 60px rgba(0,88,188,0.14)' }}
              />
            </div>

            {/* Bio */}
            <div className="pt-4">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
              >
                Sobre mí
              </span>
              <h1
                className="font-extrabold mb-5 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
              >
                Dr. Germán González<br />
                <span className="gradient-text">"Dr. Cuco"</span>
              </h1>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#4a6080' }}>
                Soy médico especialista en <strong style={{ color: '#0a1628' }}>Ginecología y Obstetricia</strong>, sexólogo clínico y especialista en <strong style={{ color: '#0a1628' }}>Ginecología Estética, Regenerativa y Funcional</strong>. A lo largo de mi carrera he atendido a más de <strong style={{ color: '#0a1628' }}>200.000 pacientes</strong>.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#4a6080' }}>
                Mi propósito siempre ha sido el mismo: ayudar a mis pacientes a recuperar no solo su bienestar físico, sino también su seguridad, autoestima y calidad de vida. Esa experiencia me ha permitido comprender que la ginecología va mucho más allá del diagnóstico y el tratamiento de enfermedades.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#4a6080' }}>
                En redes sociales muchas personas me conocen como <strong style={{ color: '#0a1628' }}>"Dr. Cuco"</strong>, donde hablo de salud íntima con claridad, humor y cero vergüenza. Porque creo que la salud sexual y la ginecología deben hablarse con naturalidad, respeto y, cuando es posible, con una sonrisa.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { val: '+25', label: 'Años de experiencia' },
                  { val: '+200K', label: 'Pacientes atendidas' },
                  { val: '+150K', label: 'Seguidores' },
                  { val: 'Bogotá y Villavicencio', label: 'Ciudades de atención' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-4 rounded-2xl"
                    style={{ background: 'rgba(0,88,188,0.05)' }}
                  >
                    <p className="font-extrabold text-xl" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}>{s.val}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#4a6080' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Redes */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.tiktok.com/@drcuco0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  style={{ fontSize: '0.87rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.78 1.52V6.7a4.85 4.85 0 01-1.01-.01z"/>
                  </svg>
                  @drcuco0
                </a>
                <a
                  href="https://www.instagram.com/doctor.cuco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                  style={{ fontSize: '0.87rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @doctor.cuco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-10">Formación académica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {formacion.map((f) => (
              <div key={f.titulo} className="card p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,88,188,0.07)' }}>
                  <span className="material-symbols-outlined gradient-text">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: '#0a1628' }}>{f.titulo}</h3>
                  <p className="text-sm mt-1" style={{ color: '#4a6080' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title mb-8">Especialidades y habilidades</h2>
          <div className="flex flex-wrap gap-3">
            {habilidades.map((h) => (
              <span
                key={h}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'white', color: '#0a1628', border: '1px solid #e5eaf2', boxShadow: '0 2px 8px rgba(0,88,188,0.06)' }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Docencia y medios */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-8">Más allá de la consulta</h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#4a6080' }}>
            Por eso me he especializado en <strong style={{ color: '#0a1628' }}>Ginecología Estética, Funcional y Regenerativa</strong>, incorporando las técnicas y tecnologías más innovadoras para el manejo de la incontinencia urinaria, la menopausia, la recuperación posparto, el rejuvenecimiento íntimo femenino y la cirugía estética genital.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#4a6080' }}>
            Además de mi práctica clínica, soy <strong style={{ color: '#0a1628' }}>docente y conferencista nacional e internacional</strong>, donde comparto mi experiencia en cirugía íntima, labioplastia, tecnologías basadas en energía y medicina regenerativa. Disfruto enseñar porque creo firmemente que el conocimiento cobra verdadero valor cuando se comparte.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#4a6080' }}>
            También participo con frecuencia en <strong style={{ color: '#0a1628' }}>medios de comunicación</strong>, especialmente en radio y plataformas digitales, donde busco acercar la medicina a las personas con un lenguaje claro, sencillo y basado en evidencia científica.
          </p>
        </div>
      </section>

      {/* ¿Por qué Dr. Cuco? */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-8">¿Por qué <span className="gradient-text">"Dr. Cuco"</span>?</h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#4a6080' }}>
            El apodo nació de manera espontánea dentro de mi grupo de amigos del motociclismo —una de mis pasiones—, donde me decían simplemente <strong style={{ color: '#0a1628' }}>"Cuco"</strong>. Cuando lanzamos el primer video en TikTok surgió la necesidad de un nombre llamativo y novedoso, y así nació <strong style={{ color: '#0a1628' }}>"Dr. Cuco"</strong>, que terminó convirtiéndose en parte de mi identidad profesional.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#4a6080' }}>
            Más que un sobrenombre, representa mi forma de ejercer la medicina: cercana, auténtica y sin tabúes. Si una paciente se siente cómoda para preguntar aquello que nunca había podido expresar, ya dimos el primer paso hacia su bienestar.
          </p>
          <blockquote
            className="pl-5 py-2 text-lg italic leading-relaxed"
            style={{ borderLeft: '4px solid var(--g1)', color: '#0a1628' }}
          >
            "Mi objetivo no es solo tratar enfermedades, sino educar, acompañar y empoderar a las mujeres para que vivan plenamente cada etapa de su vida. Porque detrás de cada consulta hay una historia, una mujer y una oportunidad para mejorar su calidad de vida."
          </blockquote>
        </div>
      </section>

      {/* Ubicaciones */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-10">Ubicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,88,188,0.07)' }}>
                  <span className="material-symbols-outlined gradient-text">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0a1628' }}>Bogotá</h3>
                  <p className="text-sm mb-1" style={{ color: '#4a6080' }}>Carrera 19A #82-85, Edificio CMC, Consultorio 204 · Antiguo Country</p>
                  <p className="text-sm" style={{ color: '#4a6080' }}>Lun a vie: 7:00 a. m. – 6:00 p. m. · Sábados cada 15 días: 7:00 a. m. – 1:00 p. m.</p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,88,188,0.07)' }}>
                  <span className="material-symbols-outlined gradient-text">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0a1628' }}>Villavicencio</h3>
                  <p className="text-sm mb-1" style={{ color: '#4a6080' }}>CC Primavera Urbana, Lobby 2, Consultorio 526</p>
                  <p className="text-sm" style={{ color: '#4a6080' }}>Viernes y sábado: 7:00 a. m. – 6:30 p. m. · El doctor asiste cada 15 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
