import { Link } from 'react-router-dom'
import logo from '../assets/logo-blanco.png'

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.78 1.52V6.7a4.85 4.85 0 01-1.01-.01z"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#0a1628', color: '#c8d8ec' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Dr. Cuco" className="h-20 w-auto mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: '#8aa0bb' }}>
              Medicina ginecológica directa, cercana y sin tabúes. Bogotá y Villavicencio.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.tiktok.com/@drcuco0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                aria-label="TikTok"
              >
                <IconTikTok />
              </a>
              <a
                href="https://www.instagram.com/doctor.cuco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                aria-label="WhatsApp"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00daf1' }}>Navegación</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Inicio', '/'],
                ['Tratamientos', '/tratamientos'],
                ['Tienda', '/tienda'],
                ['Blog', '/blog'],
                ['Sobre mí', '/sobre-el-doctor'],
                ['Contacto', '/contacto'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors" style={{ color: '#8aa0bb' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tratamientos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00daf1' }}>Tratamientos</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#8aa0bb' }}>
              {['Consulta ginecológica', 'Salud sexual', 'Planificación familiar', 'Salud hormonal', 'Menopausia', 'Estética íntima'].map((t) => (
                <li key={t}>
                  <Link to="/tratamientos" className="hover:text-white transition-colors">{t}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00daf1' }}>Contacto</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#8aa0bb' }}>
              <li className="flex gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#00daf1', flexShrink: 0 }}>location_on</span>
                <span>Carrera 19a #82-85, cons. 204<br />Country Medical Center, Bogotá</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#00daf1' }}>location_on</span>
                Villavicencio
              </li>
              <li>
                <a
                  href="https://wa.link/ijph4k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm mt-2"
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                  Escribir por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: '#8aa0bb' }}
        >
          <p>© {new Date().getFullYear()} Dr. Cuco · Dr. Germán González. Todos los derechos reservados.</p>
          <p>Diseñado con ♥ para la salud íntima sin tabúes.</p>
        </div>
      </div>
    </footer>
  )
}
