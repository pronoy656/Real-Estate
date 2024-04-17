import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();

const Hostel = ({ hostel }) => {
  const { id, image, title, price, status, location } = hostel;
  return (
    <div
      className="border rounded-2xl"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div>
        <div>
          <img
            className="h-60 w-full rounded-2xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={image}
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-3">Title:{title}</p>
          <p className="text-xl font-medium mt-3">Price:{price}$</p>
          <p className="text-xl font-medium mt-3">
            Status:{" "}
            <span className="bg-red-600 text-white p-2 rounded-2xl">
              {status}
            </span>
          </p>
          <p className="text-xl font-medium mt-3">Location:{location}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={`/hostelDetails/${id}`}>
          {" "}
          <button className="btn bg-[#ffa135] text-black">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default Hostel;
