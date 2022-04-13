import React from "react";
import {
  MdSecurity,
  MdOutlinePrivacyTip,
  MdMobileFriendly,
} from "react-icons/md";

const Features = () => {
  return (
    <div className=" py-14 feature-section">
      <div className="flex md:flex-row flex-col gap-20  md:mx-40  mx-16">
        <div className="rotate-[-12deg]  ml-14 w-2/6 mr-32 hover:z-100 py-2">
          <img
            src="assets/features.png"
            className="h-[550px] hover:shadow-4xl md:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300	"
            alt="hero-img"
          />
        </div>
        <div className="">
          <p className="font-bold mt-4  chip text-4xl text-[#E2614B]  ">
            We Provide These
          </p>
          <span className="luncher  ml-24 text-[#E2614B] text-6xl">
            Features
          </span>
          <div className="mt-8 text-[#d35050] feature_text">
            <div className="  ">
              <div className="flex gap-4 uppercase text-2xl items-center ">
                <MdSecurity className="text-4xl  " />
                <p className="font-bold">Security</p>
              </div>
              <p className="md:ml-14 ml-0 md:w-[400px] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
            <div className="mt-4  ">
              <div className="flex gap-4 uppercase text-2xl items-center ">
                <MdOutlinePrivacyTip className="text-4xl" />
                <p className="font-bold">Privacy</p>
              </div>
              <p className="md:ml-14 ml-0 md:w-[400px] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
            <div className="mt-4  ">
              <div className="flex gap-4 uppercase text-2xl items-center ">
                <MdMobileFriendly className="text-4xl" />
                <p className="font-bold">User Friendly</p>
              </div>
              <p className="md:ml-14 ml-0 md:w-[400px] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex mt-20 gap-10 text-orange-700 text-lg justify-center md:mr-40 mr-0 items-center">
        <li className="hover:border-b hover:border-orange-700 ">Terms</li>
        <li className="hover:border-b hover:border-orange-700 ">Contact</li>
        <li className="hover:border-b hover:border-orange-700 ">FAQ</li>
      </ul>
    </div>
  );
};

export default Features;
