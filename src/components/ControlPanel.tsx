import Image from "next/image";


const ControlPanel = () => {
  return (
    <div className="flex gap-4 w-full max-w-3xl text-black font-bold">
      <button className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-center">
        <Image src="/images/cancel.png" alt="cancelIcon" width={40} height={40}/> CANCEL
      </button>

      <button className="flex-1 border-4 border-black py-4 bg-white shadow-md flex items-center justify-between px-4">
        <span>🔕 SILENT TRIGGER</span>
        <span className="w-6 h-6 bg-yellow-400 border border-black"></span>
      </button>
    </div>
  );
}

export default ControlPanel
