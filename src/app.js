
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './stores/index'
import routes from './routes';
require("./style/main.scss");
// 引入font-awesome
require("font-awesome/scss/font-awesome.scss");


const store = configureStore()

render(
  <Provider store = {store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
