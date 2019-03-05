import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostList from './PostList'
import CategoryFilter from './CategoryFilter'

const PostsByCategory = props => {
    
    const { posts } = props
    return (
      <div>
        <h3>Leitura</h3>
        <CategoryFilter />
        <PostList posts={posts} />
      </div>      
    )
}

const mapStateToProps = ({ posts }, ownProps) => ({
    posts: posts.data
      .sort((a, b) => {return a.timestamp - b.timestamp})
      .filter(post => post.category === ownProps.match.params.category)
})

PostsByCategory.defaultProps = {
    posts: [],
}

PostsByCategory.propTypes = {
    posts: PropTypes.instanceOf(Array),
}

export default connect(mapStateToProps)(PostsByCategory)
