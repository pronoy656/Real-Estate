const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[420px] relative">
          <img
            src="https://i.ibb.co/k828xSh/Screenshot-2024-04-15-221550.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-[420px]">
          <img src="https://i.ibb.co/YknhRQ5/5251259.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full  h-[420px]">
          <img src="https://i.ibb.co/nP1dq7K/5245971.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full h-[420px]">
          <img
            src="https://i.ibb.co/Dkhq6pv/Screenshot-2024-04-15-220643.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
