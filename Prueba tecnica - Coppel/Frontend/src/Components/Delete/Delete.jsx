import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import swal from "sweetalert"
import { Link } from "react-router-dom"
import { getArticulo, deleteArticulo } from "../../Redux/Action"
import validate from "./Errors"

const Delete = params => {

    const { getArticulo, articulo, deleteArticulo, status } = params

    useEffect(() => {
        getArticulo(0)
    },[])

    const [ input, setInput ] = useState({
        sku: ''
    })
    const [ errors, setErrors ] = useState({})

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSearch = e => {
        e.preventDefault()
        getArticulo(input.sku)
   }

   const reset = () => {
    setInput({
        sku: ''
    })
   }

   const handleDelete = () => {
    swal({
        title: `Estas seguro que deseas eliminar el articulo: ${articulo.sku} - ${articulo.name}`,
        text: "Una vez confirmado se borrará de la base  de datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            deleteArticulo(articulo.sku)
            reset()
          swal('Articulo borrado exitosamente', {
            icon: "success",
          });
        } else {
          swal("No se borro el articulo");
        }
      })
      .then(() => getArticulo(0));
   }

    return (
        <div>
            <h1 className="title">Delete {!articulo ? '- Producto no encontrado' : null}</h1>
            <label>SKU: </label>
            <input type='number' name='sku' onChange={handleChange} value={input.sku}/>
            <label className='error'> {errors.sku}</label>
            <br />
            <button onClick={handleSearch} disabled={Object.entries(errors).length !== 0 ? true : false}>Search</button>
            <button disabled={!articulo} onClick={handleDelete}>Borrar Articulo</button>
            <Link to='/'><button className="btnHome">Home</button></Link>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        articulo: state.articulo,
        status: state.status
    }
}

export default connect( mapStateToProps, { getArticulo, deleteArticulo })(Delete)