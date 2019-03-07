import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link  } from "react-router-dom";
import {Provider} from 'react-redux'

import store from './store';
import * as CompoLink from './components'
import './App.css';

class App extends Component {
  handleLogout = (event) =>{
    localStorage.clear();
    this.setState({
      isLogged: false 
    })
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
            <Route path="/login" component={CompoLink.Login} />
            <Route path="/forgetpassword" component={CompoLink.ForgetPassword} />
            <Route path="/recoverpassword/:token" component={CompoLink.RecoverPassword} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
