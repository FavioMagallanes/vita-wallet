import { MainLayout } from "@/layout/main-layout";
import { LoginPage } from "@/modules/auth/page/login-page";
import { Dashboard } from "@/modules/dashboard/page/dashboard";
import { Exchange } from "@/modules/exchange/pages/exchange";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./protected-route";

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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "exchange",
        element: (
          <PrivateRoute>
            <Exchange />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
