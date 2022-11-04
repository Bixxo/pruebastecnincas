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