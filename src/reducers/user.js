const initialState = {
    name: 'anonymous',
}

export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload }

        case 'EXIT_USER':
            return { ...state, name: action.payload }

        default:
            return state
    }
}