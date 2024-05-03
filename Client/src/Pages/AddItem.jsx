


// import { useState } from 'react';
// import axios from 'axios';



// function AddItem() {
//   const [inputs, setInputs] = useState({
//     part_id: '',
//     name: '',
//     quantity: '',
//     min_limit: '',
//     price: ''
//   });

//   const [error, setError] = useState(null);


//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8800/api/stockRoute/stock', inputs);
//       // Redirect to success page after successful submission
//       console.log('Data sent successfully');
//       alert('Item added successfully');
//       window.location.reload();
      
//     } catch (err) {
//       setError(err.response.data.error);
//       alert(`An error occurred: ${err.response.data.error}`);
//     }
//   };

//   return (
//     <>
//     <div className='flex'>
    

//       <div className="mx-auto w-full px-4 py-8  rounded-lg shadow-md">
   
//       <div className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
//         <h1 className="text-2xl mb-4 text-center">Add Item</h1>
//         <form className="mb-4" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="part_id" className="block text-gray-700 text-sm font-bold mb-2">Part Id:</label>
//             <input
//               type="text"
//               id="partId"
//               name="part_id"
//               value={inputs.partId}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Part Id"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={inputs.name}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               name="quantity"
//               value={inputs.quantity}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Quantity"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="min_limit" className="block text-gray-700 text-sm font-bold mb-2">Minimum Limit in stock:</label>
//             <input
//               type="number"
//               id="limit"
//               name="min_limit"
//               value={inputs.limit}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Minimum Limit"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={inputs.price}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Price"
//               required
//             />
//           </div>
          
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Add Item
//             </button>
//             {error && <p className="text-red-500 text-xs italic">{error}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
    
//     </>
 
//   );
// }

// export default AddItem;

// import { useState } from 'react';
// import axios from 'axios';

// function AddItem() {
//   const [inputs, setInputs] = useState({
//     part_id: '',
//     name: '',
//     quantity: '',
//     min_limit: '',
//     price: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8800/api/stockRoute/stock', inputs);
//       console.log('Data sent successfully');
//       alert('Item added successfully');
//       window.location.reload();
//     } catch (err) {
//       setError(err.response.data.error);
//       alert(`An error occurred: ${err.response.data.error}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="w-full max-w-md">
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="part_id">
//               Part Id
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="part_id"
//               type="text"
//               placeholder="Part Id"
//               name="part_id"
//               value={inputs.part_id}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={inputs.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
//               Quantity
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="quantity"
//               type="number"
//               placeholder="Quantity"
//               name="quantity"
//               value={inputs.quantity}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="min_limit">
//               Minimum Limit in stock
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="min_limit"
//               type="number"
//               placeholder="Minimum Limit"
//               name="min_limit"
//               value={inputs.min_limit}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
//               Price
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="price"
//               type="number"
//               placeholder="Price"
//               name="price"
//               value={inputs.price}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//               Add Item
//             </button>
//             {error && <p className="text-red-500 text-xs italic">{error}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
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
      alert('Item added successfully');
      window.location.reload();
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-2xl font-bold text-center">Add New Item</h2>
          {error && <p className="text-red-500 text-xs italic text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="part_id">
              Part Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="part_id"
              type="text"
              placeholder="Part Id"
              name="part_id"
              value={inputs.part_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={inputs.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="min_limit">
              Minimum Limit in stock
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="min_limit"
              type="number"
              placeholder="Minimum Limit"
              name="min_limit"
              value={inputs.min_limit}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Price"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;