import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#FDF3F2] py-12">
      <ul className="flex  gap-10 text-orange-700 text-lg justify-center  items-center">
        <Link to="/terms">
          <li className=" link">Terms</li>
        </Link>
        <Link to="/contact">
          <li className="link">Contact</li>
        </Link>
        <Link to="/faqs">
          <li className="link ">FAQ</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
