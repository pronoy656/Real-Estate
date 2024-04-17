import React from "react";

const TicketCode = () => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src="" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">jikjnf</div>
          <div className="text-gray-700 text-base mb-2">
            Coupon Code: '1205'
          </div>
          <div className="text-gray-700 text-base mb-2">Discount: 50%</div>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCode;
