import React from 'react';

function Work() {
  return (
    <>
      <section className="contact-one">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-4">
              <div className="contact-one__content">

                <h3 className="contact-one__content__title">
                  No dudes en contactarme
                </h3>

                <ul className="list-unstyled contact-one__info">
                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Ubicación</span>
                      <a
                            href="https://www.google.com/maps/place/Bucaramanga,+Santander/@7.1183794,-73.1741778,13z/data=!3m1!4b1!4m6!3m5!1s0x8e68157af751c0ed:0x75a0e4551148c36c!8m2!3d7.119349!4d-73.1227416!16zL20vMDM3eXNj?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Colombia, Santander
                    </a>
                    </div>
                    
                  </li>

                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-envelope-open" />
                    </div>
                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Correo Electrónico</span>
                      <a href="mailto:alejandronaranjo357@gmail.com">
                        alejandronaranjo357@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-phone-plus" />
                    </div>
                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Teléfono</span>
                      <a href="tel:+573175816061">+57 3175816061</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              {/* Formulario usando FormSubmit */}
              <form
                action="https://formsubmit.co/alejandronaranjo357@gmail.com"  // Cambia este correo por el tuyo
                method="POST"
                className="contact-form-validated contact-one__form"
              >
                <h3 className="contact-one__form__title">Envíame un Mensaje</h3>

                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Nombre Completo" name="name" required />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Número de Teléfono"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      name="email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="Escribe tu mensaje"
                      required
                    />
                  </div>

                  {/* Campos ocultos para redirección y desactivar CAPTCHA */}
                  <input type="hidden" name="_next" value="https://kevinnaranjo.com/" />  {/* Reemplaza con tu URL de agradecimiento */}
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="thm-btn thm-btn--three contact-one__btn"
                    >
                      <span>
                        Enviar Mensaje
                        <i className="far fa-arrow-right" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="result" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
