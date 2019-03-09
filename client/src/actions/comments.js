/* eslint-disable import/prefer-default-export */
import { GET_COMMENTS_BY_POST_ID, CREATE_COMMENT, 
    EDIT_COMMENT, DELETE_COMMENT }
    from './constants'
import * as API from '../service/API'

function getComments(comments) {
    return {
        type: GET_COMMENTS_BY_POST_ID,
        comments: comments
    }
}

function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        comment
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function handleGetCommentsByPostId(postId) {
    return (dispatch) => {
        return API.getCommentsByPost(postId)
          .then((comments) => dispatch(getComments(comments)))
    }
}

export function handleCreateComment(comment) {
    return (dispatch) => {
        return API.addComment(comment)
          .then((comment) => dispatch(createComment(comment)))
    }
}

export function handleEditComment(comment) {
    return (dispatch) => {
        return API.editComment(comment)
          .then((comment) => dispatch(editComment(comment)))
    }
}

export function handleRateComment(commentId, option) {
    return (dispatch) => {
        return API.rateComment(commentId, option)
          .then((comment) => dispatch(editComment(comment)))
    }
}

export function handleDeleteComment(commentId) {
    return (dispatch) => {
        return API.deleteComment(commentId)
          .then((comment) => dispatch(deleteComment(comment)))
    }
}
