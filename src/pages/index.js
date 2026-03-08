import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useState } from "react";
import Heading from '@theme/Heading';
import styles from './index.module.css';
import SectionCard from '../components/SectionCard';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [cookieVisible, setCookieVisible] = useState(false); // <--- State aquí

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ paddingTop: '1rem', paddingBottom: '0rem' }}>
          Proyecto Final Microcredencial CSIC
        </Heading>
        <div className="hero__title"> Alba Rodríguez Salvador </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [cookieVisible, setCookieVisible] = useState(false); // <--- State aquí

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <SectionCard />
        {cookieVisible && (  // <-- Solo se muestra si cookieVisible = true
          <div
            style={{
              background: "#222",
              color: "#fff",
              padding: "0.5rem",
              textAlign: "center",
              position: "fixed",
              width: "100%",
              bottom: 50,
              zIndex: 9999,
              fontSize: "0.6rem"
            }}
          >
            Esta web usa cookies para medir visitas con Google Analytics.
            <button
              onClick={() => setCookieVisible(false)} // <-- Funciona ahora
              style={{ marginLeft: "1rem", fontSize: "0.6rem" }}
            >
              Aceptar
            </button>
          </div>
        )}
      </main>
     
    </Layout>
  );
}
