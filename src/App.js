import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import {Provider} from 'react-redux'

import store from './store';
import * as CompoLink from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route path="/login" component={CompoLink.Login} />
            <Route path="/forgetpassword" component={CompoLink.ForgetPassword} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
