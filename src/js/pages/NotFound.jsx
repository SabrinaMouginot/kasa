import React from 'react';
import '../../css/NotFound.css'; 

const NotFound = () => {
  return (
    <div className='notfound-msg'>
      <h1 className='notfound-title'>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="../../../..">Retourner vers la page d'accueil</a>
    </div>
  );
};

export default NotFound;
