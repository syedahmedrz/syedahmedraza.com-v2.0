import React from "react";

import LogoLight from "../../Assets/Site-Images/LogoLight.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 mx-auto w-11/12 xl:w-[1100px]">
      <div>
        {/* Logo */}
        <img src={LogoLight} alt="Logo" className="h-10" />
      </div>
      <div>
        {/* Toggle Between Dark and Light Mode */}
        <input type="checkbox" className="toggle-checkbox" />
      </div>
    </nav>
  );
};

export default Navbar;
