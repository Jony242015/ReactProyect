//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>Lista de 10 Nombres</h1> 
    <ul>
        <li>Sofía</li>
        <li>Mateo</li>
        <li>Valentina</li>
        <li>Alejandro</li>
        <li>Isabella</li>
        <li>Santiago</li>
        <li>Camila</li>
        <li>Juan</li>
        <li>Natalia</li>
        <li>Gabriel</li>
    </ul>*/}
    <h1>Tabla</h1>
    <table border = "1" class = "table table-striped">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Carrera</th>
                <th scope="col">Calificación</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Juan Pérez</td>
                <td>Ingeniería Informática</td>
                <td>9.5</td>
                <td><button type="button" class="btn btn-outline-primary">Eliminar</button></td>
                <td><button type="button" class="btn btn-outline-danger">Editar</button></td>

            </tr>
            <tr>
                <td>María González</td>
                <td>Medicina</td>
                <td>8.7</td>
                <td><button type="button" class="btn btn-outline-primary">Eliminar</button></td>
                <td><button type="button" class="btn btn-outline-danger">Editar</button></td>
            </tr>
            <tr>
                <td>Carlos Rodríguez</td>
                <td>Administración de Empresas</td>
                <td>8.0</td>
                <td><button type="button" class="btn btn-outline-primary">Eliminar</button></td>
                <td><button type="button" class="btn btn-outline-danger">Editar</button></td>
            </tr>
        </tbody>
    </table>
        <p>
          Este es mi primer párrafo
        </p>
        <a href = "http://www.google.com">Google</a>
      </header>
    </div>
  );
}

export default App;
