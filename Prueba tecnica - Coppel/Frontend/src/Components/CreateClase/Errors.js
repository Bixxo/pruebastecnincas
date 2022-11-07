const validate = input => {
    let errors = {}

    if(!input.departamento) {
        errors.departamento = 'Este campo es requerido'
    }

    if(!input.clase) {
        errors.clase = 'Este campo es requerido'
    }
    else if (!/^[A-Z 0-9]*$/.test(input.clase)) {
        errors.clase = 'Tiene que ser mayusculas'
    }
    return errors
}   

export default validate
