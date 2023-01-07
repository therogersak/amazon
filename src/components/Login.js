import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  // => React State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // => loginHandler
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="grid place-items-center space-y-5">
      <div className="w-[100px] mt-[5rem]">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            alt="amazon-logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <form
        onSubmit={(e) => loginHandler(e)}
        className="border-2 max-w-[400px] flex flex-col p-5 shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-5">Sign in</h3>
        <label className="text-[13px] font-bold">
          Email or mobile phone number
        </label>
        <input
          className="border-2 border-black rounded-sm mb-5 mt-1 py-[5px] pl-2"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-[13px] font-bold">Password</label>
        <input
          className="border-2 border-black rounded-sm mb-5 mt-1 py-[5px] pl-2"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#F1C861] py-2 text-[13px] shadow-xl rounded-sm border border-black"
          onClick={(e) => loginHandler(e)}
        >
          Submit
        </button>

        <div className="term mt-8">
          <p className="text-[13px]">
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue-600 text-[13px]">Conditions of Use</span>{" "}
            and{" "}
            <span className="text-blue-600 text-[13px]">Privacy Notice</span>
          </p>
          <span className="text-blue-600 text-[13px] mt-5">Need help?</span>
        </div>
      </form>
      <div className="w-full mt-5 grid place-items-center">
        <p className="text-[13px]  my-2">
          ----------- New to Amazon? -----------
        </p>
        <button className="bg-gray-200 w-full max-w-[400px]  py-2 text-[13px] shadow-xl rounded-sm border border-black">
          <Link to="/register"> Create your Amazon account</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
