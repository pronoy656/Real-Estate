import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();

const Hostel = ({ hostel }) => {
  const { id, image, title, price, status, location } = hostel;
  return (
    <div className="border w-1/3 " data-aos="zoom-in" data-aos-duration="1000">
      <h1>this is single hostel:{hostel.length}</h1>
      <div className=" flex">
        <div className="w-1/2">
          <img data-aos="zoom-in" data-aos-duration="1000" src={image} alt="" />
        </div>
        <div>
          <p>Title:{title}</p>
          <p>Price:{price}$</p>
          <p>Status:{status}</p>
          <p>Location:{location}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={`/hostelDetails/${id}`}>
          {" "}
          <button className="btn btn-primary">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default Hostel;
