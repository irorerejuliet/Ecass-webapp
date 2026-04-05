
const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <h1 className="font-bold tracking-wide text-black">ECASS</h1>

      <nav className="flex gap-6 text-sm text-[#ACAAAE] font-semibold">
        <span className="text-yellow-600 font-semibold">DASHBOARD</span>
        <span>ALERTS</span>
        <span>REPORTS</span>
        <span>SOS</span>
      </nav>

      <div className="flex gap-4">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar
