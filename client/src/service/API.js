const api = "http://localhost:3001"
// alterar o valor do token para reiniciar os dados do backend
let token = "higorcoliveira:555113351AAW24"

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getInitialData = () => {
    return Promise.all([
        getAllCategories(),
        getAllPosts()
    ]).then(([categories, posts]) => ({
        categories,
        posts
    }))
}

// categories
export const getAllCategories = () => {
    return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}

export const getPostsByCategory = (categoryId) => {
    return fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json())        
}

// posts
export const getAllPosts = () => {
    return fetch(`${api}/posts`, { headers })
        .then(res => res.json())   
}

export const addPost = (post) => {
    return fetch(`${api}/posts`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
    }).then(res => res.json())
}

export const getPost = (postId) => {
    return fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())        
}

export const ratePost = (postId, rate) => {
    return fetch(`${api}/posts/${postId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify(rate)
    }).then(res => res.json())    
}

export const editPost = (post) => {
    return fetch(`${api}/posts/${post.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
    }).then(res => res.json())    
}

export const deletePost = (postId) => {
    return fetch(`${api}/posts/${postId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}

// comments
export const getCommentsByPost = (postId) => {
    return fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())        
}

export const addComment = (comment) => {
    return fetch(`${api}/comments`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

export const getComment = (commentId) => {
    return fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json())        
}

export const rateComment = (commentId, rate) => {
    return fetch(`${api}/comments/${commentId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate })
    }).then(res => res.json())    
}

export const editComment = (comment) => {
    return fetch(`${api}/comments/${comment.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

export const deleteComment = (commentId) => {
    return fetch(`${api}/comments/${commentId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}