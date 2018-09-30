import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
