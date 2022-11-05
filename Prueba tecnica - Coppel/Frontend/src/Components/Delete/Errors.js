const validate = input => {
    let errors = {}

    if (!input.sku){
        errors.sku = 'SKU es requerido'
    }

    else if (input.sku === '1') {
        errors.sku = 'El SKU no puede ser 1'
    }

    else if(input.sku.length > 6) {
        errors.sku = 'Tiene que contener maximo 6 digitos'
    }

    return errors
}   

export default validate