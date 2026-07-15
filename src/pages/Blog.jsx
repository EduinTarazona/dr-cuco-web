import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import CTAFinal from './home/CTAFinal'

const articulos = [
  {
    slug: 'vph-citologia',
    categoria: 'Prevención',
    titulo: 'VPH y citología: lo que toda mujer debe saber',
    resumen: 'El Virus del Papiloma Humano afecta a la mayoría de las personas en algún momento de su vida. Aquí te explico qué es, cómo se detecta y qué hacer.',
    contenido: `
El VPH (Virus del Papiloma Humano) es la infección de transmisión sexual más común en el mundo. La gran mayoría de las personas sexualmente activas tendrán contacto con algún tipo de VPH en algún momento de su vida, y en la mayoría de casos el sistema inmune lo elimina solo.

**¿Qué es la citología (Papanicolau)?**

La citología es un examen que toma una muestra de células del cuello uterino para analizarlas en el laboratorio. Su objetivo es detectar cambios celulares que podrían indicar infección por VPH o etapas previas al cáncer de cuello uterino.

**¿Cada cuánto hacerme la citología?**

- Entre 21 y 29 años: cada 3 años
- Entre 30 y 65 años: cada 3 años o cada 5 años con co-prueba VPH

**¿Qué hago si el resultado sale alterado?**

No entre en pánico. Un resultado alterado no significa cáncer. Significa que se necesita seguimiento. El Dr. Cuco te acompañará en cada paso.
    `,
    fecha: 'Jun 2025',
    tiempo: '5 min',
    icon: 'biotech',
  },
  {
    slug: 'ciclos-irregulares',
    categoria: 'Salud hormonal',
    titulo: 'Ciclos irregulares: causas frecuentes y cuándo consultar',
    resumen: 'Que tu ciclo varíe de mes a mes no siempre es alarma, pero hay señales que sí merecen atención médica. Te cuento cuáles son.',
    contenido: `
Un ciclo menstrual "normal" puede variar entre 21 y 35 días, y puede cambiar de mes a mes. Sin embargo, hay variaciones que merecen evaluación médica.

**Causas frecuentes de ciclos irregulares:**

- Síndrome de ovario poliquístico (SOP)
- Problemas de tiroides
- Estrés crónico
- Cambios de peso significativos
- Inicio o cambio de anticonceptivos

**¿Cuándo consultar?**

Si llevas más de 3 meses con ciclos irregulares, si sangras entre periodos, si el dolor es muy intenso o si pasaron más de 90 días sin menstruar, es momento de consultar.
    `,
    fecha: 'May 2025',
    tiempo: '4 min',
    icon: 'cycle',
  },
  {
    slug: 'laser-intimo',
    categoria: 'Estética íntima',
    titulo: 'Láser íntimo: qué es, para qué sirve y qué esperar',
    resumen: 'Una de las preguntas más frecuentes en consulta. Desmitificamos el láser vaginal con información médica real y sin exageraciones.',
    contenido: `
El láser vaginal es un procedimiento ginecológico mínimamente invasivo que usa energía lumínica para estimular la producción de colágeno y remodelar los tejidos vaginales.

**¿Para qué sirve?**

- Sequedad vaginal (especialmente post-menopausia)
- Incontinencia urinaria leve
- Laxitud vaginal
- Atrofia vulvovaginal

**¿Es doloroso?**

El procedimiento es ambulatorio, dura aproximadamente 20 minutos y la mayoría de pacientes lo describe como una sensación de calor o presión leve. No requiere anestesia general.

**¿Cuántas sesiones necesito?**

Generalmente se recomiendan 3 sesiones espaciadas cada 4-6 semanas. Los resultados se notan desde la primera sesión.
    `,
    fecha: 'Abr 2025',
    tiempo: '6 min',
    icon: 'bolt',
  },
]

