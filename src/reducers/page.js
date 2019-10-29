const initialState = {
    year: 2018,
    photos: ["Типо Фото"],
    isFetching: false,
}

export function pageReducer(state = initialState, action) {

    switch (action.type) {    
        case 'SET_YEAR':
            return { ...state, year: action.payload }

        case 'GET_PHOTOS_REQUEST':
            return { ...state, year: action.payload, isFetching: false }

        case 'GET_PHOTOS_SUCCESS':
            return { ...state, photos: action.payload, isFetching: true }

        default:
            return state
    }
}