/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dateFormat from '../util/Util'
import RateElement from './RateElement'
import CommentEditForm from './CommentEditForm'
import { THUMBS_UP, THUMBS_DOWN } from '../util/constants'
import { handleRateComment, handleDeleteComment, handleEditComment } 
  from '../actions/comments'

class Comment extends Component {

  state = {
    isEditing: false
  }
  
  thumbsUp = () => {
    const { dispatch, comment } = this.props
    dispatch(handleRateComment(comment.id, { option: THUMBS_UP }))
  }
    
  thumbsDown = () => {
    const { dispatch, comment } = this.props
    dispatch(handleRateComment(comment.id, { option: THUMBS_DOWN }))
  }
    
  deleteComment = () => {
    const { dispatch, comment } = this.props
    dispatch(handleDeleteComment(comment.id))
  }

  editComment = (newBody) => {
    const { dispatch, comment } = this.props
    comment.body = newBody
    dispatch(handleEditComment(comment))
    this.setState({ isEditing: false });
  }

  toogleEdit = () => {
    this.setState({ isEditing: true });
  }

  render() {
    const { isEditing } = this.state
    const { comment } = this.props;
    const { author, body, timestamp, voteScore } = comment

    const renderCommentBody = isEditing 
    ? (<CommentEditForm existingValue={body} editComment={this.editComment} />)
    : (
      <div>          
        <button type="button" onClick={this.deleteComment}>Apagar</button>
        <div>
          {body}&nbsp;
          <button type="button" onClick={this.toogleEdit}>
            Editar
          </button>
        </div>
      </div>
    )
    
    return (
      <li>
        {renderCommentBody}
        <div>
          <small>Comentado por {author}</small>
        </div>
        <div>
          <div>
            <small>Data da publicação: {dateFormat(timestamp)}</small>
            <div>              
              <small>{voteScore} voto(s)</small>
            </div>
          </div>
          <RateElement thumbsUp={this.thumbsUp} thumbsDown={this.thumbsDown} />
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ comments }, { id }) => {
    const [comment] = comments.data.filter(comment => comment.id === id)
    return { comment }
}

Comment.propTypes = {
    comment: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Comment)
