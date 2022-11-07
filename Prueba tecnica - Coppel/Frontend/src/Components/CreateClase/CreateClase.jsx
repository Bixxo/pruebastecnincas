import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import swal from 'sweetalert'
import { createClase, getDepartamentos } from '../../Redux/Action'
import validate from "./Errors"


const CreateClase = params => {

    const { getDepartamentos, departamentos, createClase } = params

    const [ input, setInput ] = useState({
        departamento: 0,
        clase: ''
    })
    const [ errors, setErros ] = useState({})

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErros(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        getDepartamentos()
    },[])

    const reset = () => {
        setInput({
            departamento: 0,
            clase: ''
        })
    }

    const handleSubmit = async () => {
        await createClase(input.departamento, input.clase).then(res => swal({
            icon: "success",
            text: res.payload.msg
        }))
        reset()
    }

    return (
        <div>
            <h1 className="title">Agregar Clase</h1>
            <label className='label'>Departamento: </label>
            <select className='inputDepartamento' value={input.departamento} name='departamento' onChange={handleChange}>
                <option disabled value='0'>--Departamento--</option>
                {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            <label className='error'>{errors.departamento}</label>
            <br />
            <label className='label'>Clase: </label>
            <input onChange={handleChange} disabled={input.departamento === 0} name='clase' value={input.clase}/>
            <label className='error'>{errors.clase}</label>
            <br />
            <button onClick={handleSubmit} disabled={input.clase.length > 1 && Object.entries(errors).length === 0 ? false : true}>Agregar</button>
            <Link to='/'> <button className='btnHome'>Home</button> </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        departamentos: state.departamentos
    }
}

export default connect(mapStateToProps, { getDepartamentos, createClase })(CreateClase)