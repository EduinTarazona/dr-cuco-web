import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import CTAFinal from './home/CTAFinal'

import imgConsulta from '../assets/tratamientos/consulta-ginecologica.jpg'
import imgLabioplastia from '../assets/tratamientos/labioplastia.jpg'
import imgVaginoplastia from '../assets/tratamientos/vaginoplastia.jpg'
import imgMayoroplastia from '../assets/tratamientos/mayoroplastia.jpg'
import imgLiposuccion from '../assets/tratamientos/liposuccion-monte-venus.jpg'
import imgMirena from '../assets/tratamientos/mirena.jpg'
import imgKyleena from '../assets/tratamientos/kyleena.jpg'
import imgGoldT from '../assets/tratamientos/gold-t.jpg'
import imgPeeling from '../assets/tratamientos/peeling-quimico.jpg'
import imgLaserTensado from '../assets/tratamientos/laser-co2-tensado.jpg'
import imgFullTraction from '../assets/tratamientos/radiofrecuencia-full-traction.jpg'
import imgGTraction from '../assets/tratamientos/radiofrecuencia-g-traction.jpg'
import imgEstrias from '../assets/tratamientos/laser-co2-estrias.jpg'
import imgCicatrices from '../assets/tratamientos/laser-co2-cicatrices.jpg'
import imgVphTrat from '../assets/tratamientos/tratamiento-vph.jpg'
import imgVphVacuna from '../assets/tratamientos/vacuna-vph.jpg'
import imgPRP from '../assets/tratamientos/prp.jpg'
import imgChip from '../assets/tratamientos/chip-testosterona.jpg'
import imgDepilacion from '../assets/tratamientos/depilacion-laser.jpg'
import imgPisoPelvico from '../assets/tratamientos/piso-pelvico.jpg'
import imgAbdomenGluteos from '../assets/tratamientos/abdomen-gluteos.jpg'
import imgSueroC from '../assets/tratamientos/suero-vitamina-c.jpg'

