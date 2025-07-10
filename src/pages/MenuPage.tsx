// src/pages/MenuPage.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const MenuPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Menu Management</h1>
      <Outlet />
    </div>
  );
};

export default MenuPage;
