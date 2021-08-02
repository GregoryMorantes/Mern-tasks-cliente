import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return ( 
        <aside>
            <h1 className="mern-tasks">MERN<span>Tasks</span></h1>
            <div className="footer-autor">creado por <b>Gregory Morantes</b></div>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>

                

        </aside>
     );
}
 
export default Sidebar;