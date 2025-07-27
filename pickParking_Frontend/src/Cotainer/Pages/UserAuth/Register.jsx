import React from 'react';
import { Form, Input, Button, Radio, Checkbox, Typography, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { startRegUser } from '../../../Actions/Auth/Auth';
import { useDispatch } from "react-redux";

const { Title, Paragraph } = Typography;
const url = import.meta.env.VITE_PARKING_URL;

const RegisterComponent = () => {
  console.log(url, 'url');
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(startRegUser(values)).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Form Section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="flex justify-center mb-6">
              <Title level={2} className="!text-2xl sm:!text-3xl !font-bold !text-transparent !bg-clip-text !bg-gradient-to-r !from-red-500 !to-yellow-500">
                🚙 Create an Account
              </Title>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              className="space-y-4"
            >
              <Form.Item
                label={<span className="text-gray-700 font-medium">📧 Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  className="rounded-lg border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                  placeholder="you@example.com"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700 font-medium">👤 Username</span>}
                name="name"
                rules={[{ required: true, message: "Username is required" }]}
              >
                <Input
                  className="rounded-lg border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                  placeholder="Choose a username"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700 font-medium">🔒 Password</span>}
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input.Password
                  className="rounded-lg border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                  placeholder="Create a password"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700 font-medium">📱 Phone</span>}
                name="phone"
                rules={[{ required: true, message: "Phone number is required" }]}
              >
                <Input
                  maxLength={10}
                  className="rounded-lg border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                  placeholder="Enter phone number"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700 font-medium">🧾 Account Type</span>}
                name="role"
                rules={[{ required: true, message: "Please select an account type" }]}
              >
                <Radio.Group className="flex flex-col sm:flex-row gap-4">
                  <Radio value="customer" className="text-gray-700">🅿️ Looking for Parking</Radio>
                  <Radio value="owner" className="text-gray-700">🏠 Have Parking Space</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject("You must agree to the terms"),
                  },
                ]}
              >
                <Checkbox className="text-gray-700">
                  ✅ I agree to the{' '}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms & Privacy
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="!bg-blue-600 hover:!bg-blue-700 !border-none !rounded-full !h-10 !font-semibold !text-white transition-colors"
                >
                  🚀 Create Account
                </Button>
              </Form.Item>

              <Paragraph className="text-center text-gray-600 text-sm">
                Already have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Login
                </a>
              </Paragraph>
            </Form>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="max-w-md text-white space-y-6 animate-fade-in">
            <Title
              level={1}
              className="!text-3xl sm:!text-4xl lg:!text-5xl !font-bold !text-transparent !bg-clip-text !bg-gradient-to-r !from-blue-400 !to-white"
            >
              Welcome to ParkSpot
            </Title>
            <Paragraph className="text-base sm:text-lg text-white/90">
              Join our community of drivers and parking space owners making parking simpler and more profitable.
            </Paragraph>

            <Title
              level={3}
              className="!text-xl sm:!text-2xl !font-semibold !text-transparent !bg-clip-text !bg-gradient-to-r !from-blue-400 !to-white"
            >
              With ParkSpot you can:
            </Title>
            <Space direction="vertical" size="middle" className="mt-4">
              <div className="flex items-center text-white/90 text-sm sm:text-base">
                <CheckCircleOutlined className="text-green-500 mr-2" />
                Find and book parking spots in advance
              </div>
              <div className="flex items-center text-white/90 text-sm sm:text-base">
                <CheckCircleOutlined className="text-green-500 mr-2" />
                List your unused parking spaces to earn money
              </div>
              <div className="flex items-center text-white/90 text-sm sm:text-base">
                <CheckCircleOutlined className="text-green-500 mr-2" />
                Save time and avoid parking hassles
              </div>
              <div className="flex items-center text-white/90 text-sm sm:text-base">
                <CheckCircleOutlined className="text-green-500 mr-2" />
                Manage bookings and payments securely
              </div>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;