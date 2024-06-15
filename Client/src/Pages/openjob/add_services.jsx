

// import PropTypes from 'prop-types';
// import { createTheme } from '@mui/material/styles';
// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from 'axios';

// function AddServices({ jobcard_id }) {
//   const location = useLocation();

//   const [formData] = useState({
//     veh_num: location.state?.veh_num || '',
//     jobcard_id: jobcard_id || '',
//     mileage: location.state?.mileage || '',
//     supervisor: location.state?.supervisor || ''
//   });

//   const [serviceName, setServiceName] = useState('');
//   const [serviceSuggestions, setServiceSuggestions] = useState([]);
//   const [selectedService, setSelectedService] = useState({ service_id: '', s_price: '' });
//   const [quantity, setQuantity] = useState('');
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     if (formData.jobcard_id) {
//       axios.get(`http://localhost:8800/api/jobRoutes/getServices?jobcard_id=${formData.jobcard_id}`)
//         .then(response => {
//           console.log('Services:', response.data);
//           setServices(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the data!', error);
//         });
//     }
//   }, [formData.jobcard_id]);

//   const handleServiceNameChange = async (event) => {
//     const input = event.target.value;
//     setServiceName(input);

//     if (input) {
//       try {
//         const response = await axios.get(`http://localhost:8800/api/jobRoutes/fetchServiceSuggestions?input=${input}`);
        
//         setServiceSuggestions(response.data);
//         console.log('Service suggestions:', response.data);
//       } catch (error) {
//         console.error('Error fetching service suggestions:', error);
//       }
//     } else {
//       setServiceSuggestions([]);
//     }
//   };

//   const handleServiceClick = (service) => {
//     setServiceName(service.s_name);
//     setSelectedService(service);
//     setServiceSuggestions([]);
//   };

//   const handleAddService = async () => {
//     const data = {
//       jobcard_id: formData.jobcard_id,
//       service_id: selectedService.service_id,
//       s_price: selectedService.s_price,
//       worker_id: null,
//       s_quantity: quantity
//     };

//     try {
//       const response = await axios.post('http://localhost:8800/api/jobRoutes/addUsedService', data);
//       alert(response.data.message);

//       const newService = {
//         service_id: selectedService.service_id,
//         s_name: serviceName,
//         s_price: selectedService.s_price,
//         s_quantity: quantity
//       };

//       setServices([...services, newService]);

//       setServiceName('');
//       setSelectedService({ service_id: '', s_price: '' });
//       setQuantity('');

//     } catch (error) {
//       console.error('Error adding used service:', error);
//       alert('An error occurred while adding the service.');
//     }
//   };

//   const handleDeleteService = async (index) => {
//     const serviceToDelete = services[index];

//     try {
//       const response = await axios.post('http://localhost:8800/api/jobRoutes/deleteUsedService', {
//         jobcard_id: formData.jobcard_id,
//         service_id: serviceToDelete.service_id
//       });

//       if (response.status === 200) {
//         const updatedServices = services.filter((_, i) => i !== index);
//         setServices(updatedServices);
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error deleting service:', error);
//       alert('An error occurred while deleting the service.');
//     }
//   };

//   return (
//     <div className="px-5 bg-blue-50 pt-4">
//       <form className="flex items-center gap-4">
//         <div className="flex flex-col">
//           <label htmlFor="veh_num" className="text-black">Vehicle Number:</label>
//           <input
//             id="veh_num"
//             type="text"
//             value={formData.veh_num}
//             readOnly
//             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="jobcard_id" className="text-black">Job Card ID:</label>
//           <input
//             id="jobcard_id"
//             type="text"
//             value={formData.jobcard_id}
//             readOnly
//             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="mileage" className="text-black">Mileage:</label>
//           <input
//             id="mileage"
//             type="text"
//             value={formData.mileage}
//             readOnly
//             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="supervisor" className="text-black">Supervisor:</label>
//           <input
//             id="supervisor"
//             type="text"
//             value={formData.supervisor}
//             readOnly
//             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//           />
//         </div>
//       </form>
//       <div className="mt-8">
//         <div className="shadow-md bg-gray-100 rounded-lg p-3 mb-8">
//           <h2 className="text-lg font-bold text-black">Add a Service</h2>
//           <div className="mt-1">
//             <div className="flex space-x-4">
//               <div className="flex items-center w-1/2 relative">
//                 <label htmlFor="serviceName" className="mr-2 text-black">Service name:</label>
//                 <input
//                   id="serviceName"
//                   type="text"
//                   value={serviceName}
//                   onChange={handleServiceNameChange}
//                   className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
//                 />
//                 {serviceSuggestions.length > 0 && (
//                   <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                     {serviceSuggestions.map(service => (
//                       <div
//                         key={service.service_id}
//                         onClick={() => handleServiceClick(service)}
//                         className="p-2 cursor-pointer hover:bg-gray-200"
//                       >
//                         <div className="text-black">{service.s_name}</div>
//                         <div className="text-gray-500">{service.s_price}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="flex items-center w-1/4">
//                 <label htmlFor="price" className="mr-2 text-black">Price:</label>
//                 <input
//                   id="price"
//                   type="text"
//                   value={selectedService.s_price}
//                   readOnly
//                   className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
//                 />
//               </div>
//               <div className="flex items-center w-1/4">
//                 <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
//                 <input
//                   id="quantity"
//                   type="text"
//                   placeholder="Enter Quantity"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-4 mt-2">
//               <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
//                 setServiceName('');
//                 setSelectedService({ service_id: '', s_price: '' });
//                 setQuantity('');
//                 setServiceSuggestions([]);
//               }}>Clear</button>
//               <button type="button" className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddService}>Add Service</button>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-100 rounded-lg shadow-md p-4">
//           <h2 className="text-lg font-bold text-black">Services Table</h2>
//           <div className="container mx-auto mt-10">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                 <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service ID</th>
//                   <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Name</th>
//                   <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
//                   <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Quantity</th>
//                   <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                   <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {services.map((service, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.service_id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.s_name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_price}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_quantity}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_quantity * service.s_price}</td>
//                     <td className=" px-2 py-1 flex justify-center">
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteService(index)}
//                         className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// AddServices.propTypes = {
//   jobcard_id: PropTypes.string.isRequired
// };

