import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DevTools from './components/DevTools'
import Home from './components/Home'
import Header from './components/Header'
import { Provider } from 'react-redux';
import Block from './components/Block'
import store from './store'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App
