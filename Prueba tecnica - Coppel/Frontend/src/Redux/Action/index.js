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
