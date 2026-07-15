import { Helmet } from 'react-helmet-async'

const BASE = 'Dr. Cuco — Dr. Germán González'

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${BASE}` : `${BASE} — Ginecólogo Estético en Bogotá y Villavicencio`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
