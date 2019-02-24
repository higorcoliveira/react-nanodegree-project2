import { GET_CATEGORIES } from './constants'

export default function getCategories(json) {
    return {
        type: GET_CATEGORIES,
        categories: json.categories
    }
}