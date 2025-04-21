import React from "react";
import { Form, Input, Button, Card } from "antd";
import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa6";
import "./Login.css"; // Add this for custom CSS animations
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { FaTruckMonster } from "react-icons/fa";
const Login = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div
      className="parking-background"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1a1a1a",
      }}
    >
      <div>
        <div className="parking-slot slot1"></div>
        <div className="parking-slot slot2"></div>
        <div className="parking-slot slot3"></div>
        <motion.div
          className="vehicle car1"
          animate={{ x: ["-999%", "999%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <FaCarSide style={{ fontSize: "60px", color: "red" }} />
        </motion.div>
        <motion.div
          className="vehicle car2"
          animate={{ x: ["999%", "-999%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <FaTruckMonster style={{ fontSize: "80px", color: "green" }} />
        </motion.div>
        <Card
          style={{
            width: 400,
            borderRadius: 10,
            background: "rgba(45, 45, 45, 0.9)",
            color: "#fff",
            position: "relative",
            zIndex: 1,
            padding: "20px",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textAlign: "center",
              color: "transparent",
              background: "linear-gradient(90deg, #00c4cc, #ffffff, #00c4cc)",
              WebkitBackgroundClip: "text",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Welcome back to PickParking!
          </motion.h2>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label={<span style={{ color: "#fff" }}>Email</span>}
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                placeholder="Enter your email"
                style={{
                  background: "#3a3a3a",
                  color: "#fff",
                  borderColor: "#444",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: "#fff" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                style={{
                  background: "#3a3a3a",
                  color: "#fff",
                  borderColor: "#444",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#00c4cc",
                  borderColor: "#00c4cc",
                  width: "100%",
                  borderRadius: "4px",
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
