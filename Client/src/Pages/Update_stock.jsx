


import { useState } from 'react';
import axios from 'axios';

function Update_stock() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [partId, setPartId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity,setQuantity] = useState(0);
  const [min_limit,setMin_limit] = useState(0);


  // Function to fetch suggestions from backend
  const fetchSuggestions = (input) => {
    fetch(`http://localhost:8800/api/stockRoute/autoCompletePartId?input=${input}`)
      .then(response => response.json())
      .then(data => setSuggestions(data))
      .catch(error => console.error('Error fetching suggestions:', error));
  };

  // Function to handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Fetch suggestions when input value changes
    fetchSuggestions(value);
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = async (suggestion) => {
    console.log('Selected suggestion:', suggestion);
    setInputValue(suggestion);
    setSuggestions([]); // Clear suggestions after selection
    try {
      const response = await axios.get(`http://localhost:8800/api/stockRoute/stock/${suggestion}`);
      console.log(response.data);
      setName(response.data.name);
      setPrice(response.data.price);
      setPartId(response.data.part_id)
      setMin_limit(response.data.min_limit)
    } catch (err) {
      console.error(err);
    }
  };

  const updateStockDetails = async (partId, price,quantity,min_limit) => {
    try {
      const response = await axios.put("http://localhost:8800/api/stockRoute/update-stock", { partId, price, quantity, min_limit });
      console.log(response);
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-8 py-5">
        <h2 className="text-xl font-bold text-center">Update Stock</h2>
        {/* <form className="grid grid-cols-1 gap-4 mt-4" onSubmit={updateStockDetails}>
         */}
        <form className="grid grid-cols-1 gap-4 mt-4" onSubmit={(event) => {
          event.preventDefault();
          updateStockDetails(partId, price,quantity, min_limit);
        }}>
          <div className="flex items-center">
            <label htmlFor="partId" className="w-1/4 text-right font-medium">Part Id:</label>
            <input type="text" id="partId" name="partId" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" value={inputValue} onChange={handleChange} />
          </div>
          {/* Display suggestions */}
          {inputValue && suggestions.length > 0 && (
            <div className="border border-gray-300 rounded-md mt-2 p-2">
              {suggestions.map((suggestion, index) => (
                // <div key={index} className="border-b border-gray-300 py-2" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
                <div key={index} className="border-b border-gray-300 cursor-pointer py-2" onClick={() => handleSuggestionClick(suggestion.part_id)}>
                  {suggestion.part_id} - {suggestion.name}
                </div>
              ))}
            </div>
          )}
          <div>
          <div className='flex items-center'>
            <label htmlFor="itemName" className="w-1/4 text-right font-medium">Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-2/4 rounded-md border border-gray-300 px-3 py-2"
              value={name}
              readOnly
            />
            <label htmlFor="price" className="w-1/4 text-right font-medium">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-2/4 rounded-md border border-gray-300 px-3 py-2"
              value={price}
              onChange={(event) => setPrice(event.target.value)}

            />
            <label htmlFor="quantity" className="w-1/4 text-right font-medium">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-2/4 rounded-md border border-gray-300 px-3 py-2"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}

            />
            </div>
            <div className='py-5'>
            <label htmlFor="min_limit" className="w-1/4 text-right font-medium  ">Minimum limit in stock:</label>
            <input
              type="number"
              id="min_limit"
              name="min_limit"
              className="w-2/4 rounded-md border border-gray-300 px-3 py-2"
              value={min_limit}
              onChange={(event) => setMin_limit(event.target.value)}

            />
            </div>
          </div>
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>

  );
}

export default Update_stock;
