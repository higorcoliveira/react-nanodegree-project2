import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryForm from './CategoryForm'
import { generateId } from '../util/Util'

class PostForm extends Component {
  // inicializando o objeto que representa o post
  constructor(props) {
    super(props)
    this.state = {
      category: 'react',
      title: '',
      body: '',
      author: ''
    }
  }

  componentDidMount() {
    const { post } = this.props
    const { category, title, body, author } = post;
    this.setState({
      category,
      title,
      body,
      author
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { category, title, author, body } = this.state
    const { submitPost, isNew, post } = this.props
    submitPost({
      id: isNew ? generateId() : post.id, // controle de criação e edição de post
      category,
      title,
      body,
      author,
      timestamp: new Date().getTime(),
      voteScore: isNew ? 0 : post.voteScore
    })
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    })
  }

  submitNotAllowed = () => {
    const { title, body, author } = this.state
    return title === '' || body === '' || author === ''
  }

  render() {
    // TODO verificar uma forma melhor de passar o parâmetro para o método
    // handleChange, pois é arriscado passar uma string como o atributo do objeto
    const { category, title, body, author } = this.state;
    
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <CategoryForm checkedValue={category} handleChange={this.handleChange} />
          <div className="field">
            <input
              className="input"
              type="text"              
              id="title"
              value={title}              
              onChange={e => this.handleChange(e, "title")}
              placeholder="Título..."
            />
          </div>
          <div className="field">
            <textarea
              className="textarea"
              id="body"
              value={body}
              maxLength={500}
              onChange={e => this.handleChange(e, "body")}              
              placeholder="Escreva algo interessante..."
            />
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"            
                id="author"
                value={author}              
                onChange={e => this.handleChange(e, "author")}
                placeholder="Autor..."
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
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
              <span>Postar</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

PostForm.defaultProps = {
  post: {
    id: '',
    category: 'react', // categoria default no momento da criação do post
    title: '',
    body: '',
    author: '',
  },
}

PostForm.propTypes = {
  isNew: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
  }),
  submitPost: PropTypes.func.isRequired,
}

export default PostForm