const categorias = [
  {
    nombre: 'Consulta Ginecológica',
    slug: 'consulta',
    icon: 'favorite',
    servicios: [
      {
        titulo: 'Consulta Ginecológica',
        img: imgConsulta,
        pos: 'center 35%',
        corta: 'Cuida tu bienestar femenino con una atención integral en ginecología, enfocada en la salud íntima, prevención, rejuvenecimiento y armonía femenina.',
        descripcion: 'La consulta en ginecología y ginecología estética está diseñada para brindar un acompañamiento integral enfocado no solo en la salud femenina, sino también en el bienestar íntimo, la seguridad personal y la armonía estética de cada mujer. A través de una valoración personalizada y profesional, evaluamos la salud ginecológica, resolvemos inquietudes y ofrecemos alternativas enfocadas en el cuidado íntimo femenino, prevención, rejuvenecimiento y bienestar funcional y estético de la zona íntima.',
        beneficios: ['Prevención, diagnóstico y acompañamiento especializado', 'Opciones de rejuvenecimiento y bienestar íntimo', 'Seguimiento individualizado según las necesidades de cada mujer'],
      },
    ],
  },
  {
    nombre: 'Cirugías Íntimas',
    slug: 'cirugias',
    icon: 'auto_awesome',
    servicios: [
      {
        titulo: 'Labioplastia',
        img: imgLabioplastia,
        corta: 'Transforma la apariencia de tu zona íntima con un procedimiento diseñado para reducir y redefinir delicadamente los labios menores.',
        descripcion: 'Recupera comodidad, seguridad y armonía íntima con un procedimiento diseñado para redefinir delicadamente los labios menores y mejorar la apariencia estética de la zona vaginal. La labioplastia es una cirugía íntima femenina que busca brindar un resultado más estilizado, natural y proporcional.',
        beneficios: ['Ayuda a disminuir molestias físicas y roce', 'Procedimiento personalizado según la anatomía de cada mujer', 'Resultados naturales y armónicos', 'Recuperación relativamente rápida (5 a 10 días aprox.)'],
      },
      {
        titulo: 'Vaginoplastia',
        img: imgVaginoplastia,
        corta: 'Recupera firmeza, tonicidad y bienestar íntimo con un procedimiento diseñado para fortalecer y rejuvenecer el canal vaginal.',
        descripcion: 'La vaginoplastia es un procedimiento íntimo femenino diseñado para restaurar la firmeza y tonicidad del canal vaginal, ayudando a mejorar la funcionalidad, comodidad y seguridad de muchas mujeres después de cambios producidos por embarazos, partos o el paso del tiempo.',
        beneficios: ['Ayuda a restaurar la firmeza del canal vaginal', 'Frecuentemente solicitado después del parto', 'Resultados naturales y funcionales', 'Recuperación progresiva y controlada (1 a 2 semanas aprox.)'],
      },
      {
        titulo: 'Mayoroplastia',
        img: imgMayoroplastia,
        corta: 'Mejora la apariencia y armonía de la zona íntima restaurando el volumen y firmeza de los labios mayores.',
        descripcion: 'La mayoroplastia es un procedimiento íntimo femenino enfocado en mejorar la apariencia, volumen y firmeza de los labios mayores, ayudando a recuperar una imagen más rejuvenecida, armónica y estética de la zona íntima.',
        beneficios: ['Ayuda a restaurar volumen y firmeza de los labios mayores', 'Mejora la apariencia estética y rejuvenecida de la zona íntima', 'Puede mejorar comodidad y seguridad personal', 'Recuperación progresiva y controlada (1 a 2 semanas aprox.)'],
      },
      {
        titulo: 'Liposucción de Monte de Venus',
        img: imgLiposuccion,
        pos: 'center 45%',
        corta: 'Define y armoniza la apariencia de la zona íntima reduciendo el exceso de grasa en el monte de Venus.',
        descripcion: 'La liposucción de monte de Venus es un procedimiento estético íntimo diseñado para disminuir el exceso de volumen y grasa localizada en la parte superior de la zona íntima femenina, ayudando a lograr una apariencia más armónica, estilizada y proporcionada.',
        beneficios: ['Reduce el exceso de grasa localizada en el monte de Venus', 'Procedimiento mínimamente invasivo', 'Puede mejorar comodidad al usar ropa ajustada', 'Recuperación progresiva y controlada (1 a 2 semanas aprox.)'],
      },
    ],
  },
  {
    nombre: 'Inserción de Dispositivos bajo Sedación',
    slug: 'dispositivos',
    icon: 'local_pharmacy',
    servicios: [
      {
        titulo: 'Mirena',
        img: imgMirena,
        corta: 'Vive la inserción de tu Mirena de forma más cómoda, tranquila y segura gracias a un procedimiento realizado bajo sedación.',
        descripcion: 'La inserción de Mirena bajo sedación está diseñada para brindar mayor comodidad y tranquilidad durante la colocación del dispositivo intrauterino hormonal. Mirena es un DIU hormonal altamente efectivo que además de funcionar como método anticonceptivo, también puede ayudar en el manejo de sangrados abundantes.',
        beneficios: ['Ayuda a disminuir ansiedad y molestias durante la colocación', 'Procedimiento seguro y controlado', 'Método anticonceptivo de larga duración', 'Procedimiento ambulatorio y de rápida recuperación (24 a 48 horas aprox.)'],
      },
      {
        titulo: 'Kyleena',
        img: imgKyleena,
        corta: 'Disfruta una experiencia más cómoda y segura durante la inserción de tu Kyleena gracias a un procedimiento realizado bajo sedación.',
        descripcion: 'La inserción de Kyleena bajo sedación está diseñada para ofrecer mayor comodidad durante la colocación del DIU hormonal. Kyleena es un dispositivo intrauterino de larga duración y alta efectividad con liberación hormonal de baja dosis.',
        beneficios: ['Método anticonceptivo hormonal de larga duración', 'Procedimiento seguro y controlado', 'Valoración médica previa individualizada', 'Procedimiento ambulatorio y de rápida recuperación (24 a 48 horas aprox.)'],
      },
      {
        titulo: 'Gold T',
        img: imgGoldT,
        corta: 'Realiza la inserción de tu Gold T de forma más cómoda y segura mediante un procedimiento bajo sedación.',
        descripcion: 'La inserción de Gold T bajo sedación está diseñada para brindar una experiencia más cómoda y segura. El Gold T es un DIU de alta efectividad con tecnología de cobre y núcleo de oro, diseñado para ofrecer anticoncepción segura y de larga duración.',
        beneficios: ['Método anticonceptivo de larga duración', 'Atención personalizada y acompañamiento especializado', 'Procedimiento seguro y controlado', 'Procedimiento ambulatorio y de rápida recuperación (24 a 48 horas aprox.)'],
      },
    ],
  },
  {
    nombre: 'Tecnología Íntima Avanzada',
    slug: 'tecnologia',
    icon: 'bolt',
    servicios: [
      {
        titulo: 'Tensado vaginal con Láser CO2 Fraccionado',
        img: imgLaserTensado,
        pos: 'center 20%',
        corta: 'Recupera firmeza y rejuvenecimiento íntimo con tecnología de Láser CO2 Fraccionado, mínimamente invasivo y con resultados naturales.',
        descripcion: 'El tensado vaginal con Láser CO2 Fraccionado estimula la producción natural de colágeno y favorece la regeneración de los tejidos, ayudando a mejorar la firmeza, hidratación y calidad de la mucosa vaginal. Una alternativa moderna para mujeres que desean mejorar su salud íntima sin cirugía.',
        beneficios: ['Ayuda a estimular colágeno y regeneración de tejidos', 'Mejora firmeza y tonicidad vaginal', 'Procedimiento mínimamente invasivo', 'Recuperación rápida y ambulatoria'],
      },
      {
        titulo: 'Tensado vaginal con Radiofrecuencia Full Traction',
        img: imgFullTraction,
        pos: 'center 22%',
        corta: 'Revitaliza y fortalece tu zona íntima con radiofrecuencia Full Traction, cómodo y mínimamente invasivo.',
        descripcion: 'El tensado vaginal con radiofrecuencia Full Traction estimula la producción natural de colágeno y favorece la regeneración tisular, ayudando a recuperar una sensación de mayor firmeza y soporte vaginal. Tratamiento cómodo, seguro y mínimamente invasivo.',
        beneficios: ['Estimula la producción natural de colágeno', 'Ayuda a mejorar firmeza y tonicidad vaginal', 'Tratamiento mínimamente invasivo y ambulatorio', 'Recuperación rápida y cómoda'],
      },
      {
        titulo: 'Tensado vaginal con Radiofrecuencia G-Traction',
        img: imgGTraction,
        pos: 'center 22%',
        corta: 'Mejora tu bienestar íntimo con tecnología G-Traction, tratamiento innovador para firmeza y rejuvenecimiento vaginal.',
        descripcion: 'G-Traction es un innovador tratamiento de rejuvenecimiento íntimo que estimula la producción natural de colágeno y favorece la revitalización íntima, ayudando a recuperar una sensación de mayor firmeza, confort y bienestar femenino sin cirugía.',
        beneficios: ['Ayuda a estimular colágeno y regeneración tisular', 'Mejora firmeza y tonicidad vaginal', 'Procedimiento cómodo y mínimamente invasivo', 'Recuperación rápida y ambulatoria'],
      },
    ],
  },
  {
    nombre: 'Estética y Renovación Íntima',
    slug: 'estetica',
    icon: 'spa',
    servicios: [
      {
        titulo: 'Peeling Químico Íntimo',
        img: imgPeeling,
        corta: 'Renueva la apariencia de tu zona íntima mejorando el tono, textura y luminosidad de la piel.',
        descripcion: 'El peeling químico íntimo mejora la apariencia de la piel de la zona íntima femenina, ayudando a disminuir manchas, unificar el tono y aportar una apariencia más luminosa, suave y rejuvenecida. Tratamiento mínimamente invasivo con recuperación rápida.',
        beneficios: ['Favorece una apariencia más uniforme y luminosa', 'Puede ayudar a disminuir manchas superficiales', 'Tratamiento mínimamente invasivo', 'Recuperación rápida y sencilla'],
      },
      {
        titulo: 'Plasma Rico en Plaquetas (PRP)',
        img: imgPRP,
        corta: 'Estimula la regeneración y revitalización natural de tu zona íntima con factores regenerativos de tu propia sangre.',
        descripcion: 'El Plasma Rico en Plaquetas (PRP) íntimo es un tratamiento innovador que utiliza los componentes regenerativos de tu propia sangre para estimular la producción de colágeno, mejorar la hidratación, aumentar la sensibilidad y rejuvenecer la zona íntima femenina de manera segura y natural. Ideal para mujeres que desean recuperar confianza, bienestar y comodidad íntima sin cirugía.',
        beneficios: ['Mejora la hidratación y elasticidad vaginal', 'Ayuda a disminuir resequedad y molestias íntimas', 'Favorece una mayor sensibilidad y bienestar íntimo', 'Mínimamente invasivo, sin incapacidad y con recuperación inmediata'],
      },
      {
        titulo: 'Depilación Láser',
        img: imgDepilacion,
        corta: 'Disfruta una piel más suave y libre de vello con la tecnología Paclaser de New Age: cómoda, segura y efectiva.',
        descripcion: 'La depilación láser con tecnología Paclaser de New Age reduce progresivamente el crecimiento del vello no deseado mediante tecnología moderna que brinda mayor comodidad, precisión y seguridad. Actúa directamente sobre el folículo piloso, adaptándose a distintos tipos de piel y favoreciendo una piel más suave y uniforme, con menos irritación y vellos encarnados que los métodos tradicionales.',
        beneficios: ['Reducción progresiva del crecimiento del vello', 'Tratamiento seguro, moderno y cómodo', 'Adaptable a diferentes tipos de piel', 'Ayuda a disminuir irritación y vellos encarnados'],
      },
    ],
  },
  {
    nombre: 'Renovación Cutánea con Láser CO2',
    slug: 'laser',
    icon: 'grain',
    servicios: [
      {
        titulo: 'Láser CO2 para estrías en abdomen',
        img: imgEstrias,
        corta: 'Mejora la apariencia de las estrías abdominales con Láser CO2 Fraccionado, estimulando la regeneración natural de la piel.',
        descripcion: 'El tratamiento con Láser CO2 Fraccionado para estrías abdominales estimula la regeneración y producción natural de colágeno, actuando de manera controlada sobre las capas de la piel y mejorando progresivamente el aspecto de las estrías. Se realiza de forma personalizada según el tipo de piel, profundidad de las estrías y necesidades de cada paciente.',
        beneficios: ['Estimula producción natural de colágeno', 'Favorece regeneración y renovación de la piel', 'Procedimiento mínimamente invasivo', 'Mejoría progresiva y natural de la piel'],
      },
      {
        titulo: 'Láser CO2 para cicatrices',
        img: imgCicatrices,
        corta: 'Mejora la apariencia de cicatrices con Láser CO2 Fraccionado, suavizando irregularidades para una textura más uniforme.',
        descripcion: 'El tratamiento con Láser CO2 Fraccionado para cicatrices mejora la textura, apariencia y calidad de la piel mediante tecnología avanzada que estimula la regeneración natural y la producción de colágeno. Ideal para cicatrices de cirugías, acné, lesiones o quemaduras, actúa de manera controlada remodelando el colágeno para mejorar progresivamente su apariencia. Cada procedimiento es personalizado según el tipo de piel y la cicatriz.',
        beneficios: ['Ayuda a mejorar textura y apariencia de cicatrices', 'Favorece regeneración y renovación de la piel', 'Procedimiento mínimamente invasivo', 'Mejoría progresiva y natural de la piel'],
      },
    ],
  },
  {
    nombre: 'Salud y Prevención',
    slug: 'prevencion',
    icon: 'vaccines',
    servicios: [
      {
        titulo: 'Tratamiento para VPH',
        img: imgVphTrat,
        corta: 'Atención especializada para el manejo y tratamiento del VPH en un espacio seguro, confidencial y personalizado.',
        descripcion: 'El tratamiento para VPH se enfoca en el manejo, control y seguimiento especializado del Virus del Papiloma Humano, con atención integral y personalizada para cuidar la salud íntima y el bienestar femenino. A través de una evaluación especializada es posible identificar alteraciones, realizar seguimiento oportuno y ofrecer tratamientos enfocados en el cuidado y protección de la salud ginecológica.',
        beneficios: ['Valoración y manejo especializado para VPH', 'Atención confidencial y personalizada', 'Seguimiento ginecológico integral', 'Enfoque en prevención y cuidado de la salud femenina'],
      },
      {
        titulo: 'Vacuna para VPH',
        img: imgVphVacuna,
        corta: 'Protege tu salud íntima con la vacuna contra el VPH, una herramienta preventiva para cuidar tu bienestar a largo plazo.',
        descripcion: 'La vacuna contra el Virus del Papiloma Humano (VPH) es una medida preventiva diseñada para ayudar a proteger la salud femenina frente a diferentes tipos de VPH asociados a alteraciones ginecológicas. Es una herramienta segura y efectiva que ayuda a disminuir el riesgo de enfermedades asociadas al virus. Se aplica bajo valoración médica y acompañamiento profesional, de manera personalizada según edad, antecedentes y necesidades.',
        beneficios: ['Ayuda a disminuir riesgos asociados al virus', 'Atención médica y orientación personalizada', 'Enfoque en prevención y bienestar femenino'],
      },
    ],
  },
  {
    nombre: 'Bienestar y Terapia Hormonal',
    slug: 'hormonal',
    icon: 'wb_sunny',
    servicios: [
      {
        titulo: 'Chip de Testosterona',
        img: imgChip,
        corta: 'Recupera bienestar, equilibrio y vitalidad con el chip de testosterona: energía, ánimo y calidad de vida.',
        descripcion: 'El chip de testosterona es un tratamiento de terapia hormonal que ayuda a mejorar el bienestar físico, emocional e íntimo de mujeres con síntomas asociados a desequilibrios hormonales (cansancio, disminución del deseo sexual, cambios de ánimo, alteraciones del sueño o baja energía). Consiste en un pequeño implante subcutáneo que libera la hormona de forma progresiva y controlada durante varios meses, manteniendo niveles más estables.',
        beneficios: ['Liberación progresiva y controlada de testosterona', 'Puede ayudar a mejorar energía y bienestar general', 'Apoyo en síntomas asociados a cambios hormonales', 'Procedimiento ambulatorio y mínimamente invasivo'],
      },
      {
        titulo: 'Suero de Vitamina C',
        img: imgSueroC,
        corta: 'Revitaliza tu cuerpo desde el interior con una terapia intravenosa que apoya defensas, energía y vitalidad.',
        descripcion: 'El suero de vitamina C es una terapia intravenosa diseñada para aportar bienestar, revitalización y apoyo integral al organismo mediante la administración controlada de vitamina C y otros componentes según las necesidades de cada paciente. Favorece una absorción rápida y eficiente de nutrientes, apoya el sistema inmune y se asocia al cuidado de la piel y a la producción natural de colágeno.',
        beneficios: ['Ayuda a apoyar bienestar y vitalidad', 'Puede favorecer fortalecimiento del sistema inmune', 'Apoyo antioxidante y bienestar integral'],
      },
    ],
  },
  {
    nombre: 'Rehabilitación y Tonificación Muscular',
    slug: 'rehabilitacion',
    icon: 'fitness_center',
    servicios: [
      {
        titulo: 'Fortalecimiento de Piso Pélvico (Definex)',
        img: imgPisoPelvico,
        corta: 'Fortalece tu piso pélvico y mejora tu bienestar íntimo con tecnología Definex, cómoda, segura y no invasiva.',
        descripcion: 'El fortalecimiento de piso pélvico con tecnología Definex estimula y fortalece la musculatura pélvica de manera no invasiva, ayudando a mejorar el bienestar íntimo, la tonicidad muscular y la calidad de vida. El piso pélvico cumple una función fundamental en el soporte de órganos, el control urinario y el bienestar íntimo. Mediante estimulación profunda, cómoda y ambulatoria, favorece el fortalecimiento muscular y mejora soporte, firmeza y funcionalidad de la zona.',
        beneficios: ['Fortalecimiento no invasivo del piso pélvico', 'Ayuda a mejorar soporte y tonicidad muscular', 'Puede favorecer bienestar y comodidad íntima', 'Recuperación inmediata y sin incapacidad'],
      },
      {
        titulo: 'Tonificación de Abdomen y Glúteos (Definex)',
        img: imgAbdomenGluteos,
        corta: 'Fortalece, tonifica y redefine tu cuerpo con tecnología Definex: firmeza y definición sin cirugía.',
        descripcion: 'La tonificación de abdomen y glúteos con tecnología Definex es un tratamiento avanzado no invasivo que estimula profundamente la musculatura, ayudando a mejorar la firmeza, tonicidad y definición corporal. Genera contracciones musculares intensas y controladas que favorecen el fortalecimiento de estas áreas de manera cómoda y segura, ideal como complemento de hábitos saludables.',
        beneficios: ['Estimulación profunda de la musculatura', 'Tratamiento no invasivo y cómodo', 'Ayuda a mejorar tonicidad y firmeza', 'Complemento ideal para hábitos saludables'],
      },
    ],
  },
]