// export default AddServices;

import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddServices({ jobcard_id }) {
  const location = useLocation();

  const [formData] = useState({
    veh_num: location.state?.veh_num || '',
    jobcard_id: jobcard_id || '',
    mileage: location.state?.mileage || '',
    supervisor: location.state?.supervisor || ''
  });

  const [serviceName, setServiceName] = useState('');
  const [serviceSuggestions, setServiceSuggestions] = useState([]);
  const [selectedService, setSelectedService] = useState({ service_id: '', s_price: '' });
  const [quantity, setQuantity] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (formData.jobcard_id) {
      axios.get(`http://localhost:8800/api/jobRoutes/getServices?jobcard_id=${formData.jobcard_id}`)
        .then(response => {
          setServices(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });
    }
  }, [formData.jobcard_id]);

  const handleServiceNameChange = async (event) => {
    const input = event.target.value;
    setServiceName(input);

    if (input) {
      try {
        const response = await axios.get(`http://localhost:8800/api/jobRoutes/fetchServiceSuggestions?input=${input}`);
        setServiceSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching service suggestions:', error);
      }
    } else {
      setServiceSuggestions([]);
    }
  };

  const handleServiceClick = (service) => {
    setServiceName(service.s_name);
    setSelectedService(service);
    setServiceSuggestions([]);
  };

  const validateInputs = () => {
    if (!serviceName || !quantity || !selectedService.s_price) {
      toast.error('All fields are required.');
      return false;
    }

    if (isNaN(quantity) || quantity <= 0) {
      toast.error('Quantity must be a positive number.');
      return false;
    }

    return true;
  };

  const handleAddService = async () => {
    if (!validateInputs()) {
      return;
    }

    const data = {
      jobcard_id: formData.jobcard_id,
      service_id: selectedService.service_id,
      s_price: selectedService.s_price,
      worker_id: null,
      s_quantity: quantity
    };

    try {
      const response = await axios.post('http://localhost:8800/api/jobRoutes/addUsedService', data);
      toast.success(response.data.message);

      const newService = {
        service_id: selectedService.service_id,
        s_name: serviceName,
        s_price: selectedService.s_price,
        s_quantity: quantity
      };

      setServices([...services, newService]);

      setServiceName('');
      setSelectedService({ service_id: '', s_price: '' });
      setQuantity('');

    } catch (error) {
      console.error('Error adding used service:', error);
      toast.error('An error occurred while adding the service.');
    }
  };

  const handleDeleteService = async (index) => {
    const serviceToDelete = services[index];

    try {
      const response = await axios.post('http://localhost:8800/api/jobRoutes/deleteUsedService', {
        jobcard_id: formData.jobcard_id,
        service_id: serviceToDelete.service_id
      });

      if (response.status === 200) {
        const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('An error occurred while deleting the service.');
    }
  };

  return (
    <div className="px-5  pt-4">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
        <div className="flex flex-col">
          <label htmlFor="mileage" className="text-black">Mileage:</label>
          <input
            id="mileage"
            type="text"
            value={formData.mileage}
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
          />
        </div>
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
          <h2 className="text-lg font-bold text-black">Add a Service</h2>
          <div className="mt-1">
            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 relative">
                <label htmlFor="serviceName" className="mr-2 text-black">Service name:</label>
                <input
                  id="serviceName"
                  type="text"
                  
                  value={serviceName}
                  onChange={handleServiceNameChange}
                  className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                />
                {serviceSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {serviceSuggestions.map(service => (
                      <div
                        key={service.service_id}
                        onClick={() => handleServiceClick(service)}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        <div className="text-black">{service.s_name}</div>
                        <div className="text-gray-500">{service.s_price}</div>
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
                  value={selectedService.s_price}
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
              <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                setServiceName('');
                setSelectedService({ service_id: '', s_price: '' });
                setQuantity('');
                setServiceSuggestions([]);
              }}>Clear</button>
              <button type="button" className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddService}>Add Service</button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-black">Services Table</h2>
          <div className="container mx-auto mt-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service ID</th>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Name</th>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Quantity</th>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.service_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.s_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.s_quantity * service.s_price}</td>
                    <td className="px-2 py-1 flex justify-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteService(index)}
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
    </div>
  );
}

AddServices.propTypes = {
  jobcard_id: PropTypes.string.isRequired
};

export default AddServices;
