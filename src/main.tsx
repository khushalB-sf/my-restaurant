import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import store from './store'
import theme from './theme/themeAntd'
import App from './App'
import { queryClient } from './lib/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
