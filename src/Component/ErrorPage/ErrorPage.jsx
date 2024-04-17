import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-9">
        <img
          className="h-[450px] w-[450px]"
          src="https://i.ibb.co/xD5dS5k/error.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center mt-10">
        <Link to={"/"}>
          <button className="btn bg-red-700 text-white">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
