import React from "react";

function Chatbot() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🤖</span>
        <h4 className="font-semibold">How can I help you?</h4>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="border p-2 rounded w-full mt-4"
      />
      <button className="mt-2 bg-gray-800 text-white px-4 py-1 rounded">Send</button>
    </div>
  );
}

export default Chatbot;
