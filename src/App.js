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


import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About'; 
import NotFound from './components/NotFound'; 


function App() {
  return (
    <BrowserRouter> {/* Wrapper les routes avec BrowserRouter */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Routes> {/* Utiliser le composant Routes pour définir les routes */}
        <Route path="/" element={<Home />} /> {/* Définir la route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Définir la route pour la page À propos */}
        <Route path="*" element={<NotFound />} /> {/* Définir la route pour toute autre URL non trouvée */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
