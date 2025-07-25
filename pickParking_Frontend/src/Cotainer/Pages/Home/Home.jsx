
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Calendar, User } from "lucide-react";

const HomeIndex = () => {


  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Find and reserve parking spots with ease
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              EasePark helps you find, reserve, and pay for parking spaces in your city, all in one convenient app.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button   className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/find">Find Parking Now </Link>
              </Button>
              <Button  variant="outline" asChild>
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EasePark?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Car className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Parking Search</h3>
              <p className="text-gray-600">Find available parking spots near your destination with real-time availability updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Reservations</h3>
              <p className="text-gray-600">Reserve your spot in advance and enjoy hassle-free parking when you arrive.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
              <p className="text-gray-600">Get recommendations based on your preferences and parking history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to park smarter?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of drivers who save time and reduce stress with EasePark.</p>
          <Button size="lg" variant="default" className="bg-white text-purple-800 hover:bg-gray-100" asChild>
            <Link to={ "/signup"}>
               Find Parking
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-100 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">EasePark</h3>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Parking Made Easy</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} EasePark. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomeIndex;