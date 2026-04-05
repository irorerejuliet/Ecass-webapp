import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 text-black border-r flex flex-col justify-between">
      <div>
        <div className="p-6 border-b">
          <p className="text-yellow-700 font-bold">SYSTEM ARMED</p>
          <p className="text-xs text-gray-500">EKPOMA SECTOR 4</p>
        </div>

        <nav className="flex flex-col">
          {[
            "SAFETY PROTOCOLS",
            "COMMUNITY CONTACTS",
            "EMERGENCY GUIDE",
            "SETTINGS",
          ].map((item) => (
            <div
              key={item}
              className="px-6 py-4 border-b text-sm hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 bg-gray-900 text-white text-sm">LOGOUT</div>
    </aside>
  );
}

export default Sidebar
