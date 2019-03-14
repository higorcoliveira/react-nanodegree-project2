/* eslint-disable import/prefer-default-export */
import { GET_POSTS, CREATE_POST, 
        EDIT_POST, DELETE_POST, GET_POST_BY_ID }
    from './constants'
import * as API from '../service/API'

export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts: posts
    }
}

function getPostById(post) {
    return {
        type: GET_POST_BY_ID,
        post
    }
}

function createPost(post) {
    return {
        type: CREATE_POST,
        post
    }
}

function editPost(post) {
    return {
        type: EDIT_POST,
        post
    }
}

function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    }
}

export function handleGetPostById(postId) {
    return (dispatch) => {
        return API.getPost(postId)
          .then((post) => dispatch(getPostById(post)))
    }
}

export function handleCommentCounter(post) {
    return (dispatch) => {   
        return dispatch(editPost(post))
    }
}

export function handleGetPosts() {
    return (dispatch) => {
        return API.getAllPosts()
          .then((posts) => dispatch(getPosts(posts)))
    }
}

export function handleCreatePost(post) {
    return (dispatch) => {
        return API.addPost(post)
          .then((post) => dispatch(createPost(post)))
    }
}

export function handleUpdatePost(post) {
    return (dispatch) => {
        return API.editPost(post)
          .then((post) => dispatch(editPost(post)))
    }
}

export function handleDeletePost(postId) {
    return (dispatch) => {
        return API.deletePost(postId)
          .then((post) => dispatch(deletePost(post)))
    }
}

export function handleRatePost(postId, option) {
    return (dispatch) => {
        return API.ratePost(postId, option)
          .then((post) => dispatch(editPost(post)))
    }
}