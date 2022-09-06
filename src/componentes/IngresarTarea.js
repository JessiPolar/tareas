import '../hojas-de-estilo/IngresarTarea.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function IngresarTarea(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
    
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      realizada: false
    }
    props.onSubmit(tareaNueva)
  }

  return (
    <form 
      className='ingresar-tarea'
      onSubmit={manejarEnvio}>
      <input
        className='ingresar-input'
        type='text'
        placeholder='Escribir tarea aqui'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Crear Tarea
      </button>
    </form>
  );
}

export default IngresarTarea;