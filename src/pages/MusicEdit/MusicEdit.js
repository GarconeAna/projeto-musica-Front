import React, { useEffect, useState } from 'react';
import { Api } from '../../api/api';

const MusicEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getMusicById();
  }, [])

  const getMusicById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  }

  const handleFieldsChange = (evento) => {
    const auxFields = { ...fields };
    auxFields[evento.target.name] = evento.target.value;
    setFields(auxFields);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    dados.duracao = parseFloat(dados.duracao);
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
  }
  return (
    <div>
      
      <h1>Pagina de editar a musica</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" value={fields.nome} onChange={handleFieldsChange}/>

        <label htmlFor="autor">Autor</label>
        <input type="text" id="autor" name="autor" value={fields.autor} onChange={handleFieldsChange}/>

        <label htmlFor="genero">Genero</label>
        <input type="text" id="genero" name="genero" value={fields.genero} onChange={handleFieldsChange}/>

        <label htmlFor="capa">Capa</label>
        <input type="text" id="capa" name="capa" value={fields.capa} onChange={handleFieldsChange}/>

        <label htmlFor="letra">Letra</label>
        <input type="text" id="letra" name="letra" value={fields.letra} onChange={handleFieldsChange}/>

        <label htmlFor="duracao">Duracao</label>
        <input type="text"  id="duracao" name="duracao" value={fields.duracao} onChange={handleFieldsChange}/>

        <button >Cancelar</button>
        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default MusicEdit;