import { MainLayout } from "@/layout/main-layout";
import { LoginPage } from "@/modules/auth/page/login-page";
import { Dashboard } from "@/modules/dashboard/page/dashboard";
import { Exchange } from "@/modules/exchange/pages/exchange";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "exchange",
        element: <Exchange />,
      },
    ],
  },
]);
