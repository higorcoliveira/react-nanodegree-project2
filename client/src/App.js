import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import PostsByCategory from './components/PostsByCategory'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import PostDetails from './components/PostDetails'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => {

    return (
      <BrowserRouter>        
        <section className="section">
          {/* para o componente notFound funcionar é preciso resolver o problema do estado 
            do redux estar sendo zerado quando é dado refresh na página */}
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/:category" component={PostsByCategory} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/posts/:postId/edit" component={EditPost} />
            <Route exact path="/posts/:postId/view" component={PostDetails} />
            <Route exact path="/error/notfound" component={NotFound} />
          </Switch>
        </section>
      </BrowserRouter>
    )
}

export default connect()(App)
