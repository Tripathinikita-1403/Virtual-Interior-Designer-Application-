import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side (Image / Interior Preview) */}
      <div className="hidden md:flex items-center justify-center bg-[#FFF5EE]">
        <div className="max-w-md p-6">
          <img
            src="https://i.ibb.co/MR4D2QH/sofa.png"
            alt="Interior Preview"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            VIRTUAL INTERIOR DESIGNER
          </h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#E6B8A2] text-white py-3 rounded-lg font-medium hover:bg-[#d49a82] transition">
            Sign in
          </button>

          {/* Google Sign In */}
          <button className="w-full border mt-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
