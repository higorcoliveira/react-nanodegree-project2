import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostList from './PostList'
import CategoryFilter from './CategoryFilter'

const Dashboard = props => {
    const { posts } = props

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

// TODO colocar ordenação de post (byScore)
const mapStateToProps = ({ posts }) => ({
    posts: posts.data.sort((a, b) => {return a.timestamp - b.timestamp})
})

Dashboard.propTypes = {
    posts: PropTypes.instanceOf(Array).isRequired
}

export default connect(mapStateToProps)(Dashboard)
