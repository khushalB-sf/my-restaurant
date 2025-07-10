import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store'
import theme from './theme/themeAntd'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
