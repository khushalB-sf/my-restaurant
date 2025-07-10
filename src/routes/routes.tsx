import { createBrowserRouter } from 'react-router-dom'
import React, { LazyExoticComponent, Suspense, lazy } from 'react'
import ProtectedRoute from './protectedRoute'
import PublicRoute from './publicRoute'

const LoginPage = lazy(() => import('../pages/LoginPage'))
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const MenuPage = lazy(() => import('../pages/MenuPage'))
const MenuItemPage = lazy(() => import('../pages/MenuItemPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const RootLayout = lazy(() => import('./root'))

type LazyWrapperProps<T extends Record<string, unknown> = Record<string, never>> = Readonly<{
  component: LazyExoticComponent<React.ComponentType<T>>
  props?: Readonly<T>
}>

function LazyWrapper<T extends Record<string, unknown>>({
  component: Component,
  props
}: LazyWrapperProps<T>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...(props as T)} />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LazyWrapper component={LoginPage} />
      </PublicRoute>
    )
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <LazyWrapper component={RootLayout} />,
        children: [
          { index: true, element: <LazyWrapper component={DashboardPage} /> },
          {
            path: 'menu',
            element: <LazyWrapper component={MenuPage} />,
            children: [
              {
                path: ':id',
                element: <LazyWrapper component={MenuItemPage} />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <LazyWrapper component={NotFoundPage} />
  }
])
