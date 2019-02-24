import { GET_POSTS } from '../actions/constants'

export default function posts (state = {}, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                ...action.posts
            }
        default:
            return state
    }
}