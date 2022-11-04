const initialState = {
    departamentos: [],
    clases: [],
    familias: [],
    articulo: {},
    status: {}
}

function rootReducer (state = initialState, action) {
    switch(action.type) {

        case 'GET_DEPARTAMENTOS':
            return {
                ...state,
                departamentos: action.payload
            }

        case 'GET_CLASES':
            return {
                ...state,
                clases: action.payload
            }

        case 'GET_FAMILIA':
            return {
                ...state,
                familias: action.payload
            }

        case 'GET_ARTICULO':
            return {
                ...state,
                articulo: action.payload
            }

        case 'CREATE_ARTICULO':
            return {
                ...state,
                status: action.payload
            }

        case 'CLEAR_STATUS':
            return {
                ...state,
                status: {}
            }

        default:
            return state
    }
}

export default rootReducer