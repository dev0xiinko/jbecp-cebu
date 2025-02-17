import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          
          {/* Mobile View: JBECP text */}
          <div className="md:hidden text-blue-500 text-xl font-bold">
            JBECP
          </div>

          {/* Desktop View: Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
