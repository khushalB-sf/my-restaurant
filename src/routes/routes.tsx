import { createBrowserRouter } from 'react-router-dom'
import React, { lazy } from 'react'
import ProtectedRoute from './protectedRoute'
import PublicRoute from './publicRoute'
import LazyWrapper from '@/components/atoms/lazy'

const LoginPage = lazy(() => import('../pages/LoginPage'))
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const MenuPage = lazy(() => import('../pages/MenuPage'))
const MenuItemPage = lazy(() => import('../pages/MenuItemPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const RootLayout = lazy(() => import('./root'))

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
            children: [
              {
                index: true,
                element: <LazyWrapper component={MenuPage} />
              },
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
