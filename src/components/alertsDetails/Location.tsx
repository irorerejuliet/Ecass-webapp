"use client";

import Footer from "../reportDetails/Footer";

const  Location = () => {
  return (
    <section className="bg-white text-black">
      <div className="w-175 mx-auto space-y-6 ">
        <h2 className="text-sm font-semibold tracking-wider">03. LOCATION</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-100 h-62 border border-black/10 bg-black shadow-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/60 px-2 py-1 rounded">
              LAT: 6.7821°N | LONG: 6.0746°E
            </div>
          </div>

          <div className="w-full md:w-108 h-31.25 bg-primary border border-black py-15 px-6 text-xs font-medium shadow-[4px_4px_0px_#000]">
            <p className="uppercase font-bold text-xl mb-2">Protocol Note</p>
            <p className="tracking-tight text-sm font-bold">
              GPS COORIDNATES ARE AUTOMATICALLY STRIPPED OF EXIF DATA BEFORE
              TRANSMISSION TO ENSURE SOURCE PROTECTION.
            </p>
          </div>
        </div>

        <div className="border border-black/20 p-4 flex items-center gap-3 shadow-[4px_4px_0px_#000]">
          <input type="checkbox" className="w-4 h-4 accent-black" />
          <div>
            <p className="text-sm font-semibold">Anonymous Submission</p>
            <p className="text-xs text-gray-600">
              Do not record my ID or device signature.
            </p>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-yellow-500 transition font-bold py-4 border border-black text-black shadow-[4px_4px_0px_#000]">
          TRANSMIT INTELLIGENCE &gt;
        </button>
      </div>
      <Footer />
    </section>
  );
}
export default Location;