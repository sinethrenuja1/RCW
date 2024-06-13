// import { Link } from "react-router-dom";
// import ShopHeader from "../../Components/shopheader";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Modal, Label, TextInput } from "flowbite-react";
// import Swal from 'sweetalert2';

// function ShowWorkers() {
//     const [workerData, setWorkerData] = useState([]);
//     const [selectedWorker, setSelectedWorker] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [resigningWorker, setResigningWorker] = useState(null); // Track the worker being resigned

//     const fetchWorkerData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/workerRoutes/getWorkers');
//             setWorkerData(response.data);
//         } catch (error) {
//             console.error('Error fetching worker data:', error);
//         }
//     };

//     const fetchWorkerDetails = async (worker_id) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/workerRoutes/getWorkerById/${worker_id}`);
//             setSelectedWorker(response.data);
//         } catch (error) {
//             console.error('Error fetching worker details:', error);
//         }
//     };

//     const handleViewClick = (worker_id) => {
//         fetchWorkerDetails(worker_id);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedWorker(null);
//     };

//     const handleResignClick = async (workerId) => {
//         const swalWithBootstrapButtons = Swal.mixin({
//             buttonsStyling: false
//         });

//         swalWithBootstrapButtons.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, resign!",
//             cancelButtonText: "No, cancel!",
//             confirmButtonClass: "btn btn-success",
//             cancelButtonClass: "btn btn-danger",
//             reverseButtons: true
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     setResigningWorker(workerId); // Disable the button for this worker
//                     await axios.put(`http://localhost:8800/api/workerRoutes/resignWorker/${workerId}`);
//                     swalWithBootstrapButtons.fire(
//                         "Resigned!",
//                         "The worker has been resigned.",
//                         "success"
//                     );
//                     fetchWorkerData(); // Refresh the workers list after resigning
//                 } catch (error) {
//                     swalWithBootstrapButtons.fire(
//                         "Error!",
//                         "An error occurred while resigning the worker.",
//                         "error"
//                     );
//                     console.error('An error occurred while trying to resign the worker:', error);
//                 } finally {
//                     setResigningWorker(null); // Re-enable the button after action completes
//                 }
//             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                 swalWithBootstrapButtons.fire(
//                     "Cancelled",
//                     "The worker is safe :)",
//                     "error"
//                 );
//             }
//         });
//     };

//     useEffect(() => {
//         fetchWorkerData();
//     }, []);

//     const filteredWorkers = workerData.filter(worker => 
//         worker.worker_id.includes(searchTerm) || 
//         worker.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <ShopHeader pageName="Employee" />
//             <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
//                 <div className="px-6 py-4">
//                     <div className="flex justify-between items-center">
//                         <input
//                             type="text"
//                             placeholder="Search by Employee ID or Name"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
//                         />
//                         <div>
//                             <Link to="/Add_workers" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
//                                 + Add Worker
//                             </Link>
//                         </div>
//                     </div>

