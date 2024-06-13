import { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ShopHeader from '../../Components/shopheader';

const LowStock = () => {
  const [stockData, setStockData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchLowStockData();
  }, []);

  const fetchLowStockData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/stockRoute/lowstock');
      setStockData(response.data);
    } catch (error) {
      console.error('Error fetching low stock data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStockData = stockData.filter((stock) =>
    stock.part_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Part Code", "Name", "Quantity", "Minimum Limit", "Price"];
    const tableRows = [];

    filteredStockData.forEach(stock => {
      const stockData = [
        stock.part_id,
        stock.name,
        stock.quantity,
        stock.min_limit,
        stock.price
      ];
      tableRows.push(stockData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Low Stock Data", 14, 15);
    doc.save(`low_stock_data.pdf`);
  };

  return (
    <div>
        <ShopHeader pageName="Low Stock Data" />
    <div className="container bg-blue-50 mx-auto px-4 py-8">
      <h2 className="text-2xl">Low Stock Data</h2>
      <input
        type="text"
        placeholder="Search by Part Code or Name"
        className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
        onChange={handleSearch}
      />
      <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
        <thead>
          <tr className="bg-gray-400 text-white font-bold tracking-wider">
            <th className="p-4 border border-gray-200">Part Code</th>
            <th className="p-4 border border-gray-200">Name</th>
            <th className="p-4 border border-gray-200">Quantity</th>
            <th className="p-4 border border-gray-200">Minimum Limit</th>
            <th className="p-4 border border-gray-200">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredStockData.map((stock) => (
            <tr key={stock.part_id} className="hover:bg-gray-100">
              <td className="p-4 text-left border border-gray-200">{stock.part_id}</td>
              <td className="p-4 text-left border border-gray-200">{stock.name}</td>
              <td className="p-4 text-right border border-gray-200">{stock.quantity}</td>
              <td className="p-4 text-right border border-gray-200">{stock.min_limit}</td>
              <td className="p-4 text-right border border-gray-200">{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generatePDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Download PDF
      </button>
    </div>
    </div>
  );
};

export default LowStock;
