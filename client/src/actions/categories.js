import { GET_CATEGORIES } from './constants'

export default function getCategories(categories) {
    return {
        type: GET_CATEGORIES,
        categories: categories
    }
}