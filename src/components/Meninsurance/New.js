import React from 'react';
import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <>
      <section className="service-two">
        <div className="container">
          <div className="sec-title text-center">
            <h3 className="sec-title__title">Innovación y Tecnología en Soluciones Prácticas</h3>
          </div>

          <div className="row gutter-y-50">
            {/* Proyecto 1: Datalogger con Plataforma de Configuración */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/datalogger.jpg)" }}
                  alt="Datalogger con Plataforma de Configuración"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/datalogger">Datalogger con Plataforma de Configuración</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Diseñé y desarrollé una herramienta de configuración frontend y backend para dispositivos de adquisición de datos ambientales, mejorando la usabilidad y monitoreo de datos.
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Cámara Adaptable para Conteo Vehicular */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/conteo-vehicular.jpg)" }}
                  alt="Cámara Adaptable para Conteo Vehicular"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/conteo-vehicular">Cámara Adaptable para Conteo Vehicular</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Solución de visión por computador para detección de vehículos y personas, utilizada para correlacionar datos de tráfico con métricas de calidad del aire.
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Pronóstico de Variables Ambientales */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/pronostico-variables.jpg)" }}
                  alt="Pronóstico de Variables Ambientales"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/pronostico-variables">Pronóstico de Variables Ambientales</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Implementé modelos de machine learning y deep learning (LSTM) para predicciones precisas de calidad del aire, generando escenarios predictivos para la toma de decisiones.
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto 4: Clasificación de Fraudes Eléctricos */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/fraudes-electricos.jpg)" }}
                  alt="Clasificación de Fraudes Eléctricos"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/fraudes-electricos">Clasificación de Fraudes Eléctricos</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Desarrollé un programa para ENEL Perú que incrementó la detección de fraudes eléctricos en un 150%, optimizando la recuperación de energía.
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto 5: Automatización de Reportes Periódicos */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/automatizacion-reportes.jpg)" }}
                  alt="Automatización de Reportes Periódicos"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/automatizacion-reportes">Automatización de Reportes Periódicos</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Reduje el tiempo de generación de reportes diarios de 3 horas a unos pocos minutos, aumentando significativamente la eficiencia del equipo.
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto 6: Consultoría Personalizada en IA */}
            <div className="col-md-6 col-lg-4">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/projects/consultoria-ia.jpg)" }}
                  alt="Consultoría Personalizada en IA"
                />
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/proyectos/consultoria-ia">Consultoría Personalizada en IA</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Asesoré empresas como Antamina en la implementación de herramientas de inteligencia artificial para agregar valor a sus datos e infraestructura.
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

export default Servicios;
