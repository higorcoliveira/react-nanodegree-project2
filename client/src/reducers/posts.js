import { GET_POSTS, CREATE_POST } from '../actions/constants'

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
        case CREATE_POST: {
            const { post } = action
            const newPosts = state.data
            newPosts.push(post)
            return {
                ...state,
                data: newPosts
            }
        }
        default:
            return state
    }
}