//                     <table className="table-auto w-full mt-8">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 text-left">Employee ID</th>
//                                 <th className="px-4 py-2 text-left">Name</th>
//                                 <th className="px-4 py-2 text-left">Address</th>
//                                 <th className="px-4 py-2 text-left">Tel_no</th>
//                                 <th className="px-4 py-2 text-left">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredWorkers.map((worker) => (
//                                 <tr key={worker.worker_id}>
//                                     <td className="border px-4 py-2">{worker.worker_id}</td>
//                                     <td className="border px-4 py-2">{worker.name}</td>
//                                     <td className="border px-4 py-2">{worker.address}</td>
//                                     <td className="border px-4 py-2">{worker.tel_no}</td>
//                                     <td className="border px-4 py-2">
//                                         <Link to={`/edit_worker/${worker.worker_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
//                                             Edit
//                                         </Link>
//                                         <button
//                                             className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2"
//                                             onClick={() => handleViewClick(worker.worker_id)}
//                                         >
//                                             View
//                                         </button>
//                                         <button
//                                             className="bg-yellow-400 text-white px-4 py-2 rounded-md"
//                                             onClick={() => handleResignClick(worker.worker_id)}
//                                             disabled={resigningWorker === worker.worker_id}
//                                         >
//                                             Resign
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {selectedWorker && (
//                 <Modal show={isModalOpen} size="md" popup onClose={closeModal}>
//                     <Modal.Header>Worker Details</Modal.Header>
//                     <Modal.Body>
//                         <div className="space-y-4">
//                             <div>
//                                 <Label htmlFor="worker_id" value="Worker ID" />
//                                 <TextInput id="worker_id" value={selectedWorker.worker_id} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="name" value="Name" />
//                                 <TextInput id="name" value={selectedWorker.name} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="nic_no" value="NIC No" />
//                                 <TextInput id="nic_no" value={selectedWorker.nic_no} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="birthday" value="Birthday" />
//                                 <TextInput id="birthday" value={new Date(selectedWorker.birthday).toLocaleDateString()} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="address" value="Address" />
//                                 <TextInput id="address" value={selectedWorker.address} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="tel_no" value="Telephone Number" />
//                                 <TextInput id="tel_no" value={selectedWorker.tel_no} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="email" value="Email" />
//                                 <TextInput id="email" value={selectedWorker.email} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="main_area" value="Main Area" />
//                                 <TextInput id="main_area" value={selectedWorker.main_area} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="sub_area" value="Sub Area" />
//                                 <TextInput id="sub_area" value={selectedWorker.sub_area} readOnly />
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </div>
//     );
// }

// export default ShowWorkers;


import { Link } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import Swal from 'sweetalert2';

function ShowWorkers() {
    const [workerData, setWorkerData] = useState([]);
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [resigningWorker, setResigningWorker] = useState(null); // Track the worker being resigned

    const fetchWorkerData = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/workerRoutes/getWorkers');
            setWorkerData(response.data);
        } catch (error) {
            console.error('Error fetching worker data:', error);
        }
    };

    const fetchWorkerDetails = async (worker_id) => {
        try {
            const response = await axios.get(`http://localhost:8800/api/workerRoutes/getWorkerById/${worker_id}`);
            setSelectedWorker(response.data);
        } catch (error) {
            console.error('Error fetching worker details:', error);
        }
    };

    const handleViewClick = (worker_id) => {
        fetchWorkerDetails(worker_id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWorker(null);
    };

    const handleResignClick = async (workerId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, resign!",
            cancelButtonText: "No, cancel!",
            confirmButtonClass: "btn btn-success",
            cancelButtonClass: "btn btn-danger",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    setResigningWorker(workerId); // Disable the button for this worker
                    await axios.put(`http://localhost:8800/api/workerRoutes/resignWorker/${workerId}`);
                    swalWithBootstrapButtons.fire(
                        "Resigned!",
                        "The worker has been resigned.",
                        "success"
                    );
                    fetchWorkerData(); // Refresh the workers list after resigning
                } catch (error) {
                    swalWithBootstrapButtons.fire(
                        "Error!",
                        "An error occurred while resigning the worker.",
                        "error"
                    );
                    console.error('An error occurred while trying to resign the worker:', error);
                } finally {
                    setResigningWorker(null); // Re-enable the button after action completes
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    "Cancelled",
                    "The worker is safe :)",
                    "error"
                );
            }
        });
    };

    useEffect(() => {
        fetchWorkerData();
    }, []);

    const filteredWorkers = workerData.filter(worker => 
        worker.worker_id.includes(searchTerm) || 
        worker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <ShopHeader pageName="Employee" />
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search by Employee ID or Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
                        />
                        <div>
                            <Link to="/Add_workers" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                                + Add Worker
                            </Link>
                            <Link to="/Resignworkers" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 ml-2">
                                Show Resign Workers
                            </Link>
                        </div>
                    </div>

                    <table className="table-auto w-full mt-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Employee ID</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Address</th>
                                <th className="px-4 py-2 text-left">Tel_no</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredWorkers.map((worker) => (
                                <tr key={worker.worker_id}>
                                    <td className="border px-4 py-2">{worker.worker_id}</td>
                                    <td className="border px-4 py-2">{worker.name}</td>
                                    <td className="border px-4 py-2">{worker.address}</td>
                                    <td className="border px-4 py-2">{worker.tel_no}</td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/edit_worker/${worker.worker_id}`} className="bg-lightblue text-white px-4 py-2 rounded-md mr-2">
                                            Edit
                                        </Link>
                                        <button
                                            className="bg-lightblue text-white px-4 py-2 rounded-md mr-2"
                                            onClick={() => handleViewClick(worker.worker_id)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="bg-lightblue text-white px-4 py-2 rounded-md"
                                            onClick={() => handleResignClick(worker.worker_id)}
                                            disabled={resigningWorker === worker.worker_id}
                                        >
                                            Resign
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedWorker && (
                <Modal show={isModalOpen} size="md" popup onClose={closeModal}>
                    <Modal.Header>Worker Details</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="worker_id" value="Worker ID" />
                                <TextInput id="worker_id" value={selectedWorker.worker_id} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="name" value="Name" />
                                <TextInput id="name" value={selectedWorker.name} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="nic_no" value="NIC No" />
                                <TextInput id="nic_no" value={selectedWorker.nic_no} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="birthday" value="Birthday" />
                                <TextInput id="birthday" value={new Date(selectedWorker.birthday).toLocaleDateString()} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="address" value="Address" />
                                <TextInput id="address" value={selectedWorker.address} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="tel_no" value="Telephone Number" />
                                <TextInput id="tel_no" value={selectedWorker.tel_no} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="email" value="Email" />
                                <TextInput id="email" value={selectedWorker.email} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="main_area" value="Main Area" />
                                <TextInput id="main_area" value={selectedWorker.main_area} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="sub_area" value="Sub Area" />
                                <TextInput id="sub_area" value={selectedWorker.sub_area} readOnly />
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default ShowWorkers;
