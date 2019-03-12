import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { handleGetCommentsByPostId, handleCreateComment } from '../actions/comments'
import { handleCommentCounter } from '../actions/posts'

class PostDetails extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(handleGetCommentsByPostId(match.params.postId))
    // dispatch(handleGetPosts())
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

    return (
      <div className="container">
        <Post key={post.id} post={post} />
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
  const [post] = posts.data.filter(post => post.id === match.params.postId)
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
