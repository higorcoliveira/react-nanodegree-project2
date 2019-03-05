/* eslint-disable import/prefer-default-export */
import { GET_POSTS } from './constants'

export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts: posts
    }
}