// import ShopHeader from "../../Components/shopheader";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function AddReplaceParts() {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);

//     const vehNum = params.get("veh_num");
//     const jobcardId = params.get("jobcard_id");
//     const mileage = params.get("mileage");

//     const [services, setServices] = useState([]);
//     const [parts, setParts] = useState([]);
//     const [workers, setWorkers] = useState([]);

//     useEffect(() => {
//         const fetchJobCardDetails = async () => {
//             try {
//                 const [jobCardResponse, workersResponse] = await Promise.all([
//                     axios.get(`http://localhost:8800/api/supervisor/jobcard_details/${jobcardId}`),
//                     axios.get(`http://localhost:8800/api/supervisor/available_workers`)
//                 ]);
//                 const { services = [], parts = [] } = jobCardResponse.data;

//                 console.log("Job Card Details:", jobCardResponse.data); // Check the structure of the job card details

//                 setServices(services);
//                 setParts(parts);
//                 setWorkers(workersResponse.data.workers || []);
//             } catch (error) {
//                 console.error("Error fetching job card details:", error);
//             }
//         };

//         if (jobcardId) {
//             fetchJobCardDetails();
//         }
//     }, [jobcardId]);

//     const handleWorkerChange = async (index, workerId) => {
//         try {
//             await axios.put(`http://localhost:8800/api/supervisor/updateServiceWorker`, {
//                 jobcard_id: jobcardId,
//                 service_id: services[index].service_id,
//                 worker_id: workerId
//             });
//             setServices(prevServices => {
//                 const updatedServices = [...prevServices];
//                 updatedServices[index].worker_id = workerId;
//                 return updatedServices;
//             });
//         } catch (error) {
//             console.error("Error updating worker:", error);
//         }
//     };

//     const handleWorkerChangePart = async (index, workerId) => {
//         try {
//             console.log('Updating part worker:', parts[index]); // Log part details to verify structure
//             console.log('part_id:', workerId,parts,jobcardId);

//             await axios.put(`http://localhost:8800/api/supervisor/updatePartWorker`, {
//                 ujobcard_id: jobcardId,
//                 upart_id: parts[index].upart_id
//                 , // Ensure this property exists in parts array
//                 uworker_id: workerId
//             });
//             setParts(prevParts => {
//                 const updatedParts = [...prevParts];
//                 updatedParts[index].uworker_id = workerId;
//                 return updatedParts;
//             });
//         } catch (error) {
//             console.error("Error updating worker:", error);
//         }
//     };

//     return (
//         <div>
//             <ShopHeader pageName="Assign jobs" />
//             <div className="px-5 pt-4">
//                 <form className="flex items-center gap-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="veh_num" className="text-black">
//                             Vehicle Number:
//                         </label>
//                         <input
//                             id="veh_num"
//                             type="text"
//                             readOnly
//                             value={vehNum || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="jobcard_id" className="text-black">
//                             Job Card ID:
//                         </label>
//                         <input
//                             id="jobcard_id"
//                             type="text"
//                             readOnly
//                             value={jobcardId || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="mileage" className="text-black">
//                             Mileage:
//                         </label>
//                         <input
//                             id="mileage"
//                             type="text"
//                             readOnly
//                             value={mileage || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>
//                 </form>
//             </div>

