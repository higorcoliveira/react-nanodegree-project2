/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react'
import ShowMore from 'react-show-more'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from '../util/Util'
import RateElement from './RateElement'
import { THUMBS_UP, THUMBS_DOWN } from '../util/constants'
import { handleDeletePost, handleRatePost } from '../actions/posts'
import '../style/common.css'

class Post extends Component {
  
  thumbsUp = () => {
    const { dispatch, post } = this.props
    dispatch(handleRatePost(post.id, { option: THUMBS_UP }))
  }

  thumbsDown = () => {
    const { dispatch, post } = this.props
    dispatch(handleRatePost(post.id, { option: THUMBS_DOWN }))
  }

  deletePost = () => {
    const { dispatch, post } = this.props
    dispatch(handleDeletePost(post.id))
  }

  render() {    
    const { post } = this.props;
    const { id, category, title, author, body, timestamp, commentCount, voteScore } = post

    return (
      <li>
        <div className="card">
          <div>
            <div className="subtitle is-5 card-header-title card-header-icon">
              <Link to={`/${category}/${id}`}>
                { title }
              </Link>            
            </div>
            <button 
              className="button is-danger is-outlined" 
              type="button" 
              onClick={this.deletePost}
            >
              <span>Apagar</span>
              <span className="icon is-small">
                <i className="fas fa-times" />
              </span>    
            </button>
            <Link className="button is-info" to={`/${category}/${id}/edit`}>
              Editar
            </Link>            
          </div>
          <br />
          <div className="content">
            <p className="subtitle is-7">Postado por {author}</p>
            <ShowMore lines={30} more="Expandir" less="Recolher">{body}</ShowMore>
          </div>
          <div className="card-footer">
            <time className="card-footer-item">{dateFormat(timestamp)}</time>
            <small className="card-footer-item">{commentCount} commentário(s) &nbsp;</small>
            <small className="card-footer-item">{voteScore} voto(s)</small>
          </div>          
          <RateElement thumbsUp={this.thumbsUp} thumbsDown={this.thumbsDown} />
        </div>
      </li>
    )
  }
}

Post.propTypes = {
    post: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect()(Post)
