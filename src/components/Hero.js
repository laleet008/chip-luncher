import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FDF3F2]">
      <div className="md:mx-40   mx-10 md:py-12 pb-20 flex md:flex-row flex-col justify-between">
        <div className="py-12">
          <p className="font-bold mt-4  chip text-4xl text-[#E2614B]  ">
            Chips
            <span className="luncher ml-2 text-[#E2614B] text-4xl">
              Lunchers
            </span>
          </p>

          <p className="md:w-[550px] w-full mt-8  text-lg text-[#503935]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            eveniet quis beatae fuga, dolores voluptas velit natus consequatur
            nulla id reprehenderit exercitationem blanditiis consequuntur quo
            officiis quae pariatur illo enim voluptatem saepe soluta vel?
          </p>

          <div className="mt-16">
            <p className="text-2xl app_download text-[#E2614B] font-semibold  ">
              Get It Now
            </p>
            <div className=" mt-6">
              <img
                src="assets/google-play-store.png"
                className="h-[40px] hover:transition hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative mr-12">
          <div className=" mr-32 hover:z-100 py-2">
            <img
              src="assets/hero-img.png"
              className="h-[600px] hover:shadow-4xl md:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300	"
              alt="hero-img"
            />
          </div>
          <div className="absolute hero_image2 md:rotate-12 top-0 right-0 py-2">
            <img
              src="assets/hero-img1.png"
              className="h-[600px] hover:shadow-4xl md:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300	"
              alt="hero-img1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
