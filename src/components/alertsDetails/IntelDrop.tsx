"use client"

import { useState } from "react";
import Footer from "../reportDetails/Footer";


const IntelDrop = () => {
    const [description, setDescription] = useState("");

  return (
    <section className=" bg-white text-black">
      <div className="w-175 mx-auto">
        <div className="pt-12">
          <button className="bg-secondary text-xl font-bold text-white py-1 px-4  shadow-[4px_4px_0px_#000]">
            Priority Alpha
          </button>
          <h1 className="text-7xl md:text-5xl font-bold w-122.75 leading-tight py-4">
            Intel Drop
          </h1>

          <p className="mt-4 text-xl font-bold max-w-xl border-l-4 border-black pl-4">
            Submit encrypted suspicious activity reports directly to Sector 4
            Command.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 ">
          <div className="w-full bg-white ">
            {/* HEADER */}
            <div className="border-b border-black p-6 relative">
              <span className="absolute -top-3 left-4 bg-danger text-white text-xs font-bold px-3 py-1">
                PRIORITY ALPHA
              </span>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                INTEL DROP
              </h1>

              <p className="mt-2 text-sm text-gray-700 font-medium">
                Submit encrypted suspicious activity reports directly to Sector
                4 Command.
              </p>
            </div>

            {/* FORM */}
            <div className="p-6 space-y-8 ">
              {/* 01 */}
              <section className="shadow-[4px_4px_0px_#000]">
                <h2 className="font-bold text-lg mb-3">
                  01. INCIDENT DESCRIPTION
                </h2>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="DESCRIBE THE ACTIVITY IN DETAIL..."
                  className="w-full h-40 border-2 border-black p-4 resize-none outline-none focus:ring-2 focus:ring-black"
                />
              </section>

              {/* 02 */}
              <section className="">
                <h2 className="font-bold text-lg mb-3">02. VISUAL EVIDENCE</h2>

                <div className="border-2 border-dashed border-black bg-gray-50 p-10 text-center cursor-pointer hover:bg-gray-100 transition shadow-[4px_4px_0px_#000]">
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5V21h18v-4.5M16 12l-4-4m0 0L8 12m4-4v12"
                      />
                    </svg>

                    <p className="font-semibold">DROP IMAGES OR VIDEO HERE</p>
                    <p className="text-xs text-gray-600">MAX FILE SIZE: 50MB</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntelDrop
