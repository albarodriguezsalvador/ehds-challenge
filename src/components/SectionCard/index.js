import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    sectionTitle: 'Proyecto Final',
    title: 'Microcredencial CSIC: El espacio europeo de datos de salud: retos y oportunidades en la asistencia sanitaria y en la investigación biomédica',
    subtitle: 'Proyecto de Transformación Digital en el Espacio Europeo de Datos de Salud',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  
];


export default function SectionCard() {
  return (
     <section className={styles.sectionCard}>
      <h3>Proyecto Final</h3>
      <h4>Microcredencial CSIC: El espacio europeo de datos de salud: retos y oportunidades en la asistencia sanitaria y en la investigación biomédica <a
          href="https://aprende.csic.es/catalogo/el-espacio-europeo-de-datos-de-salud-retos-y-oportunidades-en-la-asistencia-sanitaria-y-en-la-investigacion-biomedica/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black', textDecoration: 'none', display: 'inline-flex', alignItems: 'center',  background: 'none',  }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '1em', height: '1em', marginLeft: '-0.75em' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16" />
          </svg>
        </a></h4>
      <p>Proyecto de Transformación Digital en el Espacio Europeo de Datos de Salud</p>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="./docs/introduction/">Ver proyectos</a>
      </div>
    </section>
  );
}
