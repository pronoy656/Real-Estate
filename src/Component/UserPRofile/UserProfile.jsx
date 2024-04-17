import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            <img
              className="rounded-full w-[530px] h-[400px]"
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type={user.displayName}
                  placeholder={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Photo Url</span>
                </label>
                <input
                  type="photo"
                  placeholder={user.photoURL}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <Link to={"/updateProfile"}>
                  {" "}
                  <button className="btn bg-black text-white w-full">
                    Update Profile
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
