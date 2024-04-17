import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile, user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.updateName.value;
    const photoUrl = e.target.photo.value;
    console.log(name, photoUrl);
    updateUserProfile(name, photoUrl).then(() => {
      // Navigate after update
      setUser({ ...user, displayName: name, photoURL: photoUrl });
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/pQK3db3/update-profile.jpg')] mb-9">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Update Profile</h1>
            <p className="py-6">
              Choose your profile photo, easily <br /> you can update your
              profile with name and picture url
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProfile} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="updateName"
                  placeholder="Update your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