export default function Tratamientos() {
  const [activo, setActivo] = useState(null)
  const [filtro, setFiltro] = useState('todos')
  const location = useLocation()

  // Bloquear scroll del fondo y cerrar con Esc cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = activo ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setActivo(null) }
    if (activo) window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activo])

  // Si llega con ancla (#slug), activar ese filtro
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.slice(1)
      if (categorias.some((c) => c.slug === slug)) setFiltro(slug)
    }
    window.scrollTo(0, 0)
  }, [location])

  const visibles = categorias.filter((c) => filtro === 'todos' || c.slug === filtro)

  return (
    <>
      <Seo title="Tratamientos" description="Consulta ginecológica, cirugías íntimas, láser, dispositivos, VPH, terapia hormonal y más. 22 tratamientos con tecnología avanzada en Bogotá y Villavicencio." />
      {/* Header */}
      <section className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
          >
            Servicios médicos
          </span>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}
          >
            Tratamientos{' '}
            <span className="gradient-text">especializados</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Atención ginecológica integral con tecnología avanzada en Bogotá y Villavicencio. Todos los procedimientos realizados por el Dr. Germán González con más de 25 años de experiencia.
          </p>
        </div>
      </section>

      {/* Filtros por categoría */}
      <div className="py-6 px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb', borderBottom: '1px solid rgba(0,88,188,0.07)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {[{ slug: 'todos', nombre: 'Todos' }, ...categorias].map((c) => (
            <button
              key={c.slug}
              onClick={() => setFiltro(c.slug)}
              className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all flex-shrink-0"
              style={{
                background: filtro === c.slug ? 'var(--gradient)' : 'white',
                color: filtro === c.slug ? 'white' : '#4a6080',
                border: '1px solid',
                borderColor: filtro === c.slug ? 'transparent' : '#e5eaf2',
              }}
            >
              {c.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Categorías */}
      {visibles.map((cat, idx) => {
        const dark = cat.slug === 'tecnologia'
        const sectionBg = dark
          ? 'linear-gradient(135deg, #071e27 0%, #004b74 55%, #006399 100%)'
          : (idx % 2 === 0 ? 'white' : '#eef4fb')
        const muted = dark ? 'rgba(255,255,255,0.8)' : '#4a6080'

        return (
        <section key={cat.nombre} id={cat.slug} className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: sectionBg, scrollMarginTop: '90px' }}>
          <div className="max-w-7xl mx-auto">
            {/* Categoria header con contador */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,88,188,0.07)' }}>
                <span className={`material-symbols-outlined ${dark ? '' : 'gradient-text'}`} style={dark ? { color: '#fff' } : {}}>{cat.icon}</span>
              </div>
              <h2 className="font-bold text-xl" style={{ color: dark ? '#fff' : '#0a1628', fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                {cat.nombre}
                <span className="ml-2 font-normal" style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#8aa0bb' }}>· {cat.servicios.length}</span>
              </h2>
            </div>

            {cat.servicios.length === 1 ? (
              /* Tarjeta destacada (foto izquierda, texto derecha) */
              cat.servicios.map((s) => (
                <button
                  key={s.titulo}
                  onClick={() => setActivo(s)}
                  className="w-full text-left rounded-[24px] overflow-hidden flex flex-col md:flex-row group transition-all hover:shadow-xl"
                  style={{ background: dark ? 'rgba(255,255,255,0.05)' : 'white', border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,88,188,0.1)'}`, boxShadow: dark ? 'none' : '0 4px 24px rgba(0,88,188,0.08)' }}
                >
                  <div className="relative w-full md:w-1/2 h-72 md:h-auto md:min-h-[420px] overflow-hidden">
                    {s.img ? (
                      <img src={s.img} alt={s.titulo} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: s.pos || 'center 30%' }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,88,188,0.05)' }}><span className="material-symbols-outlined gradient-text" style={{ fontSize: 40 }}>image</span></div>
                    )}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top right, rgba(0,88,188,0.18), transparent 60%)' }} />
                    <div className="absolute top-4 right-4 rounded-full p-2 flex" style={{ background: dark ? 'var(--g1)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: dark ? '#fff' : 'var(--g1)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{cat.icon}</span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-wider mb-2 gradient-text">Valoración especializada</span>
                    <h3 className="font-extrabold mb-3" style={{ fontSize: '1.5rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: dark ? '#fff' : '#0a1628' }}>{s.titulo}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: muted }}>{s.corta}</p>
                    <span className="inline-flex items-center gap-1 font-bold" style={{ color: dark ? '#94ccff' : undefined }}>
                      <span className={dark ? '' : 'gradient-text'}>Ver detalles del servicio</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: 18, color: dark ? '#94ccff' : 'var(--g1)' }}>arrow_forward</span>
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div
                className="flex gap-6 overflow-x-auto md:overflow-visible md:flex-wrap pb-4 md:pb-0 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {cat.servicios.map((s) => (
                  <button
                    key={s.titulo}
                    onClick={() => setActivo(s)}
                    className="text-left rounded-[20px] overflow-hidden flex flex-col group transition-all hover:shadow-xl flex-none snap-start w-[80%] sm:w-[46%] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
                    style={{ background: dark ? 'rgba(255,255,255,0.05)' : 'white', border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,88,188,0.1)'}`, boxShadow: dark ? 'none' : '0 4px 24px rgba(0,88,188,0.06)' }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {s.img ? (
                        <img src={s.img} alt={s.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: s.pos || 'center 30%' }} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(0,88,188,0.05)' }}><span className="material-symbols-outlined gradient-text" style={{ fontSize: 40 }}>image</span></div>
                      )}
                      <div className="absolute inset-0" style={{ background: dark ? 'linear-gradient(to top right, rgba(7,30,39,0.55), transparent 60%)' : 'linear-gradient(to top right, rgba(0,88,188,0.18), transparent 60%)' }} />
                      <div className="absolute top-3 right-3 rounded-full p-2 flex" style={{ background: dark ? 'var(--g1)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: dark ? '#fff' : 'var(--g1)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{cat.icon}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: '1rem', color: dark ? '#fff' : '#0a1628' }}>{s.titulo}</h3>
                      <p className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1" style={{ color: muted }}>{s.corta}</p>
                      <span className="inline-flex items-center gap-1 font-bold mt-auto" style={{ color: dark ? '#94ccff' : undefined }}>
                        <span className={dark ? '' : 'gradient-text'}>Ver más</span>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: 18, color: dark ? '#94ccff' : 'var(--g1)' }}>arrow_forward</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
        )
      })}

      {/* Modal de detalle */}
      {activo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,22,40,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={() => setActivo(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            className="relative bg-white rounded-3xl overflow-hidden w-full max-w-lg max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: '0 30px 80px rgba(0,88,188,0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setActivo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              aria-label="Cerrar"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#0a1628' }}>close</span>
            </button>

            {activo.img && (
              <div className="w-full h-80 flex items-center justify-center" style={{ background: '#ffffff' }}>
                <img src={activo.img} alt={activo.titulo} loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>
            )}

            <div className="p-7">
              <h3 id="modal-titulo" className="font-extrabold mb-3" style={{ fontSize: '1.4rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}>{activo.titulo}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#4a6080' }}>{activo.descripcion}</p>

              <p className="font-bold text-sm mb-3" style={{ color: '#0a1628' }}>Beneficios</p>
              <ul className="space-y-2 mb-7">
                {activo.beneficios.map((b) => (
                  <li key={b} className="flex gap-2 text-sm" style={{ color: '#4a6080' }}>
                    <span className="material-symbols-outlined gradient-text" style={{ fontSize: 18, marginTop: 1, flexShrink: 0 }}>check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.link/ijph4k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                style={{ fontSize: '0.9rem' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      )}

      <CTAFinal />
    </>
  )
}
