import { useState } from "react";
import "./App.css";
import Login from "./Cotainer/Pages/UserAuth/SiginIn";
import Layout from "./Cotainer/Layout/Layout";
import MapComponent from "./Cotainer/Pages/Map/Map";
import { ConfigProvider } from "antd";
function App() {
  return (
    // <ConfigProvider>
      <MapComponent />
    // </ConfigProvider>
  );
}

export default App;
