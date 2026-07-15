import { useState, useEffect, useRef } from 'react'

import ttThumb1 from '../../assets/videos/tiktok-1.jpg'
import ttThumb2 from '../../assets/videos/tiktok-2.jpg'
import ttThumb3 from '../../assets/videos/tiktok-3.jpg'
import ttThumb4 from '../../assets/videos/tiktok-4.jpg'
import igThumb1 from '../../assets/videos/instagram-1.jpg'
import igThumb2 from '../../assets/videos/instagram-2.jpg'
import igThumb3 from '../../assets/videos/instagram-3.jpg'
import igThumb4 from '../../assets/videos/instagram-4.jpg'

const videos = [
  { id: 1, platform: 'instagram', code: 'DX2N53-MpSE', link: 'https://www.instagram.com/reel/DX2N53-MpSE/', thumbnail: igThumb1 },
  { id: 2, platform: 'tiktok', code: '7639867684053601556', link: 'https://www.tiktok.com/@drcuco0/video/7639867684053601556', thumbnail: ttThumb1 },
  { id: 3, platform: 'instagram', code: 'DXNg5zdjMvS', link: 'https://www.instagram.com/reel/DXNg5zdjMvS/', thumbnail: igThumb2 },
  { id: 4, platform: 'tiktok', code: '7617184139166354708', link: 'https://www.tiktok.com/@drcuco0/video/7617184139166354708', thumbnail: ttThumb2 },
  { id: 5, platform: 'instagram', code: 'DU1pMsyDFcb', link: 'https://www.instagram.com/reel/DU1pMsyDFcb/', thumbnail: igThumb3 },
  { id: 6, platform: 'tiktok', code: '7598315986177117461', link: 'https://www.tiktok.com/@drcuco0/video/7598315986177117461', thumbnail: ttThumb3 },
  { id: 7, platform: 'instagram', code: 'DVex9sRj3mB', link: 'https://www.instagram.com/reel/DVex9sRj3mB/', thumbnail: igThumb4 },
  { id: 8, platform: 'tiktok', code: '7515849550167346488', link: 'https://www.tiktok.com/@drcuco0/video/7515849550167346488', thumbnail: ttThumb4 },
]

function getEmbedUrl(video) {
  if (video.platform === 'tiktok') {
    return `https://www.tiktok.com/embed/v2/${video.code}`
  }
  return `https://www.instagram.com/reel/${video.code}/embed`
}

export default function Videos() {
  const [active, setActive] = useState(null)
  const scroller = useRef(null)

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  const scrollBy = (dir) => {
    if (scroller.current) {
      const amount = scroller.current.clientWidth
      scroller.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#0d1f3c' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(0,218,241,0.12)', color: '#00daf1' }}
          >
            Aprende conmigo
          </span>
          <h2 className="section-title mb-3" style={{ color: 'white' }}>
            Contenido real, sin filtros
          </h2>
          <p className="section-subtitle max-w-xl mx-auto" style={{ color: '#8aa0bb' }}>
            Más de 150K personas ya siguen al Dr. Cuco en TikTok e Instagram. Salud íntima explicada de verdad.
          </p>
        </div>

        <div className="relative">
          {/* Flecha izquierda */}
          <button
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full items-center justify-center transition-transform hover:scale-110"
            style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined" style={{ color: '#0058bc' }}>chevron_left</span>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full items-center justify-center transition-transform hover:scale-110"
            style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined" style={{ color: '#0058bc' }}>chevron_right</span>
          </button>

          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActive(video)}
              className="relative group rounded-2xl overflow-hidden focus:outline-none flex-shrink-0 snap-start basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-0.667rem)] lg:basis-[calc(25%-0.75rem)]"
              style={{ aspectRatio: '9/16', background: '#1a2f50', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Portada real */}
              <img
                src={video.thumbnail}
                alt={`Reproducir video del Dr. Cuco en ${video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Degradado inferior para legibilidad */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 45%)' }}
              />

              {/* Badge plataforma */}
              <span
                className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(4px)',
                  color: 'white',
                }}
              >
                {video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
              </span>

              {/* Botón play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 30, color: '#0058bc', marginLeft: 2 }}>play_arrow</span>
                </div>
              </div>
            </button>
          ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="https://www.tiktok.com/@drcuco0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.78 1.52V6.7a4.85 4.85 0 01-1.01-.01z"/>
            </svg>
            TikTok @drcuco0
          </a>
          <a
            href="https://www.instagram.com/doctor.cuco"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram @doctor.cuco
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.88)' }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ width: '100%', maxWidth: 380, aspectRatio: '9/16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getEmbedUrl(active)}
              title="Video del Dr. Cuco"
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
            >
              Abrir en {active.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
            </a>
            <button
              onClick={() => setActive(null)}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
