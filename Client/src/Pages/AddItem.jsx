// import  { useState } from 'react';
// import axios from 'axios';

// function AddItem() {

//   const [partId, setPartId] = useState('');
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState(''); 
//   const [limit, setLimit] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Prepare the data to be sent
//     const data = {
//       part_id: partId,
//       name: name,
//       quantity: quantity,
//       min_limit: limit,
//       price: price
//     };

//     try {
//       // Send the data to the backend
//       const response = await fetch(' http://localhost:8800/api/stockRoute/stock', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       // Check if the request was successful
//       if (response.ok) {
//         console.log('Data sent successfully');
//         // Optionally, you can reset the form fields here
//         setPartId('');
//         setName('');
//         setQuantity('');
//         setLimit('');
//         setPrice('');
//       } else {
//         console.error('Failed to send data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error sending data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white shadow-md rounded-lg px-8 py-5">
//         <h2 className="text-xl font-bold text-center">Add Item</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-4">
//           <div  className="flex items-center">
//             <label htmlFor="partId" className="w-1/4 text-right font-medium">Part Id:</label>
//             <input type="text" id="partId" name="partId" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
//           </div>
//           <div className="flex items-center">
//             <label htmlFor="name" className="w-1/4 text-right font-medium">Name:</label>
//             <input type="text" id="name" name="name" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
//           </div>
        
//           <div className="flex items-center">
//             <label htmlFor="quantity" className="w-1/4 text-right font-medium">Quantity:</label>
//             <input type="number" id="quantity" name="quantity" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
//           </div>
//           <div className="flex items-center">
//             <label htmlFor="minimum_limit" className="w-1/4 text-right font-medium">Minimum Limit in stock :</label>
//             <input type="number" id="limit" name="limit" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" /> 
//           </div>
//           <div className="flex items-center">
//             <label htmlFor="minimum_limit" className="w-1/4 text-right font-medium">Price</label>
//             <input type="number" id="Price" name="Price" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" /> 
//           </div>
//           <div className="flex items-center justify-center">
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">Add Item</button>
//         </div>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default AddItem;





import { useState } from 'react';
import axios from 'axios';



function AddItem() {
  const [inputs, setInputs] = useState({
    part_id: '',
    name: '',
    quantity: '',
    min_limit: '',
    price: ''
  });

  const [error, setError] = useState(null);


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/stockRoute/stock', inputs);
      // Redirect to success page after successful submission
      console.log('Data sent successfully');
      
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
    <div className='flex'>
    

      <div className="mx-auto w-full px-4 py-8  rounded-lg shadow-md">
   
      <div className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
        <h1 className="text-2xl mb-4 text-center">Add Item</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="part_id" className="block text-gray-700 text-sm font-bold mb-2">Part Id:</label>
            <input
              type="text"
              id="partId"
              name="part_id"
              value={inputs.partId}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Part Id"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={inputs.quantity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Quantity"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="min_limit" className="block text-gray-700 text-sm font-bold mb-2">Minimum Limit in stock:</label>
            <input
              type="number"
              id="limit"
              name="min_limit"
              value={inputs.limit}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Minimum Limit"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Price"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Item
            </button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </form>
      </div>
    </div>
    </div>
    
    </>
 
  );
}

export default AddItem;