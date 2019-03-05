import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import PostsByCategory from './components/PostsByCategory'
import NewPost from './components/NewPost'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:category" component={PostsByCategory} />
          <Route exact path="/new" component={NewPost} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(App);
