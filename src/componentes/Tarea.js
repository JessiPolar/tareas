import  React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, realizada, realizarTarea, eliminarTarea }) {
  return (
    <div className={realizada ? 'tarea-contenedor realizada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => realizarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-icono'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;