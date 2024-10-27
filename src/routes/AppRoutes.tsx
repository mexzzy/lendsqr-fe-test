import { RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const appRoutes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
  { path: "*", element: <Login /> },
];

export default appRoutes;
