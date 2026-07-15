import { Link } from 'react-router-dom'
import doctorImg from '../../assets/dr-cuco-retrato-azul.jpg'

export default function SobreElDoctor() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: '#eef4fb' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-full opacity-15 blur-2xl"
              style={{ background: 'var(--gradient)' }}
            />
            <img
              src={doctorImg}
              alt="Dr. Germán González"
              loading="lazy"
              decoding="async"
              className="relative rounded-3xl object-contain mx-auto"
              style={{ width: 'auto', maxHeight: 520, maxWidth: '100%', boxShadow: '0 20px 60px rgba(0,88,188,0.14)' }}
            />
          </div>

          {/* Content */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
            >
              Sobre mí
            </span>
            <h2 className="section-title mb-5">
              Medicina directa,{' '}
              <span className="gradient-text">sin tabúes</span>
            </h2>
            <p className="section-subtitle mb-4">
              El Dr. Germán González es especialista en Ginecología y Obstetricia, sexólogo clínico y especialista en Ginecología Estética, Regenerativa y Funcional. Ha atendido a más de 200.000 pacientes en Bogotá y Villavicencio.
            </p>
            <p className="section-subtitle mb-8">
              En redes sociales, miles lo conocen como <strong>"Dr. Cuco"</strong> — un espacio donde habla de salud íntima con claridad, humor y cero vergüenza. Porque cada cuerpo merece respuestas reales.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['U. Nacional', 'U. Javeriana', 'FUCS', 'SAENI Argentina'].map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(0,88,188,0.07)', color: 'var(--g1)' }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <p className="font-extrabold text-2xl" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}>+200K</p>
                <p className="text-sm" style={{ color: '#4a6080' }}>Pacientes atendidas</p>
              </div>
              <div>
                <p className="font-extrabold text-2xl" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: '#0a1628' }}>+25</p>
                <p className="text-sm" style={{ color: '#4a6080' }}>Años de experiencia</p>
              </div>
            </div>

            <Link to="/sobre-el-doctor" className="btn-primary">
              Conocer más
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
