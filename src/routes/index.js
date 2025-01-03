import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import About from '../components/Pages/Main';
import Error from '../components/Error/Main';
import Insurance from '../components/Insurance/Main';
import Insurancedeatils from '../components/Insurancesdetails/Main';
import Portfolio from '../components/Portfolio/Main';
import Portfoliodetails from '../components/Portfoliodetails/Main';
import Contact from '../components/Contact/Main';
import Homethree from '../components/Home/Main';

function Index() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      <Routes>
        <Route path="/error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/" element={<Homethree />} />
        <Route path="/about" element={<About />} />
        <Route path="/habilidades" element={<Insurance />} />
        <Route path="/proyectos" element={<Portfolio />} />

        <Route path="/insurancesdetails" element={<Insurancedeatils />} />
        <Route path="/portfoliodetails" element={<Portfoliodetails />} />
        
        {/* Catch-all route for unknown paths */}
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default Index;
