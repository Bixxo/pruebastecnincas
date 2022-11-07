import { useState } from "react"
import { connect } from "react-redux"
import validate from "./Errors"
import swal from "sweetalert"
import { Link } from "react-router-dom"
import { createDepartamento } from "../../Redux/Action"


const CreateDepartamento = props => {

    const { createDepartamento } = props

    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
        setError(validate(e.target.value))
    }

    const handleSubmit = async () => {
        await createDepartamento(input).then(res => swal({
            icon: "success",
            text: res.payload.msg
        }))
        setInput('')
    }

    return(
        <div>
            <h1 className="title">Agregar Departamento</h1>
            <label className="label">Departamento: </label>
            <input value={input} onChange={handleChange}/>
            <label className="error">{error}</label>
            <br />
            <button onClick={handleSubmit} disabled={input && !error ? false : true}>Crear</button>
            <Link to='/'> <button className="btnHome">Home</button> </Link> 
        </div>
    )
}

export default connect( null, { createDepartamento })(CreateDepartamento)