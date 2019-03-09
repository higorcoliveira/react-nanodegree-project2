/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const RateElement = props => {
    const { thumbsUp, thumbsDown } = props
    return (
      <div>
        <button type="button" onClick={thumbsUp}>Gostei</button>
        <button type="button" onClick={thumbsDown}>Não Gostei</button>
      </div>
    )
}

RateElement.propTypes = {
    thumbsUp: PropTypes.func.isRequired,
    thumbsDown: PropTypes.func.isRequired
}

export default RateElement