import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import NotFound from './NotFound'
import { handleGetCommentsByPostId, handleCreateComment } from '../actions/comments'
import { handleCommentCounter, handleGetPostById } from '../actions/posts'

class PostDetails extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(handleGetPostById(match.params.postId))
    dispatch(handleGetCommentsByPostId(match.params.postId))
  }

  addComment = comment => {
    const { dispatch, match, post } = this.props
    comment.parentId = match.params.postId
    dispatch(handleCreateComment(comment))
    post.commentCount += 1
    dispatch(handleCommentCounter(post))

    // faz o refresh dos comentários 
    // o método do ciclo de vida do react 'componentDidUpdate' estava entrando em loop
    // nas chamadas ao store, no momento do cadastro do comentário
    dispatch(handleGetCommentsByPostId(match.params.postId))
  }

  render() {
    const { post, comments } = this.props

    if (post.length === 0) {
      return (<NotFound />)
    }

    return (
      <div className="container">
        { post && post.id && <Post key={post.id} post={post} /> }
        <br />
        <CommentForm submitComment={this.addComment} isNew />
        <br />
        <CommentList post={post} comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts, comments }, ownProps) => {
  const { match } = ownProps
  let post = []
  if (posts.status === 'loaded' && posts.data.length > 0) {
    [post] = posts.data.filter(post => post.id === match.params.postId)
  } else {
    post = posts.data
  }
  return {
    post: post,
    comments: comments.data
  }
}

PostDetails.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired, 
  match: PropTypes.instanceOf(Object).isRequired,
  comments: PropTypes.instanceOf(Array).isRequired
}

export default connect(mapStateToProps)(PostDetails)
