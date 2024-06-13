import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AddReplaceParts({ jobcard_id }) {
  const location = useLocation();

  const [formData] = useState({
    veh_num: location.state?.veh_num || '',
    jobcard_id: jobcard_id || '',
    mileage: location.state?.mileage || '',
    supervisor: location.state?.supervisor || ''
  });

  const [partInput, setPartInput] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [partSuggestions, setPartSuggestions] = useState([]);
  const [partsList, setPartsList] = useState([]);
  const [part_id, setPart_id] = useState('');

  useEffect(() => {
    if (formData.jobcard_id) {
      axios.get(`http://localhost:8800/api/jobRoutes/getPartsForJobCard/${formData.jobcard_id}`)
        .then(response => {
          setPartsList(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the parts!', error);
        });
    }
  }, [formData.jobcard_id]);

  useEffect(() => {
    const fetchPartSuggestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/jobRoutes/searchParts?q=${partInput}`);
        setPartSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching part suggestions:', error);
      }
    };

    if (partInput) {
      fetchPartSuggestions();
    } else {
      setPartSuggestions([]);
    }
  }, [partInput]);

  const addUsedPart = async () => {
    const newPart = {
      upart_id: part_id,
      ujobcard_id: jobcard_id,
      uworker_id: null,
      u_quantity: quantity,
      u_price: price,
    };

    try {
      const response = await axios.post('http://localhost:8800/api/jobRoutes/addUsedPart', newPart);
      alert(response.data.message);

      // Fetch updated parts list
      const updatedPartsList = await axios.get(`http://localhost:8800/api/jobRoutes/getPartsForJobCard/${formData.jobcard_id}`);
      setPartsList(updatedPartsList.data);

      // Clear form inputs
      handleClearForm();
    } catch (error) {
      console.error('Error adding used part:', error);
      alert('An error occurred while adding the part.');
    }
  };

  const handleClearForm = () => {
    setPartInput('');
    setPrice('');
    setQuantity('');
    setPart_id('');
  };

  const handleDeletePart = (index) => {
    const part = partsList[index];
  
    axios.delete('http://localhost:8800/api/jobRoutes/deleteUsedPart', {
      data: {
        upart_id: part.part_id,
        ujobcard_id: jobcard_id, 
        u_quantity: part.quantity,
      },
    })
      .then((response) => {
        console.log(response.data);
        
        const newPartsList = [...partsList];
        newPartsList.splice(index, 1);
        setPartsList(newPartsList);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="px-5 pt-4">
      <form className="flex items-center gap-4">
        <div className="flex flex-col">
          <label htmlFor="veh_num" className="text-black">Vehicle Number:</label>
          <input
            id="veh_num"
            type="text"
            value={formData.veh_num}
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="jobcard_id" className="text-black">Job Card ID:</label>
          <input
            id="jobcard_id"
            type="text"
            value={formData.jobcard_id}
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="mileage" className="text-black">Mileage:</label>
          <input
            id="mileage"
            type="text"
            value={formData.mileage}
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
          />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="supervisor" className="text-black">Supervisor:</label>
          <input
            id="supervisor"
            type="text"
            value={formData.supervisor}
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
          />
        </div>
      </form>
      <div className="mt-8">
        <div className="shadow-md bg-gray-100 rounded-lg p-3 mb-8">
          <h2 className="text-lg font-bold text-black">Add Parts to be replaced</h2>
          <div className="mt-1">
            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 relative">
                <label htmlFor="partInput" className="mr-2 text-black">Part name or ID:</label>
                <input
                  id="partInput"
                  type="text"
                  value={partInput}
                  onChange={(e) => setPartInput(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                />
                {partSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {partSuggestions.map(part => (
                      <div
                        key={part.part_id}
                        onClick={() => {
                          setPartInput(`${part.part_id} - ${part.name}`);
                          setPrice(part.price);
                          setPart_id(part.part_id);
                          setPartSuggestions([]);
                        }}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        <div className="text-black">{part.part_id} - {part.name}</div>
                        <div className="text-gray-500">{part.price}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center w-1/4">
                <label htmlFor="price" className="mr-2 text-black">Price:</label>
                <input
                  id="price"
                  type="text"
                  value={price}
                  readOnly
                  className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                />
              </div>
              <div className="flex items-center w-1/4">
                <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
                <input
                  id="quantity"
                  type="text"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-2">
              <button
                type="button"
                onClick={handleClearForm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={addUsedPart}
                className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Part
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-black">Adding Parts Table</h2>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-gray-700">Part Code</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-700">Unit Price</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partsList.map((part, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{part.part_id}</td>
                  <td className="border px-4 py-2">{part.price}</td>
                  <td className="border px-4 py-2">{part.quantity}</td>
                  <td className="border px-4 py-2">{part.price * part.quantity}</td>
                  <td className="border px-2 py-1 flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleDeletePart(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

AddReplaceParts.propTypes = {
  jobcard_id: PropTypes.string.isRequired,
};

export default AddReplaceParts;
