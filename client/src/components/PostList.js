import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Post from './Post'

const PostList = props => {
    const { posts } = props
    const postsToRender = posts.length > 0 
        ? posts.map(post => <Post key={post.id} id={post.id} />)
        : <div />
    return (
      <div>
        <div>
          <Link to="/new">Nova Postagem</Link>
        </div>
        <div>
          {/* TODO Colocar componente de ordenação */}
          <ul>{postsToRender}</ul>
        </div>
      </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.instanceOf(Array).isRequired
}

export default PostList
