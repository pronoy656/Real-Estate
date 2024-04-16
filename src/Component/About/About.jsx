const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[#ffa135] text-3xl font-semibold">TESTIMONIALS</h1>
        <p className="text-2xl mt-4">Our client Review</p>
      </div>
      <div className="md:flex justify-center gap-x-7">
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
