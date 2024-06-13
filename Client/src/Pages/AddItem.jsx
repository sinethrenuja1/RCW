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
//       alert('Item added successfully');
//       window.location.reload();
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <div className="w-full max-w-md">
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="mb-4 text-2xl font-bold text-center">Add New Item</h2>
//           {error && <p className="text-red-500 text-xs italic text-center mb-4">{error}</p>}
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
//           <div className="flex items-center justify-between mt-4">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//               Add Item
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
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
//       alert('Item added successfully');
//       window.location.reload();
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r">
//       <div className="w-full max-w-md">
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
//           <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Add New Item</h2>
//           {error && <p className="text-red-500 text-sm italic text-center mb-4">{error}</p>}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="part_id">
//               Part Id
//             </label>
//             <input
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
//               id="price"
//               type="number"
//               placeholder="Price"
//               name="price"
//               value={inputs.price}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between mt-6">
//             <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" type="submit">
//               Add Item
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddItem;


// import { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//       toast.success('Item added successfully');
//       setTimeout(() => window.location.reload(), 3000); // Delay reload to let the toast be visible
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r">
//       <ToastContainer />
//       <div className="w-full max-w-md">
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
//           <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Add New Item</h2>
//           {error && <p className="text-red-500 text-sm italic text-center mb-4">{error}</p>}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="part_id">
//               Part Id
//             </label>
//             <input
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
//               className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
//               id="price"
//               type="number"
//               placeholder="Price"
//               name="price"
//               value={inputs.price}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between mt-6">
//             <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" type="submit">
//               Add Item
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddItem;



import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success('Item added successfully');
      setTimeout(() => window.location.reload(), 3000); // Delay reload to let the toast be visible
    } catch (err) {
      toast.error(err.response.data.error || 'Failed to add item');
      setError(err.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r">
      <ToastContainer />
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Add New Item</h2>
          {error && <p className="text-red-500 text-sm italic text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="part_id">
              Part Id
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
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
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              id="price"
              type="number"
              placeholder="Price"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
