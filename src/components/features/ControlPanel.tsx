import { VolumeX, X } from "lucide-react";

const ControlPanel = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4  text-black font-bold">
      <button className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-center w-full lg:w-[415px]">
        <X color="red" size={24} />
        CANCEL
      </button>

      <div className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-between px-4">
        <button className="flex items-center justify-center ">
          <VolumeX color="gray" size={24} />
          <span>SILENT TRIGGER</span>
        </button>

        <div className="flex border-2">
          <span className="w-6 h-6 bg-yellow-400 border-2 border-black"></span>
          <span className="w-6 h-6 bg-black border-2 border-black"></span>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel
