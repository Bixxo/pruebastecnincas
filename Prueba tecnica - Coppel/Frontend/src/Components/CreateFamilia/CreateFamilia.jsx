import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { createFamilia, getClases, getDepartamentos } from '../../Redux/Action'
import validate from "./Errors"

const CreateFamilia = props => {

    const { getDepartamentos, departamentos, getClases, clases, createFamilia } = props

    const [ input, setInput ] = useState({
        departamento: 0,
        clase: 0,
        familia: ''
    })
    const [ errors, setErrors ] = useState({})

    useEffect(() => {
        getDepartamentos()
    },[])

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

    const reset = () =>{
        setInput({
            departamento: 0,
            clase: 0,
            familia: ''
        })
    }

    const handleSubmit = async () => {
        await createFamilia(input.clase, input.familia).then(res => swal({
            icon: "success",
            text: res.payload.msg
        }))
        reset()
    }

    return (
        <div>
            <h1 className="title">Agregar Familia</h1>
            <label className='label'>Departamento: </label>
            <select value={input.departamento} onChange={handleChangeDpto} className='inputDepartamento' name='departamento'>
                <option value='0'>--Departamento--</option>
                {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            <label className='error'>{errors.departamento}</label>
            <br />
            <label className='label'>Clase: </label>
            <select value={input.clase} onChange={handleChange} className='inputClase' name='clase'>
                <option value='0'>--Clase--</option>
                {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
            </select>
            <label className='error'>{errors.clase}</label>
            <br />
            <label className='label'>Familia: </label>
            <input value={input.familia} onChange={handleChange} name='familia'/>
            <label className='error'>{errors.familia}</label>
            <br />
            <button disabled={input.familia.length > 1 && Object.entries(errors).length === 0 ? false : true} onClick={handleSubmit}>Agregar</button>
            <Link to='/'> <button className="btnHome">Home</button> </Link>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        departamentos: state.departamentos,
        clases: state.clases
    }
}

export default connect(mapStateToProps, { getDepartamentos, getClases, createFamilia })(CreateFamilia)