import React from 'react';
import '../../css/NotFound.css'; 

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="./Home.jsx">Retourner vers alpage d'accueil</a>
    </div>
  );
};

export default NotFound;
