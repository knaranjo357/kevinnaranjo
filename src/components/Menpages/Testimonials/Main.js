import React, { useState, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Datos para las tecnologías
const technologies = [
    {
        id: 1,
        icon: 'fab fa-python',
        title: 'Python',
        description: 'Python es un lenguaje de programación versátil y fácil de aprender, ideal para desarrollo de software, machine learning y análisis de datos.',
    },
    {
        id: 2,
        icon: 'fas fa-brain',
        title: 'Machine Learning',
        description: 'Machine learning es un campo de la inteligencia artificial que permite a las máquinas aprender de datos sin ser explícitamente programadas.',
    },
    {
        id: 3,
        icon: 'fas fa-camera-retro',
        title: 'Visión por Computadora',
        description: 'La visión por computadora permite a las máquinas interpretar y procesar imágenes y videos para tomar decisiones basadas en ellos.',
    },
    {
        id: 4,
        icon: 'fas fa-laptop-code',
        title: 'Desarrollo Web',
        description: 'El desarrollo web abarca el diseño y creación de aplicaciones y sitios web, utilizando tecnologías como HTML, CSS, JavaScript y frameworks modernos.',
    },
    {
        id: 5,
        icon: 'fas fa-database',
        title: 'Bases de Datos',
        description: 'Las bases de datos son sistemas que permiten almacenar, organizar y manipular grandes cantidades de información de manera eficiente.',
    },
    {
        id: 6,
        icon: 'fab fa-react',
        title: 'React',
        description: 'React es una biblioteca de JavaScript para construir interfaces de usuario interactivas, especialmente en aplicaciones web de una sola página.',
    },
    {
        id: 7,
        icon: 'fas fa-cloud',
        title: 'Cloud Computing',
        description: 'El cloud computing permite el acceso a recursos y servicios de computación a través de internet, sin necesidad de infraestructura física local.',
    },
    {
        id: 8,
        icon: 'fab fa-docker',
        title: 'Docker',
        description: 'Docker es una plataforma de contenedores que permite empaquetar y desplegar aplicaciones de manera más eficiente y escalable.',
    },
];

function Technologies() {
    const [selectedTech, setSelectedTech] = useState(1);  // Por defecto, la primera tecnología está seleccionada

    useEffect(() => {
        // Cambia automáticamente el ícono seleccionado cada 15 segundos
        const interval = setInterval(() => {
            setSelectedTech((prevSelected) => {
                const nextTech = prevSelected === technologies.length ? 1 : prevSelected + 1;
                return nextTech;
            });
        }, 15000); // 15 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="technologies-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-start">
                            <h3 className="sec-title__title">
                                Herramientas que uso 
                            </h3>
                        </div>

                        <div 
                            className="technologies-icons" 
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                marginTop: '30px',
                                cursor: 'pointer',
                            }}
                        >
                            {technologies.map((tech) => (
                                <div 
                                    key={tech.id}
                                    className="technologies-icon"
                                    style={{ 
                                        fontSize: '40px', 
                                        margin: '0 15px', 
                                        transition: 'transform 0.3s',
                                        // Cambiar el color del ícono cuando está seleccionado
                                        color: selectedTech === tech.id ? '#007bff' : '#333',
                                    }}
                                    onClick={() => setSelectedTech(tech.id)}
                                >
                                    <i className={tech.icon} />
                                </div>
                            ))}
                        </div>

                        {selectedTech && (
                            <div 
                                className="technologies-description" 
                                style={{
                                    marginTop: '30px',
                                    padding: '20px',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h4>{technologies.find((tech) => tech.id === selectedTech).title}</h4>
                                <p>{technologies.find((tech) => tech.id === selectedTech).description}</p>
                            </div>
                        )}
                    </div>
                </div>       
            </div>
        </section>
    );
}

export default Technologies;
