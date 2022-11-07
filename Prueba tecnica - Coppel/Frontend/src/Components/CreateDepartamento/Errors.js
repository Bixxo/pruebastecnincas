const validate = input => {
    let error = ''

    if(!input) {
        error = 'Este campo es requerido'
    }
    else if (!/^[A-Z]*$/.test(input)) {
        error = 'Tiene que ser mayusculas'
    }
    return error
}   

export default validate