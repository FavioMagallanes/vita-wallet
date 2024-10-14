import { LoginPage } from "@/modules/auth/page/login-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <DashboardPage />,
  //     },
  //     {
  //       path: "exchange",
  //       element: <ExchangePage />,
  //     },
  //     {
  //       path: "transactions-summary",
  //       element: <TransactionsSummaryPage />,
  //     },
  //   ],
  // },
]);
