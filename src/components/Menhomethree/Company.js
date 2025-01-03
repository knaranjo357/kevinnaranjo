import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function Company() {
  return (
    <>
      <section className="service-five">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6 text-center">
              <div className="service-three__image">
                <img
                  src="assets/images/services/service-5-1.png"
                  alt="Kevin Alejandro Naranjo Reyes"
                  style={{ width: "655px", height: "620px" }}
                />
                <div className="service-three__image__caption text-start">
                  <h3 className="count-box service-three__image__caption__count">
                    + <CountUp end={4} duration={2} /> {/* Años de experiencia */}
                  </h3>
                  <p className="service-three__image__caption__text">
                    Años de Experiencia
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="service-five__content">
                <div className="sec-title text-start"  style={{ textAlign: 'center' }}>
                  <h3 className="sec-title__title" style={{ textAlign: 'center' }}>
                    INGENIERO MECATRÓNICO Y LÍDER DE DESARROLLO
                  </h3>
                </div>
                <div className="service-five__text"  style={{ textAlign: 'justify' }}>
                  Soy <strong>Kevin Alejandro Naranjo Reyes</strong>, Ingeniero Mecatrónico
                  graduado de la Universidad Autónoma de Bucaramanga (UNAB) con más de cuatro
                  años de experiencia liderando y desarrollando proyectos en software, inteligencia
                  artificial y tecnologías innovadoras. Me caracterizo por mi dedicación al
                  aprendizaje continuo, resolver problemas complejos y crear soluciones tecnológicas
                  impactantes. Tengo más de 80 certificaciones de Platzi, enfocadas en
                  machine learning, desarrollo web y tecnologías emergentes.
                </div>

                <div className="service-five__btns" style={{ display: "flex", gap: "10px" }}>
  <a
    href="es_cv_kevinnaranjo.pdf"
    download
    className="thm-btn"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: '#ffffff', // Color del texto en blanco
      backgroundColor: "#007bff", // Fondo azul
      padding: "10px 20px", // Añade algo de espacio al botón
      textDecoration: "none", // Elimina el subrayado
      borderRadius: "5px", // Bordes redondeados
    }}
  >
    <span>
      CV Español <i className="far fa-arrow-right" />
    </span>
  </a>
  <a
    href="en_cv_kevinnaranjo.pdf"
    download
    className="thm-btn"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: '#ffffff', // Color del texto en blanco
      backgroundColor: "#007bff", // Fondo azul
      padding: "10px 20px", // Añade algo de espacio al botón
      textDecoration: "none", // Elimina el subrayado
      borderRadius: "5px", // Bordes redondeados
    }}
  >
    <span>
      CV Inglés <i className="far fa-arrow-right" />
    </span>
  </a>
  <Link
    to="/proyectos"
    className="thm-btn"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: '#ffffff', // Color del texto en blanco
      backgroundColor: "#007bff", // Fondo azul
      padding: "10px 20px", // Añade algo de espacio al botón
      textDecoration: "none", // Elimina el subrayado
      borderRadius: "5px", // Bordes redondeados
    }}
  >
    <span>
      Proyectos <i className="far fa-arrow-right" />
    </span>
  </Link>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
