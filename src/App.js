// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './js/pages/Home';
import About from './js/pages/About';
import NotFound from './js/pages/NotFound';
import Header from './js/components/Header';
import Footer from './js/components/Footer';

function App() {
  return (
    <BrowserRouter> {/* Wrapper les routes avec BrowserRouter */}
      <div className="App">
        <Header />
        <Routes> {/* Utilisez le composant Routes pour définir vos routes */}
          <Route path="/" element={<Home />} /> {/* Définissez la route pour la page d'accueil */}
          <Route path="/about" element={<About />} /> {/* Définissez la route pour la page À propos */}
          <Route path="*" element={<NotFound />} /> {/* Définissez la route pour toute autre URL non trouvée */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
