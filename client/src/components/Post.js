/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react'
import ShowMore from 'react-show-more'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dateFormat from '../util/Util'

class Post extends Component {
  
  thumbsUp = () => {
      // TODO classificar post
  }

  thumbsDown = () => {
    // TODO classificar post
  }

  deletePost = () => {
    // TODO remover post
  }

  render() {
    const { post } = this.props;
    const { title, author, body, timestamp, commentCount } = post

    return (
      <li>
        <div>
          <div>
            {/* TODO colocar navegação para a página do post */}
            { title }
          </div>
          <button type="button" onClick={this.deletePost}>Apagar</button>
        </div>
        <div>
          <small>Postado por {author}</small>
        </div>
        <div>
          <ShowMore lines={5} more="Expandir" less="Recolher">{body}</ShowMore>
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
    post: PropTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps)(Post)
