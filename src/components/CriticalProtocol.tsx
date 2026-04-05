
const CriticalProtocol = () => {
  return (
    <div className="w-full max-w-3xl border-4 border-black shadow-md">
      <div className="bg-red-700 text-white text-xs px-3 py-1 font-bold">
        CRITICAL PROTOCOL
      </div>

      <div className="bg-gray-100 p-4 text-sm">
        ACTIVATE THE PANIC BUTTON ONLY IN IMMEDIATE THREAT. COORDINATES AND
        AUDIO WILL BE UPLOADED INSTANTLY TO CENTRAL COMMAND.
        <div className="mt-4">
          <div className="h-2 bg-yellow-400 w-full"></div>
          <p className="text-xs text-right mt-1">SIGNAL: 100%</p>
        </div>
      </div>
    </div>
  );
}

export default CriticalProtocol
