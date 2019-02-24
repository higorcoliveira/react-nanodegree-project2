const api = "http://localhost:3001"
let token = "higorcoliveira:55514381"

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// categories
const getCategories = () => {
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}

const getPostsByCategory = (categoryId) => {
    fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json())        
}

// posts
const getPosts = () => {
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())        
}

const addPost = (post) => {
    fetch(`${api}/posts`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ post })
    }).then(res => res.json())    
}

const getPost = (postId) => {
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())        
}

const getPost = (postId) => {
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())        
}

const ratePost = (postId, rate) => {
    fetch(`${api}/posts/${postId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate })
    }).then(res => res.json())    
}

const editPost = (post) => {
    fetch(`${api}/posts/${post.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ post })
    }).then(res => res.json())    
}

const deletePost = (postId) => {
    fetch(`${api}/posts/${postId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}

// comments
const getCommentsByPost = (postId) => {
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())        
}

const addComment = (comment) => {
    fetch(`${api}/comments`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

const getComment = (commentId) => {
    fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json())        
}

const rateComment = (commentId, rate) => {
    fetch(`${api}/comments/${commentId}`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate })
    }).then(res => res.json())    
}

const editComment = (comment) => {
    fetch(`${api}/comments/${comment.id}`, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
    }).then(res => res.json())    
}

const deleteComment = (commentId) => {
    fetch(`${api}/comments/${commentId}`, {
            method: 'DELETE',
            headers: { ...headers, 'Content-Type': 'application/json' }            
    }).then(res => res.json())    
}

module.exports = {
    getCategories,
    getPostsByCategory,
    addPost,
    editPost,
    ratePost,
    deletePost,
    getPost,
    getPosts,
    addComment,
    editComment,
    rateComment,
    deleteComment,
    getComment,
    getCommentsByPost
}