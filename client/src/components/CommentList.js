import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BY_DATE } from '../util/constants'
import Comment from './Comment'
import SortBy from './SortBy'
import { getSortedElements } from '../util/Util'

class CommentList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       sortBy: BY_DATE
    }
  }

  changeSortBy = e => {
    this.setState({
      sortBy: e.target.value
    })      
  }

  render() {
    const { post, comments } = this.props
    const { sortBy } = this.state
    const commentsSorted = getSortedElements(comments, sortBy)
    const commentsSortedToRender = commentsSorted.length > 0 
        ? commentsSorted.map(item => <Comment key={item.id} post={post} comment={item} />)
        : <div>Ninguém comentou ainda...</div>

    return (
      <div>
        <SortBy changeHandler={this.changeSortBy} sortBy={sortBy} />
        <ul>{commentsSortedToRender}</ul>
      </div>
    )
  }
}

CommentList.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
  comments: PropTypes.instanceOf(Array).isRequired
}


export default CommentList
