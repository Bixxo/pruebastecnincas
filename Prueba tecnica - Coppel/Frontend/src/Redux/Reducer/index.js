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

        case 'DELETE_ARTICULO':
            return {
                ...state,
                status: action.payload
            }

        case 'UPDATE_ARTICULO':
            return {
                ...state,
                status: action.payload
            }
        case 'CLEAR_ARTICULO':
            return {
                ...state,
                articulo: {}
            }

        case 'CLREAR_STATE':
            return {
                ... state,
                departamentos: [],
                clases: [],
                familias: [],
                articulo: {},
                status: {}
            }

        case 'CREATE_DEPARTAMENTO':
            return {
                ...state,
                status: action.payload
            }

        case 'CREATE_CLASE':
            return {
                ...state,
                status: action.payload
            }

        case 'CREATE_FAMILIA':
            return {
                ...state,
                status: action.payload
            } 

        default:
            return state
    }
}

export default rootReducer