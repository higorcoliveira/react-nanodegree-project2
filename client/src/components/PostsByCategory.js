import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostList from './PostList'

const PostsByCategory = props => {
    const { posts } = props

    return (
      <div>
        <PostList posts={posts} />
      </div>      
    )
}

const mapStateToProps = ({ posts }, ownProps) => ({
    posts: posts.data
      .filter(post => post.category === ownProps.match.params.category)
})

PostsByCategory.defaultProps = {
    posts: [],
}

PostsByCategory.propTypes = {
    posts: PropTypes.instanceOf(Array),
}

export default connect(mapStateToProps)(PostsByCategory)
