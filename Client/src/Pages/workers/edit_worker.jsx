import ShopHeader from '../../Components/shopheader';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Updated useHistory to useNavigate
import axios from 'axios';


function EditWorker() {
    const { worker_id } = useParams();
    const navigate = useNavigate(); // Updated useHistory to useNavigate
    const [worker, setWorker] = useState({
        name: '',
        nic_no: '',
        birthday: '',
        address: '',
        tel_no: '',
        email: '',
        main_area: '',
        sub_area: ''
    });

    useEffect(() => {
        const fetchWorkerDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/workerRoutes/getWorkerById/${worker_id}`);
                const workerData = response.data;
            workerData.birthday = new Date(workerData.birthday).toISOString().slice(0, 10);
                setWorker(response.data);
            } catch (error) {
                console.error('Error fetching worker details:', error);
            }
        };

        fetchWorkerDetails();
    }, [worker_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorker((prevWorker) => ({
            ...prevWorker,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/api/workerRoutes/updateWorker/${worker_id}`, worker);
            alert('Worker details updated successfully');
            navigate('/show_workers'); // Updated to use navigate
        } catch (error) {
            console.error('Error updating worker details:', error);
        }
    };

    return (
        <div>
            <ShopHeader pageName="Edit Worker" />
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Edit Worker</h1> */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={worker.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">NIC No</label>
                    <input
                        type="text"
                        name="nic_no"
                        value={worker.nic_no}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={worker.birthday}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={worker.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Telephone Number</label>
                    <input
                        type="text"
                        name="tel_no"
                        value={worker.tel_no}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={worker.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Main Area</label>
                    <input
                        type="text"
                        name="main_area"
                        value={worker.main_area}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Sub Area</label>
                    <input
                        type="text"
                        name="sub_area"
                        value={worker.sub_area}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Update Worker
                </button>
            </form>
        </div>
        </div>
    );
}

export default EditWorker;
