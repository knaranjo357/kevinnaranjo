import React from 'react';
import New from './New';
import { Link } from 'react-router-dom';

function WhatWeOffer() {
  return (
    <>
      <section className="service-one">
        <div className="container">
          <div className="sec-title text-center">
            <h3 className="sec-title__title">
              Mis Habilidades Técnicas <br />
              y Cómo Impulsan Soluciones Innovadoras
            </h3>
          </div>

          <div className="row gutter-y-60">
            {/* Habilidad 1: Desarrollo de Software */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-1.jpg" alt="Desarrollo de Software" style={{ width: "300px", height: "250px" }} />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/skillsdetails/desarrollo-software">Desarrollo de Software</Link>
                    </h3>
                    <p className="service-card__text">
                      Experto en diseño y construcción de aplicaciones robustas con tecnologías modernas, garantizando escalabilidad y eficiencia.
                    </p>
                    <Link to="/skillsdetails/desarrollo-software" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidad 2: Machine Learning */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-2.jpg" alt="Machine Learning" style={{ width: "300px", height: "250px" }} />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/skillsdetails/machine-learning">Machine Learning</Link>
                    </h3>
                    <p className="service-card__text">
                      Desarrollo de modelos predictivos y análisis avanzados para optimizar procesos y generar valor empresarial.
                    </p>
                    <Link to="/skillsdetails/machine-learning" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidad 3: Visión por Computadora */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-3.jpg" alt="Visión por Computadora" style={{ width: "300px", height: "250px" }} />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/skillsdetails/vision-computadora">Visión por Computadora</Link>
                    </h3>
                    <p className="service-card__text">
                      Implementación de sistemas de reconocimiento visual que mejoran la interacción hombre-máquina y la automatización.
                    </p>
                    <Link to="/skillsdetails/vision-computadora" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidad 4: Desarrollo Web */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-4.jpg" alt="Desarrollo Web" style={{ width: "300px", height: "250px" }} />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/skillsdetails/desarrollo-web">Desarrollo Web</Link>
                    </h3>
                    <p className="service-card__text">
                      Creación de plataformas web modernas, centradas en la experiencia del usuario y optimizadas para alto rendimiento.
                    </p>
                    <Link to="/skillsdetails/desarrollo-web" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-title text-center mt-5">
            <h3 className="sec-title__title">Explora Mi Portafolio</h3>
            <p>Descubre cómo estas habilidades se reflejan en proyectos reales.</p>
            <Link to="/proyectos" className="thm-btn">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

      <New />
    </>
  );
}

export default WhatWeOffer;
