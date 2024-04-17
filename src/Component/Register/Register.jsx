import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // state declare for show eye icon
  const [showPassword, setShowPassword] = useState(false);
  // State declare for password validation
  const [registerError, setRegisterError] = useState("");
  // state declare for success message
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // error message vanish after success
    setRegisterError("");
    setSuccess("");

    // password validation before call firebase
    if (password.length < 6) {
      setRegisterError("Password Should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Must have an Upper case letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Must have an lower case letter in the password");
      return;
    }

    // userCreate
    createUser(email, password)
      .then((userCreate) => {
        const user = userCreate.user;
        console.log(user);
        setSuccess("Successfully account Created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/wyt6dxb/3.jpg')]">
      <Helmet>
        <title>Hotel Rio | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row ml-24 gap-x-64">
        <div className="border md:w-[560px] md:-mt-36">
          <img
            className="w-[85px] h-[85px] rounded-full mb-4"
            src="https://i.ibb.co/pn2Vnq6/hotellogo.webp"
            alt=""
          />
          <p className="text-5xl font-bold text-black mb-4">Dear Guest ,</p>
          <p className="text-5xl font-bold text-black">
            Welcome To <span className="text-[#FEA82F]">Our Hotel</span>
          </p>

          <button className="btn btn-outline mt-6 rounded-3xl relative">
            Available on
            <div className="absolute  right-0 top-4">
              <BsArrowRight />
            </div>
          </button>
          <div className="flex gap-x-9 mt-6 text-2xl">
            <BsFacebook />
            <GrInstagram />
            <BsTwitterX />
            <BsWhatsapp />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ml-14">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="photo"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute mt-12 right-8 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            {registerError && (
              <p className="font-medium mt-3 text-red-600">{registerError}</p>
            )}
            {success && (
              <p className="font-medium mt-3 text-green-500">{success}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Register</button>
            </div>
            <p>
              Already Have an Account? Please{" "}
              <Link to={"/login"}>
                <span className="text-red-600">Log in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
