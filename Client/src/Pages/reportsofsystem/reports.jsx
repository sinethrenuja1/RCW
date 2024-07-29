


import React from "react";
import { useNavigate } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";

function Reports() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ShopHeader pageName="Reports" />
      <div className="container mx-auto py-8">
        <div className="flex flex-col space-y-6">
          <Card
            title="Low Stock Report"
            description="The following report highlights items in our inventory that have fallen below their designated minimum quantities, indicating low stock levels."
            onClick={() => handleNavigation("/lowstock")}
          />
          <Card
            title="Purchasing Report"
            description="Below is a detailed report listing the parts purchased during the specified timeframe."
            onClick={() => handleNavigation("/buyingReport")}
          />
          <Card
            title="Stock Release report"
            description="This report provides an overview of the total parts used in various time frames."
            onClick={() => handleNavigation("/usedpartReport")}
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, description, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-md  m-4">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onClick}
    >
      Click Here
    </button>
  </div>
);

export default Reports;
