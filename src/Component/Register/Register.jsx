import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
  };
  // https://i.ibb.co/G2V0nVv/8245.jpg
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/wyt6dxb/3.jpg')]">
      <div className="hero-content flex-col lg:flex-row ml-24 gap-x-64">
        <div className="border w-[560px] -mt-36">
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
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-14">
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
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
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
