import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = props => {
    const { posts } = props
    const postsToRender = posts.length > 0 
        ? posts.map(post => <Post key={post.id} id={post.id} />)
        : <div>Não há posts nessa categoria...</div>;
    return (
      <div>
        <div>
          {/* TODO Colocar rota no botão para novo post */}
          <button type="button">Nova Postagem</button>
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
