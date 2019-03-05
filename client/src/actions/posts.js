/* eslint-disable import/prefer-default-export */
import { GET_POSTS, CREATE_POST } from './constants'
import * as API from '../service/API'

export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts: posts
    }
}

function createPost(post) {
    return {
        type: CREATE_POST,
        post
    }
}

export function handleCreatePost(post) {
    return (dispatch) => {
        return API.addPost(post)
          .then((post) => dispatch(createPost(post)))
    }
}