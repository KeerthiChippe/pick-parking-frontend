import { useState } from "react";
import "./App.css";
import Login from "./Cotainer/Pages/UserAuth/SiginIn";
import SideBar from "./Cotainer/Layout/Layout";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider>
      <SideBar />
    </ConfigProvider>
  );
}

export default App;
