import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import Navbar from "./components/Navbar/Navbar";
import LoginView from "./views/home/components/Ambassadors/login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginView /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
