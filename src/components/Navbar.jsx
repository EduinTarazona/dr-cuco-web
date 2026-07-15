import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Tratamientos', to: '/tratamientos' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Blog', to: '/blog' },
  { label: 'Sobre mí', to: '/sobre-el-doctor' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(249,254,255,0.80)' : 'rgba(249,254,255,0.65)',
        backdropFilter: 'blur(22px) saturate(180%)',
        WebkitBackdropFilter: 'blur(22px) saturate(180%)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,88,188,0.10)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,88,188,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Dr. Cuco" className="h-11 md:h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  color: location.pathname === link.to ? 'var(--g1)' : '#4a6080',
                  background: location.pathname === link.to ? 'rgba(0,88,188,0.07)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="https://wa.link/ijph4k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex text-sm"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
            Agendar consulta
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl"
            style={{ color: 'var(--g1)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ background: 'rgba(249,254,255,0.97)', borderTop: '1px solid rgba(0,88,188,0.08)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium"
              style={{
                color: location.pathname === link.to ? 'var(--g1)' : '#4a6080',
                background: location.pathname === link.to ? 'rgba(0,88,188,0.07)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.link/ijph4k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 justify-center"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  )
}
