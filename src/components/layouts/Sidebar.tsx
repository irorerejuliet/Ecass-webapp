import { BookOpen, Settings, ShieldCheck, Users } from 'lucide-react';
import React from 'react'

const Sidebar = () => {
    const navItems = [
      { label: "SAFETY PROTOCOLS", icon: ShieldCheck},
      { label: "COMMUNITY CONTACTS", icon: Users },
      { label: "EMERGENCY GUIDE", icon: BookOpen },
      { label: "SETTINGS", icon: Settings },
    ];
  return (
    <aside className="w-64 bg-gray-100 text-black border-r flex flex-col justify-between pt-20">
      <div>
        <div className="p-6 border-b">
          <p className="text-yellow-700 font-bold">SYSTEM ARMED</p>
          <p className="text-xs text-gray-500">EKPOMA SECTOR 4</p>
        </div>

        <nav className="flex flex-col font-semibold">
          {navItems.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="px-6 py-4 border-b text-sm hover:bg-gray-200 cursor-pointer flex items-center gap-3"
            >
              <Icon size={18} />
              {label}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 bg-gray-900 text-white text-sm">LOGOUT</div>
    </aside>
  );
}

export default Sidebar
