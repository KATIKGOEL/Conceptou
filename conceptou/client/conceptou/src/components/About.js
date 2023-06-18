import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full min-h-[91vh] custom-background bg-cover">
        <div className="w-[90vw] mx-auto pt-5 md:pt-20 relative pb-10">
          <h1 className="text-5xl font-semibold text-center gradient-custom leading-none sm:text-6xl md:text-7xl">
            About Us
          </h1>
          <p className="w-[80%] mx-auto text-xs text-center pt-5 md:pt-20 text-[#181823] md:text-2xl">
            What sets us apart is our unwavering commitment to understanding
            your business goals and tailoring our services to meet your specific
            needs. We believe that successful partnerships are built on trust,
            collaboration, and open communication. When you choose Conceptou,
            you're not just hiring a service provider; you're gaining a
            dedicated team that is invested in your success.
            <br />
          </p>
          <p className="w-[80%] mx-auto text-xs text-center pt-5 md:pt-12 text-[#181823] md:text-2xl">
            Discover the power of limitless creativity and let us unlock the
            full potential of your business. Partner with Conceptou and embark
            on a journey of innovation, growth, and success. Contact us today to
            explore how we can bring your ideas to life. Remember, at Conceptou,
            your vision is our inspiration, and together, we can achieve
            greatness.
          </p>
          <img
            src="/pics/20944999.jpg"
            alt=""
            className="h-[200px] rounded-3xl mx-auto mt-10"
          />
          <h1 className="text-5xl font-semibold text-center gradient-custom leading-none sm:text-6xl md:text-7xl mt-32">
            Mission
          </h1>
          <p className="w-[80%] mx-auto text-xs text-center pt-5 md:pt-20 text-[#181823] md:text-2xl">
          Our mission at Conceptou is to empower businesses with extraordinary digital experiences that drive growth, foster connections, and inspire meaningful change. Through strategic thinking, creativity, and technical expertise, we aim to create solutions that make a lasting impact and help our clients achieve their goals.
          </p>
          <img
            src="/pics/A.jpg"
            alt=""
            className="h-[200px] rounded-3xl mx-auto my-10"
          />
        </div>
      </div>
    </>
  );
};

export default About;
