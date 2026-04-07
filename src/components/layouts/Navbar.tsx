"use client";

import React, { useState, useCallback } from "react";
import {
  LayoutDashboard,
  Bell,
  FileText,
  AlertTriangle,
  User,
  X,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use callback and functional update for maximum stability
  const toggleMenu = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const menuItems = [
    {
      id: "nav-dash",
      name: "DASHBOARD",
      active: true,
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "nav-alert",
      name: "ALERTS",
      active: false,
      icon: <Bell size={18} />,
    },
    {
      id: "nav-rep",
      name: "REPORTS",
      active: false,
      icon: <FileText size={18} />,
    },
    {
      id: "nav-sos",
      name: "SOS",
      active: false,
      icon: <AlertTriangle size={18} />,
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b bg-white/80 backdrop-blur-md border-gray-100 sticky top-0 z-50">
        <div
          className="cursor-pointer active:scale-95 transition-transform"
          onClick={toggleMenu}
        >
          <Image
            src="/images/Logoo.png"
            alt="ECASS Logo"
            width={100}
            height={40} 
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-[#ACAAAE] font-semibold">
          {menuItems.map((item) => (
            <span
              key={item.id}
              className={`cursor-pointer transition-colors hover:text-black ${item.active ? "text-yellow-600" : ""}`}
            >
              {item.name}
            </span>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex gap-5 z-[60] items-center text-gray-500">
          <Bell
            size={20}
            className="cursor-pointer hover:text-black transition-colors"
          />
          <User
            size={20}
            className="cursor-pointer hover:text-black transition-colors"
          />
        </div>

        {/* --- MOBILE DRAWER --- */}
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-[#1A1A1A] text-white shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] z-[70] flex flex-col ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="p-8 border-b border-white/10 flex justify-between items-center">
            <span className="text-xs font-black tracking-[0.3em] text-yellow-500 uppercase">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col p-4 pt-8">
            {menuItems.map((item) => (
              <div
                key={`mobile-${item.id}`}
                onClick={closeMenu}
                className={`group flex items-center justify-between p-4 mb-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                  item.active
                    ? "bg-yellow-600 text-white shadow-lg shadow-yellow-600/20"
                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={
                      item.active
                        ? "text-white"
                        : "text-gray-500 group-hover:text-yellow-500 transition-colors"
                    }
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest">
                    {item.name}
                  </span>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    item.active
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </div>
            ))}
          </nav>

          <div className="mt-auto p-8 opacity-20">
            <h2 className="font-black text-4xl tracking-tighter italic">
              ECASS
            </h2>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[65] transition-opacity duration-500"
            onClick={closeMenu}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
