import { Link } from "react-router-dom";

const sampleProjects = [
  {
    id: 1,
    title: "Living Room Design",
    img: "https://i.ibb.co/MR4D2QH/sofa.png",
  },
  {
    id: 2,
    title: "Bedroom Setup",
    img: "https://i.ibb.co/4N2N3mK/bedroom.png",
  },
  {
    id: 3,
    title: "Modern Kitchen",
    img: "https://i.ibb.co/h1SM0cM/kitchen.png",
  },
  {
    id: 4,
    title: "Office Workspace",
    img: "https://i.ibb.co/7CfRm9f/office.png",
  },
];

export default function SavedProjects() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] p-10">
      <h1 className="text-3xl font-bold mb-8">My Saved Projects</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-3">{project.title}</h2>
              <div className="flex justify-between">
                <Link
                  to={`/edit/${project.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
