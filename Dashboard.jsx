import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#FFF9F6]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-4">Virtual Interior Designer</h2>
        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-600">
            🏠 Dashboard
          </Link>
          <Link to="/saved-projects" className="flex items-center gap-2 hover:text-blue-600">
            📂 My Designs
          </Link>
          <Link to="/templates" className="flex items-center gap-2 hover:text-blue-600">
            📑 Templates
          </Link>
          <Link to="/settings" className="flex items-center gap-2 hover:text-blue-600">
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">Virtual Interior Designer</h1>

        <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md">
          {/* Preview Image */}
          <div className="flex items-center gap-6">
            <img
              src="https://i.ibb.co/MR4D2QH/sofa.png"
              alt="Interior Preview"
              className="w-64 rounded-lg"
            />
            <p className="text-lg text-gray-600">Start a new design</p>
          </div>

          {/* New Design Button */}
          <Link
            to="/select-room"
            className="bg-[#E6B8A2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d49a82] transition"
          >
            New Design
          </Link>
        </div>
      </main>
    </div>
  );
}
