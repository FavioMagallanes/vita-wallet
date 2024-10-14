import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/sidebar-context.tsx";
import { AxiosInterceptorInitializer } from "./config/axios/axios-interceptor-initializer.ts";
import { AuthProvider } from "./modules/auth/context/auth-context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/routes.tsx";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SidebarProvider>
          <AxiosInterceptorInitializer />
          <RouterProvider router={router} />
        </SidebarProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
