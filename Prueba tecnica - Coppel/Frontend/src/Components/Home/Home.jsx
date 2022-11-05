import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/agregar'> <button>Agregar Producto</button> </Link>
            <Link to='/borrar'> <button>Borrar producto</button> </Link>
        </div>
    )
}

export default Home