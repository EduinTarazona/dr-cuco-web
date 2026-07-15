export default function Tienda() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl text-center px-8 py-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(0,88,188,0.06), rgba(0,218,241,0.06))', border: '1px solid rgba(0,88,188,0.10)' }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'var(--gradient)' }}
          >
            <span className="material-symbols-outlined text-white" style={{ fontSize: 32 }}>storefront</span>
          </div>

          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,88,188,0.09)', color: 'var(--g1)' }}
          >
            Tienda
          </span>

          <h2 className="section-title mb-3">Muy pronto: nuestra tienda</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Estamos preparando una selección de productos para el cuidado y bienestar íntimo, elegidos con criterio médico por el Dr. Cuco. ¡Muy pronto disponibles!
          </p>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/doctor.cuco"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>notifications</span>
              Entérate primero en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
