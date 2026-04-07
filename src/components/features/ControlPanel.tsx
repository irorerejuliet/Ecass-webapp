import { VolumeX, X } from "lucide-react";

const ControlPanel = () => {
  return (
    <div className="flex gap-4 w-full max-w-3xl text-black font-bold">
      <button className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-center">
        <X color="red" size={24} />
        CANCEL
      </button>

      <div className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-between px-4">
        <button className="flex items-center justify-center">
          <VolumeX color="gray" size={24} />
          <span>SILENT TRIGGER</span>
        </button>

        <span className="w-6 h-6 bg-yellow-400 border border-black"></span>
      </div>
    </div>
  );
}

export default ControlPanel
