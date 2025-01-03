import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer-two footer-two--home-1">

        



        <div className="footer-two__copyright">
          <div className="container text-center">
            <p className="footer-two__copyright__text">
              Copyright © {new Date().getFullYear()} Kevin Naranjo, Todos los derechos reservados.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
