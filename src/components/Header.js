import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#FDF3F2]">
      <div className="md:mx-32 mx-16">
        {/* <Link to="/"> */}
        <img src="assets/app-logo.png" className="h-24 w-24" alt="app logo" />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Header;
