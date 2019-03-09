import React from 'react'
import PropTypes from 'prop-types'

const RateElement = props => {
    const { thumbsUp, thumbsDown } = props
    return (
      <div className="media level-right">
        <button 
          className="button" 
          type="button" 
          onClick={thumbsUp}
        >          
          <span className="icon is-small">
            <i className="fa fa-thumbs-up" />
          </span>
        </button>
        <button 
          className="button" 
          type="button" 
          onClick={thumbsDown}
        >          
          <span className="icon is-small">
            <i className="fa fa-thumbs-down" />
          </span>
        </button>
      </div>
    )
}

RateElement.propTypes = {
    thumbsUp: PropTypes.func.isRequired,
    thumbsDown: PropTypes.func.isRequired
}

export default RateElement