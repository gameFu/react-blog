
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './stores/index'
require("./style/main.scss");
// 引入font-awesome
require("font-awesome/scss/font-awesome.scss");


const store = configureStore()

render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
