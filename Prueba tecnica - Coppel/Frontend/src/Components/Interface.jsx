// import { getDepartamentos } from "../pedidos/fetchs"
import { useEffect, useState } from "react"
import { connect, useDispatch } from 'react-redux'
import { getDepartamentos, getClases } from "../Redux/Action"



const Interface = props => {

    const dispatch = useDispatch

    const [ input, setInput ] = useState({
        departamento: 0
    })

    useEffect(() => {
        props.getDepartamentos()
    },[])
    
    const { departamentos, clases } = props

    const handleChangeDpto = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
    }

    // if(input.departamento !== 0) {
    //     console.log(input)
    //     props.getClases(input.departamento)
    // }


    

    return (
        <div>
            <h1>Interface</h1>
            <form>
                <select name='departamento' onChange={handleChangeDpto}>
                    <option>--Departamento--</option>
                    {departamentos ? departamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
                < br />
                <select>
                    <option>--Clase--</option>
                    {clases ? clases.map(el => <option key={el.id} value={el.id}>{el.name}</option>) : null}
                </select>
            </form>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        departamentos: state.departamentos,
        clases: state.clases
    }
}

export default connect(mapStateToProps, { getDepartamentos, getClases })(Interface)