import React from 'react'
import PropTypes from 'prop-types'
import CategoryFilter from './CategoryFilter'
import Post from './Post'

const PostDetails = props => {
    const { match } = props

    return (
      <div>
        <h3>Leitura</h3>
        <CategoryFilter />
        <Post key={match.params.postId} id={match.params.postId} />
        {/* TODO colocar componente de listagem de comentários */}
      </div>
    )
}

PostDetails.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired
}

export default PostDetails
