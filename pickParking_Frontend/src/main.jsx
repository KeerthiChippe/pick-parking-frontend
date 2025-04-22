// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import Login from "./Cotainer/Pages/UserAuth/SiginIn";
// import App from "./App";
// import SideBar from "./Cotainer/Layout/Layout";
// import Store from "./Cotainer/Store";
// const mainRoutes = [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/singin",
//         element: <Login />,
//       },
//     ],
//   },
// ];
// const FinalRoutes = [...mainRoutes];
// const router = createBrowserRouter(FinalRoutes);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={Store}>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </Provider>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Cotainer/Store";
import Login from "./Cotainer/Pages/UserAuth/SiginIn";
import LayoutBar from "./Cotainer/Layout/Layout";
import MapComponent from "./Cotainer/Pages/Map/Map";
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
        path: "agentReportDetails/:id",
        element: <Login />,
      },
      {
        path: "callquality",
        element: <Login />,
      },
      {
        path: "integration",
        element: <Login />,
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
