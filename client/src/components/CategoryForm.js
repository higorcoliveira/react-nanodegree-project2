import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { capitalize } from '../util/Util'

const CategoryForm = props => {
    const { checkedValue, handleChange, categories } = props;

    return (
      <div>
        <div>Categorias</div>
        <div>
          {categories.map(category => (
            <label key={category.name} htmlFor={category.name} style={{width: '80px'}}>
              <input
                key={category.name}
                type="radio"
                id={category.name}
                value={category.name}
                checked={checkedValue === category.name}
                onChange={e => handleChange(e, "category")}
              />
              {capitalize(category.name)}
            </label>
            ))}
        </div>
      </div>
    )
}

const mapStateToProps = ({ categories }) => ({
    categories: categories.data
})

CategoryForm.propTypes = {
    checkedValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(Array).isRequired,
}

export default connect(mapStateToProps)(CategoryForm)
