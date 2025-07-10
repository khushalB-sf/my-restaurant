import React, { Suspense } from "react";

import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import Navbar from "./components/molecules/navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
