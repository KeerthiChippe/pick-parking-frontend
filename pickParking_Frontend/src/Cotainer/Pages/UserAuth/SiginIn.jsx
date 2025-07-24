// import React, { useState, useEffect } from "react";
// import { Form, Input, Button, Card, Typography } from "antd";
// import {
//   CarOutlined,
//   LoadingOutlined,
//   MailOutlined,
//   LockOutlined,
//   EyeInvisibleOutlined,
//   EyeOutlined,
// } from "@ant-design/icons";
// import { FaCarSide } from "react-icons/fa";

// const { Title, Text, Link } = Typography;

// const Login = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [parkingSpaces, setParkingSpaces] = useState([
//     { id: 1, occupied: false },
//     { id: 2, occupied: true },
//     { id: 3, occupied: false },
//     { id: 4, occupied: false },
//     { id: 5, occupied: false },
//     { id: 6, occupied: false },
//   ]);
//   const [carPosition, setCarPosition] = useState(-100);
//   const [truckPosition, setTruckPosition] = useState(100);
//   const [signalLight, setSignalLight] = useState("red");

//   // Update parking spaces randomly
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setParkingSpaces((spaces) =>
//         spaces.map((space) => ({
//           ...space,
//           occupied: Math.random() > 0.6 ? !space.occupied : space.occupied,
//         }))
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Animate vehicles
//   useEffect(() => {
//     const carInterval = setInterval(() => {
//       setCarPosition((prev) => {
//         if (prev > 100) return -100;
//         return prev + 1;
//       });
//     }, 50);

//     const truckInterval = setInterval(() => {
//       setTruckPosition((prev) => {
//         if (prev < -100) return 100;
//         return prev - 1;
//       });
//     }, 50);

//     return () => {
//       clearInterval(carInterval);
//       clearInterval(truckInterval);
//     };
//   }, []);

//   // Traffic signal lights
//   useEffect(() => {
//     const signalInterval = setInterval(() => {
//       setSignalLight((prev) => {
//         if (prev === "red") return "green";
//         if (prev === "green") return "yellow";
//         return "red";
//       });
//     }, 3000);
//     return () => clearInterval(signalInterval);
//   }, []);
//   const onFinish = (values) => {
//     setLoading(true);
//     console.log("Login values:", values);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };
//   return (
//     <div
//       style={{
//         minHeight: "85vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#1a1a1a",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Parking background */}
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           top: 0,
//           left: 0,
//           zIndex: 0,
//           overflow: "hidden",
//         }}
//       >
//         {/* Enhanced Road */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "80px",
//             backgroundColor: "#333333",
//             top: "50%",
//             transform: "translateY(-50%)",
//             boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
//           }}
//         />

//         {/* White dashed center line */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "4px",
//             background:
//               "repeating-linear-gradient(90deg, #ffffff, #ffffff 30px, transparent 30px, transparent 60px)",
//             top: "50%",
//             transform: "translateY(-50%)",
//             animation: "moveRoadStripe 2s linear infinite",
//           }}
//         />

//         {/* Red side lines */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "3px",
//             backgroundColor: "#ff4d4f",
//             top: "calc(50% - 40px)",
//             boxShadow: "0 0 5px rgba(255, 77, 79, 0.8)",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "3px",
//             backgroundColor: "#ff4d4f",
//             top: "calc(50% + 40px)",
//             boxShadow: "0 0 5px rgba(255, 77, 79, 0.8)",
//           }}
//         />

//         {/* Traffic signals */}
//         <div
//           style={{
//             position: "absolute",
//             width: "15px",
//             height: "40px",
//             backgroundColor: "#222",
//             top: "calc(50% - 60px)",
//             left: "20%",
//             borderRadius: "3px",
//             boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "red" ? "#ff4d4f" : "#550000",
//               margin: "3px auto",
//               boxShadow: signalLight === "red" ? "0 0 8px #ff4d4f" : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "yellow" ? "#faad14" : "#553300",
//               margin: "3px auto",
//               boxShadow: signalLight === "yellow" ? "0 0 8px #faad14" : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "green" ? "#52c41a" : "#005500",
//               margin: "3px auto",
//               boxShadow: signalLight === "green" ? "0 0 8px #52c41a" : "none",
//             }}
//           />
//         </div>

//         {/* <div
//           style={{
//             position: "absolute",
//             width: "15px",
//             height: "40px",
//             backgroundColor: "#222",
//             top: "calc(50% - 60px)",
//             right: "20%",
//             borderRadius: "3px",
//             boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "red" ? "#ff4d4f" : "#550000",
//               margin: "3px auto",
//               boxShadow: signalLight === "red" ? "0 0 8px #ff4d4f" : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "yellow" ? "#faad14" : "#553300",
//               margin: "3px auto",
//               boxShadow: signalLight === "yellow" ? "0 0 8px #faad14" : "none",
//             }}
//           />
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: signalLight === "green" ? "#52c41a" : "#005500",
//               margin: "3px auto",
//               boxShadow: signalLight === "green" ? "0 0 8px #52c41a" : "none",
//             }}
//           />
//         </div> */}

//         {/* Parking slots */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100px",
//             height: "50px",
//             border: "2px dashed rgba(255, 255, 255, 0.3)",
//             background: "rgba(255, 255, 255, 0.1)",
//             top: "20%",
//             left: "10%",
//             transform: "rotate(-10deg)",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             width: "100px",
//             height: "50px",
//             border: "2px dashed rgba(255, 255, 255, 0.3)",
//             background: "rgba(255, 255, 255, 0.1)",
//             top: "60%",
//             left: "30%",
//             transform: "rotate(5deg)",
//           }}
//         />

//         {parkingSpaces.map((space, index) => (
//           <div
//             key={space.id}
//             style={{
//               position: "absolute",
//               top: `${5 + Math.floor(index / 3) * 10}%`,
//               right: `${5 + (index % 3) * 10}%`,
//               width: "80px",
//               height: "40px",
//               border: "2px dashed",
//               borderColor: space.occupied ? "#ff4d4f" : "#52c41a",
//               borderRadius: "4px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               zIndex: 2,
//               boxShadow: space.occupied
//                 ? "0 0 8px rgba(255, 77, 79, 0.5)"
//                 : "0 0 8px rgba(82, 196, 26, 0.5)",
//               transition: "all 0.5s ease",
//             }}
//           >
//             {space.occupied && (
//               <CarOutlined style={{ fontSize: "24px", color: "#fff" }} />
//             )}
//           </div>
//         ))}

//         {/* Moving vehicles */}
//         <div
//           style={{
//             position: "absolute",
//             top: "calc(50% - 20px)",
//             left: `${carPosition}%`,
//             transition: "left 0.05s linear",
//             zIndex: 3,
//           }}
//         >
//           <FaCarSide style={{ fontSize: "40px", color: "#ff4d4f" }} />
//         </div>
//       </div>
//       {/* Login card */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "400px",
//           zIndex: 10,
//           opacity: 1,
//           transform: "translateY(0px)",
//           transition: "opacity 0.8s, transform 0.8s",
//         }}
//       >
//         <Card
//           style={{
//             backgroundColor: "rgba(45, 45, 45, 0.9)",
//             borderRadius: "8px",
//             boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <div style={{ textAlign: "center", marginBottom: "30px" }}>
//             <Title
//               level={2}
//               style={{
//                 margin: 0,
//                 background: "linear-gradient(90deg, #40a9ff, #ffffff, #40a9ff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontWeight: "bold",
//               }}
//             >
//               Welcome to PickParking
//             </Title>
//             <Text style={{ color: "#d9d9d9" }}>
//               Find your spot. Park with ease.
//             </Text>
//           </div>

//           <Form
//             form={form}
//             name="login"
//             layout="vertical"
//             onFinish={onFinish}
//             autoComplete="off"
//           >
//             <Form.Item
//               name="email"
//               rules={[
//                 { required: true, message: "Please input your email!" },
//                 { type: "email", message: "Please enter a valid email!" },
//               ]}
//               style={{ marginBottom: "24px" }}
//             >
//               <Input
//                 prefix={
//                   <MailOutlined style={{ color: "rgba(255,255,255,0.5)" }} />
//                 }
//                 placeholder="Email"
//                 size="large"
//                 style={{
//                   backgroundColor: "#3a3a3a",
//                   border: "1px solid #444",
//                   color: "#fff",
//                 }}
//               />
//             </Form.Item>

//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your password!" },
//               ]}
//               style={{ marginBottom: "24px" }}
//             >
//               <Input.Password
//                 prefix={
//                   <LockOutlined style={{ color: "rgba(255,255,255,0.5)" }} />
//                 }
//                 placeholder="Password"
//                 size="large"
//                 iconRender={(visible) =>
//                   visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
//                 }
//                 style={{
//                   backgroundColor: "#3a3a3a",
//                   border: "1px solid #444",
//                   color: "#fff",
//                 }}
//               />
//             </Form.Item>

//             <Form.Item style={{ marginBottom: "16px" }}>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 size="large"
//                 block
//                 style={{
//                   height: "46px",
//                   background: loading ? "#1890ff" : "#40a9ff",
//                   borderColor: "#40a9ff",
//                   transition: "background 0.3s",
//                 }}
//                 icon={loading ? <LoadingOutlined /> : <CarOutlined />}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.02)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                 }}
//                 onMouseDown={(e) => {
//                   e.currentTarget.style.transform = "scale(0.98)";
//                 }}
//                 onMouseUp={(e) => {
//                   e.currentTarget.style.transform = "scale(1.02)";
//                 }}
//               >
//                 {loading ? "Parking In..." : "Log In"}
//               </Button>
//             </Form.Item>

//             <div style={{ textAlign: "center" }}>
//               <Link style={{ color: "#40a9ff" }}>Forgot password?</Link>
//               <div style={{ marginTop: "12px", color: "#d9d9d9" }}>
//                 Don't have an account?{" "}
//                 <Link style={{ color: "#40a9ff" }}>Sign up</Link>
//               </div>
//             </div>
//           </Form>
//         </Card>
//       </div>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           @keyframes moveRoadStripe {
//             0% {
//               background-position: 0 0;
//             }
//             100% {
//               background-position: -60px 0;
//             }
//           }
//         `,
//         }}
//       />
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { User, Lock, Mail, Phone, Car, Home, Eye, EyeOff } from "lucide-react";

// Custom Input Component
const CustomInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  error,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 ${Icon ? "pl-12" : ""} ${
            type === "password" ? "pr-12" : ""
          } 
            border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              error ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-900`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

// Custom Select Component
const CustomSelect = ({
  placeholder,
  value,
  onChange,
  options,
  error,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${
            error ? "border-red-500" : "border-gray-300"
          } bg-white text-gray-900 flex items-center justify-between`}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center"
            >
              {option.icon && (
                <option.icon className="w-5 h-5 mr-3 text-gray-500" />
              )}
              <div>
                <div className="font-medium text-gray-900">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-gray-500">
                    {option.description}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

