import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import LoginView from "./views/home/components/Ambassadors/login";
import SignupView from "./views/home/components/Ambassadors/signup";
import MainLayout from "./layouts/MainLayout";
import EventDetailsView from "./views/EventDetailsView";
import NotFound from "./views/NotFound";
import programType from "./programType";
import AmbassadorDashboard from "./views/AmbassadorDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "events/:id", element: <EventDetailsView type={programType.EVENT} /> },
      {
        path: "workshops/:id",
        element: <EventDetailsView type={programType.WORKSHOP} />,
      },
      { path: "games/:id", element: <EventDetailsView type={programType.GAME} /> },
      { path: "login", element: <LoginView /> },
      { path: "signup", element: <SignupView /> },
      { path: "dashboard", element: <AmbassadorDashboard /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
