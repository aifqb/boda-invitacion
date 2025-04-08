import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BodaInfo from './BodaInfo';

function App() {
  return (
    <Router basename="/boda-invitacion"> {/* ¡Añade esta línea! */}
      <Routes>
        <Route path="/" element={<BodaInfo />} />
        {/* Si tienes otras rutas, defínelas aquí */}
      </Routes>
    </Router>
  );
}

export default App;