// Custom Button Component
const CustomButton = ({
  children,
  onClick,
  loading = false,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    secondary:
      "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${baseClasses} ${variants[variant]} ${
        loading ? "opacity-75 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// Toast Message Component
const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

// Login Component
const LoginComponent = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Please input your email!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email!";
    }

    if (!password) {
      newErrors.password = "Please input your password!";
    }

    if (!role) {
      newErrors.role = "Please select your role!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showToast("Login successful!", "success");
      onLogin && onLogin({ email, password, role });
    } catch (error) {
      showToast("Login failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    {
      value: "user",
      label: "User (Looking for parking)",
      description: "Find and book parking spaces",
      icon: Car,
    },
    {
      value: "customer",
      label: "Space Owner (Providing parking)",
      description: "Rent out your parking space",
      icon: Home,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border-0 backdrop-blur-sm relative z-10 p-8">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to your ParkEase account</p>
        </div>

        <div className="space-y-4">
          <CustomInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={Mail}
            error={errors.email}
          />

          <CustomInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={Lock}
            error={errors.password}
          />

          <CustomSelect
            placeholder="Select your role"
            value={role}
            onChange={setRole}
            options={roleOptions}
            error={errors.role}
          />

          <CustomButton
            onClick={handleSubmit}
            loading={loading}
            variant="primary"
          >
            Sign In
          </CustomButton>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Registration Component
const RegistrationComponent = ({ onRegister }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    propertyType: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName)
      newErrors.firstName = "Please input your first name!";
    if (!formData.lastName) newErrors.lastName = "Please input your last name!";
    if (!formData.email) {
      newErrors.email = "Please input your email!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email!";
    }
    if (!formData.phone) newErrors.phone = "Please input your phone number!";
    if (!formData.role) newErrors.role = "Please select your role!";
    if (formData.role === "customer" && !formData.propertyType) {
      newErrors.propertyType = "Please select your property type!";
    }
    if (!formData.password) {
      newErrors.password = "Please input your password!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password!";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      showToast("Registration successful! Welcome to ParkEase!", "success");
      onRegister && onRegister(formData);
    } catch (error) {
      showToast("Registration failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    {
      value: "user",
      label: "Find Parking",
      description: "I'm looking for parking spaces",
      icon: Car,
    },
    {
      value: "customer",
      label: "Rent My Space",
      description: "I want to rent out my parking space",
      icon: Home,
    },
  ];

  const propertyOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "private", label: "Private Lot" },
    { value: "garage", label: "Garage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border-0 backdrop-blur-sm relative z-10 p-8">
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Join ParkEase
          </h2>
          <p className="text-gray-600">
            Create your account and start parking smart
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              error={errors.firstName}
            />

            <CustomInput
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              error={errors.lastName}
            />
          </div>

          <CustomInput
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            icon={Mail}
            error={errors.email}
          />

          <CustomInput
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            icon={Phone}
            error={errors.phone}
          />

          <CustomSelect
            placeholder="I want to..."
            value={formData.role}
            onChange={(value) => handleInputChange("role", value)}
            options={roleOptions}
            error={errors.role}
          />

          {formData.role === "customer" && (
            <CustomSelect
              placeholder="Type of property"
              value={formData.propertyType}
              onChange={(value) => handleInputChange("propertyType", value)}
              options={propertyOptions}
              error={errors.propertyType}
            />
          )}

          <CustomInput
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            icon={Lock}
            error={errors.password}
          />

          <CustomInput
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            icon={Lock}
            error={errors.confirmPassword}
          />

          <CustomButton
            onClick={handleSubmit}
            loading={loading}
            variant="secondary"
          >
            Create Account
          </CustomButton>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component to demonstrate both components
const App = () => {
  const [currentView, setCurrentView] = useState("login");

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  const handleRegister = (values) => {
    console.log("Register values:", values);
  };

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <CustomButton
          onClick={() =>
            setCurrentView(currentView === "login" ? "register" : "login")
          }
          variant="outline"
          className="w-auto px-6 py-2"
        >
          Switch to {currentView === "login" ? "Register" : "Login"}
        </CustomButton>
      </div>

      {currentView === "login" ? (
        <LoginComponent onLogin={handleLogin} />
      ) : (
        <RegistrationComponent onRegister={handleRegister} />
      )}
    </div>
  );
};

export default App;
