import { GET_COMMENTS_BY_POST_ID, CREATE_COMMENT, 
    EDIT_COMMENT, DELETE_COMMENT } 
    from '../actions/constants'

const initialState = {
    data: [],
    status: 'loading',
}

export default function comments (state = initialState, action) {
    switch(action.type) {
        case GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                status: 'loaded', 
                data: action.comments
            }
        case CREATE_COMMENT: {
            const { comment } = action
            const newComments = state.data
            newComments.push(comment)
            return {
                ...state,
                data: newComments
            }
        }
        case EDIT_COMMENT: {
            const { comment } = action
            const newComments = state.data
            const newCommentsEdited = newComments.map(item => {
                if (item.id === comment.id) {
                    return { ...item, ...comment}
                }
                return item
            })
            return {
                ...state,
                data: newCommentsEdited
            }
        }
        case DELETE_COMMENT: {
            const { comment } = action
            const newComments = state.data
            const newCommentsDeleted = newComments.filter(item => 
                item.id !== comment.id && comment.deleted)
            return {
                ...state,
                data: newCommentsDeleted                        
            }
        }
        default:
            return state
    }
}