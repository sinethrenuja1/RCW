import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShopHeader from '../../Components/shopheader';

const TotalUsedParts = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [usedPartsData, setUsedPartsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsedPartsData = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start date and end date.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8800/api/report/total-used-parts', {
        params: {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
        },
      });
      setUsedPartsData(response.data);
    } catch (error) {
      console.error('Error fetching used parts data:', error);
      setError('Error fetching used parts data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ShopHeader pageName="Total Used Parts" />
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl">Total Used Parts</h2>
        <div className="flex space-x-4 mt-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            onClick={fetchUsedPartsData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Records
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {loading ? (
          <p className="mt-4">Loading...</p>
        ) : (
          <>
            {startDate && endDate && (
              <div className="mt-4">
                <p className="text-3xl font-bold ">
                  Showing records from{' '}
                  {startDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  to{' '}
                  {endDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            )}
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow mt-4">
              <thead>
                <tr className="bg-gray-400 text-white font-bold tracking-wider">
                  <th className="p-4 border border-gray-200">Part ID</th>
                  <th className="p-4 border border-gray-200">Name</th>
                  <th className="p-4 border border-gray-200">Quantity Used</th>
                </tr>
              </thead>
              <tbody>
                {usedPartsData.map((data) => (
                  <tr key={data.upart_id} className="hover:bg-gray-100">
                    <td className="p-4 text-left border border-gray-200">{data.upart_id}</td>
                    <td className="p-4 text-left border border-gray-200">{data.name}</td>
                    <td className="p-4 text-right border border-gray-200">{data.total_used}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default TotalUsedParts;
