import AddService from "../../components/pages/AddService/AddService";
import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import LogIn from "../../components/pages/LogIn/LogIn";
import MyReviews from "../../components/pages/MyReviews/MyReviews";
import Register from "../../components/pages/Register/Register";
import ServiceDetails from "../../components/pages/Services/ServiceDetails";
import Services from "../../components/pages/Services/Services";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        //http://localhost:5000
        //http://localhost:5000/
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/hservices"),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
