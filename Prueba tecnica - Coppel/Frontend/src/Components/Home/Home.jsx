import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { clearState } from "../../Redux/Action"
import './Home.css'


const Home = props => {

    useEffect(() => {
        props.clearState()
    },[])

    return (
        <div>
            <h1 className="title">Home</h1>
            <Link to='/buscar'> <button className="btn">Buscar Producto</button> </Link>
            <Link to='/agregar'> <button className="btn">Agregar Producto</button> </Link>
            <Link to='/borrar'> <button className="btn">Borrar producto</button> </Link>
            <Link to='/actualizar'> <button className="btn">Modificar Producto</button> </Link>
            <Link to='/agrear/departamento'> <button className="btn">Agregar Departamento</button> </Link>
            <Link to='/agrear/clase'> <button className="btn">Agregar Clase</button> </Link>
            <Link to='/agrear/familia'> <button className="btn">Agregar Familia</button> </Link>
        </div>
    )
}



export default connect(null, { clearState })(Home)