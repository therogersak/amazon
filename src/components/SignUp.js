import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  // => React State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  // => createAccount
  const createAccount = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  };

  return (
    <div className="grid place-items-center space-y-5">
      <div className="w-[100px] mt-[4rem]">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            alt="amazon-logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <form
        onSubmit={(e) => createAccount(e)}
        className="border-2 max-w-[400px] flex flex-col p-5 shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-5">Create Account</h3>
        <label className="text-[13px] font-bold">Name</label>
        <input
          className="border-2 border-black rounded-sm mb-3 mt-1 py-[2px] pl-2"
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-[13px] font-bold">
          Email or mobile phone number
        </label>
        <input
          className="border-2 border-black rounded-sm mb-3 mt-1 py-[2px] pl-2"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-[13px] font-bold">Password</label>
        <input
          className="border-2 border-black rounded-sm mb-3 mt-1 py-[2px] pl-2"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="text-[13px] font-bold">Re-enter password</label>
        <input
          className="border-2 border-black rounded-sm mb-3 mt-1 py-[2px] pl-2"
          type="repassword"
          name="repassword"
          id="repassword"
          value={repassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#F1C861] py-2 text-[13px] shadow-xl rounded-sm border border-black"
          onClick={(e) => createAccount(e)}
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
        </div>
      </form>
      <div className="w-full mt-5 grid place-items-center">
        <p className="text-[13px]  my-2">
          ----------- New to Amazon? -----------
        </p>
        <button className="bg-gray-200 w-full max-w-[400px]  py-2 text-[13px] shadow-xl rounded-sm border border-black">
          <Link to="/signin">Already have an account? Sign in</Link>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
