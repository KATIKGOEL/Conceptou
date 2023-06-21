import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [creds, setcreds] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const URL = "http://localhost:5000";

  const loginUser = async () => {
    const { email, password } = creds;
    console.log("loging in...");
    const response = await fetch(`${URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.errors) {
      alert(data.errors[0].msg);
      return
    } else {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    loginUser();
  };

  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* #AEE9EE */}
      <div className="w-full min-h-[89vh] custom-background bg-cover flex justify-center items-center flex-col">
        <div className="w-full flex justify-center on">
          <div className="w-10/12 flex justify-center mx-auto flex-col my-20">
            <h1 className="text-5xl font-semibold text-center w-full text-[#181823] leading-none sm:text-5xl md:text-7xl">
              Welcome to <br />
              <span className="text-4xl font-semibold text-center w-full gradient-custom sm:text-4xl md:text-6xl">Conceptou !</span>
            </h1>
            <h1 className="text-xl md:text-3xl mt-2 text-center font-thin">
              Login to proceed
            </h1>
            <div className=" mx-auto w-3/12 mt-10 mb-1 min-w-fit">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Eg. John Smith"
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex justify-start items-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="********"
                    minLength={5}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="gradient-custom1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleClick}
                  >
                    Login
                  </button>
                </div>
                <div className="relative w-[35%] md:w-[30%] 2xl:w-[20%] mx-auto mt-5">
                  <Link
                    className="text-xs font-semibold text-center text-[#6e95f3]"
                    to="/signup"
                  >
                    Sign up?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
