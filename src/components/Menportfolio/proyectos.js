import React from 'react';

function KeyProjectsAndSkills() {
  const skills = [
    { category: "Lenguajes de Programación", details: "Python, JavaScript, Matlab" },
    {
      category: "Tecnologías y Herramientas",
      details:
        "Langchain, LLM, Tensorflow, Keras, Flask, FastAPI, Django, SQL, NoSQL, Figma, React, Next, Docker, Kubernetes, AWS, Git, Linux",
    },
    {
      category: "Especializaciones",
      details:
        "Inteligencia Artificial, Chatbots, Visión por Computador, Desarrollo Web, Administración de Bases de Datos, Análisis de Datos (Modelos Predictivos y Visualización de Datos)",
    },
  ];

  const projects = [
    {
      name: "DATALOGGER CON PLATAFORMA DE CONFIGURACIÓN",
      description:
        "Diseñé y desarrollé una herramienta de configuración frontend y backend para dispositivos de adquisición de datos ambientales, mejorando la usabilidad y monitoreo de datos.",
    },
    {
      name: "CÁMARA ADAPTABLE PARA CONTEO VEHICULAR",
      description:
        "Desarrollé una solución de visión por computador para detección de vehículos y personas, implementada para correlacionar datos de tráfico con métricas de calidad del aire.",
    },
    {
      name: "PRONÓSTICO DE VARIABLES AMBIENTALES",
      description:
        "Implementé modelos de machine learning y deep learning (LSTM) para predicciones precisas de calidad del aire, generando escenarios predictivos para la toma de decisiones.",
    },
    {
      name: "CLASIFICACIÓN DE FRAUDES ELÉCTRICOS",
      description:
        "Desarrollé un programa para ENEL Perú que incrementó la detección de fraudes eléctricos en un 150%, optimizando la recuperación de energía.",
    },
    {
      name: "AUTOMATIZACIÓN DE REPORTES PERIÓDICOS",
      description:
        "Automatización de procesos de reporte periódico, reduciendo el tiempo de generación de reportes diarios de 3 horas a unos pocos minutos, aumentando significativamente la eficiencia del equipo.",
    },
    {
      name: "CONSULTORÍA PERSONALIZADA EN IA PARA EMPRESAS",
      description:
        "Consultoría personalizada de inteligencia artificial para empresas como Antamina, asesorando en la implementación de herramientas de IA para agregar valor a sus datos e infraestructura.",
    },
  ];

  return (
    <>
      <section className="key-projects-and-skills">
        <div className="container">
          <div className="sec-title text-center">
            <h3 className="sec-title__title">Habilidades y Proyectos Clave</h3>
            <p>
              Estoy convencido de que la tecnología es una herramienta poderosa para convertir ideas en soluciones que generan impacto. Mi filosofía se centra en el aprendizaje continuo, abordar desafíos con creatividad y colaborar en equipo para fomentar la innovación.
            </p>
          </div>

          <div className="skills">
            <h4>Habilidades Técnicas</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <strong>{skill.category}:</strong> {skill.details}
                </li>
              ))}
            </ul>
          </div>

          <div className="projects">
            <h4>Proyectos Clave</h4>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <strong>{project.name}</strong>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default KeyProjectsAndSkills;
