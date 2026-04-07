import { Asterisk } from "lucide-react";


const PanicButton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 h-56 rounded-full bg-red-700 border-10 border-black flex flex-col items-center justify-center text-white shadow-lg">
        <Asterisk size={40} strokeWidth={3} />
        <p className="font-bold mt-2">PANIC BUTTON</p>
        <span className="text-xs mt-1 bg-black px-2 py-1">
          TAP AND HOLD (3s)
        </span>
      </div>
    </div>
  );
}

export default PanicButton
