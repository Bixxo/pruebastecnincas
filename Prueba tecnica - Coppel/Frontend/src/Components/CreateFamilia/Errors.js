const validate = input => {
    let errors = {}

    if(!input.departamento) {
        errors.departamento = 'Este campo es requerido'
    }

    if(!input.clase) {
        errors.clase = 'Este campo es requerido'
    }


    if (!/^[A-Z 0-9]*$/.test(input.familia)) {
        errors.familia = 'Tiene que ser mayusculas'
    }
    else if(!input.familia) {
        errors.familia = 'Este campo es requerido'
    }
    return errors
}   

export default validate