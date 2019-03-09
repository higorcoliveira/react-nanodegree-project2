import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostList from './PostList'
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
          <PostList posts={posts} />
        </div>
      )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.data
})

Dashboard.propTypes = {
    posts: PropTypes.instanceOf(Array).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Dashboard)
