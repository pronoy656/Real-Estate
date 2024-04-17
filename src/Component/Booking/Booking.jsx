import { FaHotel } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Booking = () => {
  return (
    <div>
      <img
        className="h-[480px] w-full"
        src="https://i.ibb.co/vDxkzkp/8720250.jpg"
        alt=""
      />
      {/* Service section */}
      <div>
        <p className="text-center mt-20 text-5xl font-medium text-black">
          Our Services
        </p>
        <div className="md:flex justify-center gap-x-24 mt-11">
          <div>
            <div className="text-6xl text-[#ffa135] ">
              <FaHotel />
            </div>
            <p className="mt-4 text-xl font-medium">
              Room <br /> Service
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <FaBusinessTime />
            </div>
            <p className="mt-4 text-xl font-medium">
              Private Business <br /> Center
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <MdOutlinePets />
            </div>
            <p className="mt-4 text-xl font-medium">
              Pet-Friendly <br /> Amenities
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <MdOutlineSportsTennis />
            </div>
            <p className="mt-4 text-xl font-medium">
              Sports <br /> Facilities
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <FaParking />
            </div>
            <p className="mt-4 text-xl font-medium">
              Parking <br /> Facilities
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <FaHospital />
            </div>
            <p className="mt-4 text-xl font-medium">
              Hospitality <br /> Service
            </p>
          </div>
          <div>
            <div className="text-6xl text-[#ffa135]">
              <MdOutlineSecurity />
            </div>
            <p className="mt-4 text-xl font-medium">
              24 Hour <br /> Security
            </p>
          </div>
        </div>
      </div>
      {/* accordion */}
      <p className="text-center mt-20 text-4xl font-medium text-black">
        Feel Free To Ask <br />
        <span className="text-black">Any Question ?</span>{" "}
      </p>
      <div className="md:flex justify-center gap-x-14 mt-16 mb-16 items-center">
        <div>
          <img
            src="https://i.ibb.co/dJgmPch/png-transparent-question-mark-red-question-mark-capitalization-number-question-check-mark-thumbnail.png"
            alt=""
          />
        </div>
        <div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
