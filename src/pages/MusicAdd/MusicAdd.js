import React from 'react'
import './MusicAdd.scss';
import { Api } from '../../api/api'

const MusicAdd = () => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.nome.value);
    const nome = evento.target.nome.value;
    const autor = evento.target.autor.value;
    const genero = evento.target.genero.value;
    const capa = evento.target.capa.value;
    const letra = evento.target.letra.value;
    const duracao = evento.target.duracao.value;

    const Musica = {
      nome: nome,
      autor: autor,
      genero: genero,
      capa: capa,
      letra: letra,
      duracao: parseInt(duracao),
    }

    const response = await Api.fetchPost(Musica);
    const data = await response;

    console.log(data);
  };

  return (
    <div>
      
      <h1>Pagina de cadastro da musica</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome"/>

        <label htmlFor="autor">Autor</label>
        <input type="text" id="autor" name="autor"/>

        <label htmlFor="genero">Genero</label>
        <input type="text" id="genero" name="genero"/>

        <label htmlFor="capa">Capa</label>
        <input type="text" id="capa" name="capa"/>

        <label htmlFor="letra">Letra</label>
        <input type="text" id="letra" name="letra" />

        <label htmlFor="duracao">Duracao</label>
        <input type="number"  id="duracao" name="duracao"/>

        <button >Cancelar</button>
        <button type="submit">Enviar</button>

      </form>
    </div>
  )
}

export default MusicAdd;