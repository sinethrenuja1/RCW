

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockTable = () => {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     // Fetch stock data from backend when component mounts
//     fetchStockData();
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       // Make a GET request to fetch stock data from backend API
//       const response = await axios.get('http://localhost:8800/api/stockRoute/showstock');
//       // Set the fetched stock data in the state
//       setStockData(response.data);
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className='text-2xl'>Stock Data</h2>
//       <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
//         <thead>
//           <tr className="bg-gray-500 text-white font-bold tracking-wider">
//             {/* <th className="p-4">Stock ID</th> */}
//             <th className="p-4 border border-gray-200">Part ID</th>
//             <th className="p-4 border border-gray-200">Name</th>
//             <th className="p-4 border border-gray-200">Quantity</th>
//             <th className="p-4 border border-gray-200">Price</th>
//             <th className="p-4 border border-gray-200">Minimum Limit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stockData.map((stock) => (
//             <tr key={stock.id} className="hover:bg-gray-100">
//               <td className="p-4 text-left border border-gray-200">{stock.part_id}</td>
//               <td className="p-4 text-left border border-gray-200">{stock.name}</td>
//               <td className="p-4 text-right border border-gray-200">{stock.quantity}</td>
//               <td className="p-4 text-right border border-gray-200">{stock.min_limit}</td>
//               <td className="p-4 text-right border border-gray-200">{stock.price}</td>


//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockTable;




import { useState, useEffect } from 'react';
import axios from 'axios';

const ShowStock = () => {
  const [stockData, setStockData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter stock data based on search query (by Part ID or Name)
  const filteredStockData = stockData.filter((stock) =>
    stock.part_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl">Stock Data</h2>
      <input
        type="text"
        placeholder="Search by Part ID or Name"
        className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
        onChange={handleSearch}
      />
      <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
        <thead>
          <tr className="bg-gray-500 text-white font-bold tracking-wider">
            {/* <th className="p-4">Stock ID</th> */}
            <th className="p-4 border border-gray-200">Part ID</th>
            <th className="p-4 border border-gray-200">Name</th>
            <th className="p-4 border border-gray-200">Quantity</th>
            <th className="p-4 border border-gray-200">Minimum Limit</th>
            <th className="p-4 border border-gray-200">Price</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredStockData.map((stock) => (
            <tr key={stock.id} className="hover:bg-gray-100">
              <td className="p-4 text-left border border-gray-200">{stock.part_id}</td>
              <td className="p-4 text-left border border-gray-200">{stock.name}</td>
              <td className="p-4 text-right border border-gray-200">{stock.quantity}</td>
              <td className="p-4 text-right border border-gray-200">{stock.min_limit}</td>
              <td className="p-4 text-right border border-gray-200">{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStock;

