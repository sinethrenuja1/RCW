import { useState, useEffect } from 'react';
import axios from 'axios';
import ShopHeader from "../../Components/shopheader";

const AddService = () => {
    const [serviceId, setServiceId] = useState('');
    const [formData, setFormData] = useState({
        s_name: '',
        s_price: ''
    });

    useEffect(() => {
        const fetchServiceId = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/serviceRoutes/next-servicejob-id');
                setServiceId(response.data.service_id);
            } catch (error) {
                console.error('Error fetching service ID:', error);
            }
        };

        fetchServiceId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/api/serviceRoutes/addServiceJob', { ...formData });
            console.log('Service added:', response.data);
            alert('Service added successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error adding service:', error);
            alert('Error adding service');
        }
    };

    return (
        <div>
            <ShopHeader pageName="Add Service" />
        
            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Add Service</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="service_id" className="block text-gray-700">Service ID</label>
                            <input
                                type="text"
                                name="service_id"
                                id="service_id"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={serviceId}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="s_name" className="block text-gray-700">Service Name</label>
                            <input
                                type="text"
                                name="s_name"
                                id="s_name"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.s_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="s_price" className="block text-gray-700">Service Price</label>
                            <input
                                type="number"
                                name="s_price"
                                id="s_price"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={formData.s_price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                Add Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
