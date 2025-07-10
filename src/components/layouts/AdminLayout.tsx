// src/layouts/AdminLayout.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 font-bold text-xl border-b">Restaurant Admin</div>
        <nav className="mt-4 space-y-2 px-4">
          <Link
            to="/"
            className={`block px-4 py-2 rounded hover:bg-gray-200 ${
              isActive("/dashboard") ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/menu"
            className={`block px-4 py-2 rounded hover:bg-gray-200 ${
              isActive("/menu") ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            Menu Management
          </Link>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
