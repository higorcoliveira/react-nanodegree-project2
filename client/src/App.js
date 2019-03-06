import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import PostsByCategory from './components/PostsByCategory'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost';

const App = () => {

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:category" component={PostsByCategory} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/posts/:postId" component={EditPost} />
        </div>
      </BrowserRouter>
    );
}

export default connect()(App);
