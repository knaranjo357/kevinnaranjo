import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
    const [video, setVideo] = useState(false);

    return (
        <>
            <section className="about-five">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-md-12 col-lg-7">
                            <div className="about-one__image">
                                {/* Actualiza la ruta de la imagen según corresponda */}
                                <img src="assets/images/resources/about-5-1.jpg" alt="Kevin Naranjo" style={{width: "630px", height: "722px"}} />

                                <div className="about-five__image__caption">
                                    <h3 className="about-five__image__caption__title">
                                        Más de 4 Años de Experiencia en Desarrollo de Software y Inteligencia Artificial
                                    </h3>
                                    <p className="about-five__image__caption__text">
                                        Software Developer & AI Expert
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-5 d-flex">
                            <div className="my-auto">
                                <div className="about-five__content">
                                    <div className="sec-title text-start">
                                        <h3 className="sec-title__title">
                                            Hola soy Kevin Naranjo
                                        </h3>
                                    </div>

                                    <div className="about-five__content__text" style={{ textAlign: 'justify' }}>
                                        Ingeniero Mecatrónico graduado de la Universidad Autónoma de Bucaramanga (UNAB), donde tuve la oportunidad de estudiar gracias a una beca. Este logro me enseñó que con esfuerzo y dedicación no solo puedo transformar mi vida, sino también la de quienes me rodean. Disfruto aprender continuamente y aplicar mis conocimientos para facilitar la vida de las personas, desarrollando soluciones tecnológicas que impacten diversas áreas.

                                        Mis actividades favoritas incluyen programar, hacer ejercicio y viajar. Encuentro inspiración en el gimnasio y en mis exploraciones, donde reflexiono sobre cómo la tecnología puede integrarse para mejorar nuestras experiencias diarias.
                                    </div>
                                    <br></br>
                                    <div className="about-five__btns">
                                        <Link to="/habilidades" className="thm-btn thm-btn--three about-one__btn">
                                            <span>
                                                Habilidades
                                                <i className="far fa-arrow-right" />
                                            </span>
                                        </Link>

                                        <Link to="/proyectos" className="thm-btn thm-btn--two about-one__btn about-one__btn--two">
                                            <span>
                                                Proyectos
                                                <i className="far fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="about-four">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="000ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-bolt" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Misión</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Ser un líder en el desarrollo de software y soluciones de inteligencia artificial, utilizando mis conocimientos para simplificar procesos y mejorar la calidad de vida de las personas.
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="100ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-eye" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Visión</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Ser reconocido como un experto en inteligencia artificial y desarrollo de software, creando soluciones tecnológicas que inspiren y generen cambios positivos en el mundo.
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="200ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-heart" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Valores</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Compromiso, esfuerzo, innovación y empatía son los valores que me impulsan a buscar la excelencia en cada proyecto y en mi vida diaria.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
