export default function ExportPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Export Your Design</h1>

      {/* Preview Section */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl mb-8">
        <img
          src="https://i.ibb.co/MR4D2QH/sofa.png"
          alt="Design Preview"
          className="w-full rounded-lg"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Download as Image
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Download as PDF
        </button>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Share Design
        </button>
      </div>
    </div>
  );
}