//             <div className="mt-8 px-5">
//                 <h2 className="text-xl font-bold mb-4">Services</h2>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {services.map((service, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">{service.service_name}</td>
//                                 <td className="border px-4 py-2">{service.s_quantity}</td>
//                                 <td className="border px-4 py-2">
//                                     <select
//                                         value={service.worker_id || ''}
//                                         onChange={(e) => handleWorkerChange(index, e.target.value)}
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {workers.map((worker) => (
//                                             <option key={worker.worker_id} value={worker.worker_id}>
//                                                 {worker.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </td>
//                                 <td className="border px-4 py-2">{service.s_price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="mt-8 px-5">
//                 <h2 className="text-xl font-bold mb-4">Parts</h2>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Part Name</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parts.map((part, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">{part.upart_id}</td>
//                                 <td className="border px-4 py-2">{part.u_quantity}</td>
//                                 <td className="border px-4 py-2">
//                                     <select
//                                         value={part.uworker_id || ''}
//                                         onChange={(e) => handleWorkerChangePart(index, e.target.value)}
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {workers.map((worker) => (
//                                             <option key={worker.worker_id} value={worker.worker_id}>
//                                                 {worker.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </td>
//                                 <td className="border px-4 py-2">{part.price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default AddReplaceParts;


// import ShopHeader from "../../Components/shopheader";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function AddReplaceParts() {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);

//     const vehNum = params.get("veh_num");
//     const jobcardId = params.get("jobcard_id");
//     const mileage = params.get("mileage");

//     const [services, setServices] = useState([]);
//     const [parts, setParts] = useState([]);
//     const [workers, setWorkers] = useState([]);
    
//     useEffect(() => {
//         const fetchJobCardDetails = async () => {
//             try {
//                 const [jobCardResponse, workersResponse] = await Promise.all([
//                     axios.get(`http://localhost:8800/api/supervisor/jobcard_details/${jobcardId}`),
//                     axios.get(`http://localhost:8800/api/supervisor/available_workers`)
//                 ]);
//                 const { services = [], parts = [] } = jobCardResponse.data;

//                 console.log("Job Card Details:", jobCardResponse.data); // Check the structure of the job card details

//                 setServices(services);
//                 setParts(parts);
//                 setWorkers(workersResponse.data.workers || []);
//             } catch (error) {
//                 console.error("Error fetching job card details:", error);
//             }
//         };

//         if (jobcardId) {
//             fetchJobCardDetails();
//         }
//     }, [jobcardId]);

//     const handleWorkerChange = async (index, workerId) => {
//         try {
//             await axios.put(`http://localhost:8800/api/supervisor/updateServiceWorker`, {
//                 jobcard_id: jobcardId,
//                 service_id: services[index].service_id,
//                 worker_id: workerId
//             });
//             setServices(prevServices => {
//                 const updatedServices = [...prevServices];
//                 updatedServices[index].worker_id = workerId;
//                 return updatedServices;
//             });
//         } catch (error) {
//             console.error("Error updating worker:", error);
//         }
//     };

//     const handleWorkerChangePart = async (index, workerId) => {
//         try {
//             console.log('Updating part worker:', parts[index]); // Log part details to verify structure
//             console.log('part_id:', workerId,parts,jobcardId);

//             await axios.put(`http://localhost:8800/api/supervisor/updatePartWorker`, {
//                 ujobcard_id: jobcardId,
//                 upart_id: parts[index].upart_id
//                 , // Ensure this property exists in parts array
//                 uworker_id: workerId
//             });
//             setParts(prevParts => {
//                 const updatedParts = [...prevParts];
//                 updatedParts[index].uworker_id = workerId;
//                 return updatedParts;
//             });
//         } catch (error) {
//             console.error("Error updating worker:", error);
//         }
//     };

//     return (
//         <div>
//             <ShopHeader pageName="Assign jobs" />
//             <div className="px-5 pt-4">
//                 <form className="flex items-center gap-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="veh_num" className="text-black">
//                             Vehicle Number:
//                         </label>
//                         <input
//                             id="veh_num"
//                             type="text"
//                             readOnly
//                             value={vehNum || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="jobcard_id" className="text-black">
//                             Job Card ID:
//                         </label>
//                         <input
//                             id="jobcard_id"
//                             type="text"
//                             readOnly
//                             value={jobcardId || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="mileage" className="text-black">
//                             Mileage:
//                         </label>
//                         <input
//                             id="mileage"
//                             type="text"
//                             readOnly
//                             value={mileage || ""}
//                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                         />
//                     </div>

//                 </form>
//             </div>

//             <div className="mt-8 px-5">
//                 <h2 className="text-xl font-bold mb-4">Services</h2>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {services.map((service, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">{service.service_name}</td>
//                                 <td className="border px-4 py-2">{service.s_quantity}</td>
//                                 <td className="border px-4 py-2">
//                                     <select
//                                         value={service.worker_id || ''}
//                                         onChange={(e) => handleWorkerChange(index, e.target.value)}
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {workers.map((worker) => (
//                                             <option key={worker.worker_id} value={worker.worker_id}>
//                                                 {worker.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </td>
//                                 <td className="border px-4 py-2">{service.s_price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="mt-8 px-5">
//                 <h2 className="text-xl font-bold mb-4">Parts</h2>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Part Name</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
//                             <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parts.map((part, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">{part.upart_id}</td>
//                                 <td className="border px-4 py-2">{part.u_quantity}</td>
//                                 <td className="border px-4 py-2">
//                                     <select
//                                         value={part.uworker_id || ''}
//                                         onChange={(e) => handleWorkerChangePart(index, e.target.value)}
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {workers.map((worker) => (
//                                             <option key={worker.worker_id} value={worker.worker_id}>
//                                                 {worker.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </td>
//                                 <td className="border px-4 py-2">{part.price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default AddReplaceParts;

import ShopHeader from "../../Components/shopheader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AddReplaceParts() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const vehNum = params.get("veh_num");
    const jobcardId = params.get("jobcard_id");
    const mileage = params.get("mileage");

    const [services, setServices] = useState([]);
    const [parts, setParts] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [status, setStatus] = useState("");
    
    useEffect(() => {
        const fetchJobCardDetails = async () => {
            try {
                const [jobCardResponse, workersResponse] = await Promise.all([
                    axios.get(`http://localhost:8800/api/supervisor/jobcard_details/${jobcardId}`),
                    axios.get(`http://localhost:8800/api/supervisor/available_workers`)
                ]);
                const { services = [], parts = [] } = jobCardResponse.data;

                console.log("Job Card Details:", jobCardResponse.data); // Check the structure of the job card details

                setServices(services);
                setParts(parts);
                setStatus(status);
                setWorkers(workersResponse.data.workers || []);
            } catch (error) {
                console.error("Error fetching job card details:", error);
            }
        };

        if (jobcardId) {
            fetchJobCardDetails();
        }
    }, [jobcardId]);

    const handleWorkerChange = async (index, workerId) => {
        try {
            await axios.put(`http://localhost:8800/api/supervisor/updateServiceWorker`, {
                jobcard_id: jobcardId,
                service_id: services[index].service_id,
                worker_id: workerId
            });
            setServices(prevServices => {
                const updatedServices = [...prevServices];
                updatedServices[index].worker_id = workerId;
                return updatedServices;
            });
        } catch (error) {
            console.error("Error updating worker:", error);
        }
    };

    const handleWorkerChangePart = async (index, workerId) => {
        try {
            console.log('Updating part worker:', parts[index]); // Log part details to verify structure
            console.log('part_id:', workerId,parts,jobcardId);

            await axios.put(`http://localhost:8800/api/supervisor/updatePartWorker`, {
                ujobcard_id: jobcardId,
                upart_id: parts[index].upart_id
                , // Ensure this property exists in parts array
                uworker_id: workerId
            });
            setParts(prevParts => {
                const updatedParts = [...prevParts];
                updatedParts[index].uworker_id = workerId;
                return updatedParts;
            });
        } catch (error) {
            console.error("Error updating worker:", error);
        }
    };

    const handleStatusChange = async (newStatus) => {
                try {
                    console.log(jobcardId,newStatus)
                    await axios.put(`http://localhost:8800/api/supervisor/updateJobCardStatus`, {
                        jobcard_id: jobcardId,
                        status: newStatus,
                        
                    });
                    setStatus(newStatus);
                } catch (error) {
                    console.error("Error updating job card status:", error);
                }
            };

    return (
        <div>
            <ShopHeader pageName="Assign jobs" />
            <div className="px-5 pt-4">
                <form className="flex bg-blue-50 items-center gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="veh_num" className="text-black">
                            Vehicle Number:
                        </label>
                        <input
                            id="veh_num"
                            type="text"
                            readOnly
                            value={vehNum || ""}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="jobcard_id" className="text-black">
                            Job Card ID:
                        </label>
                        <input
                            id="jobcard_id"
                            type="text"
                            readOnly
                            value={jobcardId || ""}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mileage" className="text-black">
                            Mileage:
                        </label>
                        <input
                            id="mileage"
                            type="text"
                            readOnly
                            value={mileage || ""}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div>
                     <label htmlFor="status" className="text-black">
                         Status:
                     </label>
                     <select
                        id="status"
                        value={status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="ml-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                    >
                        <option value="started">Started</option>
                        <option value="finished">Finished</option>
                    </select>
                </div>

                </form>
            </div>

            <div className="mt-8 px-5">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{service.service_name}</td>
                                <td className="border px-4 py-2">{service.s_quantity}</td>
                                <td className="border px-4 py-2">
                                    <select
                                        value={service.worker_id || ''}
                                        onChange={(e) => handleWorkerChange(index, e.target.value)}
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                                    >
                                        <option value="">Select Worker</option>
                                        {workers.map((worker) => (
                                            <option key={worker.worker_id} value={worker.worker_id}>
                                                {worker.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="border px-4 py-2">{service.s_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 px-5">
                <h2 className="text-xl font-bold mb-4">Parts</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Part Name</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Worker</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parts.map((part, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{part.upart_id}</td>
                                <td className="border px-4 py-2">{part.u_quantity}</td>
                                <td className="border px-4 py-2">
                                    <select
                                        value={part.uworker_id || ''}
                                        onChange={(e) => handleWorkerChangePart(index, e.target.value)}
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                                    >
                                        <option value="">Select Worker</option>
                                        {workers.map((worker) => (
                                            <option key={worker.worker_id} value={worker.worker_id}>
                                                {worker.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="border px-4 py-2">{part.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddReplaceParts;


