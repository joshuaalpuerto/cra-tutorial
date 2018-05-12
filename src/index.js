import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from 'containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

const initialState = {}
const store = configureStore({ initialState })

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
