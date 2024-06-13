import { useState, useEffect } from 'react';
import axios from 'axios';
import ShopHeader from '../../Components/shopheader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TotalBuying = () => {
  const [buyingData, setBuyingData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetchBuyingData();
  }, []);

  const fetchBuyingData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/report/total-buying');
      setBuyingData(response.data);
    } catch (error) {
      console.error('Error fetching buying data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const filteredBuyingData = buyingData.filter((data) => {
    const matchesSearch = data.part_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          data.part_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDateRange = (!startDate || new Date(data.buying_date) >= startDate) &&
                             (!endDate || new Date(data.buying_date) <= endDate);
    return matchesSearch && matchesDateRange;
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Buying Date", "Part ID", "Part Name", "Quantity"];
    const tableRows = [];

    filteredBuyingData.forEach(data => {
      const rowData = [
        new Date(data.buying_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
        data.part_id,
        data.part_name,
        data.quantity
      ];
      tableRows.push(rowData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Total Buying Information", 14, 15);
    doc.save(`total_buying_data.pdf`);
  };

  return (
    <div>
      <ShopHeader pageName="Total Buying Information" />
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl">Total Buying Information</h2>
        <div className="flex space-x-4 mt-4">
          <input
            type="text"
            placeholder="Search by Part ID or Name"
            className="border border-gray-300 rounded-md px-3 py-2 w-1/4"
            onChange={handleSearch}
          />
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            isClearable
            placeholderText="Select date range"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
          <thead>
            <tr className="bg-gray-400 text-white font-bold tracking-wider">
              <th className="p-4 border border-gray-200">Buying Date</th>
              <th className="p-4 border border-gray-200">Part ID</th>
              <th className="p-4 border border-gray-200">Part Name</th>
              <th className="p-4 border border-gray-200">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredBuyingData.map((data) => (
              <tr key={data.part_id} className="hover:bg-gray-100">
                <td className="p-3 text-center border border-gray-200">
                  {new Date(data.buying_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </td>
                <td className="p-3 text-center border border-gray-200">{data.part_id}</td>
                <td className="p-3 text-center border border-gray-200">{data.part_name}</td>
                <td className="p-3 text-center border border-gray-200">{data.quantity}</td>
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

export default TotalBuying;
