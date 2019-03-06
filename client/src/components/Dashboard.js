import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostList from './PostList'
import CategoryFilter from './CategoryFilter'
import { handleInitialData } from '../actions/shared'

class Dashboard extends Component {

    componentDidMount() {
      const { dispatch } = this.props
      dispatch(handleInitialData())
    }

    render() {
      const { posts } = this.props

      if (posts.status === 'loading') {
        return <div>Loading...</div>
      }
      
      return (
        <div>
          <h3>Leitura</h3>
          <CategoryFilter />
          <PostList posts={posts} />
        </div>
      )
    }  
}

// TODO colocar ordenação de post (byScore)
const mapStateToProps = ({ posts }) => ({
    posts: posts.data.sort((a, b) => {return b.timestamp - a.timestamp})
})

Dashboard.propTypes = {
    posts: PropTypes.instanceOf(Array).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Dashboard)
