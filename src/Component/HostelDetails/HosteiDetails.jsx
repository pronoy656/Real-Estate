import { Link, useLoaderData, useParams } from "react-router-dom";

const HosteiDetails = () => {
  const allHostelDetails = useLoaderData();
  const { id } = useParams();
  const convertId = parseInt(id);
  const singleDetails = allHostelDetails.find(
    (singleDetails) => singleDetails.id === convertId
  );
  console.log(singleDetails);
  // console.log(id, allHostelDetails);
  return (
    <div className="md:flex justify-center gap-x-12 mt-14 mb-12">
      <div className="w-[573px]">
        <img className="rounded-2xl" src={singleDetails.image} alt="" />
      </div>
      <div className="w-[573px]">
        <p className="text-4xl font-bold mb-5">{singleDetails.title}</p>
        <p className="text-xl font-semibold text-red-400">
          Description:{" "}
          <span className="text-base font-medium text-black">
            {singleDetails.description}
          </span>
        </p>
        <p className="text-xl font-semibold text-red-400 mt-4 mb-3">
          Facilities
        </p>
        {singleDetails.facilities.map((facility) => (
          <li>
            <span className="text-xl font-medium ">{facility}</span>
          </li>
        ))}
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-red-400 mt-4">
            Price:{" "}
            <span className="text-xl font-medium text-black">
              {singleDetails.price}
            </span>
          </p>
          <p className="text-xl font-semibold text-red-400 mt-4">
            Status:
            <span className="text-xl font-medium bg-green-500 text-white p-2 rounded-2xl ml-2">
              {singleDetails.status}
            </span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-red-400 mt-4">
            Area:
            <span className="text-xl font-medium text-black ml-2">
              {singleDetails.area}
            </span>
          </p>
          <p className="text-xl font-semibold text-red-400 mt-4">
            Location:
            <span className="text-xl font-medium text-black ml-2">
              {singleDetails.location}
            </span>
          </p>
        </div>
        <Link to={"/"}>
          {" "}
          <button className="btn btn-outline mt-4 w-full">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default HosteiDetails;
