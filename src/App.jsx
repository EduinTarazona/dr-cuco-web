import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// Rutas cargadas bajo demanda (code-splitting) — el Home queda eager por ser la portada
const Tratamientos = lazy(() => import('./pages/Tratamientos'))
const Tienda = lazy(() => import('./pages/Tienda'))
const Blog = lazy(() => import('./pages/Blog'))
const SobreElDoctor = lazy(() => import('./pages/SobreElDoctor'))
const Contacto = lazy(() => import('./pages/Contacto'))
const BlogDetalle = lazy(() => import('./pages/Blog').then((m) => ({ default: m.BlogDetalle })))

function BlogDetalleWrapper() {
  const { slug } = useParams()
  return <BlogDetalle slug={slug} />
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <div
        className="w-10 h-10 rounded-full animate-spin"
        style={{ border: '3px solid rgba(0,88,188,0.15)', borderTopColor: 'var(--g1)' }}
        role="status"
        aria-label="Cargando"
      />
    </div>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Si hay ancla (#slug), dejar que la página maneje el scroll; si no, subir arriba
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <div className="pt-28 md:pt-32 pb-20 px-4 text-center">
      <h1 className="section-title mb-4">Página no encontrada</h1>
      <p className="section-subtitle mb-8">La página que buscas no existe.</p>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tratamientos" element={<Tratamientos />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetalleWrapper />} />
            <Route path="/sobre-el-doctor" element={<SobreElDoctor />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
