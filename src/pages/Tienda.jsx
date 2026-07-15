import Seo from '../components/Seo'
import CTAFinal from './home/CTAFinal'

export default function Tienda() {
  return (
    <>
      <Seo title="Tienda" description="Muy pronto: productos para el cuidado y bienestar íntimo elegidos con criterio médico por el Dr. Cuco. Envíos discretos a todo Colombia." />
      {/* Header */}
      <section className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl text-center px-8 py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,88,188,0.06), rgba(0,218,241,0.06))', border: '1px solid rgba(0,88,188,0.10)' }}
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'var(--gradient)' }}
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: 40 }}>storefront</span>
            </div>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'rgba(0,88,188,0.09)', color: 'var(--g1)' }}
            >
              Tienda
            </span>

            <h1
              className="font-extrabold mb-4"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
            >
              Muy pronto:{' '}
              <span className="gradient-text">nuestra tienda</span>
            </h1>
            <p className="section-subtitle max-w-xl mx-auto">
              Estamos preparando una selección de productos para el cuidado y bienestar íntimo, elegidos con criterio médico por el Dr. Cuco. Envíos discretos a todo Colombia. ¡Muy pronto disponibles!
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.instagram.com/doctor.cuco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>notifications</span>
                Entérate primero en Instagram
              </a>
              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
