/* eslint-disable import/prefer-default-export */
import * as API from '../service/API'
import getCategories from './categories'
import getPosts from './posts'

export function handleInitialData() {
    return (dispatch) => {
        return API.getInitialData()
            .then(({ categories, posts }) => {
                dispatch(getCategories(categories))
                dispatch(getPosts(posts))
            })
    }
}