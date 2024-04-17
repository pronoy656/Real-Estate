import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const { userLogIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  // State declare for password validation
  const [loginError, setLoginError] = useState("");
  const [loginSuccessfull, setLogInSuccessFull] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location from lopicajhbjhsgrbfjd", location);
  // State declaration for toggle eye button
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // // error message vanish after success
    setLoginError("");
    setLogInSuccessFull("");

    // password validation before call firebase
    if (password.length < 6) {
      setLoginError("Password Should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setLoginError("Must have an Upper case letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      setLoginError("Must have an lower case letter in the password");
      return;
    }

    userLogIn(email, password)
      .then((userLogin) => {
        console.log(userLogIn.user);
        setLogInSuccessFull("Login Successfully");
        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((googleUser) => {
        const userGoogle = googleUser.user;
        console.log(userGoogle);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };
  // github signin

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((githubUser) => {
        const userGithub = githubUser.user;
        console.log(userGithub);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/8Yy1q1S/hotel.jpg')]  ">
      <Helmet>
        <title>Hotel Rio | Log in</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row gap-x-20">
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
            <div className="form-control relative">
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
                className="absolute mt-12 right-4 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            {loginError && (
              <p className="text-red-600 font-medium mt-3">{loginError}</p>
            )}
            {loginSuccessfull && (
              <p className="text-green-500 font-medium">{loginSuccessfull}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Login</button>
            </div>
            <div className="text-center mt-3 text-base">
              <p className="text-lg font-semibold">
                -------------------Or--------------------
              </p>
            </div>
            <div className="flex justify-center gap-x-6 mt-4 mb-4">
              <div>
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn btn-outline rounded-full"
                >
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://i.ibb.co/nDFx6YT/png-clipart-google-google-thumbnail.png"
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={handleSignInWithGithub}
                  className="btn btn-outline rounded-full"
                >
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://i.ibb.co/c2xSwqw/Git-Hub-Mark-ea2971cee799.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <p className="text-base font-semibold">
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
