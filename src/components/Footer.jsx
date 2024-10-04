import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`text-center mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
      <p>Desarrollado por Maximo Fontana</p>
      <p>Derechos reservados © {new Date().getFullYear()}</p>
      <p>Contacto: <a href="mailto:fontanacdev@gmail.com" className="underline">fontanacdev@gmail.com</a></p>
    </footer>
  );
};

export default Footer;