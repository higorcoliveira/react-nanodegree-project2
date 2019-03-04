import { GET_CATEGORIES } from '../actions/constants'

const initialState = {
    data: [],
    status: 'loading',
}

export default function categories (state = initialState, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                status: 'loaded', 
                data: action.categories
            }
        default:
            return state
    }
}