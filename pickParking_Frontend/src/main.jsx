import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Cotainer/Store";
import Login from "./Cotainer/Pages/UserAuth/SiginIn";
import LayoutBar from "./Cotainer/Layout/Layout";
import MapComponent from "./Cotainer/Pages/Map/Map";
import Register from "./Cotainer/Pages/UserAuth/Register";
import "leaflet-geosearch/dist/geosearch.css";
import UserDashboard from "./Cotainer/Pages/User/User";
import "./index.css";
const mainRoutes = [
  {
    path: "/",
    element: <LayoutBar />,
    children: [
      {
        path: "siginin",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "agentReportDetails/:id",
        element: <Login />,
      },
      {
        path: "callquality",
        element: <Login />,
      },
      {
        path: "userDashboard",
        element: <UserDashboard />,
      },
      {
        path: "mapComponent",
        element: <MapComponent />,
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
