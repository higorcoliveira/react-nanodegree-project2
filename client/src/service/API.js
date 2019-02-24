const api = "http://localhost:3001"
let token = "higorcoliveira:55514381"

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
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        // .then(data => data.categories)
}

export const getPostsByCategory = (categoryId) => {
    fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json())        
}

// posts
export const getAllPosts = () => {
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())     
}

export const addPost = (post) => {
    fetch(`${api}/posts`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ post })
    }).then(res => res.json())    
}

export const getPost = (postId) => {
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())        
}

export const ratePost = (postId, rate) => {
    fetch(`${api}/posts/${postId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate })
    }).then(res => res.json())    
}

export const editPost = (post) => {
    fetch(`${api}/posts/${post.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ post })
    }).then(res => res.json())    
}

export const deletePost = (postId) => {
    fetch(`${api}/posts/${postId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}

// comments
export const getCommentsByPost = (postId) => {
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())        
}

export const addComment = (comment) => {
    fetch(`${api}/comments`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

export const getComment = (commentId) => {
    fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json())        
}

export const rateComment = (commentId, rate) => {
    fetch(`${api}/comments/${commentId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate })
    }).then(res => res.json())    
}

export const editComment = (comment) => {
    fetch(`${api}/comments/${comment.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

export const deleteComment = (commentId) => {
    fetch(`${api}/comments/${commentId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}