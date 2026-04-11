

const StatusBanner = () => {
  return (
    <div className=" bg-yellow-400 text-black border-4 border-black w-[764px] lg:w-[864px] shadow-md flex justify-between px-10 py-3">
      <div className="flex items-center gap-2 font-bold">
        <span className="w-3 h-3 bg-red-600 rounded-full"></span>
        SYSTEM ARMED
      </div>

      <div className="text-xs text-right">
        <p className="font-bold">LOCATION</p>
        <p>EKPOMA SECTOR 4</p>
      </div>
    </div>
  );
}

export default StatusBanner
