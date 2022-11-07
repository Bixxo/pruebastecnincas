import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import swal from "sweetalert"
import { Link } from "react-router-dom"
import { getDepartamentos, getClases, getFamilias, getArticulo, updateArticulo } from "../../Redux/Action"
import validate from "./Errors"

const Update = props => {

    

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
        fechaDeBaja: '1900-01-01',
        descontinuado: false,
        fechaDeAlta: ''
    })
    const [ errors, setErrors ] = useState({})

    const { departamentos, clases, getDepartamentos, getClases, getFamilias, familias, getArticulo, articulo, updateArticulo } = props

    useEffect(() => {
        getArticulo(0)
        getDepartamentos()
    },[])

    const handleChangeInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
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

    const handleLoad = () => {
        articulo.descontinuado === 0 ? articulo.descontinuado = false : articulo.descontinuado = true
        getClases(articulo.departamento)
        getFamilias(articulo.clase)
        setInput({
            sku: articulo.sku,
            name: articulo.name,
            marca: articulo.marca,
            modelo: articulo.modelo,
            departamento: articulo.departamento,
            clase: articulo.clase,
            familia: articulo.familia,
            stock: articulo.stock,
            cantidad: articulo.cantidad,
            fechaDeBaja: articulo.fechaDeBaja,
            descontinuado: articulo.descontinuado,
            fechaDeAlta: articulo.fechaDeAlta
        })
    }

    const reset = () => {
        setInput({
            sku: '',
            name: '',
            marca: '',
            modelo: '',
            departamento: 0,
            clase: 0,
            familia: 0,
            stock: 0,
            cantidad: 0,
            fechaDeBaja: '1900-01-01',
            descontinuado: false,
            fechaDeAlta: ''
        })
    }

   const handleSearch = async e => {
        e.preventDefault()
        await getArticulo(input.sku).then(res => {
            if (!res.payload) {
                swal({
                    icon: 'error',
                    text: 'No se encontro un articulo con ese SKU'
                })
            }
        })
   }

   const handleSubmit = (e) => {
        e.preventDefault()
        
    swal({
        title: `Estas seguro que deseas modificar el articulo: ${articulo.sku} - ${articulo.name}`,
        text: "Una vez confirmado se actualizara de la base  de datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            
            updateArticulo(input.sku, input)
            reset()
            swal('Articulo actualizado exitosamente', {
            icon: "success",
          });
        } else {
            reset()
            swal("No se actualizo el articulo");
        }
      })
   }

    return (
        <div>
            <h1 className="title">Updating</h1>
            <form onSubmit={handleSubmit}>
                <label className="label">SKU: </label>
                <input className="inputSku" value={input.sku} type='number' name='sku' onChange={handleChangeInput}/>
                <label className='error'> {errors.sku}</label>
                <br />
                <label className="label">Articulo: </label>
                <input className="inputArticulo" type='text' name='name' onChange={handleChangeInput} disabled={!articulo} value={input.name}/>
                <label className='error'> {errors.name}</label>
                <br />
                <label className="label">Marca: </label>
                <input className="inputMarca" type='text' name='marca' onChange={handleChangeInput} disabled={!articulo} value={input.marca}/>
                <label className='error'> {errors.marca}</label>
                <br />
                <label className="label">Modelo: </label>
                <input className="inputModelo" name='modelo' onChange={handleChangeInput} disabled={!articulo} value={input.modelo}/>
                <label className='error'> {errors.modelo}</label>
                <br />
                <label className="label">Departamento: </label>
                <select className="inputDepartamento" value={input.departamento} name='departamento' onChange={handleChangeDpto} disabled={!articulo}>
                    <option disabled value="0">--Departamento--</option>
                    {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.departamento}</label>
                < br />
                <label className="label">Clase: </label>
                <select className="inputClase" value={input.clase} name='clase'  onChange={handleChangeClase} disabled={!articulo}>
                    <option disabled value="0">--Clase--</option>
                    {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.clase}</label>
                <br />
                <label className="label">Familia: </label>
                <select className="inputFamilia" value={input.familia} name='familia' onChange={handleChangeInput} disabled={!articulo}>
                    <option disabled value="0">--Familia--</option>
                    {familias ? familias.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                <label className='error'> {errors.familia}</label>
                <br />
                <label className="label">Stock: </label>
                <input type='text' name='stock' onChange={handleChangeInput} disabled={!articulo} value={input.stock}/>
                <label className='error'> {errors.stock}</label>
                <label className="label">Cantidad: </label>
                <input type='text' name='cantidad' onChange={handleChangeInput} disabled={!articulo} value={input.cantidad}/>
                <label className='error'> {errors.cantidad}</label>
                <br />
                <label className="label">Fecha de alta: </label>
                <input type='date' disabled value={input.fechaDeAlta}/>
                <label className="label">Fecha de baja: </label>
                <input type='date' disabled value={input.fechaDeBaja} name='fechaDeBaja'/>
                <label className="label">Descontinuado: </label>
                <input disabled={!articulo} checked={input.descontinuado} name='descontinuado' type='checkbox' onChange={handleChangeInput}/>
                <br />
                <button type="submit" disabled={!articulo || Object.entries(errors).length !== 0 ? true : false}>Modificar Articulo</button>
            </form>
            <button onClick={handleSearch} disabled={!input.sku}>Search</button>
            <button disabled={!articulo} onClick={handleLoad}>Cargar artiuclo</button>
            <Link to='/'><button className="btnHome">Home</button></Link>
        </div>
    )

}

export const mapStateToProps = state => {
    return {
        departamentos: state.departamentos,
        clases: state.clases,
        familias: state.familias,
        articulo: state.articulo
    }
}

export default connect(mapStateToProps, { getDepartamentos, getClases, getFamilias, getArticulo, updateArticulo })(Update)


