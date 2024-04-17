import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "animate.css";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Hotel Rio | about</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/d6vbSnn/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce">
              Hello there
            </h1>
            <p className="mb-5 animate__animated animate__bounce">
              We gave you high-quality experience, personalized service, and a
              sense of exclusivity, encouraging visitors to learn more about
              what the hotel has to offer.
            </p>
            <button className="btn bg-[#ffa135] animate__animated animate__bounce">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-9 mb-9">
        <h1 className="text-[#ffa135] text-3xl font-semibold animate__animated animate__bounce">
          TESTIMONIALS
        </h1>
        <p className="text-2xl mt-4">Our client Review</p>
      </div>
      <div
        className="md:flex justify-center gap-x-7 "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="border w-72 relative bg-slate-200 text-black rounded-2xl mt-36 p-4">
          <div className="absolute -top-14 left-16 mb-5">
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.ibb.co/z4L8yY7/business-man-cute-pretty-guy-black-office-outfit-smiling-pointing-front.jpg"
              alt=""
            />
          </div>
          <div className="mt-14">
            <p className="text-lg font-medium">
              <span className="text-5xl text-[#ffa135] font-black">"</span>
              Exquisite stay! The impeccable service, luxurious amenities, and
              breathtaking views made our anniversary getaway unforgettable.
              We'll cherish every moment spent at this elegant.
              <span className="text-5xl text-[#ffa135] font-black">"</span>{" "}
            </p>
            <p className="mt-3 text-base">
              <span className="text-lg text-[#ffa135] font-medium">
                Ava Johnson
              </span>
              <span className="ml-2 font-medium"> Co founder at ABC</span>
            </p>
          </div>
        </div>
        <div className="border w-72 relative bg-slate-200 text-black rounded-2xl mt-36  p-4">
          <div className="absolute -top-14 left-12 mb-5">
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.ibb.co/Z2kFD3v/front-view-smiley-business-woman-with-sunglasses.jpg"
              alt=""
            />
          </div>
          <div className="mt-14">
            <p className="text-lg font-medium">
              <span className="text-5xl text-[#ffa135] font-black">"</span>
              Absolutely fantastic! From the warm welcome to the immaculate
              rooms and delicious dining options, our family vacation was
              nothing short of perfect. The staff we had a memorable stay.
              <span className="text-5xl text-[#ffa135] font-black">"</span>{" "}
            </p>
            <p className="mt-3 text-base">
              <span className="text-lg text-[#ffa135] font-medium">
                Ethan Ramirez
              </span>
              <span className="ml-2 font-medium"> Co founder at ABC</span>
            </p>
          </div>
        </div>
        <div className="border w-72 relative bg-slate-200 text-black rounded-2xl mt-36  p-4">
          <div className="absolute -top-14 left-12 mb-5">
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.ibb.co/v3Gg6d6/smiling-handsome-man-jacket-posing.jpg"
              alt=""
            />
          </div>
          <div className="mt-14">
            <p className="text-lg font-medium">
              <span className="text-5xl text-[#ffa135] font-black">"</span>
              Outstanding hospitality! This hotel exceeded all our expectations
              with its attention to detail and personalized service. We felt
              truly pampered throughout our stay and can't wait to return for
              another exceptional experience
              <span className="text-5xl text-[#ffa135] font-black">"</span>{" "}
            </p>
            <p className="mt-3 text-base">
              <span className="text-lg text-[#ffa135] font-medium">
                Sofia Chen
              </span>
              <span className="ml-2 font-medium"> Co founder at ABC</span>
            </p>
          </div>
        </div>
        <div className="border w-72 relative bg-slate-200 text-black rounded-2xl mt-36  p-4">
          <div className="absolute -top-14 left-12 mb-5">
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.ibb.co/Bjr2JrR/businesswoman-posing.jpg"
              alt=""
            />
          </div>
          <div className="mt-14">
            <p className="text-lg font-medium">
              <span className="text-5xl text-[#ffa135] font-black">"</span>
              Exquisite stay! The impeccable service, luxurious amenities, and
              breathtaking views made our anniversary getaway unforgettable.
              We'll cherish every moment spent at this elegant.
              <span className="text-5xl text-[#ffa135] font-black">"</span>{" "}
            </p>
            <p className="mt-3 text-base">
              <span className="text-lg text-[#ffa135] font-medium">
                Annie mari
              </span>
              <span className="ml-2 font-medium"> Co founder at ABC</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
