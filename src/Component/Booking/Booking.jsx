import { FaHotel } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Marquee from "react-fast-marquee";

const Booking = () => {
  return (
    <div>
      <img
        className="h-[480px] w-full"
        src="https://i.ibb.co/vDxkzkp/8720250.jpg"
        alt=""
      />
      <p className="text-center mt-16 text-5xl font-medium text-black">
        Coupon Code
      </p>
      <div className="flex justify-center items-center gap-x-28 mt-14 animate__heartBeat">
        <div>
          <img
            className="w-[400px] h-[200px]"
            src="https://i.ibb.co/yQY0nQC/ticket-2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[400px] h-[200px]"
            src="https://i.ibb.co/kX7fDH8/ticket.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Service section */}

      <div>
        <p className="text-center mt-20 text-5xl font-medium text-black">
          Our Services
        </p>
        <Marquee pauseOnHover autoFill>
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
        </Marquee>
      </div>

      {/* accordion */}
      <p className="text-center mt-20 text-4xl font-medium text-black animate__animated animate__bounce">
        Feel Free To Ask <br />
        <span className="text-black animate__animated animate__bounce">
          Any Question ?
        </span>{" "}
      </p>
      <div className="md:flex justify-center gap-x-20 mt-16 mb-16 items-center">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/dJgmPch/png-transparent-question-mark-red-question-mark-capitalization-number-question-check-mark-thumbnail.png"
            alt=""
          />
        </div>
        <div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              "Does the hotel offer any special amenities or services for
              families with children?"
            </div>
            <div className="collapse-content">
              <p className="text-lg text-[#ffa135]">
                "Yes, we have several family-friendly amenities and services
                available. We offer a Kids' Club where children can enjoy
                supervised activities and games, providing parents with some
                leisure time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              "What options does the hotel provide for transportation to and
              from the airport?"
            </div>
            <div className="collapse-content">
              <p className="text-lg text-[#ffa135]">
                "We offer convenient airport shuttle services for our guests.
                Our shuttle runs at regular intervals to and from the airport,
                providing a hassle-free transportation option for arrivals and
                departures. Guests can simply inform us of their flight details,
                and we'll make sure they are greeted upon arrival and
                transported to the hotel. For guests who prefer private
                transportation or require specific pickup times, we can arrange
                for taxi or car rental services as well."
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              "Are there any recreational facilities or activities available at
              the hotel for guests looking to unwind or stay active during their
              stay?"
            </div>
            <div className="collapse-content">
              <p className="text-lg text-[#ffa135]">
                {" "}
                "Yes, we offer a variety of recreational facilities and
                activities to cater to our guests' preferences. Our hotel
                features a state-of-the-art fitness center equipped with cardio
                machines, free weights, and exercise classes for those looking
                to stay active. For guests seeking relaxation, we have a
                luxurious spa where they can indulge in massages, facials, and
                other wellness treatments. Additionally, we organize cultural
                and recreational activities such as cooking classes, wine
                tastings, and guided tours to help guests immerse themselves in
                the local culture and enjoy their stay to the fullest."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
