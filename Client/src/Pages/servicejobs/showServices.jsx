import { Link } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import DeleteWorkerModal from "../workers/deleteWorkerModal";

function ShowServices() {
    const [workerData, setWorkerData] = useState([]);
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [workerToDelete, setWorkerToDelete] = useState(null);

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

    const handleDeleteClick = (worker_id) => {
        setWorkerToDelete(worker_id);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteWorker = async () => {
        try {
            await axios.delete(`http://localhost:8800/api/workerRoutes/deleteWorker/${workerToDelete}`);
            setIsDeleteModalOpen(false);
            setWorkerToDelete(null);
            fetchWorkerData(); // Refresh the worker list after deletion
        } catch (error) {
            console.error('Error deleting worker:', error);
        }
    };

    useEffect(() => {
        fetchWorkerData();
    }, []);

    return (
        <div>
            <ShopHeader pageName="Employee" />
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search by Employee ID or Name"
                            className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
                        />
                        <div>
                            <Link to="/Add_workers" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                                + Add Worker
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
                            {workerData.map((worker) => (
                                <tr key={worker.worker_id}>
                                    <td className="border px-4 py-2">{worker.worker_id}</td>
                                    <td className="border px-4 py-2">{worker.name}</td>
                                    <td className="border px-4 py-2">{worker.address}</td>
                                    <td className="border px-4 py-2">{worker.tel_no}</td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/edit_worker/${worker.worker_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteClick(worker.worker_id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-yellow-400 text-white px-4 py-2 rounded-md"
                                            onClick={() => handleViewClick(worker.worker_id)}
                                        >
                                            View
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

            <DeleteWorkerModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onDelete={handleDeleteWorker}
            />
        </div>
    );
}

export default ShowServices;