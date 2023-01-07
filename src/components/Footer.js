import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import OutlinedFlagRoundedIcon from "@mui/icons-material/OutlinedFlagRounded";
function Footer() {
  return (
    <div>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="bg-gray-800 text-white text-center py-3 cursor-pointer"
      >
        Back to top
      </div>
      <div className="bg-gray-900 flex items-center justify-center p-5">
        <div className="logo-container w-[100px]">
          <img
            className="w-full h-full pt-2"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </div>
        <button className="footer_button">
          <LanguageIcon />
          <span>language</span>
        </button>

        <button className="footer_button">
          <span>$</span>
          <span>USD - U.S.Dollar</span>
        </button>

        <button className="footer_button">
          <OutlinedFlagRoundedIcon />
          <span>AKHAND BHARAT</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
