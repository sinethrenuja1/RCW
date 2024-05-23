// import ShopHeader from "../../Components/shopheader";

// function add_workers() {
//     return (
//         <div>
//             <ShopHeader pageName="Add Workers" />
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                 <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//                     <h2 className="text-2xl font-bold mb-6 text-center">Add Worker</h2>
//                     <form>
//                         <div className="mb-4">
//                             <label htmlFor="worker_id" className="block text-gray-700">Worker ID</label>
//                             <input
//                                 type="text"
//                                 name="worker_id"
//                                 id="worker_id"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                                 autoComplete="worker_id"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="name" className="block text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="nic_no" className="block text-gray-700">NIC No</label>
//                             <input
//                                 type="text"
//                                 name="nic_no"
//                                 id="nic_no"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="birthday" className="block text-gray-700">Birthday</label>
//                             <input
//                                 type="date"
//                                 name="birthday"
//                                 id="birthday"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="address" className="block text-gray-700">Address</label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 id="address"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="tel_no" className="block text-gray-700">Telephone Number</label>
//                             <input
//                                 type="tel"
//                                 name="tel_no"
//                                 id="tel_no"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="email" className="block text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="main_area" className="block text-gray-700">Main Area</label>
//                             <input
//                                 type="text"
//                                 name="main_area"
//                                 id="main_area"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="sub_area" className="block text-gray-700">Sub Area</label>
//                             <input
//                                 type="text"
//                                 name="sub_area"
//                                 id="sub_area"
//                                 className="mt-1 p-2 w-full border rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="flex justify-end">
//                             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//                                 Add Worker
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default add_workers;


import { useState, useEffect } from 'react';
import axios from 'axios';
import ShopHeader from "../../Components/shopheader";

const AddWorker = () => {
    const [workerId, setWorkerId] = useState('');
    const [formData, setFormData] = useState({
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
        const fetchWorkerId = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/workerRoutes/next-worker-id');
                setWorkerId(response.data.worker_id);
            } catch (error) {
                console.error('Error fetching worker ID:', error);
            }
        };

        fetchWorkerId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/api/workerRoutes/addWorker', { ...formData });
            console.log('Worker added:', response.data);
            alert('Worker added successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error adding worker:', error);
            alert('Error adding worker');
        }
    };

    return (
        <div>
            <ShopHeader pageName="Add Workers" />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Add Worker</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="worker_id" className="block text-gray-700">Worker ID</label>
                            <input
                                type="text"
                                name="worker_id"
                                id="worker_id"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={workerId}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nic_no" className="block text-gray-700">NIC No</label>
                            <input
                                type="text"
                                name="nic_no"
                                id="nic_no"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.nic_no}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="birthday" className="block text-gray-700">Birthday</label>
                            <input
                                type="date"
                                name="birthday"
                                id="birthday"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tel_no" className="block text-gray-700">Telephone Number</label>
                            <input
                                type="tel"
                                name="tel_no"
                                id="tel_no"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.tel_no}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="main_area" className="block text-gray-700">Main Area</label>
                            <input
                                type="text"
                                name="main_area"
                                id="main_area"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.main_area}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sub_area" className="block text-gray-700">Sub Area</label>
                            <input
                                type="text"
                                name="sub_area"
                                id="sub_area"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.sub_area}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                Add Worker
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddWorker;
