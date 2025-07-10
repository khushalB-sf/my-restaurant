import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const MenuItemPage = lazy(() => import("../pages/MenuItemPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const RootLayout = lazy(() => import("./root"));

const LazyWrapper: React.FC<{ component: React.LazyExoticComponent<any> }> = ({
  component: Component,
}) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LazyWrapper component={LoginPage} />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <LazyWrapper component={RootLayout} />,
        children: [
          { index: true, element: <LazyWrapper component={DashboardPage} /> },

          {
            path: "menu",
            element: <LazyWrapper component={RootLayout} />,
            children: [
              { index: true, element: <LazyWrapper component={MenuPage} /> },
              {
                path: ":id",
                element: <LazyWrapper component={MenuItemPage} />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <LazyWrapper component={NotFoundPage} />,
  },
]);

export const publicRoutes = [
  {
    link: "/login",
    element: <LazyWrapper component={LoginPage} />,
  },
  {
    link: "*",
    element: <LazyWrapper component={NotFoundPage} />,
  },
];

export const privateRoutes = [
  {
    link: "/",
    element: <LazyWrapper component={RootLayout} />,
    children: [
      {
        link: "menu",
        element: <LazyWrapper component={MenuPage} />,
      },
      {
        link: "menu/:id",
        element: <LazyWrapper component={MenuItemPage} />,
      },
      {
        link: "",
        element: <LazyWrapper component={DashboardPage} />,
      },
    ],
  },
];
