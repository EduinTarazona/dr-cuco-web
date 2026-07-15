import { Link } from 'react-router-dom'

const items = [
  {
    icon: 'person',
    title: 'Dr. Germán González',
    desc: 'Conoce su trayectoria, estudios y experiencia',
    to: '/sobre-el-doctor',
  },
  {
    icon: 'medical_services',
    title: 'Servicios y tecnología',
    desc: 'Tratamientos médicos y quirúrgicos de última generación',
    to: '/tratamientos',
  },
  {
    icon: 'play_circle',
    title: 'Antes y después',
    desc: 'Videos, casos reales y contenido educativo',
    to: '/blog',
  },
  {
    icon: 'chat',
    title: 'Contáctanos',
    desc: 'Agenda tu consulta en Bogotá o Villavicencio',
    to: '/contacto',
  },
]

export default function TrustBar() {
  return (
    <section className="section-pad-tight px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl transition-all"
              style={{ background: 'rgba(0,88,188,0.03)', border: '1px solid rgba(0,88,188,0.07)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,88,188,0.07)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,88,188,0.03)'}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(0,88,188,0.07)' }}
              >
                <span className="material-symbols-outlined gradient-text" style={{ fontSize: 24 }}>{item.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#0a1628' }}>{item.title}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: '#4a6080' }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
