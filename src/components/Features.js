import React from "react";
import { MdRestaurant } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { ImCart } from "react-icons/im";
import Footer from "./Footer";

const Features = () => {
  return (
    <div className="py-14 feature-section bg-[#FDF3F2]">
      <div className="flex md:flex-row flex-col-reverse gap-20 md:mx-40 mx-10">
        <div className="md:rotate-[-12deg]  md:block hidden	 md:mx-0  rotate:0  md:ml-14  w-2/6 md:mr-32 mr-0  py-2">
          <img
            src="assets/features.png"
            className="min-h-full		feature_img md:h-[550px] hover:shadow-4xl md:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300	"
            alt="hero-img"
          />
        </div>
        <div className="">
          <p className="md:font-bold  font-semibold mt-4  chip md:text-4xl text-3xl text-[#E2614B]  ">
            We Provide These Features
          </p>
          {/* <span className="luncher  ml-24 text-[#E2614B] text-6xl"></span> */}
          <div className="mt-8 text-[#d35050] feature_text">
            <div>
              <div className="flex gap-4 capitalize md:text-2xl text-xl items-center">
                <MdRestaurant className="md:text-4xl text-3xl  " />
                <p className="font-bold">Recommended Restaurant</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] text-lg">
                This launcher suggest you to top reviewed restaurant. Where you
                will be guided properly to choose the best restaurant with great
                facilities.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex gap-4 capitalize md:text-2xl text-xl items-center ">
                <SiCodechef className="md:text-4xl text-3xl" />
                <p className="font-bold">Cooking recipes</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] text-lg">
                Our cooking recipes will help you to make delicious food for you
                and your loved ones. We provides various recipes with verified
                chefs.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex gap-4 capitalize md:text-2xl text-xl items-center">
                <ImCart className="md:text-4xl text-3xl" />
                <p className="font-bold">Groceries</p>
              </div>
              <p className="md:ml-14 ml-12 mt-2 md:w-[400px] text-lg">
                We prioritize the top rated groceries nearby so you can shop in
                better way. Also, where you can find your desired groceries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Features;
