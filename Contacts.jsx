import React from "react";
import Chatbot from "../components/Chatbot";

function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Contact Form */}
        <div className="bg-white shadow rounded-xl p-6">
          <label className="block">Name</label>
          <input type="text" defaultValue="Nikita Tripathi" className="border p-2 rounded w-full mb-4" />

          <label className="block">Email</label>
          <input type="email" defaultValue="nikita12345@gmail.com" className="border p-2 rounded w-full mb-4" />

          <label className="block">Message</label>
          <textarea className="border p-2 rounded w-full mb-4" rows="4"></textarea>

          <button className="bg-gray-800 text-white px-4 py-2 rounded">Send</button>
        </div>

        {/* Chatbot + Social */}
        <div className="flex flex-col justify-between">
          <Chatbot />
          <div className="mt-6">
            <h4 className="font-semibold">Follow us</h4>
            <div className="flex gap-4 mt-2">
              <a href="#"><i className="fab fa-facebook text-2xl"></i></a>
              <a href="#"><i className="fab fa-twitter text-2xl"></i></a>
              <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
