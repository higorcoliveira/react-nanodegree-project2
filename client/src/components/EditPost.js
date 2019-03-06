import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import CategoryFilter from './CategoryFilter'
import { handleUpdatePost } from '../actions/posts'

class EditPost extends Component {
  state = {
    redirect: false
  }

  updatePost = (post) => {
    const { dispatch } = this.props
    dispatch(handleUpdatePost(post))
    this.setState({ redirect: true })
  }

  render() {
    let { post } = this.props
    const { redirect } = this.state
    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
      <div>
        <h3>Leitura</h3>
        <CategoryFilter />
        <PostForm submitPost={this.updatePost} post={post[0]} isNew={false} />
      </div>
    )
  }
}

EditPost.defaultProps = {
    post: {},
}

const mapStateToProps = ({ posts }, ownProps) => ({
    post: posts.data
        .filter(post => post.id === ownProps.match.params.postId)        
})

EditPost.propTypes = {
    post: PropTypes.instanceOf(Object),
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(EditPost)
