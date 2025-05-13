import SideBar from "./Cotainer/Layout/Layout";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider>
      <SideBar />
    </ConfigProvider>
  )
}
export default App;
