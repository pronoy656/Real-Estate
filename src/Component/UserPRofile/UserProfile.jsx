import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-400 mb-6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-12">
            <h1 className="text-5xl font-bold ">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={"/updateProfile"}>
              {" "}
              <button className="btn btn-primary">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
