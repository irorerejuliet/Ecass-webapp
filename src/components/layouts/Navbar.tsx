import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" bg-white">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <Link href="/" className="font-bold tracking-wide text-black">
          ECASS
        </Link>

        <nav className="flex gap-6 text-sm text-[#ACAAAE] font-semibold">
          <Link href="/dashboard" className="text-yellow-600 font-semibold">
            DASHBOARD
          </Link>
          <Link href="/alerts">ALERTS</Link>
          <Link href="report">REPORTS</Link>
          <Link href="/sos">SOS</Link>
        </nav>

        <div className="flex gap-4">
          <Link href="">🔔</Link>
          <Link href="">👤</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar
