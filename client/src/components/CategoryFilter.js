/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { capitalize } from '../util/Util'

const CategoryFilter = props => {

    const { byCategories } = props
    return (
      <nav className="level">
        <div className="level-left">
          <Link to="/" className="level-item">
            Todas as Categorias&nbsp;
          </Link>
          {byCategories.map(category => (
            <Link
              to={`/${category.name}`}
              key={category.name}
              className="level-item"
            >
              {capitalize(category.name)}&nbsp;
            </Link>
          ))}
        </div>
        <div className="level-right">
          <Link to="/posts/new" className="button is-primary">Nova Postagem</Link>
        </div>
      </nav>  
    )
}

CategoryFilter.propTypes = {
    byCategories: PropTypes.instanceOf(Array).isRequired
}

const mapStateToProps = ({ categories }) => ({
    byCategories: categories.data
})

export default withRouter(connect(mapStateToProps)(CategoryFilter))