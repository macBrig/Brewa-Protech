import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}

      {/* Hero Section */}
      <section
        className="bg-blue-500 text-white relative"
        style={{
          width: "100%",
          height: "80vh",
          flexShrink: 0,
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/land-1.png) lightgray 50% / cover no-repeat",
        }}
      >
        <header className=" text-white">
          <div className="container mx-auto flex justify-between items-center">
            <nav>
              <ul className="flex">
                <li className="ml-4">
                  <a href="#hero" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li className="ml-4">
                  <a href="#features" className="hover:text-gray-300">
                    Rent
                  </a>
                </li>
                <li className="ml-4">
                  <a href="#features" className="hover:text-gray-300">
                    Landlord
                  </a>
                </li>
                <li className="ml-4">
                  <a href="#features" className="hover:text-gray-300">
                    Download App
                  </a>
                </li>
                <li className="ml-4">
                  <a href="#features" className="hover:text-gray-300">
                    Sign Up
                  </a>
                </li>
                <li className="ml-4">
                  <a href="#features" className="hover:text-gray-300">
                    Login
                  </a>
                </li>
                {/* Add more navigation links here */}
              </ul>
            </nav>
          </div>
        </header>

        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Smart Rental Service</h2>
        </div>
        <div className="absolute inset-0 bg-cover bg-center" />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="flex justify-center">
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
