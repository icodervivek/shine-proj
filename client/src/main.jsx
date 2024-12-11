import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Headnavs from "./components/Headnavs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdmissionForm from "./components/AdmissionForm";
import StudentDetails from "./components/StudentDetails";
import MarksheetForm from "./components/MarksheetForm";

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      {location.pathname !== "/students/marksheet" && <Headnavs />}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admisionform",
        element: <AdmissionForm />,
      },
      {
        path: "/students/details",
        element: <StudentDetails />,
      },
      {
        path: "/students/marksheet",
        element: <MarksheetForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
