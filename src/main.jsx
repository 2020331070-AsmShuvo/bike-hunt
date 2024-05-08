import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home/Home.jsx";
import Error from "./Pages/Error/Error.jsx";
import Post from "./Pages/Post/Post.jsx";
import Register from "./Pages/Register/Register.jsx";
import AuthProvider from "./Providers/AuthProviders.jsx";
import Login from "./Pages/Login/Login.jsx";
import Bikes from "./Pages/Bikes/Bikes.jsx";
import BookBike from "./Pages/BookBike/BookBike.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
      },
      {
        path: "/bikes/:id",
        element: (
          <PrivateRoute>
            <BookBike />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bikes/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
