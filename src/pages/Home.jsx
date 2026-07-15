import Seo from '../components/Seo'
import Hero from './home/Hero'
import TrustBar from './home/TrustBar'
import Tratamientos from './home/Tratamientos'
import Videos from './home/Videos'
import Tienda from './home/Tienda'
import SobreElDoctor from './home/SobreElDoctor'
import Blog from './home/Blog'
import CTAFinal from './home/CTAFinal'

export default function Home() {
  return (
    <>
      <Seo description="Ginecología estética, regenerativa y funcional con el Dr. Cuco. Cirugía íntima, láser, salud íntima y bienestar femenino en Bogotá y Villavicencio. Agenda tu consulta por WhatsApp." />
      <Hero />
      <TrustBar />
      <Tratamientos />
      <Videos />
      <Tienda />
      <SobreElDoctor />
      <Blog />
      <CTAFinal />
    </>
  )
}
