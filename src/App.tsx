import React, { Suspense } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'
import { router } from './routes/routes'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
