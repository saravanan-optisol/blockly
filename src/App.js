import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DevTools from './components/DevTools'
import Home from './components/Home'
import Header from './components/Header'
import Block from './components/Block'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact={true} path="/" render={() => (
              <Home />
              )}
              /><Route exact={true} path="/devtools" render={() => (
                <DevTools />
                )}
                />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