export function BlogDetalle({ slug }) {
  const articulo = articulos.find(a => a.slug === slug)

  if (!articulo) {
    return (
      <div className="pt-28 md:pt-32 pb-20 px-4 text-center">
        <h1 className="section-title mb-4">Artículo no encontrado</h1>
        <Link to="/blog" className="btn-primary">Volver al blog</Link>
      </div>
    )
  }

  return (
    <>
      <Seo title={articulo.titulo} description={articulo.resumen} />
      <section className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm mb-8" style={{ color: 'var(--g1)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
            Volver al blog
          </Link>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            {articulo.categoria}
          </span>
          <h1
            className="font-extrabold mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
          >
            {articulo.titulo}
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>person</span>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#0a1628' }}>Dr. Germán González · Dr. Cuco</p>
              <p className="text-xs" style={{ color: '#5b7290' }}>{articulo.fecha} · {articulo.tiempo} de lectura</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8 md:p-12"
            style={{ boxShadow: '0 4px 24px rgba(0,88,188,0.08)' }}
          >
            <div className="prose prose-lg" style={{ color: '#0a1628', lineHeight: 1.8 }}>
              {articulo.contenido.trim().split('\n\n').map((bloque, i) => {
                if (bloque.startsWith('**') && bloque.endsWith('**')) {
                  return <h3 key={i} className="font-bold text-lg mt-6 mb-3" style={{ color: '#0a1628', fontFamily: 'Bricolage Grotesque, sans-serif' }}>{bloque.replace(/\*\*/g, '')}</h3>
                }
                if (bloque.startsWith('- ')) {
                  const items = bloque.split('\n').filter(l => l.startsWith('- '))
                  return (
                    <ul key={i} className="space-y-1 mb-4 ml-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex gap-2 text-sm" style={{ color: '#4a6080' }}>
                          <span className="material-symbols-outlined gradient-text" style={{ fontSize: 16, marginTop: 2, flexShrink: 0 }}>check_circle</span>
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return <p key={i} className="mb-4 text-sm leading-relaxed" style={{ color: '#4a6080' }}>{bloque.replace(/\*\*/g, '')}</p>
              })}
            </div>

            <div
              className="mt-10 p-6 rounded-2xl"
              style={{ background: 'rgba(0,88,188,0.05)', border: '1px solid rgba(0,88,188,0.1)' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#0a1628', fontFamily: 'Bricolage Grotesque, sans-serif' }}>¿Tienes dudas sobre este tema?</p>
              <p className="text-sm mb-4" style={{ color: '#4a6080' }}>Agenda una consulta con el Dr. Cuco en Bogotá o Villavicencio.</p>
              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                style={{ fontSize: '0.87rem' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}

export default function Blog() {
  return (
    <>
      <Seo title="Blog" description="Artículos del Dr. Cuco sobre salud íntima femenina, prevención, VPH, menopausia y estética íntima, con información médica clara y sin tabúes." />
      <section className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            Blog
          </span>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
          >
            Aprende sobre tu{' '}
            <span className="gradient-text">salud íntima</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Artículos escritos por el Dr. Cuco para que entiendas tu cuerpo con información médica de calidad.
          </p>
        </div>
      </section>

      <section className="section-pad-tight px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulos.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="card p-7 flex flex-col group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(0,88,188,0.07)' }}
                >
                  <span className="material-symbols-outlined gradient-text">{a.icon}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--g1)' }}>{a.categoria}</span>
                <h2
                  className="font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug"
                  style={{ fontSize: '1rem', color: '#0a1628' }}
                >
                  {a.titulo}
                </h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a6080' }}>{a.resumen}</p>
                <div className="flex items-center gap-3 mt-5 pt-4" style={{ borderTop: '1px solid #f0f4f8' }}>
                  <span className="text-xs" style={{ color: '#5b7290' }}>{a.fecha}</span>
                  <span className="text-xs" style={{ color: '#5b7290' }}>·</span>
                  <span className="text-xs" style={{ color: '#5b7290' }}>{a.tiempo} de lectura</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
