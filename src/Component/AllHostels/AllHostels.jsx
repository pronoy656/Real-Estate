import React, { useEffect, useState } from "react";
import Hostel from "../Hostel/Hostel";

const AllHostels = () => {
  const [hostels, setHostels] = useState([]);
  useEffect(() => {
    fetch("https://pronoy656.github.io/assignment-9/loadData.json")
      .then((res) => res.json())
      .then((data) => setHostels(data));
  }, []);
  return (
    <div className="mt-16 flex gap-5 space-y-5">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-2/3">
        {hostels.map((hostel) => (
          <Hostel key={hostel.id} hostel={hostel}></Hostel>
        ))}
      </div>
      <p className="border w-1/3">hiihihihihihiihihi</p>
    </div>
  );
};

export default AllHostels;
