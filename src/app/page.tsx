import ControlPanel from "@/components/ControlPanel";
import CriticalProtocol from "@/components/CriticalProtocol";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import PanicButton from "@/components/PanicButton";
import StatusBanner from "@/components/StatusBanner";


const page = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar/>

        <main className="flex flex-col items-center justify-start gap-6 p-6">
          <StatusBanner/>
          <PanicButton/>
          <ControlPanel />
          <CriticalProtocol />
        </main>
      </div>
    </div>
  );
}

export default page
