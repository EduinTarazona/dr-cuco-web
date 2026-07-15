import { Link } from 'react-router-dom'

const tratamientos = [
  {
    icon: 'favorite',
    title: 'Consulta Ginecológica',
    slug: 'consulta',
    desc: 'Atención integral, preventiva y sin tabúes para tu salud íntima.',
  },
  {
    icon: 'auto_awesome',
    title: 'Cirugías Íntimas',
    slug: 'cirugias',
    desc: 'Labioplastia, vaginoplastia, liposucción y más.',
  },
  {
    icon: 'local_pharmacy',
    title: 'Dispositivos bajo Sedación',
    slug: 'dispositivos',
    desc: 'Mirena, Kyleena y Gold T, colocados con comodidad y bajo sedación.',
  },
  {
    icon: 'bolt',
    title: 'Tecnología Íntima Avanzada',
    slug: 'tecnologia',
    desc: 'Láser CO2 y radiofrecuencia para firmeza y rejuvenecimiento íntimo.',
  },
  {
    icon: 'spa',
    title: 'Estética Íntima',
    slug: 'estetica',
    desc: 'Peeling íntimo, PRP y depilación láser para tu piel.',
  },
  {
    icon: 'grain',
    title: 'Láser CO2 Cutáneo',
    slug: 'laser',
    desc: 'Láser CO2 para estrías en abdomen y cicatrices.',
  },
  {
    icon: 'vaccines',
    title: 'Salud y Prevención',
    slug: 'prevencion',
    desc: 'Tratamiento y vacuna para el VPH. Atención especializada, confidencial y personalizada enfocada en la prevención y el cuidado de tu salud íntima.',
  },
  {
    icon: 'wb_sunny',
    title: 'Bienestar y Terapia Hormonal',
    slug: 'hormonal',
    desc: 'Chip de testosterona y suero de vitamina C. Tratamientos para recuperar energía, equilibrio hormonal, vitalidad y bienestar integral.',
  },
  {
    icon: 'fitness_center',
    title: 'Rehabilitación y Tonificación Muscular',
    slug: 'rehabilitacion',
    desc: 'Fortalecimiento de piso pélvico y tonificación de abdomen y glúteos con tecnología Definex, no invasiva y sin incapacidad.',
  },
]

export default function Tratamientos() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            Servicios
          </span>
          <h2 className="section-title mb-3">Tratamientos especializados</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Atención integral en salud femenina en 9 especialidades, desde la consulta preventiva hasta procedimientos avanzados con tecnología de última generación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tratamientos.slice(0, 6).map((t) => (
            <Link
              key={t.title}
              to={`/tratamientos#${t.slug}`}
              className="card rounded-3xl p-7 group flex flex-col"
              style={{ boxShadow: '0 10px 40px rgba(0,88,188,0.07)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(0,88,188,0.08)' }}
              >
                <span className="material-symbols-outlined gradient-text" style={{ fontSize: 28 }}>{t.icon}</span>
              </div>
              <h3
                className="font-extrabold mb-2 leading-tight"
                style={{ fontSize: '1.65rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
              >
                {t.title}
              </h3>
              <p className="leading-relaxed mb-4" style={{ fontSize: '0.95rem', color: '#5b7290' }}>{t.desc}</p>
              <span className="inline-flex items-center gap-1 font-semibold gradient-text mt-auto">
                Ver más
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: 18 }}>arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/tratamientos" className="btn-outline">
            Ver los 22 tratamientos
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
