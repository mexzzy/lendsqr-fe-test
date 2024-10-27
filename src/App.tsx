import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import "./App.scss";

const router = createBrowserRouter(appRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
