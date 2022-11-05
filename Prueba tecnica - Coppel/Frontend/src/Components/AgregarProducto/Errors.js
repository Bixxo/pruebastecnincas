const validate = input => {
    let errors = {}

    if (!input.sku){
        errors.sku = 'SKU es requerido'
    }
    else if(input.sku.length > 6) {
        errors.sku = 'Tiene que contener maximo 6 digitos'
    }


    if(!input.name) {
        errors.name = 'Requiere nombre del articulo'
    }
    else if (input.name.length < 2 ) {
        errors.name = 'Tiene que contar con al menos 2 caracteres'
    }
    else if ( !/^[A-Z]*$/.test(input.name) ) {
        errors.name = 'Tiene que ser solo letras mayusculas'
    }
    else if(input.name > 15) {
        errors.name = 'Tiene que tener maximo 15 caracteres'
    }


    if(!input.marca) {
        errors.marca = 'Requiere marca del articulo'
    }
    else if (input.marca.length < 2 ) {
        errors.marca = 'Tiene que contar con al menos 2 caracteres'
    }
    else if(input.marca > 15) {
        errors.marca = 'Tiene que tener maximo 15 caracteres'
    }


    if(!input.modelo) {
        errors.modelo = 'Requiere modelo del articulo'
    }
    else if (input.modelo.length < 2 ) {
        errors.modelo = 'Tiene que contar con al menos 2 caracteres'
    }
    else if(input.modelo > 20) {
        errors.modelo = 'Tiene que tener maximo 20 caracteres'
    }

    if(!input.departamento) {
        errors.departamento = 'Requiere departamento del articulo'
    }

    if(!input.clase) {
        errors.clase = 'Requiere clase del articulo'
    }

    if(!input.familia) {
        errors.familia = 'Requiere familia del articulo'
    }

    if(!input.stock) {
        errors.stock = 'Requiere stock del articulo'
    }
    else if (input.stock.length < 1) {
        errors.stack = 'Requiere tener stock'
    }
    else if(input.stock.length > 9) {
        errors.stock = 'Debe de tener maximo 9 cifras'
    }

    if(!input.cantidad) {
        errors.cantidad = 'Requiere cantidad del articulo'
    }
    else if (input.cantidad.length < 1) {
        errors.cantidad = 'Requiere tener cantidad'
    }

    else if (input.cantidad > input.stock) {
        errors.cantidad = 'La cantidad no puede ser mayor al stock'
    }
    else if(input.cantidad.length > 9) {
        errors.cantidad = 'Debe de tener maximo 9 cifras'
    }


    return errors
}   

export default validate