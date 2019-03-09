import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CategoryFilter from './CategoryFilter'
import Post from './Post'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { handleGetCommentsByPostId, handleCreateComment } from '../actions/comments'

class PostDetails extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(handleGetCommentsByPostId(match.params.postId))
  }

  addComment = comment => {
    const { dispatch, match } = this.props
    comment.parentId = match.params.postId
    dispatch(handleCreateComment(comment))
    // faz o refresh dos comentários 
    // o método do ciclo de vida do react 'componentDidUpdate' estava entrando em loop
    // no momento do cadastro do comentário
    dispatch(handleGetCommentsByPostId(match.params.postId))
 }

  render() {
    const { comments, match } = this.props
    // TODO tratar not found

    return (
      <div>
        <h3>Leitura</h3>
        <CategoryFilter />
        <Post key={match.params.postId} id={match.params.postId} />
        <CommentForm submitComment={this.addComment} isNew />
        <CommentList comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  comments: comments.data
})

PostDetails.propTypes = {
  dispatch: PropTypes.func.isRequired, 
  match: PropTypes.instanceOf(Object).isRequired,
  comments: PropTypes.instanceOf(Array).isRequired
}

export default connect(mapStateToProps)(PostDetails)
