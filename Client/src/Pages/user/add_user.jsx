// import { useState } from 'react';
// import axios from 'axios';
// import ShopHeader from "../../Components/shopheader";

// const AddUser = () => {
//   const [formData, setFormData] = useState({
//     u_name: '',
//     u_nic: '',
//     u_connum: '',
//     u_email: '',
//     u_address: '',
//     user_name: '',
//     u_password: '',
//     acc_type: 'supervisor',  // default value
//     u_birthday: ''
//   });

//   const handleChange = (event) => {
//     // const { name, value } = e.target;
//     // setFormData({ ...formData, [name]: value });
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8800/api/userRoutes/addUser', { ...formData });
//       console.log('User added:', response.data);
//       alert('User added successfully');
//       window.location.reload();
//     } catch (error) {
//       console.error('Error adding user:', error);
//       alert('Error adding user');
//     }
//   };

//   return (
//     <div>
//       <ShopHeader pageName="Add User" />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//           <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="u_name" className="block text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="u_name"
//                 id="u_name"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_nic" className="block text-gray-700">NIC</label>
//               <input
//                 type="text"
//                 name="u_nic"
//                 id="u_nic"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_nic}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_connum" className="block text-gray-700">Contact Number</label>
//               <input
//                 type="tel"
//                 name="u_connum"
//                 id="u_connum"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_connum}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_email" className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="u_email"
//                 id="u_email"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_address" className="block text-gray-700">Address</label>
//               <input
//                 type="text"
//                 name="u_address"
//                 id="u_address"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-gray-700">Username</label>
//               <input
//                 type="text"
//                 name="user_name"
//                 id="user_name"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.user_name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_password" className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="u_password"
//                 id="u_password"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="acc_type" className="block text-gray-700">Account Type</label>
//               <select
//                 name="acc_type"
//                 id="acc_type"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.acc_type}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="manager">Manager</option>
//                 <option value="supervisor">Supervisor</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="u_birthday" className="block text-gray-700">Birthday</label>
//               <input
//                 type="date"
//                 name="u_birthday"
//                 id="u_birthday"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={formData.u_birthday}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex justify-end">
//               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//                 Add User
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;


import { useState } from 'react';
import axios from 'axios';
import ShopHeader from "../../Components/shopheader";

const AddUser = () => {
  const [formData, setFormData] = useState({
    u_name: '',
    u_nic: '',
    u_connum: '',
    u_email: '',
    u_address: '',
    user_name: '',
    u_password: '',
    acc_type: 'supervisor',  // default value
    u_birthday: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate NIC No
    if (name === 'u_nic') {
      const nicRegex = /^\d{9}[VvXx]$|^\d{12}$/;
      if (!nicRegex.test(value)) {
        setErrors({ ...errors, u_nic: 'Invalid NIC number format.' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.u_nic;
        setErrors(newErrors);
      }
    }

    // Validate Telephone Number
    if (name === 'u_connum') {
      const telRegex = /^[0-9]{10}$/;
      if (!telRegex.test(value)) {
        setErrors({ ...errors, u_connum: 'Invalid telephone number. It must be 10 digits long and contain only numbers.' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.u_connum;
        setErrors(newErrors);
      }
    }

    // Validate Email
    if (name === 'u_email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, u_email: 'Invalid email address.' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.u_email;
        setErrors(newErrors);
      }
    }

    // Validate Password (min 8 characters)
    if (name === 'u_password') {
      if (value.length < 8) {
        setErrors({ ...errors, u_password: 'Password must be at least 8 characters long.' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.u_password;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform final validation before submitting
    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8800/api/userRoutes/addUser', { ...formData });
      console.log('User added:', response.data);
      alert('User added successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user');
    }
  };

  return (
    <div>
      <ShopHeader pageName="Add User" />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="u_name" className="block text-gray-700">Name</label>
              <input
                type="text"
                name="u_name"
                id="u_name"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.u_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="u_nic" className="block text-gray-700">NIC</label>
              <input
                type="text"
                name="u_nic"
                id="u_nic"
                className={`mt-1 p-2 w-full border rounded-md ${errors.u_nic ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.u_nic}
                onChange={handleChange}
                required
              />
              {errors.u_nic && (
                <p className="text-red-500 text-sm mt-1">{errors.u_nic}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="u_connum" className="block text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="u_connum"
                id="u_connum"
                className={`mt-1 p-2 w-full border rounded-md ${errors.u_connum ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.u_connum}
                onChange={handleChange}
                maxLength={10}
                required
              />
              {errors.u_connum && (
                <p className="text-red-500 text-sm mt-1">{errors.u_connum}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="u_email" className="block text-gray-700">Email</label>
              <input
                type="email"
                name="u_email"
                id="u_email"
                className={`mt-1 p-2 w-full border rounded-md ${errors.u_email ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.u_email}
                onChange={handleChange}
                required
              />
              {errors.u_email && (
                <p className="text-red-500 text-sm mt-1">{errors.u_email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="u_address" className="block text-gray-700">Address</label>
              <input
                type="text"
                name="u_address"
                id="u_address"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.u_address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-gray-700">Username</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="u_password" className="block text-gray-700">Password</label>
              <input
                type="password"
                name="u_password"
                id="u_password"
                className={`mt-1 p-2 w-full border rounded-md ${errors.u_password ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.u_password}
                onChange={handleChange}
                required
              />
              {errors.u_password && (
                <p className="text-red-500 text-sm mt-1">{errors.u_password}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="acc_type" className="block text-gray-700">Account Type</label>
              <select
                name="acc_type"
                id="acc_type"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.acc_type}
                onChange={handleChange}
                required
              >
                <option value="manager">Manager</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="u_birthday" className="block text-gray-700">Birthday</label>
              <input
                type="date"
                name="u_birthday"
                id="u_birthday"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.u_birthday}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]} // Disable future dates
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
