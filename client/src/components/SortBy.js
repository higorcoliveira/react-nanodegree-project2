/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'
import { BY_DATE, BY_SCORE } from '../util/constants'

const SortBy = props => {
    const { changeHandler, sortBy } = props
    
    return (
      <div>
        <small>Ordenar por:</small>
        <input            
          type="radio"            
          id="radioDate"
          value={BY_DATE}
          onChange={changeHandler}
          checked={sortBy === BY_DATE}
        />
        <label key="radioDate" htmlFor="radioDate">
          <small>Data</small>
        </label>
        <input            
          type="radio"            
          id="radioScore"
          value={BY_SCORE}
          onChange={changeHandler}
          checked={sortBy === BY_SCORE}
        />
        <label key="radioScore" htmlFor="radioScore">
          <small>Votação</small>
        </label>
      </div>
    )
}

SortBy.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
}

export default SortBy
