import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostList from './PostList'

const Dashboard = props => {
    const { categories, posts } = props

    if (props.posts.status === 'loading' 
      && props.categories.status === 'loading') {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Leitura</h3>
        {/* TODO componente de filtragem de posts por categoria */}
        <div>
          {categories.data.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))
          }
        </div>
        <PostList posts={posts} />
      </div>
    )
}

// TODO colocar ordenação de post (byScore)
const mapStateToProps = ({ categories, posts }) => ({
    categories,
    posts: posts.data.sort((a, b) => {return a.timestamp - b.timestamp})
})

Dashboard.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Array).isRequired
}

export default connect(mapStateToProps)(Dashboard)
