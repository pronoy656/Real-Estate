import { useLoaderData, useParams } from "react-router-dom";

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
    <div>
      <img src={singleDetails.image} alt="" />
      <p>{singleDetails.title}</p>
      <p>{singleDetails.description}</p>
      <p>{singleDetails.price}</p>
      <p>{singleDetails.status}</p>
      <p>{singleDetails.area}</p>
      <p>{singleDetails.location}</p>
    </div>
  );
};

export default HosteiDetails;
