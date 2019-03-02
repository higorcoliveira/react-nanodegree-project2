import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props
    return (
      <div className="App">
        {loading === true
          ? null
          : <Dashboard />
        }
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ categories, posts }) => ({
  loading: categories == null && posts === null,
})

export default connect(mapStateToProps)(App);
