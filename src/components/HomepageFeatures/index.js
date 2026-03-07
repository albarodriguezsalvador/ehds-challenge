import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprende el EEDS',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprende los fundamentos y la estructura del Espacio Europeo de Datos de Salud, 
        sus objetivos estratégicos y cómo impacta en la asistencia sanitaria y la investigación biomédica.
      </>
    ),
  },
  {
    title: 'Aplica tus conocimientos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Diseña estrategias de gestión de datos sanitarios, planes de implementación y proyectos innovadores, 
        cumpliendo con la normativa europea y maximizando el valor de los datos.
      </>
    ),
  },
  {
    title: 'Desarrolla competencias prácticas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Participa en actividades prácticas, desarrolla protocolos, infografías y proyectos colaborativos que integren 
        el EEDS en entornos reales de salud digital.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container hidden">
       <div className="row ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
