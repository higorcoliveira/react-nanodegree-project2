import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generateId } from '../util/Util'

class CommentForm extends Component {

  // inicializando o objeto que representa o comentario
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author: ''
    }
  }
  
  onSubmit = e => {
    e.preventDefault()
    const { body, author } = this.state
    const { submitComment, isNew, comment } = this.props
    submitComment({
      id: isNew ? generateId() : comment.id, // controle de criação e edição de comentario     
      parentId: comment.parentId,
      body,
      author,
      timestamp: new Date().getTime(),
      voteScore: isNew ? 0 : comment.voteScore
    })
    this.setState({ body: '', author: '' })
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    })
  }

  submitNotAllowed = () => {
    const { body, author } = this.state
    return body === '' || author === ''
  }

  render() {
    const { body, author } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <textarea
              className="textarea"
              id="body"
              value={body}
              maxLength={500}
              onChange={e => this.handleChange(e, "body")}              
              placeholder="Comente algo interessante..."
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"            
              id="author"
              value={author}              
              onChange={e => this.handleChange(e, "author")}
              placeholder="Autor"
            />
          </div>
          <div>
            <button
              className="button is-success"
              type="submit" 
              disabled={this.submitNotAllowed()}
            >
              <span className="icon is-small">
                <i className="fas fa-check" />
              </span>
              <span>Comentar</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

CommentForm.defaultProps = {
    comment: {
      id: '',
      body: '',
      author: '',
    }
}
  
CommentForm.propTypes = {
    isNew: PropTypes.bool.isRequired,
    comment: PropTypes.shape({
      id: PropTypes.string,
      parentId: PropTypes.string,
      body: PropTypes.string,
      author: PropTypes.string,
    }),
    submitComment: PropTypes.func.isRequired,
}

export default CommentForm
