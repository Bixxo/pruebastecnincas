import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { Link } from "react-router-dom"
import { getDepartamentos, getClases, getFamilias, getArticulo, createArticulo, clearStatus } from "../../Redux/Action"
import validate from "./Errors"
import './AgregarProductos.css'



const AgregarProducto = props => {

    const [ input, setInput ] = useState({
        sku: '',
        name: '',
        marca: '',
        modelo: '',
        departamento: 0,
        clase: 0,
        familia: 0,
        stock: 0,
        cantidad: 0,
        fechaDeBaja: '1900-01-01'
    })

    const [ errors, setErrors ] = useState({})

    const { departamentos, clases, getDepartamentos, getClases, getFamilias, familias, getArticulo, articulo,createArticulo, clearStatus, status } = props

    useEffect(() => {
        getDepartamentos()
        getArticulo(1)
    },[])

    const handleChangeInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleChangeDpto = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        getClases(e.target.value)    
    }

    const handleChangeClase = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        getFamilias(e.target.value)
    }

   const handleSearch = e => {
        e.preventDefault()
        getArticulo(input.sku)
   }

   const reset = () => {
    setInput({
        sku: 0,
        name: '',
        marca: '',
        modelo: '',
        departamento: 0,
        clase: 0,
        familia: 0,
        stock: 0,
        cantidad: 0,
        fechaDeBaja: '1900-01-01'
    })
   }

   async function handleSubmit(e) {
    e.preventDefault()
    await createArticulo(input)
    reset()
    setTimeout(() => {
        clearStatus()
    }, 5000)
}

   if(articulo){
    let sku = Number.parseInt(input.sku)
       if (articulo.sku === sku) {
        swal(`El articulo con SKU: ${input.sku} ya existe en la base de datos`)
        reset()
       }
   }

   if(Object.entries(status).length >= 1) {
    status.msg ? swal(status.msg) : swal('No se pudo crear el articulo')
   }
  
    return (
        <div>
            <h1 className="title">Alta de Articulo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label">SKU: </label>
                    <input className="inputSku" type='number' name='sku' onChange={handleChangeInput}/>
                    <label className='error'> {errors.sku}</label>
                    <br />
                    <label className="label">Articulo: </label>
                    <input className="inputArticulo" type='text' name='name' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.name}/>
                    <label className='error'> {errors.name}</label>
                    <br />
                    <label className="label">Marca: </label>
                    <input className="inputMarca" type='text' name='marca' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.marca}/>
                    <label className='error'> {errors.marca}</label>
                    <br />
                    <label className="label">Modelo: </label>
                    <input className="inputModelo" name='modelo' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.modelo}/>
                    <label className='error'> {errors.modelo}</label>
                    <br />
                    <label className="label">Departamento: </label>
                    <select className="inputDepartamento" value={input.departamento} name='departamento' onChange={handleChangeDpto} disabled={articulo !== null ? true : false}>
                        <option disabled value="0">--Departamento--</option>
                        {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                    </select>
                    <label className='error'> {errors.departamento}</label>
                    < br />
                    <label className="label">Clase: </label>
                    <select className="inputClase" name='clase' value={input.clase} onChange={handleChangeClase} disabled={articulo !== null ? true : false}>
                        <option disabled value="0">--Clase--</option>
                        {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                    </select>
                    <label className='error'> {errors.clase}</label>
                    <br />
                    <label className="label">Familia: </label>
                    <select className="inputFamilia" name='familia' value={input.familia} onChange={handleChangeInput} disabled={articulo !== null ? true : false}>
                        <option disabled value="0">--Familia--</option>
                        {familias ? familias.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                    </select>
                    <label className='error'> {errors.familia}</label>
                    <br />
                    <label className="label">Stock: </label>
                    <input type='text' name='stock' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.stock}/>
                    <label className='error'> {errors.stock}</label>
                    <label className="label">Cantidad: </label>
                    <input type='text' name='cantidad' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.cantidad}/>
                    <label className='error'> {errors.cantidad}</label>
                    <br />
                    <label className="label">Fecha de alta: </label>
                    <input type='date' disabled/>
                    <label className="label">Fecha de baja: </label>
                    <input type='date' disabled value={input.fechaDeBaja} name='fechaDeBaja'/>
                    <br />
                    <button disabled={articulo !== null ? true : false || Object.entries(errors).length !== 0 ? true : false} type='submit'>Crear</button>
                </div>
            </form>
            <button onClick={handleSearch} disabled={!input.sku}>Search</button>
            <Link to='/'><button className="btnHome">Home</button></Link>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        departamentos: state.departamentos,
        clases: state.clases,
        familias: state.familias,
        articulo: state.articulo,
        status: state.status
    }
}

export default connect(mapStateToProps, { getDepartamentos, getClases, getFamilias, getArticulo, createArticulo, clearStatus })(AgregarProducto)