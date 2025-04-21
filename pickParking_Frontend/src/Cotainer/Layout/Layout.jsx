import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  MinusCircleOutlined,
  SubnodeOutlined,
  PhoneOutlined,
  ContainerOutlined,
  AliyunOutlined,
  MailOutlined,
  AreaChartOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  WhatsAppOutlined,
  HistoryOutlined,
  SnippetsFilled,
  PhoneFilled,
  ApiOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Spin, Badge, notification, Space } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageVisibility from "react-page-visibility";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../../../public/parkinglogo.png";

const { Header, Content } = Layout;

const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #6a5acd, #7b68ee);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: linear-gradient(90deg, #7b68ee, #6a5acd);
  }
`;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState("");
  const [selectedDashboard, setSelectedDashboard] = useState(
    () => localStorage.getItem("selectedDashboard") || "telephony"
  );
  const [isTabActive, setIsTabActive] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutLoad = useSelector(
    (state) => state.AuthSlice?.logOutLoading || false
  );

  const userRole = localStorage.getItem("role");

  const items = [
    {
      icon: AppstoreOutlined,
      label: "Dashboard",
      route: "/dashboard",
      dashboard: "telephony",
      roles: ["admin"],
    },
    {
      icon: AppstoreOutlined,
      label: "Dashboard",
      route: "/dashboard",
      dashboard: "College",
      roles: ["admin"],
    },
    {
      icon: UserOutlined,
      label: "Client Data Form",
      route: "/agent",
      roles: ["agent", "team_lead"],
    },
    {
      icon: ContainerOutlined,
      label: "Manage Leads",
      route: "/leads",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
    },
    {
      icon: AliyunOutlined,
      label: "Leads Funnel",
      route: "/LeadsFunnel",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
    },
    {
      icon: MinusCircleOutlined,
      label: "Missed Call",
      route: "/missed_Call",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
      count: parseInt(localStorage.getItem("missedCall"), 10) || 0,
      badge: true,
    },
    {
      icon: SubnodeOutlined,
      label: "Followup Report",
      route: "/followup_report",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
      count: parseInt(localStorage.getItem("followUp"), 10) || 0,
      badge: true,
    },
    {
      icon: MailOutlined,
      label: "Voice Mail",
      route: "/voice_mail",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
      count: 0,
      badge: true,
    },
    {
      icon: AreaChartOutlined,
      label: "Statistics",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
      subItems: [
        {
          icon: <HistoryOutlined />,
          label: "Call History",
          route: "/callHistory",
        },
        { icon: <ArrowDownOutlined />, label: "Inbound", route: "/inbound" },
        { icon: <ArrowUpOutlined />, label: "Outbound", route: "/outbound" },
        {
          icon: <SnippetsFilled />,
          label: "Agent TimeDetails",
          route: "/agentTimeDetails",
        },
        {
          icon: <PhoneFilled />,
          label: "CallQuality Dashboard",
          route: "/callquality",
        },
        { icon: <MailOutlined />, label: "Email", route: "/email" },
        {
          icon: <WhatsAppOutlined />,
          label: "Whatsapp",
          route: "/whatsapp",
          count: localStorage.getItem("whatsAppCount"),
        },
      ],
    },
    {
      icon: ApiOutlined,
      label: "Integration",
      route: "/integration",
      dashboard: "telephony",
      roles: ["admin"],
    },
  ]
    .filter(
      (item) =>
        (item.dashboard === selectedDashboard &&
          item.roles.includes(userRole)) ||
        (!item.dashboard && item.roles.includes(userRole)) ||
        (item.subItems &&
          item.dashboard === selectedDashboard &&
          item.subItems.some(
            (sub) => !sub.roles || sub.roles.includes(userRole)
          ))
    )
    .map((item, index) => ({
      key: String(index + 1),
      icon: React.createElement(item.icon),
      label: item.label,
      route: item.route,
      subItems: item.subItems || null,
      count: item?.count || 0,
      badge: item?.badge,
    }));

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = items.find((item) => {
      if (item.subItems) {
        return item.subItems.some((subItem) => subItem.route === currentPath);
      }
      return item.route === currentPath;
    });

    if (activeItem) {
      if (activeItem.subItems) {
        const activeSubItem = activeItem.subItems.find(
          (subItem) => subItem.route === currentPath
        );
        setActiveKey(
          activeSubItem
            ? `${activeItem.key}-${activeSubItem.route}`
            : activeItem.key
        );
      } else {
        setActiveKey(activeItem.key);
      }
    }
  }, [location.pathname, items]);

  const handleMenuClick = (route) => {
    navigate(route);
  };
  return (
    // <Spin spinning={logoutLoad} tip="Logging out, please wait...">
    //   <PageVisibility onChange={(isVisible) => setIsTabActive(isVisible)}>
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#001529",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px", marginTop: "15px" }}
          />
        </div>
        <Space>
          <StyledButton>Sigin In</StyledButton>/<StyledButton>Reg</StyledButton>
        </Space>
      </Header>

      <Header
        style={{
          position: "sticky",
          top: 39,
          zIndex: 40,
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
          borderTop: "1px solid lightgray",
        }}
      >
        <Menu
          mode="horizontal"
          selectedKeys={[activeKey]}
          style={{ flexGrow: 1, justifyContent: "center" }}
        >
          {items.map((item) =>
            item.subItems ? (
              <Menu.SubMenu key={item.key} title={item.label}>
                {item.subItems.map((subItem, subIndex) => (
                  <Menu.Item
                    key={`${item.key}-${subIndex}`}
                    onClick={() => handleMenuClick(subItem.route)}
                  >
                    {subItem.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                onClick={() => handleMenuClick(item.route)}
              >
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </Header>
      <Content
        style={{
          height: "100vh",
          maxHeight: `calc(100vh - ${userRole === "agent" ? 150 : 150}px)`,
          background: "#f0f2f5",
          // maxHeight:`calc(100vh - ${userRole === "agent" ? 120 : 80}px)`,
          overflowY: "auto",
        }}
      >
        <div style={{ padding: "8px" }}>
          <Outlet />
        </div>
      </Content>
    </Layout>
    /* </PageVisibility>
    </Spin> */
  );
};

export default SideBar;
