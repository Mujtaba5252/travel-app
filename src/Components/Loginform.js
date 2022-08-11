import React, { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom"


const Loginform = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate= useNavigate();
 
  const handleLogin = (e) => {
     e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate('/');
        console.log(user);
      })
      .catch((error) => {
         setError(true);
      });
      
  };
  return (
    <div className=" relative  lg:mr-10">
      <form className="lg:mt-36 mt-[230px] " >
        <div className=" ">
          <div className="flex justify-center  mb-2">
            <a href="/Login">
              <h1 className="text-lg  mx-2 mr-14 text-color1 font-Rubik font-bold ">
                Login
              </h1>
            </a>
            <a href="/Signup">
              <h1 className="text-lg  text-color1 font-Rubik font-bold ">
                Sign up
              </h1>
            </a>
          </div>
          <div className=" justify-center items-center ml-[100px] my-6">
            <h1 className=" text-4xl  text-color1 font-Rubik font-bold ">
              Welcome Back
            </h1>
            <p className="text-sm text-color2 ml-14 font-Rubik font-normal ">
              Login now to continue
            </p>
          </div>
        </div>
        <div className="mb-6 mx-5">
          <input
            type="email"
            name="email"
            id="Username"
            
            className="placeholder:font-Rubik placeholder:font-s pl-5  md:w-[430px] w-full sm:w-auto h-[70px] bg-[#E6EBFF]  text-gray-900 text-sm rounded-lg"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-0 mx-5">
          <input
            type="current-password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            
            onChange={event => setPassword(event.target.value)}
            className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg "
            required
          />
        </div>

        {error ? 
          <span className="text-red-600 ml-[160px]">
            Wrong Email & password
          </span>:null
        }

        <div className="mt-5 mx-5">
          <button
            type="submit"
            onClick={handleLogin}
            className="md:w-[430px] h-[70px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      <div className=" mb-6 ml-[160px]">
        <p className="text-sm text-color2 font-Rubik font-normal mt-4 ">
          Don’t have an account?
        </p>
        <a href="/Signupform">
          <h1 className="text-lg ml-12 text-color1 font-Rubik font-bold ">
            Sign up
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Loginform;
