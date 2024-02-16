//import logo from './logo.svg';
//import './App.css';

import axios from 'axios';
axios.get('http://localhost:8888/alumnos')
.then((response) => { console.log(response.data);})
.catch((error)=>{console.error(error);});

function App (){
  return (
    <p>Hola</p>
  );
}

export default App;
