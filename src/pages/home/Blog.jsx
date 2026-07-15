import { Link } from 'react-router-dom'

const articulos = [
  {
    slug: 'vph-citologia',
    categoria: 'Prevención',
    titulo: 'VPH y citología: lo que toda mujer debe saber',
    resumen: 'El Virus del Papiloma Humano afecta a la mayoría de las personas en algún momento de su vida. Aquí te explico qué es, cómo se detecta y qué hacer.',
    fecha: 'Jun 2025',
    tiempo: '5 min',
    icon: 'biotech',
  },
  {
    slug: 'ciclos-irregulares',
    categoria: 'Salud hormonal',
    titulo: 'Ciclos irregulares: causas frecuentes y cuándo consultar',
    resumen: 'Que tu ciclo varíe de mes a mes no siempre es alarma, pero hay señales que sí merecen atención médica. Te cuento cuáles son.',
    fecha: 'May 2025',
    tiempo: '4 min',
    icon: 'cycle',
  },
  {
    slug: 'laser-intimo',
    categoria: 'Estética íntima',
    titulo: 'Láser íntimo: qué es, para qué sirve y qué esperar',
    resumen: 'Una de las preguntas más frecuentes en consulta. Desmitificamos el láser vaginal con información médica real y sin exageraciones.',
    fecha: 'Abr 2025',
    tiempo: '6 min',
    icon: 'bolt',
  },
]

export default function Blog() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            Blog
          </span>
          <h2 className="section-title mb-3">Aprende sobre tu salud</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Artículos escritos por el Dr. Cuco para que entiendas tu cuerpo con información médica de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articulos.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="card p-7 flex flex-col group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,88,188,0.07)' }}
              >
                <span className="material-symbols-outlined gradient-text">{a.icon}</span>
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--g1)' }}
              >
                {a.categoria}
              </span>
              <h3
                className="font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug"
                style={{ fontSize: '1rem', color: '#0a1628' }}
              >
                {a.titulo}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a6080' }}>{a.resumen}</p>
              <div className="flex items-center gap-3 mt-5 pt-4" style={{ borderTop: '1px solid #f0f4f8' }}>
                <span className="text-xs" style={{ color: '#5b7290' }}>{a.fecha}</span>
                <span className="text-xs" style={{ color: '#5b7290' }}>·</span>
                <span className="text-xs" style={{ color: '#5b7290' }}>{a.tiempo} de lectura</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="btn-outline">
            Ver todos los artículos
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
