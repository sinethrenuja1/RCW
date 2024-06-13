// import ShopHeader from '../../Components/shopheader';
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function EditService() {
//     const { service_id } = useParams();
//     const navigate = useNavigate();
//     const [service, setService] = useState({
//         service_id: '',
//         s_name: '',
//         s_price: ''
//     });

//     useEffect(() => {
//         const fetchServiceDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/serviceRoutes/getServiceById/${service_id}`);
//                 setService(response.data);
//             } catch (error) {
//                 console.error('Error fetching service details:', error);
//             }
//         };

//         fetchServiceDetails();
//     }, [service_id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setService((prevService) => ({
//             ...prevService,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8800/api/serviceRoutes/updateService/${service_id}`, service);
//             alert('Service details updated successfully');
//             navigate('/show_services');
//         } catch (error) {
//             console.error('Error updating service details:', error);
//         }
//     };

//     return (
//         <div>
//             <ShopHeader pageName="Edit Service" />
//             <div className="container mx-auto p-4 w-2/4">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block mb-2 font-medium">Service ID</label>
//                         <input
//                             type="text"
//                             name="service_id"
//                             value={service.service_id}
//                             readOnly
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 font-medium">Service Name</label>
//                         <input
//                             type="text"
//                             name="s_name"
//                             value={service.s_name}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 font-medium">Price</label>
//                         <input
//                             type="text"
//                             name="s_price"
//                             value={service.s_price}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//                     >
//                         Update Service
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default EditService;


import ShopHeader from '../../Components/shopheader';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditService() {
    const { service_id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({
        service_id: '',
        s_name: '',
        s_price: ''
    });

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/serviceRoutes/getServiceById/${service_id}`);
                setService(response.data);
            } catch (error) {
                console.error('Error fetching service details:', error);
            }
        };

        fetchServiceDetails();
    }, [service_id]);

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setService((prevService) => ({
            ...prevService,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/api/serviceRoutes/updateService/${service_id}`, service);
            alert('Service details updated successfully');
            navigate('/show_services');
        } catch (error) {
            console.error('Error updating service details:', error);
        }
    };

    return (
        <div>
            <ShopHeader pageName="Edit Service" />
            <div className="container  mx-auto p-8 max-w-md bg-white shadow-md rounded-lg mt-24">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Service</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">Service ID</label>
                        <input
                            type="text"
                            name="service_id"
                            value={service.service_id}
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">Service Name</label>
                        <input
                            type="text"
                            name="s_name"
                            value={service.s_name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">Price</label>
                        <input
                            maxLength={5}
                            type="number"
                            name="s_price"
                            value={service.s_price}
                            onChange={(e) => {
                                // Call handleChange only if the value is a number and >= 0
                                if (!isNaN(e.target.value) && parseInt(e.target.value) >= 0) {
                                  handleChange(e);
                                }
                                // Optionally handle the case when the value is negative or not a number
                              }}
                            className="w-full p-3 border border-gray-300 rounded"
                            
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Update Service
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditService;
