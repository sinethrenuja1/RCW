import { useState } from 'react';
import axios from 'axios';

function Update_stock() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [partId, setPartId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [min_limit, setMin_limit] = useState(0);

  const fetchSuggestions = (input) => {
    fetch(`http://localhost:8800/api/stockRoute/autoCompletePartId?input=${input}`)
      .then(response => response.json())
      .then(data => setSuggestions(data))
      .catch(error => console.error('Error fetching suggestions:', error));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = async (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    try {
      const response = await axios.get(`http://localhost:8800/api/stockRoute/stock/${suggestion}`);
      setName(response.data.name);
      setPrice(response.data.price);
      setPartId(response.data.part_id)
      setMin_limit(response.data.min_limit)
    } catch (err) {
      console.error(err);
    }
  };


  const updateStockDetails = async (partId, price, quantity, min_limit) => {
    try {
      const response = await axios.put("http://localhost:8800/api/stockRoute/update-stock", { partId, price, quantity, min_limit });
      console.log(response);
      trackStockUpdate(partId, quantity);
      window.location.reload();
      alert('Stock updated successfully');
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };


  const trackStockUpdate = async (partId, quantity) => {
    const date = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    try {
      const response = await axios.post('http://localhost:8800/api/stockRoute/trackstock', { partId, date, quantity });
      console.log(response);
    } catch (error) {
      console.error('Error tracking stock update:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Stock</h2>
        <form className="grid grid-cols-1 gap-6" onSubmit={(event) => {
          event.preventDefault();
          updateStockDetails(partId, price, quantity, min_limit);
        }}>
          <div className="flex items-center">
            <label htmlFor="partId" className="text-sm text-gray-600 font-medium mb-1">Part Id:</label>
            <input type="text" id="partId" name="partId" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={inputValue} onChange={handleChange} />
          </div>
          {inputValue && suggestions.length > 0 && (
            <div className="border border-gray-300 rounded-md p-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="cursor-pointer py-2" onClick={() => handleSuggestionClick(suggestion.part_id)}>
                  {suggestion.part_id} - {suggestion.name}
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-col">
            <label htmlFor="itemName" className="text-sm text-gray-500 font-medium mb-1">Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              readOnly
            />
          </div>
          <div className="flex flex-co">
            <label htmlFor="price" className="text-sm text-gray-500 font-medium mb-1">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="flex flex-co">
            <label htmlFor="quantity" className="text-sm text-gray-500 font-medium mb-1">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="min_limit" className="text-sm text-gray-500 font-medium mb-1">Minimum limit in stock:</label>
            <input
              type="number"
              id="min_limit"
              name="min_limit"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={min_limit}
              onChange={(event) => setMin_limit(event.target.value)}
            />
          </div>
          <button className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update_stock;
