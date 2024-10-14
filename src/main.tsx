import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { SidebarProvider } from "./context/sidebar-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </StrictMode>,
);
