import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App'
import todoApp from './reducers'

import 'todomvc-app-css/index.css'
import 'stylesheets/index.scss'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
