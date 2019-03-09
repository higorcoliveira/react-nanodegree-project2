import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm'
import { handleCreatePost } from '../actions/posts'

class NewPost extends Component {
   state = {
      redirect: false
   }
   
  createPost = post => {
    const { dispatch } = this.props
    dispatch(handleCreatePost(post))
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
        return <Redirect to="/" />;
    }
    return (
      <div>
        <PostForm submitPost={this.createPost} isNew />
      </div>
    )
  }
}

NewPost.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(NewPost)
