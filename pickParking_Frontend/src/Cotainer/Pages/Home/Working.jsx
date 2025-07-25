// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "antd";
// import { MapPin, Navigation, Clock, CreditCard, Key } from "lucide-react";
// import { Link } from "react-router-dom";

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: "Find Parking",
//       description: "Search for parking spots near your destination and filter by price, distance, and amenities.",
//       icon: <MapPin className="h-10 w-10 text-blue-500" />,
//     },
//     {
//       title: "Navigate",
//       description: "Get directions to your selected parking spot with our integrated map navigation.",
//       icon: <Navigation className="h-10 w-10 text-blue-500" />,
//     },
//     {
//       title: "Reserve",
//       description: "Book your parking spot in advance to ensure availability when you arrive.",
//       icon: <Clock className="h-10 w-10 text-blue-500" />,
//     },
//     {
//       title: "Pay",
//       description: "Securely pay for your parking through our app with various payment methods.",
//       icon: <CreditCard className="h-10 w-10 text-blue-500" />,
//     },
//     {
//       title: "Park",
//       description: "Use the app to access the parking facility and enjoy hassle-free parking.",
//       icon: <Key className="h-10 w-10 text-blue-500" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Simple Header */}
//       <header className="bg-white border-b shadow-sm p-4">
//         <div className="container mx-auto">
//           <h1 className="text-xl font-bold">How It Works</h1>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Hero section */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Parking Made Simple</h2>
//             <p className="text-lg text-gray-600 mb-8">
//               EasePark makes finding and reserving parking spots quick and easy, 
//               so you can focus on what matters most.
//             </p>
//             <Button asChild size="lg">
//               <Link to="/find">Find Parking Now</Link>
//             </Button>
//           </div>

//           {/* Steps */}
//           <div className="space-y-6">
//             {steps.map((step, index) => (
//               <Card key={index} className="border border-gray-200">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-6">
//                     <div className="p-3 bg-blue-50 rounded-full flex-shrink-0">
//                       {step.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-xl mb-2">{index + 1}. {step.title}</h3>
//                       <p className="text-gray-600">{step.description}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA */}
//           <Card className="mt-12 bg-blue-50 border-blue-100">
//             <CardContent className="p-8 text-center">
//               <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
//               <p className="text-gray-600 mb-6">
//                 Join thousands of drivers who save time and stress with EasePark.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button asChild variant="default" size="lg">
//                   <Link to="/find">Find Parking</Link>
//                 </Button>
//                 <Button asChild variant="outline" size="lg">
//                   <Link to="/">Learn More</Link>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;
import React from "react";
import { Card, Button } from "antd"; // Import Card and Button from Ant Design
import { MapPin, Navigation, Clock, CreditCard, Key } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      title: "Find Parking",
      description:
        "Search for parking spots near your destination and filter by price, distance, and amenities.",
      icon: <MapPin className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Navigate",
      description:
        "Get directions to your selected parking spot with our integrated map navigation.",
      icon: <Navigation className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Reserve",
      description:
        "Book your parking spot in advance to ensure availability when you arrive.",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Pay",
      description:
        "Securely pay for your parking through our app with various payment methods.",
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Park",
      description:
        "Use the app to access the parking facility and enjoy hassle-free parking.",
      icon: <Key className="h-10 w-10 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Parking Made Simple</h2>
            <p className="text-lg text-gray-600 mb-8">
              EasePark makes finding and reserving parking spots quick and easy,
              so you can focus on what matters most.
            </p>
            {/* Ant Design Button with Link */}
            <Button type="primary" size="large">
              <Link to="/find">Find Parking Now</Link>
            </Button>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border border-gray-200"
                bodyStyle={{ padding: "1.5rem" }} // Equivalent to p-6
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-50 rounded-full flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card
            className="mt-12 bg-blue-50 border-blue-100"
            bodyStyle={{ padding: "2rem" }} // Equivalent to p-8
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of drivers who save time and stress with
                EasePark.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Ant Design Buttons with Link */}
                <Button type="primary" size="large">
                  <Link to="/find">Find Parking</Link>
                </Button>
                <Button size="large">
                  <Link to="/">Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;