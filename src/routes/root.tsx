import { Outlet } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";

const RootLayout = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default RootLayout;
