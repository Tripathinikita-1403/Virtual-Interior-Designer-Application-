import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F6]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-gray-800">Virtual Interior Designer</h1>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-between px-16">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4 leading-snug text-gray-800">
            Design your dream space <br /> with ease and confidence
          </h2>
          <p className="text-gray-600 mb-6">
            Our AI-powered virtual interior designer helps you visualize and customize your perfect room.
          </p>
          <Link
            to="/dashboard"
            className="bg-[#E6B8A2] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#d49a82] transition"
          >
            Start Designing
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6191/6191486.png"
            alt="House Illustration"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
