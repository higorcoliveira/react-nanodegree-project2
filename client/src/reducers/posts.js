import { GET_POSTS, CREATE_POST, EDIT_POST, DELETE_POST } 
    from '../actions/constants'

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
        case EDIT_POST: {
            const { post } = action
            const newPosts = state.data
            const newPostsEdited = newPosts.map(item => {
                if (item.id === post.id) {
                    return { ...item, ...post}
                }
                return item
            })
            return {
                ...state,
                data: newPostsEdited                        
            }
        }
        case DELETE_POST: {
            const { post } = action
            const newPosts = state.data
            const newPostsDeleted = newPosts.filter(item => 
                item.id !== post.id && post.deleted)
            return {
                ...state,
                data: newPostsDeleted                        
            }
        }
        default:
            return state
    }
}