import { Routes, Route } from 'react-router-dom'

import AgregarProducto from './Components/AgregarProducto/AgregarProducto';
import Delete from './Components/Delete/Delete';
import Home from "./Components/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/agregar' element={<AgregarProducto />} />
        <Route exath path='/borrar' element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
