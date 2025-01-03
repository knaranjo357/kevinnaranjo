import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de productos y proyectos
  const items = [
    { id: 1, name: 'Datalogger con Plataforma de Configuración', image: 'p1.jpg', category: 'proyecto', description: 'Diseñé y desarrollé una herramienta de configuración frontend y backend para dispositivos de adquisición de datos ambientales, mejorando la usabilidad y monitoreo de datos.' },
    { id: 2, name: 'Cámara Adaptable para Conteo Vehicular', image: 'p2.jpg', category: 'proyecto', description: 'Desarrollé una solución de visión por computador para detección de vehículos y personas, implementada para la CAR Bogotá para correlacionar datos de tráfico con métricas de calidad del aire.' },
    { id: 3, name: 'Pronóstico de Variables Ambientales', image: 'p3.jpg', category: 'proyecto', description: 'Implementé modelos de machine learning y deep learning (LSTM) para predicciones precisas de calidad del aire, generando escenarios predictivos para la toma de decisiones.' },
    { id: 4, name: 'Clasificación de Fraudes Eléctricos', image: 'p4.jpg', category: 'proyecto', description: 'Desarrollé un programa para ENEL Perú que incrementó la detección de fraudes eléctricos en un 150%, optimizando la recuperación de energía.' },
    { id: 5, name: 'Automatización de Reportes Periódicos', image: 'p5.jpg', category: 'proyecto', description: 'Automatización de procesos de reporte periódico, reduciendo el tiempo de generación de reportes diarios de 3 horas a unos pocos minutos, aumentando significativamente la eficiencia del equipo.' },
    { id: 6, name: 'Consultoría Personalizada en IA para Empresas', image: 'p6.jpg', category: 'proyecto', description: 'Consultoría personalizada de inteligencia artificial para empresas como Antamina, asesorando en la implementación de herramientas de IA para agregar valor a sus datos e infraestructura.' },
    // ... El resto de los productos
  ];

  // Filtrar productos o proyectos según el término de búsqueda
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="portfolio-grid">
        <div className="container">
          {/* Campo de texto para buscar productos o proyectos */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar productos o proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ marginBottom: '20px', padding: '10px' }}
            />
          </div>

          <div className="row filter-layout masonary-layout gutter-y-30">
            {filteredItems.map((item) => (
              <div key={item.id} className={`col-md-6 col-lg-4 filter-item ${item.category}`}>
                <div className="portfolio-card">
                  <div className="portfolio-card__image">
                    <img
                      src={`assets/images/productos/${item.image}`}
                      alt={item.name}
                      style={{ width: '410px', height: '425px', objectFit: 'cover' }} // Establecer tamaño fijo
                    />
                    <div className="portfolio-card__content">
                      <span className="portfolio-card__tagline">
                        {item.category === 'proyecto' ? 'Proyecto' : 'Producto Eléctrico'}
                      </span>
                      <h3 className="portfolio-card__title">
                        <Link to={`/productdetails/${item.id}`}>{item.name}</Link>
                      </h3>
                      {item.description && <p className="portfolio-card__description">{item.description}</p>}
                      <Link to={`/productdetails/${item.id}`} className="portfolio-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
