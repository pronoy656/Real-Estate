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
    <div>
      <h1>This is all hostels details page</h1>
      <div className="">
        {hostels.map((hostel) => (
          <Hostel key={hostel.id} hostel={hostel}></Hostel>
        ))}
      </div>
    </div>
  );
};

export default AllHostels;
