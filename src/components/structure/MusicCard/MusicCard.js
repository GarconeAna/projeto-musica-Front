import React from 'react';

const MusicCard = (props) => {
  const musica = props.musica

  return (
    <div>
      <h1>Card de cada musica</h1>
      <img src={musica.capa} alt={musica.nome}/>
      <p>{musica.nome}</p>
      <span>{musica.genero}</span>
    </div>
  );
} 

export default MusicCard;