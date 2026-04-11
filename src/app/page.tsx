"use client"
import ControlPanel from "@/components/features/ControlPanel";
import CriticalProtocol from "@/components/features/CriticalProtocol";
import PanicButton from "@/components/features/PanicButton";
import StatusBanner from "@/components/features/StatusBanner";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";


const page = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex flex-col items-center gap-6 py-6  px-6 lg:px-8 max-w-5xl w-full mx-auto">
          <StatusBanner />
          <PanicButton />
          <ControlPanel />
          <CriticalProtocol />
        </main>
      </div>
    </div>
  );
}

export default page
