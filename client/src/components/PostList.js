import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import SortBy from './SortBy'
import { BY_DATE } from '../util/constants'
import { getSortedElements } from '../util/Util'

class PostList extends Component {

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
      const { posts } = this.props
      const { sortBy } = this.state
      const postsSorted = getSortedElements(posts, sortBy)
      const postsToRender = postsSorted.length > 0 
          ? postsSorted.map(item => <Post key={item.id} id={item.id} />)
          : <div />
      return (
        <div className="container">                  
          <SortBy changeHandler={this.changeSortBy} sortBy={sortBy} />
          <ul>{postsToRender}</ul>
        </div>
      )
    }
}

PostList.propTypes = {
    posts: PropTypes.instanceOf(Array).isRequired
}

export default PostList
