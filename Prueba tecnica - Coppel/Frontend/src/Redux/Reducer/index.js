const initialState = {
    departamentos: [],
    clases: []
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

        default:
            return state
    }
}

export default rootReducer