import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
