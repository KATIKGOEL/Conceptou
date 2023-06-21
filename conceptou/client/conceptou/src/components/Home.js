import React, {useEffect}from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
      <div className="w-full min-h-[89vh] custom-background bg-cover">
        <div className="w-[90vw] mx-auto pt-14 md:pt-32">
          <h1 className="text-6xl font-semibold text-center w-full text-[#181823] leading-none sm:text-6xl md:text-8xl">
            Welcome to <br />{" "}
            <span className="text-5xl font-semibold text-center w-full gradient-custom sm:text-5xl md:text-7xl">
              Conceptou!
            </span>
          </h1>
          <p className="w-[80%] mx-auto text-sm text-center pt-10 md:pt-20 text-[#181823] md:text-xl">
            At Conceptou, we believe in the power of innovative ideas and the
            endless possibilities they hold. We are a cutting-edge company that
            specializes in delivering creative solutions that drive success for
            our clients. We are here to transform your concepts into reality.
          </p>
          {localStorage.getItem("token")?<>
          <div className="h-20 w-full">

          </div>
          </>:<div className="">
            <h1 className="text-xl font-semibold text-center pt-10 md:pt-24 md:text-4xl">
              Log In Now
              <span className="material-symbols-outlined text-sm md:text-2xl">
                chevron_right
              </span>
            </h1>
            <Link to="/login">
              <button className="px-3 py-1 gradient-custom1 md:text-xl font-semibold text-[#d5f4f6] relative left-[40%] min-[500px]:left-[42%] min-[700px]:left-[45%] rounded-xl mt-5 md:mt-10 md:px-7 md:py-3 text-xs ">
                Log In
              </button>
            </Link>
          </div>}
          
          
          <div className=" pt-32 flex justify-center items-center flex-col gap-20 pb-28">
            <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
              <img
                src="/pics/47610.jpg"
                alt=""
                className="w-[350px] rounded-3xl"
              />
              <div className="md:max-w-[30%] w-[80%]">
                <h1 className="md:text-3xl  font-semibold text-xl">
                  Empowering Success Through Diversity and Inclusion
                </h1>
                <p className="">
                  We believe that diverse perspectives, backgrounds, and
                  experiences fuel innovation and drive better outcomes. By
                  fostering an inclusive environment, we encourage
                  collaboration, empathy, and respect for all individuals which
                  promotes personal and professional growth, and enables us to
                  better serve our clients. By embracing the strengths of each
                  individual, we strive to build a stronger, more resilient
                  organization that thrives on the collective efforts of all our
                  team members.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-12 flex-col-reverse md:flex-row">
              
              <div className="md:max-w-[30%] w-[80%]">
                <h1 className="md:text-3xl  font-semibold text-xl">
                "Unity in Partnership"
                </h1>
                <p className="">
                At our company, we deeply believe in the transformative power of collaboration. By prioritizing lasting partnerships, we drive innovation, unlock new opportunities, and create a positive impact in everything we do. Together, we can achieve remarkable achievements that surpass individual capabilities and create a better future.
                </p>
              </div>
              <img
                src="/pics/Handshake gesture 3d cartoon style icon.jpg"
                alt=""
                className="w-[350px] rounded-3xl"
              />
            </div>

            <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
              <img
                src="/pics/A.jpg"
                alt=""
                className="w-[350px] rounded-3xl"
              />
              <div className="md:max-w-[30%] w-[80%]">
                <h1 className="md:text-3xl  font-semibold text-xl">
                Empowering through technology
                </h1>
                <p className="">
                <b> At Conceptou</b>, our core values revolve around empowering individuals and businesses through technology. We are committed to harnessing the power of innovation and digital solutions to drive positive change and enhance productivity. With every keystroke, we strive to create opportunities that transform lives in the digital age. Join us on this journey towards a brighter and more connected future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
