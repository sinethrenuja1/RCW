

import { useState, useEffect } from 'react';
import axios from 'axios';

const StockTable = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch stock data from backend when component mounts
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    try {
      // Make a GET request to fetch stock data from backend API
      const response = await axios.get('http://localhost:8800/api/stockRoute/showstock');
      // Set the fetched stock data in the state
      setStockData(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Stock Data</h2>
      <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
        <thead>
          <tr className="bg-gray-500 text-white font-bold tracking-wider">
            {/* <th className="p-4">Stock ID</th> */}
            <th className="p-4 border border-gray-200">Part ID</th>
            <th className="p-4 border border-gray-200">Name</th>
            <th className="p-4 border border-gray-200">Quantity</th>
            <th className="p-4 border border-gray-200">Price</th>
            <th className="p-4 border border-gray-200">Minimum Limit</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.id} className="hover:bg-gray-100">
              <td className="p-4 text-left border border-gray-200">{stock.part_id}</td>
              <td className="p-4 text-left border border-gray-200">{stock.name}</td>
              <td className="p-4 text-right border border-gray-200">{stock.price}</td>
              <td className="p-4 text-right border border-gray-200">{stock.quantity}</td>
              <td className="p-4 text-right border border-gray-200">{stock.min_limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;

