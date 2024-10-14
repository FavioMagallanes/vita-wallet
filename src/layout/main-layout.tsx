import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-auto lg:p-20">
        <Outlet />
      </div>
    </div>
  );
};
