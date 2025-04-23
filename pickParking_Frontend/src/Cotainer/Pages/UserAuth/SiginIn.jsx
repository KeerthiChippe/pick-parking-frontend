import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import {
  CarOutlined,
  LoadingOutlined,
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { FaCarSide } from "react-icons/fa";

const { Title, Text, Link } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, occupied: false },
    { id: 2, occupied: true },
    { id: 3, occupied: false },
    { id: 4, occupied: false },
    { id: 5, occupied: false },
    { id: 6, occupied: false },
  ]);
  const [carPosition, setCarPosition] = useState(-100);
  const [truckPosition, setTruckPosition] = useState(100);
  const [signalLight, setSignalLight] = useState("red");

  // Update parking spaces randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setParkingSpaces((spaces) =>
        spaces.map((space) => ({
          ...space,
          occupied: Math.random() > 0.6 ? !space.occupied : space.occupied,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate vehicles
  useEffect(() => {
    const carInterval = setInterval(() => {
      setCarPosition((prev) => {
        if (prev > 100) return -100;
        return prev + 1;
      });
    }, 50);

    const truckInterval = setInterval(() => {
      setTruckPosition((prev) => {
        if (prev < -100) return 100;
        return prev - 1;
      });
    }, 50);

    return () => {
      clearInterval(carInterval);
      clearInterval(truckInterval);
    };
  }, []);

  // Traffic signal lights
  useEffect(() => {
    const signalInterval = setInterval(() => {
      setSignalLight((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        return "red";
      });
    }, 3000);
    return () => clearInterval(signalInterval);
  }, []);
  const onFinish = (values) => {
    setLoading(true);
    console.log("Login values:", values);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parking background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* Enhanced Road */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "80px",
            backgroundColor: "#333333",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
          }}
        />

        {/* White dashed center line */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "4px",
            background:
              "repeating-linear-gradient(90deg, #ffffff, #ffffff 30px, transparent 30px, transparent 60px)",
            top: "50%",
            transform: "translateY(-50%)",
            animation: "moveRoadStripe 2s linear infinite",
          }}
        />

        {/* Red side lines */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#ff4d4f",
            top: "calc(50% - 40px)",
            boxShadow: "0 0 5px rgba(255, 77, 79, 0.8)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#ff4d4f",
            top: "calc(50% + 40px)",
            boxShadow: "0 0 5px rgba(255, 77, 79, 0.8)",
          }}
        />

        {/* Traffic signals */}
        <div
          style={{
            position: "absolute",
            width: "15px",
            height: "40px",
            backgroundColor: "#222",
            top: "calc(50% - 60px)",
            left: "20%",
            borderRadius: "3px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "red" ? "#ff4d4f" : "#550000",
              margin: "3px auto",
              boxShadow: signalLight === "red" ? "0 0 8px #ff4d4f" : "none",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "yellow" ? "#faad14" : "#553300",
              margin: "3px auto",
              boxShadow: signalLight === "yellow" ? "0 0 8px #faad14" : "none",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "green" ? "#52c41a" : "#005500",
              margin: "3px auto",
              boxShadow: signalLight === "green" ? "0 0 8px #52c41a" : "none",
            }}
          />
        </div>

        {/* <div
          style={{
            position: "absolute",
            width: "15px",
            height: "40px",
            backgroundColor: "#222",
            top: "calc(50% - 60px)",
            right: "20%",
            borderRadius: "3px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "red" ? "#ff4d4f" : "#550000",
              margin: "3px auto",
              boxShadow: signalLight === "red" ? "0 0 8px #ff4d4f" : "none",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "yellow" ? "#faad14" : "#553300",
              margin: "3px auto",
              boxShadow: signalLight === "yellow" ? "0 0 8px #faad14" : "none",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: signalLight === "green" ? "#52c41a" : "#005500",
              margin: "3px auto",
              boxShadow: signalLight === "green" ? "0 0 8px #52c41a" : "none",
            }}
          />
        </div> */}

        {/* Parking slots */}
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "50px",
            border: "2px dashed rgba(255, 255, 255, 0.3)",
            background: "rgba(255, 255, 255, 0.1)",
            top: "20%",
            left: "10%",
            transform: "rotate(-10deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "50px",
            border: "2px dashed rgba(255, 255, 255, 0.3)",
            background: "rgba(255, 255, 255, 0.1)",
            top: "60%",
            left: "30%",
            transform: "rotate(5deg)",
          }}
        />

        {parkingSpaces.map((space, index) => (
          <div
            key={space.id}
            style={{
              position: "absolute",
              top: `${5 + Math.floor(index / 3) * 10}%`,
              right: `${5 + (index % 3) * 10}%`,
              width: "80px",
              height: "40px",
              border: "2px dashed",
              borderColor: space.occupied ? "#ff4d4f" : "#52c41a",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
              boxShadow: space.occupied
                ? "0 0 8px rgba(255, 77, 79, 0.5)"
                : "0 0 8px rgba(82, 196, 26, 0.5)",
              transition: "all 0.5s ease",
            }}
          >
            {space.occupied && (
              <CarOutlined style={{ fontSize: "24px", color: "#fff" }} />
            )}
          </div>
        ))}

        {/* Moving vehicles */}
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 20px)",
            left: `${carPosition}%`,
            transition: "left 0.05s linear",
            zIndex: 3,
          }}
        >
          <FaCarSide style={{ fontSize: "40px", color: "#ff4d4f" }} />
        </div>
      </div>
      {/* Login card */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          zIndex: 10,
          opacity: 1,
          transform: "translateY(0px)",
          transition: "opacity 0.8s, transform 0.8s",
        }}
      >
        <Card
          style={{
            backgroundColor: "rgba(45, 45, 45, 0.9)",
            borderRadius: "8px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <Title
              level={2}
              style={{
                margin: 0,
                background: "linear-gradient(90deg, #40a9ff, #ffffff, #40a9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Welcome to PickParking
            </Title>
            <Text style={{ color: "#d9d9d9" }}>
              Find your spot. Park with ease.
            </Text>
          </div>

          <Form
            form={form}
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input
                prefix={
                  <MailOutlined style={{ color: "rgba(255,255,255,0.5)" }} />
                }
                placeholder="Email"
                size="large"
                style={{
                  backgroundColor: "#3a3a3a",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input.Password
                prefix={
                  <LockOutlined style={{ color: "rgba(255,255,255,0.5)" }} />
                }
                placeholder="Password"
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                style={{
                  backgroundColor: "#3a3a3a",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              />
            </Form.Item>

            <Form.Item style={{ marginBottom: "16px" }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{
                  height: "46px",
                  background: loading ? "#1890ff" : "#40a9ff",
                  borderColor: "#40a9ff",
                  transition: "background 0.3s",
                }}
                icon={loading ? <LoadingOutlined /> : <CarOutlined />}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.98)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
              >
                {loading ? "Parking In..." : "Log In"}
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              <Link style={{ color: "#40a9ff" }}>Forgot password?</Link>
              <div style={{ marginTop: "12px", color: "#d9d9d9" }}>
                Don't have an account?{" "}
                <Link style={{ color: "#40a9ff" }}>Sign up</Link>
              </div>
            </div>
          </Form>
        </Card>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes moveRoadStripe {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: -60px 0;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default Login;
