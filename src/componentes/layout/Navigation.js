import React from 'react';

function Navigation (){
    return(
    <aside class="sidebar col-3">
            <h2>Administración</h2>

            <nav class="navegacion">
                <a href="/alumnos" class="alumnos">Alumnos</a>
                <a href="/carreras" class="carreras">Carreras</a>
                <a href="/calificaciones" class="calificaciones">Calificaciones</a>
            </nav>
        </aside>
        )
}
export default Navigation;