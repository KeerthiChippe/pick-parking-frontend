import { useState } from "react";
import "./App.css";
import Login from "./Cotainer/Pages/UserAuth/SiginIn";
import Layout from "./Cotainer/Layout/Layout";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider>
      <Layout />
    </ConfigProvider>
  );
}

export default App;
