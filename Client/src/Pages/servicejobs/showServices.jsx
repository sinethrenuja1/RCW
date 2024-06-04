// import { Link } from "react-router-dom";
// import ShopHeader from "../../Components/shopheader";
// import axios from "axios";
// import { useEffect, useState } from "react";
// // import DeleteServiceModal from "../servicejobs/deleteServicesModal";

// function ShowServices() {
//     const [serviceData, setServiceData] = useState([]);
//     // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     // const [serviceToDelete, setServiceToDelete] = useState(null);

//     const fetchServiceData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/serviceRoutes/getAllServices');
//             setServiceData(response.data);
//         } catch (error) {
//             console.error('Error fetching service data:', error);
//         }
//     };

//     // const handleDeleteClick = (service_id) => {
//     //     setServiceToDelete(service_id);
//     //     setIsDeleteModalOpen(true);
//     // };

//     // const handleDeleteService = async () => {
//     //     try {
//     //         await axios.delete(`http://localhost:8800/api/serviceRoutes/deleteService/${serviceToDelete}`);
//     //         setIsDeleteModalOpen(false);
//     //         setServiceToDelete(null);
//     //         fetchServiceData(); // Refresh the service list after deletion
//     //     } catch (error) {
//     //         console.error('Error deleting service:', error);
//     //     }
//     // };

//     useEffect(() => {
//         fetchServiceData();
//     }, []);

//     return (
//         <div>
//             <ShopHeader pageName="Services" />
//             <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
//                 <div className="px-6 py-4">
//                     <div className="flex justify-between items-center">
//                         <input
//                             type="text"
//                             placeholder="Search by Service ID or Name"
//                             className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
//                         />
//                         <div>
//                             <Link to="/Add_service" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
//                                 + Add Service
//                             </Link>
//                         </div>
//                     </div>

//                     <table className="table-auto w-full mt-8">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 text-left">Service ID</th>
//                                 <th className="px-4 py-2 text-left">Service Name</th>
//                                 <th className="px-4 py-2 text-left">Price</th>
//                                 <th className="px-4 py-2 text-left">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {serviceData.map((service) => (
//                                 <tr style={{height: '50px'}} key={service.service_id}>
//                                     <td className="border px-4 py-2">{service.service_id}</td>
//                                     <td className="border px-4 py-2">{service.s_name}</td>
//                                     <td className="border px-4 py-2">{service.s_price}</td>
//                                     <td className="border px-4 py-2">
//                                         <Link to={`/edit_service/${service.service_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
//                                             Edit
//                                         </Link>
//                                         {/* <button
//                                             type="button"
//                                             // onClick={() => handleDeleteClick(service.service_id)}
//                                             className="bg-red-500 text-white px-4 py-2 rounded-md"
//                                         >
//                                             Delete
//                                         </button> */}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* <DeleteServiceModal
//                 isOpen={isDeleteModalOpen}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onDelete={handleDeleteService}
//             /> */}
//         </div>
//     );
// }

// export default ShowServices;



import { Link } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import { useEffect, useState } from "react";

function ShowServices() {
    const [serviceData, setServiceData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchServiceData = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/serviceRoutes/getAllServices');
            setServiceData(response.data);
        } catch (error) {
            console.error('Error fetching service data:', error);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    const filteredServices = serviceData.filter(service =>
        service.s_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <ShopHeader pageName="Services" />
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search by Service Name"
                            className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <div>
                            <Link to="/Add_service" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                                + Add Service
                            </Link>
                        </div>
                    </div>

                    <table className="table-auto w-full mt-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Service ID</th>
                                <th className="px-4 py-2 text-left">Service Name</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices.map((service) => (
                                <tr style={{height: '50px'}} key={service.service_id}>
                                    <td className="border px-4 py-2">{service.service_id}</td>
                                    <td className="border px-4 py-2">{service.s_name}</td>
                                    <td className="border px-4 py-2">{service.s_price}</td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/edit_service/${service.service_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
                                            Edit
                                        </Link>
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

export default ShowServices;
