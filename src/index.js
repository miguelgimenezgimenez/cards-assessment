import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import createStore from './store'
import App from './components/pages/App'

const muiTheme = getMuiTheme({})
const store = createStore({})

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
