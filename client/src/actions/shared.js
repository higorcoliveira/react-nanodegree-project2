import * as API from '../service/API'
import getCategories from './categories'
import getPosts from './posts'

// TODO corrigir chamada para o backend
export function handleInitialData() {
    return (dispatch) => {
        return API.getAllCategories()
            .then(json => dispatch(getCategories(json)))
        // return API.getInitialData()
        //     .then(({ categories, posts }) => {
        //         dispatch(getCategories(categories))
        //         dispatch(getPosts(posts))
        //     })
    }
}