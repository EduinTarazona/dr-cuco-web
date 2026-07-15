import Seo from '../components/Seo'

const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const IconTikTok = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.78 1.52V6.7a4.85 4.85 0 01-1.01-.01z"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const canales = [
  {
    icon: <IconWhatsApp />,
    titulo: 'WhatsApp',
    desc: 'Escríbenos directo para agendar o resolver tus dudas. Respondemos en el día.',
    accion: 'Escribir ahora',
    href: 'https://wa.link/ijph4k',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
  },
  {
    icon: <IconTikTok />,
    titulo: 'TikTok',
    desc: '@drcuco0 · +113K seguidores. Contenido diario sobre salud íntima sin tabúes.',
    accion: 'Seguir en TikTok',
    href: 'https://www.tiktok.com/@drcuco0',
    color: '#010101',
    bg: 'rgba(0,0,0,0.05)',
  },
  {
    icon: <IconInstagram />,
    titulo: 'Instagram',
    desc: '@doctor.cuco · +39K seguidores. Casos, consejos y mucho más.',
    accion: 'Seguir en Instagram',
    href: 'https://www.instagram.com/doctor.cuco',
    color: '#C13584',
    bg: 'rgba(193,53,132,0.07)',
  },
]

const ubicaciones = [
  {
    ciudad: 'Bogotá',
    direccion: 'Carrera 19A #82-85, Edificio CMC, Consultorio 204',
    lugar: 'Antiguo Country',
    horarios: [
      'Lunes a viernes: 7:00 a. m. – 6:00 p. m. (última cita)',
      'Sábados cada 15 días: 7:00 a. m. – 1:00 p. m.',
    ],
    maps: 'https://maps.google.com/?q=Carrera+19A+%2382-85,+Bogot%C3%A1',
  },
  {
    ciudad: 'Villavicencio',
    direccion: 'CC Primavera Urbana, Lobby 2, Consultorio 526',
    lugar: 'El doctor asiste cada 15 días',
    horarios: [
      'Viernes y sábado: 7:00 a. m. – 6:30 p. m. (última cita)',
    ],
    maps: 'https://maps.google.com/?q=Centro+Comercial+Primavera+Urbana,+Villavicencio',
  },
]

export default function Contacto() {
  return (
    <>
      <Seo title="Contacto" description="Agenda tu consulta con el Dr. Cuco por WhatsApp. Consultorios en Bogotá (Antiguo Country) y Villavicencio. Horarios y ubicaciones." />
      {/* Header */}
      <section className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            Contacto
          </span>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
          >
            Hablemos sin{' '}
            <span className="gradient-text">rodeos</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Puedes escribirnos por WhatsApp, seguirnos en redes o visitarnos en consulta. Aquí no hay preguntas tontas.
          </p>
        </div>
      </section>

      {/* Canales de contacto */}
      <section className="section-pad-tight px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {canales.map((c) => (
              <div key={c.titulo} className="card p-7 flex flex-col items-start">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: c.bg, color: c.color }}
                >
                  {c.icon}
                </div>
                <h2 className="font-bold text-lg mb-2" style={{ color: '#0a1628' }}>{c.titulo}</h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a6080' }}>{c.desc}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 btn-primary text-sm"
                  style={{ fontSize: '0.87rem' }}
                >
                  {c.accion}
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicaciones */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title mb-10">
            Consultorios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ubicaciones.map((u) => (
              <div key={u.ciudad} className="card p-8">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,88,188,0.07)' }}
                  >
                    <span className="material-symbols-outlined gradient-text">location_on</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#0a1628' }}>{u.ciudad}</h3>
                    <p className="text-sm mb-0.5" style={{ color: '#4a6080' }}>{u.direccion}</p>
                    {u.lugar && (
                      <p className="text-sm" style={{ color: '#5b7290' }}>{u.lugar}</p>
                    )}
                    {u.horarios && (
                      <div className="mt-4 space-y-1.5">
                        {u.horarios.map((h) => (
                          <div key={h} className="flex gap-2 items-start text-sm" style={{ color: '#4a6080' }}>
                            <span className="material-symbols-outlined gradient-text" style={{ fontSize: 16, marginTop: 1, flexShrink: 0 }}>schedule</span>
                            {h}
                          </div>
                        ))}
                      </div>
                    )}
                    {u.maps && (
                      <a
                        href={u.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
                        style={{ color: 'var(--g1)' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>map</span>
                        Ver en Google Maps
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 md:p-16"
            style={{ background: 'var(--gradient)' }}
          >
            <h2
              className="font-extrabold mb-4 text-white"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              ¿Lista para tu consulta?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto" style={{ fontSize: '1rem' }}>
              Agenda en minutos por WhatsApp. Sin filas, sin formularios complicados.
            </p>
            <a
              href="https://wa.link/ijph4k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all"
              style={{ background: 'white', color: 'var(--g1)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              <IconWhatsApp />
              Agendar por WhatsApp
            </a>
            <p className="mt-5 text-white/60 text-sm">Bogotá · Villavicencio · Atención confidencial</p>
          </div>
        </div>
      </section>
    </>
  )
}
