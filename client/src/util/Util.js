import { orderBy } from 'lodash'
import { BY_DATE, BY_SCORE } from './constants'

export default function dateFormat(timestamp) {
    const options = { year: 'numeric', month: '2-digit', 
                    day: '2-digit', hour: '2-digit', minute:'2-digit', second: '2-digit'};
    return new Date(timestamp).toLocaleDateString('pt-BR', options);
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateId() {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  
    for (var i = 0; i < 20; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
  
    return text
}

export const getSortedPosts = (posts, sortBy) => {
    if (sortBy === BY_DATE) {
      return orderBy(posts, ['timestamp', 'voteScore'], ['desc', 'desc']);
    } else if (sortBy === BY_SCORE) {
      return orderBy(posts, ['voteScore', 'timestamp'], ['desc', 'desc']);
    }
    return posts;
}