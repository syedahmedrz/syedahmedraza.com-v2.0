import React, { useState } from "react";

import LogoLight from "../../Assets/Site-Images/LogoLight.png";

const Navbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent the toggle from changing
    setShowTooltip(true); // Show the tooltip message

    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Duration of the shake animation

    // Optionally hide the tooltip after a few seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <nav className="flex justify-between items-center h-24 mx-auto w-10/12 xl:w-[1100px]">
      <div>
        {/* Logo */}
        <img src={LogoLight} alt="Logo" className="h-10" />
      </div>
      <div className="relative">
        {/* Toggle Between Dark and Light Mode */}
        <input
          type="checkbox"
          checked={true} // Always in dark mode
          onChange={handleToggle}
          disabled={showTooltip}
          className={`toggle-checkbox ${isShaking ? "animate-shake" : ""}`}
        />
        {showTooltip && (
          <div className="absolute top-100 right-0 p-2 mt-2 bg-gray-700 text-white rounded-md shadow-lg w-[200px]">
            Sorry, we're developers and prefer to live in dark mode!
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
