/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'
import { BY_DATE, BY_SCORE } from '../util/constants'

const SortBy = props => {
    const { changeHandler, sortBy } = props
    
    return (
      <div className="level-right">        
        <div className="control">
          <small className="title is-6">Ordenar por:&emsp;</small>
          <input            
            type="radio"            
            id="radioDate"
            value={BY_DATE}
            onChange={changeHandler}
            checked={sortBy === BY_DATE}
          />
          <label className="radio" key="radioDate" htmlFor="radioDate">
            <small className="title is-6">Data&emsp;</small>
          </label>
          <input            
            type="radio"            
            id="radioScore"
            value={BY_SCORE}
            onChange={changeHandler}
            checked={sortBy === BY_SCORE}
          />
          <label className="radio" key="radioScore" htmlFor="radioScore">
            <small className="title is-6">Votação</small>
          </label>
        </div>
      </div>
    )
}

SortBy.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
}

export default SortBy
