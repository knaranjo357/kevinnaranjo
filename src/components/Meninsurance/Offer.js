import React, { useState } from 'react';

function WhyChooseMe() {
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="faq-three">
        <div className="container">
          <div className="row gutter-y-60">
            {/* Sección de Contenido */}
            <div className="col-md-12 col-lg-12 d-flex">
              <div className="my-auto">
                <div className="faq-two__content faq-two__content--services">
                  <div className="sec-title text-start">
                    <h3 className="sec-title__title">
                      Mis habilidades y experiencia pueden marcar la diferencia.
                    </h3>
                  </div>

                  {/* Acordeón de Razones */}
                  <div
                    className="accordion faq-two__accordion faq-two__accordion--ml"
                    id="faq-two__accordion-why"
                  >
                    {/* Lenguajes, Tecnologías y Especializaciones */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-why__heading-1"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-why__collapse-1"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-why__collapse-1"
                        >
                          <i className="far fa-check" />
                          Lenguajes, Tecnologías y Especializaciones
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-why__collapse-1"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-why__heading-1"
                        data-bs-parent="#faq-two__accordion-why"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          <ul className="skills-list">
                            <li>
                              <strong>Lenguajes de Programación:</strong> Python, JavaScript, Matlab
                            </li>
                            <li>
                              <strong>Tecnologías y Herramientas:</strong> Langchain, LLM, TensorFlow, Keras, Flask, FastAPI, Django, SQL, NoSQL, Figma, React, Next, Docker, Kubernetes, AWS, Git, Linux
                            </li>
                            <li>
                              <strong>Especializaciones:</strong> Inteligencia Artificial, Chatbots, Visión por Computador, Desarrollo Web, Administración de Bases de Datos, Análisis de Datos (Modelos Predictivos y Visualización de Datos)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Experiencia y Logros Destacados */}
                    <div className="accordion-item faq-two__accordion__item accordion--active">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-why__heading-2"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-why__collapse-2"
                          aria-expanded="true"
                          aria-controls="faq-two__accordion-why__collapse-2"
                        >
                          <i className="far fa-check" />
                          Experiencia y Logros Destacados
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-why__collapse-2"
                        className="accordion-collapse collapse show faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-why__heading-2"
                        data-bs-parent="#faq-two__accordion-why"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          He trabajado en proyectos de alto impacto, incluyendo sistemas de pronóstico ambiental y soluciones de inteligencia artificial aplicadas a la industria.
                        </div>
                      </div>
                    </div>

                    {/* Habilidades Técnicas */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-why__heading-3"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-why__collapse-3"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-why__collapse-3"
                        >
                          <i className="far fa-check" />
                          Habilidades Técnicas de Vanguardia
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-why__collapse-3"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-why__heading-3"
                        data-bs-parent="#faq-two__accordion-why"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Experto en lenguajes como Python y JavaScript, y en herramientas como TensorFlow, Docker y AWS para desarrollar soluciones robustas y escalables.
                        </div>
                      </div>
                    </div>

                    {/* Enfoque Innovador */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-why__heading-4"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-why__collapse-4"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-why__collapse-4"
                        >
                          <i className="far fa-check" />
                          Enfoque en Innovación y Aprendizaje
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-why__collapse-4"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-why__heading-4"
                        data-bs-parent="#faq-two__accordion-why"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Comprometido con el aprendizaje continuo y la innovación para superar desafíos y aportar soluciones creativas.
                        </div>
                      </div>
                    </div>

                    {/* Trabajo en Equipo */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-why__heading-5"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-why__collapse-5"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-why__collapse-5"
                        >
                          <i className="far fa-check" />
                          Trabajo en Equipo y Comunicación
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-why__collapse-5"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-why__heading-5"
                        data-bs-parent="#faq-two__accordion-why"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Excelente capacidad para colaborar en equipo, adaptarme a diferentes dinámicas y liderar iniciativas hacia el éxito.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseMe;
