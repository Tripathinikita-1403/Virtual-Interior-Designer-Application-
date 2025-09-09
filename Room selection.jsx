import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Living Room",
    img: "https://i.ibb.co/MR4D2QH/sofa.png",
  },
  {
    id: 2,
    name: "Bedroom",
    img: "https://i.ibb.co/4N2N3mK/bedroom.png",
  },
  {
    id: 3,
    name: "Kitchen",
    img: "https://i.ibb.co/h1SM0cM/kitchen.png",
  },
  {
    id: 4,
    name: "Office",
    img: "https://i.ibb.co/7CfRm9f/office.png",
  },
];

export default function RoomSelection() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] p-10">
      <h1 className="text-3xl font-bold mb-8">Select a Room Type</h1>

      {/* Grid of Room Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-4">{room.name}</h2>
              <Link
                to="/export"
                className="bg-[#E6B8A2] text-white px-4 py-2 rounded-lg hover:bg-[#d49a82] transition"
              >
                Choose
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
