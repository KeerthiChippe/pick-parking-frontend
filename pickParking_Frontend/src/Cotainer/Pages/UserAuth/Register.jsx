import React from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Row,
  Col,
  Card,
  Typography,
  Space,
  Flex,
} from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const RegisterComponent = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    // <div
    //   style={{
    //     background:
    //       "linear-gradient(90deg,rgb(51, 52, 52),rgb(50, 71, 79),rgb(36, 77, 110))",
    //     minHeight: "90vh",
    //   }}
    //   className={"bg-red-800"}
    // >
    //   <Row>
    //     <Col span={12}>
    //       <div
    //         style={{
    //           width: "100%",
    //           maxWidth: "700px",
    //           opacity: 1,
    //           transform: "translateY(0px)",
    //           transition: "opacity 0.8s, transform 0.8s",
    //         }}
    //       >
    //         <Card
    //           style={{
    //             borderRadius: "12px",
    //             boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
    //             // padding: "24px",
    //             maxWidth: 600,
    //             margin: "auto",
    //             marginTop: 40,
    //           }}
    //         >
    //           <Flex justify="center">
    //             <Space direction="vertical" align="center">
    //               <Title
    //                 level={2}
    //                 style={{
    //                   margin: 0,
    //                   background: "linear-gradient(90deg, #ff4d4f, #ffec3d)",
    //                   WebkitBackgroundClip: "text",
    //                   WebkitTextFillColor: "transparent",
    //                   fontWeight: "bold",
    //                 }}
    //               >
    //                 🚙 Create an Account
    //               </Title>
    //             </Space>
    //           </Flex>

    //           <Form
    //             form={form}
    //             layout="vertical"
    //             onFinish={onFinish}
    //             autoComplete="off"
    //             style={{ marginTop: 16 }}
    //           >
    //             <Form.Item
    //               label="📧 Email"
    //               name="email"
    //               rules={[
    //                 { required: true, message: "Email required" },
    //                 { type: "email", message: "Invalid email" },
    //               ]}
    //               style={{ marginBottom: 12 }}
    //             >
    //               <Input placeholder="you@example.com" />
    //             </Form.Item>

    //             <Form.Item
    //               label="👤 Username"
    //               name="username"
    //               rules={[{ required: true, message: "Username required" }]}
    //               style={{ marginBottom: 12 }}
    //             >
    //               <Input placeholder="Choose a username" />
    //             </Form.Item>

    //             <Form.Item
    //               label="🔒 Password"
    //               name="password"
    //               rules={[{ required: true, message: "Password required" }]}
    //               style={{ marginBottom: 12 }}
    //             >
    //               <Input.Password placeholder="Create a password" />
    //             </Form.Item>

    //             <Form.Item
    //               label="🧾 Account Type"
    //               name="accountType"
    //               rules={[{ required: true, message: "Select account type" }]}
    //               style={{ marginBottom: 12 }}
    //             >
    //               <Radio.Group>
    //                 <Radio value="looking">🅿️ Looking for Parking</Radio>
    //                 <Radio value="offering">🏠 Have Parking Space</Radio>
    //               </Radio.Group>
    //             </Form.Item>

    //             <Form.Item
    //               name="agreement"
    //               valuePropName="checked"
    //               rules={[
    //                 {
    //                   validator: (_, value) =>
    //                     value
    //                       ? Promise.resolve()
    //                       : Promise.reject("Must agree to terms"),
    //                 },
    //               ]}
    //               style={{ marginBottom: 12 }}
    //             >
    //               <Checkbox>
    //                 ✅ I agree to the{" "}
    //                 <a href="#" className="text-blue-500 hover:underline">
    //                   Terms & Privacy
    //                 </a>
    //               </Checkbox>
    //             </Form.Item>

    //             <Form.Item style={{ marginBottom: 16 }}>
    //               <Button
    //                 type="primary"
    //                 htmlType="submit"
    //                 block
    //                 style={{
    //                   backgroundColor: "#1890ff",
    //                   borderColor: "#1890ff",
    //                   borderRadius: "50px",
    //                   fontWeight: "bold",
    //                   height: 40,
    //                 }}
    //               >
    //                 🚀 Create Account
    //               </Button>
    //             </Form.Item>

    //             <Paragraph
    //               style={{ textAlign: "center", fontSize: 12, margin: 0 }}
    //             >
    //               Already have an account?{" "}
    //               <a href="#" className="text-blue-500 hover:underline">
    //                 Login
    //               </a>
    //             </Paragraph>
    //           </Form>
    //         </Card>
    //       </div>
    //     </Col>
    //     <Col
    //       span={12}
    //       style={{
    //         paddingLeft: "60px",
    //         display: "flex",
    //         alignItems: "center",
    //       }}
    //     >
    //       <div>
    //         <Title
    //           level={1}
    //           style={{
    //             margin: 0,
    //             background: "linear-gradient(90deg, #40a9ff, #ffffff, #40a9ff)",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           Welcome to ParkSpot
    //         </Title>
    //         <Paragraph
    //           style={{ color: "#fff", fontSize: 18, marginBottom: 32 }}
    //         >
    //           Join our community of drivers and parking space owners making
    //           parking simpler and more profitable.
    //         </Paragraph>

    //         <Title
    //           level={3}
    //           style={{
    //             margin: 10,
    //             background: "linear-gradient(90deg, #40a9ff, #ffffff, #40a9ff)",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           With ParkSpot you can:
    //         </Title>
    //         <Space direction="vertical" size="middle">
    //           <div className="" style={{ color: "#fff" }}>
    //             <CheckCircleOutlined
    //               style={{ color: "#52c41a", marginRight: 8 }}
    //             />
    //             Find and book parking spots in advance
    //           </div>
    //           <div className="info-item" style={{ color: "#fff" }}>
    //             <CheckCircleOutlined
    //               style={{ color: "#52c41a", marginRight: 8 }}
    //             />
    //             List your unused parking spaces to earn money
    //           </div>
    //           <div className="info-item" style={{ color: "#fff" }}>
    //             <CheckCircleOutlined
    //               style={{ color: "#52c41a", marginRight: 8 }}
    //             />
    //             Save time and avoid parking hassles
    //           </div>
    //           <div className="info-item" style={{ color: "#fff" }}>
    //             <CheckCircleOutlined
    //               style={{ color: "#52c41a", marginRight: 8 }}
    //             />
    //             Manage bookings and payments securely
    //           </div>
    //         </Space>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
    <div className="bg-red-500 text-white p-4">Hello Tailwind</div>
  );
};

export default RegisterComponent;
