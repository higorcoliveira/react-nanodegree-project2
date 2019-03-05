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
            console.log("REDUCER")
            console.dir(post)  
            return {
                ...state,
                [action.post.id]: action.post
            }
        }
        default:
            return state
    }
}