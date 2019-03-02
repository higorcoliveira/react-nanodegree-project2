import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Dashboard = props => {
    const { categories, posts } = props
    console.dir(categories)
    console.dir(posts)
    return (
      <div>
        <h3>Leitura</h3>
        <div>
          {/* {categories.map((name) => (
            <div key={name}>{name}</div>
          ))
          } */}
        </div>
        <ul>
          {/* {posts.map((id) => (
            <li key={id}>
              <div>POST ID: {id}</div>
            </li>
          ))} */}
        </ul>
      </div>
    )
}

// TODO colocar ordenação por post (byTimestamp, byScore)
const mapStateToProps = ({ categories, posts }) => ({
    categories,
    posts
    // postIds: Object.keys(posts)
    //         .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
})

Dashboard.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    // posts: PropTypes.instanceOf(Array).isRequired
}

export default connect(mapStateToProps)(Dashboard)
