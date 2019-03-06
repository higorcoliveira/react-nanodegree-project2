/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react'
import ShowMore from 'react-show-more'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import dateFormat from '../util/Util'
import { handleDeletePost, handleRatePost } from '../actions/posts'
import { THUMBS_UP, THUMBS_DOWN } from '../util/constants'

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
    const { id, title, author, body, timestamp, commentCount } = post

    return (
      <li>
        <div>
          <div>
            <Link to={`/posts/${id}/view`}>
              { title }
            </Link>            
          </div>
          <button type="button" onClick={this.deletePost}>Apagar</button>
          <Link to={`/posts/${id}/edit`}>
            Editar
          </Link>
        </div>
        <div>
          <small>Postado por {author}</small>
        </div>
        <div>
          <ShowMore lines={30} more="Expandir" less="Recolher">{body}</ShowMore>
        </div>
        <div>
          <div>
            <small>Data da publicação: {dateFormat(timestamp)}</small>
            <div>
              <small>{commentCount} commentário(s)</small>
            </div>
          </div>
          <button type="button" onClick={this.thumbsUp}>Gostei</button>
          <button type="button" onClick={this.thumbsDown}>Não Gostei</button>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ posts }, { id }) => {
    const [post] = posts.data.filter(post => post.id === id)
    return { post }
}

Post.propTypes = {
    post: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Post)
