import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import createStore from './store'
import App from './components/organisms/App'

const muiTheme = getMuiTheme({})

const persistedState = localStorage.getItem('cardList') ? JSON.parse(localStorage.getItem('cardList')) : {}

const store = createStore(persistedState)
store.subscribe(() => {
  localStorage.setItem('cardList', JSON.stringify(store.getState()))
})

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme} >
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
}

render()
