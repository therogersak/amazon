import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="bg-gray-800 py-2">
      <ul className="flex items-center gap-5 text-white">
        <div className="flex items-center">
          <MenuIcon /> <p className="font-bold pl-1">All</p>
        </div>
        <li className="text-[13px]">Todya's Deals</li>
        <li className="text-[13px]">Customer Service</li>
        <li className="text-[13px]">Gift Cards</li>
        <li className="text-[13px]">Registry</li>
        <li className="text-[13px]">Shell</li>
      </ul>
    </div>
  );
}

export default Navbar;
