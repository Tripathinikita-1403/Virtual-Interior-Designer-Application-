import React, { useState } from "react";

function Profile() {
  const [theme, setTheme] = useState("Light");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Saved Profiles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="col-span-2 bg-white shadow rounded-xl p-6 flex gap-6 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="avatar"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Profile Settings</h3>
            <label className="block mt-3">Name</label>
            <input type="text" defaultValue="Nikita Tripathi" className="border p-2 rounded w-full" />
            
            <label className="block mt-3">Email</label>
            <input type="email" defaultValue="nikita12345@gmail.com" className="border p-2 rounded w-full" />
            
            <label className="block mt-3">Password</label>
            <input type="password" defaultValue="********" className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Subscription & Theme */}
        <div className="space-y-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold">Subscription</h3>
            <p className="mt-2">Pro Weekly <span className="text-green-600">Active</span></p>
            <button className="mt-4 bg-gray-200 px-4 py-1 rounded">Manage</button>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold">Theme</h3>
            <div className="mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Light"
                  checked={theme === "Light"}
                  onChange={(e) => setTheme(e.target.value)}
                />
                Light
              </label>
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="radio"
                  value="Dark"
                  checked={theme === "Dark"}
                  onChange={(e) => setTheme(e.target.value)}
                />
                Dark
              </label>
            </div>
            <button className="mt-4 bg-gray-200 px-4 py-1 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
