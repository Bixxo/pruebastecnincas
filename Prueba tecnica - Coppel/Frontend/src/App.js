import { Routes, Route } from 'react-router-dom'

import AgregarProducto from './Components/AgregarProducto/AgregarProducto';
import CreateClase from './Components/CreateClase/CreateClase';
import CreateDepartamento from './Components/CreateDepartamento/CreateDepartamento';
import CreateFamilia from './Components/CreateFamilia/CreateFamilia';
import Delete from './Components/Delete/Delete';
import Get from './Components/Get/Get';
import Home from "./Components/Home/Home";
import Update from './Components/Update/Update'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/agregar' element={<AgregarProducto />} />
        <Route exath path='/borrar' element={<Delete />} />
        <Route exact path='/actualizar' element={<Update />} />
        <Route exact path='/buscar' element={<Get />} />
        <Route exact path='/agrear/departamento' element={<CreateDepartamento />} />
        <Route exact path='/agrear/clase' element={<CreateClase />} />
        <Route exact path='/agrear/familia' element={<CreateFamilia />} />
      </Routes>
    </div>
  );
}

export default App;
