import React from "react";
import {
  MdSecurity,
  MdOutlinePrivacyTip,
  MdMobileFriendly,
} from "react-icons/md";

const Features = () => {
  return (
    <div className=" py-14 feature-section">
      <div className="flex md:flex-row flex-col-reverse gap-20  md:mx-40  mx-10">
        <div className="md:rotate-[-12deg]  	 md:mx-0  rotate:0  md:ml-14  w-2/6 md:mr-32 mr-0  py-2">
          <img
            src="assets/features.png"
            className="min-h-full		feature_img md:h-[550px] hover:shadow-4xl md:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300	"
            alt="hero-img"
          />
        </div>
        <div className="">
          <p className="font-bold mt-4  chip text-4xl text-[#E2614B]  ">
            We Provide These Features
          </p>
          {/* <span className="luncher  ml-24 text-[#E2614B] text-6xl"></span> */}
          <div className="mt-8 text-[#d35050] feature_text">
            <div className="  ">
              <div className="flex gap-4 uppercase md:text-2xl text-xl items-center ">
                <MdSecurity className="md:text-4xl text-3xl  " />
                <p className="font-bold">Security</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] w-[500px]  text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
            <div className="mt-4  ">
              <div className="flex gap-4 uppercase md:text-2xl text-xl items-center ">
                <MdOutlinePrivacyTip className="md:text-4xl text-3xl" />
                <p className="font-bold">Privacy</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] w-[500px] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
            <div className="mt-4  ">
              <div className="flex gap-4 uppercase md:text-2xl text-xl items-center ">
                <MdMobileFriendly className="md:text-4xl text-3xl" />
                <p className="font-bold">User Friendly</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] w-[500px] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facilis autem cupiditate tempore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex mt-20 gap-10 text-orange-700 text-lg justify-center  items-center">
        <li className=" ">Terms</li>
        <li className="hover:border-b hover:border-orange-700 ">Contact</li>
        <li className="hover:border-b hover:border-orange-700 ">FAQ</li>
      </ul>
    </div>
  );
};

export default Features;
