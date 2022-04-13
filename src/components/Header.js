import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#FDF3F2]">
      <div className="md:mx-36 flex items-center justify-between mx-12">
        <Link to="/">
          <img src="assets/app-logo.png" className="h-24 w-24" alt="app logo" />
        </Link>

        <ul className="flex text-lg font-semibold gap-10 text-orange-700 text-l mr-0 items-center">
          <Link to="/terms">
            <li className="link">Terms</li>
          </Link>
          <Link to="/privacy">
            <li className="link">Privacy Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
