const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 right-0 z-50">
      <div className="py-2 flex justify-between items-center w-full">
        {/* Left: Hafeez Arbaz */}
        <div className="text-2xl font-bold">
          Hafeez Arbaz
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 flex-grow justify-center">
          <a href="Home" className="text-white hover:text-gray-400">Home</a>
          <a href="About" className="text-white hover:text-gray-400">About Me</a>
          <a href="Service" className="text-white hover:text-gray-400">Service</a>
          <a href="Contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Right: Contact Me Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden md:inline">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

