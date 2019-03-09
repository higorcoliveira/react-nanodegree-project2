import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentEditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      body: props.existingValue      
    }
  }

  handleChange = e => {
    this.setState({ body: e.target.value });
  }
  
  editComment = e => {
    e.preventDefault();
    const { body } = this.state
    const { editComment } = this.props
    editComment(body);
  }

  render() {
    const { body } = this.state

    return (
      <div>
        <form onSubmit={this.editComment}>
          <div>
            <input 
              type="text"              
              value={body}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">Editar</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

CommentEditForm.propTypes = {
    existingValue: PropTypes.string.isRequired,
    editComment: PropTypes.func.isRequired,
}

export default CommentEditForm
