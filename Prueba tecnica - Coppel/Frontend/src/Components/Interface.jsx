import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { getDepartamentos, getClases, getFamilias, getArticulo, createArticulo, clearStatus } from "../Redux/Action"
import validate from "./Errors"



const Interface = props => {

    const [ input, setInput ] = useState({
        sku: 0,
        name: '',
        marca: '',
        modelo: '',
        departamento: 0,
        clase: 0,
        familia: 0,
        stock: 0,
        cantidad: 0
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
        cantidad: 0
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
            <h1>Interface</h1>
            <form onSubmit={handleSubmit}>
                <label>SKU: </label>
                <input type='number' name='sku' onChange={handleChangeInput}/>
                <label className='error'> {errors.sku}</label>
                <br />
                <label>Articulo: </label>
                <input type='text' name='name' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.name}/>
                <label className='error'> {errors.name}</label>
                <br />
                <label>Marca: </label>
                <input type='text' name='marca' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.marca}/>
                <label className='error'> {errors.marca}</label>
                <br />
                <label>Modelo: </label>
                <input name='modelo' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.modelo}/>
                <label className='error'> {errors.modelo}</label>
                <br />
                <label>Departamento: </label>
                <select name='departamento' onChange={handleChangeDpto} defaultValue='default' disabled={articulo !== null ? true : false}>
                    <option disabled value="default">--Departamento--</option>
                    {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.departamento}</label>
                < br />
                <label>Clase: </label>
                <select name='clase' defaultValue='default' onChange={handleChangeClase} disabled={articulo !== null ? true : false}>
                    <option disabled value="default">--Clase--</option>
                    {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.clase}</label>
                <br />
                <label>Familia: </label>
                <select name='familia' defaultValue='default' onChange={handleChangeInput} disabled={articulo !== null ? true : false}>
                    <option disabled value="default">--Familia--</option>
                    {familias ? familias.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.familia}</label>
                <br />
                <label>Stock: </label>
                <input type='text' name='stock' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.stock}/>
                <label className='error'> {errors.stock}</label>
                <label>Cantidad: </label>
                <input type='text' name='cantidad' onChange={handleChangeInput} disabled={articulo !== null ? true : false} value={input.cantidad}/>
                <label className='error'> {errors.cantidad}</label>
                <br />
                <button disabled={articulo !== null ? true : false || Object.entries(errors).length !== 0 ? true : false} type='submit'>Submit</button>
            </form>
            <button onClick={handleSearch}>Search</button>
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

export default connect(mapStateToProps, { getDepartamentos, getClases, getFamilias, getArticulo, createArticulo, clearStatus })(Interface)