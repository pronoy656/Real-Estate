import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";

const LogIn = () => {
  const { userLogIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location from lopicajhbjhsgrbfjd", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogIn(email, password)
      .then((userLogin) => {
        console.log(userLogIn.user);

        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
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
