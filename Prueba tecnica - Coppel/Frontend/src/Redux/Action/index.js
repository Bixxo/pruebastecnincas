export const getDepartamentos = () => {
    return function(dispatch) {
        return fetch ('http://localhost:3001/departamentos')
        .then(res => res.json())
        .then(data => dispatch( { type: 'GET_DEPARTAMENTOS', payload: data } ))
    }
}

export const getClases = id => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/departamentos/${id}/clases`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'GET_CLASES', payload: data } ))
    }
}

export const getFamilias = id => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/clase/${id}/familia`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'GET_FAMILIA', payload: data } ))
    }
}

export const getArticulo = sku => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/created/${sku}`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'GET_ARTICULO', payload: data } ))
    }
}

export const createArticulo = data => {
    return function (dispatch) {
        return fetch('http://localhost:3001/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(data => dispatch( {type: 'CREATE_ARTICULO', payload: data} ))
    }
}

export const clearStatus = () => {
    return {
        type: 'CLEAR_STATUS'
    }
}

export const  deleteArticulo = sku => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/created/${sku}`, {
        method: "DELETE",
        })
        .then(res => res.json())
        .then(data => dispatch( {type: 'DELETE_ARTICULO', payload: data} ))
    }
}

export const updateArticulo = ( sku, data ) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/update/${sku}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(data => dispatch( {type: 'UPDATE_ARTICULO', payload: data} ))
    }
}

export const clearArticulo = () => {
    return {
        type: 'CLEAR_ARTICULO'
    }
}

export const clearState = () => {
    return {
        type: 'CLREAR_STATE'
    }
}

export const createDepartamento = name => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/departamento/${name}`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'CREATE_DEPARTAMENTO', payload: data } ))
    }
}

export const createClase = (id, name) => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/clase/${id}/${name}`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'CREATE_CLASE', payload: data } ))
    }
}

export const createFamilia = (id, name) => {
    return function(dispatch) {
        return fetch (`http://localhost:3001/familia/${id}/${name}`)
        .then(res => res.json())
        .then(data => dispatch( { type: 'CREATE_FAMILIA', payload: data } ))
    }
}
