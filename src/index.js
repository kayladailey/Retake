import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import productReducer from './reducers';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

const store = createStore(productReducer);

ReactDOM.render(
  <Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);