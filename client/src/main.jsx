import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from './components/Body';
import About from './components/About';
import Header from './components/Header';
import Error from './components/Error';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Headnavs from './components/Headnavs';
import Login from './components/Login';
import Signup from './components/Signup';
import AdmissionForm from './components/AdmissionForm';
import DashboardDesc from './components/DashboardDesc';
import StudentDetails from './components/StudentDetails';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Headnavs />
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
        element: <Login />
      },
      {
        path: "/admisionform",
        element: <AdmissionForm />
      },
      {
        path: "/students/details",
        element: <StudentDetails />
      }
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
