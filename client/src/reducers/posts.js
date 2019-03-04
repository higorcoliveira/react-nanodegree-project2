import { GET_POSTS } from '../actions/constants'

const initialState = {
    data: [],
    status: 'loading',
}

export default function posts (state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                status: 'loaded', 
                data: action.posts,
            }
        default:
            return state
    }
}