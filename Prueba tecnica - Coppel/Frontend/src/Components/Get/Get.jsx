import { useState, useEffect } from "react"
import { connect, } from "react-redux"
import { Link } from "react-router-dom"
import swal from "sweetalert"
import { getArticulo, getDepartamentos, clearArticulo, getClases, getFamilias } from "../../Redux/Action"
import './Get.css'

const Get = props => {

    const [ input, setInput ] = useState({
        sku: '',
        name: '',
        marca: '',
        modelo: '',
        departamento: 0,
        clase: 0,
        familia: 0,
        stock: '',
        cantidad: '',
        fechaDeAlta: '',
        fechaDeBaja: '',
        descontinuado: false
    })

    const { getDepartamentos, departamentos, getArticulo, articulo, clearArticulo, getClases, clases, getFamilias, familias } = props

    useEffect(() => {
        clearArticulo()
        getDepartamentos()
    },[])

    const handleChangeInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
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
            stock: '',
            cantidad: '',
            fechaDeAlta: '',
            fechaDeBaja: '',
            descontinuado: false
        })
    }

    const handleChangeDpto = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })    
    }

    const handleChangeClase = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSearch = e => {
        e.preventDefault()
        getArticulo(input.sku) 
        reset() 
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

    if(articulo === null) {
        swal('Producto no encontrado')
        clearArticulo()
    }


    return (
        <div>
            <h1 className="title">Buscar Articulo</h1>
            
            <label className="label">SKU: </label>
            <input className="inputSku" value={input.sku} type='number' name='sku' onChange={handleChangeInput}/>
            <br />
            <label className="label">Articulo: </label>
            <input className="inputArticulo" type='text' name='name' onChange={handleChangeInput} disabled value={input.name}/>
            <br />
            <label className="label">Marca: </label>
            <input className="inputMarca" type='text' name='marca' onChange={handleChangeInput} disabled value={input.marca}/>
            <br />
            <label className="label">Modelo: </label>
            <input className="inputModelo" name='modelo' onChange={handleChangeInput} disabled value={input.modelo}/>
            <br />
            <label className="label">Departamento: </label>
            <select className="inputDepartamento" value={input.departamento} name='departamento' disabled onChange={handleChangeDpto}>
                <option disabled value="0">--Departamento--</option>
                {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            < br />
            <label className="label">Clase: </label>
            <select className="inputClase" value={input.clase} name='clase'  disabled onChange={handleChangeClase}>
                <option disabled value="0">--Clase--</option>
                {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            <br />
            <label className="label">Familia: </label>
            <select className="inputFamilia" value={input.familia} name='familia' onChange={handleChangeInput} disabled>
                <option disabled value="0">--Familia--</option>
                {familias ? familias.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            <br />
            <label className="label">Stock: </label>
            <input type='text' name='stock' onChange={handleChangeInput} disabled value={input.stock}/>
            <label className="label">Cantidad: </label>
            <input type='text' name='cantidad' onChange={handleChangeInput} disabled value={input.cantidad}/>
            <br />
            <label className="label">Fecha de alta: </label>
            <input type='date' disabled value={input.fechaDeAlta}/>
            <label className="label">Fecha de baja: </label>
            <input type='date' disabled value={input.fechaDeBaja} name='fechaDeBaja'/>
            <label className="label">Descontinuado: </label>
            <input disabled checked={input.descontinuado} name='descontinuado' type='checkbox' onChange={handleChangeInput}/>
            <br />
            <button className="btnForm" disabled={!input.sku} onClick={handleSearch}>Buscar</button>
            <button className="btnForm" disabled={!articulo || Object.entries(articulo).length === 0} onClick={handleLoad}>Cargar artiuclo</button>
            <button className="btnForm" onClick={reset}>Clear</button>
            <br />
            <Link to='/'><button className="btnHome">Home</button></Link>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        departamentos: state.departamentos,
        clases: state.clases,
        familias: state.familias,
        articulo: state.articulo,
    }
}

export default connect(mapStateToProps, { getDepartamentos, getArticulo, clearArticulo, getClases, getFamilias })(Get)