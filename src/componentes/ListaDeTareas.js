import IngresarTarea from "./IngresarTarea";
import Tarea from "./Tarea";
import '../hojas-de-estilo/ListaDeTareas.css';
import { useState } from 'react';

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const realizarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.realizada = !tarea.realizada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <IngresarTarea onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea 
                          key={tarea.id}
                          id={tarea.id}
                          texto={tarea.texto}
                          realizada={tarea.realizada}
                          realizarTarea={realizarTarea}
                          eliminarTarea={eliminarTarea}
                        />
                    
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;