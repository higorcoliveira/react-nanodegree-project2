/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { capitalize } from '../util/Util'

const CategoryFilter = props => {

    const { byCategories } = props
    return (
      <div>
        <Link to="/">
           Todas as Categorias&nbsp;
        </Link>
        {byCategories.map(category => (
          <Link
            to={`/${category.name}`}
            key={category.name}
            style={{width: '100px'}}
          >
            {capitalize(category.name)}&nbsp;
          </Link>
        ))}
      </div>
    )
}

CategoryFilter.propTypes = {
    byCategories: PropTypes.instanceOf(Array).isRequired
}

const mapStateToProps = ({ categories }) => ({
    byCategories: categories.data
})

export default withRouter(connect(mapStateToProps)(CategoryFilter))