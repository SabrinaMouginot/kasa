import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './js/components/Header';
import Footer from './js/components/Footer';
import Home from './js/pages/Home';
import About from './js/pages/About';
import NotFound from './js/pages/NotFound';
import FicheLogement from './js/pages/FicheLogement';
import './css/App.css';

import './css/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
