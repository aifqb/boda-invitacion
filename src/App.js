import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BodaInfo from './BodaInfo';
// Puedes crear otros componentes para otras rutas si es necesario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitacion" element={<BodaInfo />} />
        {/* Redirecciona la ruta raíz a /invitacion */}
        <Route path="/" element={<Navigate to="/invitacion" replace />} />
        {/* Puedes añadir más rutas aquí si tu aplicación crece */}
        {/* <Route path="/otra-pagina" element={<OtroComponente />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

