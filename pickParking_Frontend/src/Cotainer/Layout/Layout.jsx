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
import {
  Button,
  Layout,
  Menu,
  Spin,
  Badge,
  notification,
  Space,
  Image,
  Flex,
} from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageVisibility from "react-page-visibility";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../../../public/p.png";
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
const StyledMenu = styled(Menu)`
  background: #001529;
  color: rgba(255, 255, 255, 0.85);
  border: none;

  .ant-menu-item,
  .ant-menu-submenu-title {
    color: rgba(255, 255, 255, 0.85);
    &:hover {
      background: #003a8c !important;
      color: #fff !important;
    }
  }

  .ant-menu-item-selected {
    background: #003a8c !important;
    color: #fff !important;
  }

  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background: #003a8c !important;
    color: #fff !important;
  }

  .ant-menu-sub {
    background: #001529 !important;
  }
`;

const SideBar = () => {
  const [activeKey, setActiveKey] = useState("");
  const [selectedDashboard, setSelectedDashboard] = useState(
    () => localStorage.getItem("selectedDashboard") || "telephony"
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("role");

  const items = [
    {
      icon: AreaChartOutlined,
      label: "Statistics",
      dashboard: "telephony",
      roles: ["admin", "agent", "team_lead"],
      subItems: [
        {
          icon: <HistoryOutlined />,
          label: "Call History",
          route: "/mapComponent",
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
    <Layout>
      <Header
        style={{
          position: "sticky",
          background: "#001529",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => {
            navigate("/mapComponent");
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "80px", marginTop: "30px" }}
          />
        </div>
        <Flex>
          <StyledMenu
            mode="horizontal"
            selectedKeys={[activeKey]}
            style={{ justifyContent: "center", border: "none" }}
          >
            {items.map((item) =>
              item.subItems ? (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Menu.Item
                      key={`${item.key}-${subIndex}`}
                      icon={subItem.icon}
                      onClick={() => handleMenuClick(subItem.route)}
                    >
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  onClick={() => handleMenuClick(item.route)}
                >
                  {item.label}
                </Menu.Item>
              )
            )}
          </StyledMenu>
        </Flex>
        <Space>
          <StyledButton
            onClick={() => {
              navigate("/siginin");
            }}
          >
            Sign In
          </StyledButton>
          <StyledButton
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </StyledButton>
        </Space>
      </Header>
      <Content
        style={{
          height: "85vh",
          maxHeight: `100vh`,
          background: "#f0f2f5",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default SideBar;
