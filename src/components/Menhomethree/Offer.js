import React from 'react';
import { Link } from 'react-router-dom';

function Experiencia() {
  return (
    <>
      <section className="about-six">
        <div className="container">
          <div className="sec-title text-center">
            <h1 className="sec-title__title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2a2a2a' }}>
              KEVIN ALEJANDRO NARANJO REYES
            </h1>
          </div>

          <div className="row gutter-y-30 justify-content-end">
            {/* Experiencia 3 */}
            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="about-six__card" style={{ textAlign: 'center' }}>
                <div className="about-six__card__icon">
                  <i className="fas fa-briefcase" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">PRACTICANTE DE VISIÓN POR COMPUTADOR</Link>
                </h3>
                <div className="about-six__card__text" style={{ textAlign: 'justify' }}>
                  <p><strong>Ene 2021 – Jul 2021</strong></p>
                  <p>
                    Desarrollé soluciones de visión por computador para automatización y análisis
                    de datos visuales, contribuyendo a proyectos de alto impacto en
                    <strong> K2 Ingeniería</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="about-six__card" style={{ textAlign: 'center' }}>
                <div className="about-six__card__icon">
                  <i className="fas fa-briefcase" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">INGENIERO DE DESARROLLO</Link>
                </h3>
                <div className="about-six__card__text" style={{ textAlign: 'justify' }}>
                  <p><strong>Jul 2021 – Nov 2023</strong></p>
                  <p>
                    Diseñé y desarrollé software para proyectos tecnológicos, incluidas plataformas
                    de configuración y visualización de datos. Participé activamente en el diseño,
                    fabricación y distribución de productos.
                  </p>
                </div>
              </div>
            </div>

            {/* Experiencia 1 */}
            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="about-six__card" style={{ textAlign: 'center' }}>
                <div className="about-six__card__icon">
                  <i className="fas fa-briefcase" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">LÍDER DE DESARROLLO DE SOFTWARE Y ML</Link>
                </h3>
                <div className="about-six__card__text" style={{ textAlign: 'justify' }}>
                  <p><strong>Nov 2023 – Actualidad</strong></p>
                  <p>
                    En <strong>Xactus</strong>, lidero equipos multidisciplinarios para desarrollar
                    soluciones innovadoras de inteligencia artificial y productos funcionales
                    adaptados a las necesidades del cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experiencia;
