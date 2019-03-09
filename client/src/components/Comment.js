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
        <button 
          className="button is-danger is-outlined"
          type="button" 
          onClick={this.deleteComment}
        >
          <span className="icon is-small">
            <i className="fas fa-times" />
          </span>
        </button>
        <button
          className="button is-info is-outlined"
          type="button" 
          onClick={this.toogleEdit}
        >
          <span className="icon is-small">
            <i className="fas fa-pencil-alt fa-fw" />
          </span>
        </button>
        <div className="content">
          {body}&nbsp;
        </div>
      </div>
    )
    
    return (
      <li>
        <div className="card">
          {renderCommentBody}
          <div className="content">
            <p className="subtitle is-7">Comentado por {author}</p>
          </div>
          <div className="card-footer">
            <time className="card-footer-item">{dateFormat(timestamp)}</time>
            <small className="card-footer-item">{voteScore} voto(s)</small>
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
