import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/8Yy1q1S/hotel.jpg')]  ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          {/* <img src={"https://i.ibb.co/yhL09F2/1237.jpg"} alt="" /> */}
          <div className="flex justify-center">
            <img
              className="w-[85px] h-[85px] rounded-full"
              src="https://i.ibb.co/pn2Vnq6/hotellogo.webp"
              alt=""
            />
          </div>
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Login</button>
            </div>
            <p>
              Do You Have any Account? Please{" "}
              <Link to={"/register"}>
                <span className="text-red-600">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
