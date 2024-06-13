import { useState, useEffect } from "react";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import Swal from "sweetalert2";

function AddServicesToWeb() {
    const [servicelistName, setServicelistName] = useState('');
    const [services, setServices] = useState([]);

    // Fetch services from the backend
    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/booking/getServices');
            setServices(response.data);
        } catch (error) {
            console.error('An error occurred while trying to fetch the services:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to fetch the services',
            });
        }
    };

    // Fetch services when the component mounts
    useEffect(() => {
        fetchServices();
    }, []);

    // Add a new service
    const addService = async () => {
        try {
            const response = await axios.post('http://localhost:8800/api/booking/addServicetoweb', { servicelist_name: servicelistName });
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Service added successfully',
            });
            setServicelistName('');
            fetchServices(); // Update the services list after adding a new service
        } catch (error) {
            console.error('An error occurred while trying to add the service:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to add the service',
            });
        }
    };

    // Delete a service with confirmation
    const confirmDeleteService = (slist_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(slist_id);
            }
        });
    };

    // Delete a service
    const deleteService = async (slist_id) => {
        try {
            await axios.delete(`http://localhost:8800/api/booking/deleteService/${slist_id}`);
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your service has been deleted.',
            });
            fetchServices(); // Update the services list after deleting a service
        } catch (error) {
            console.error('An error occurred while trying to delete the service:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to delete the service',
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <ShopHeader pageName="Add a Package" />
            <div className="container bg-blue-50 mx-auto p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Page Section</h1>
                
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Table */}
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-2/3">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Service ID</th>
                                    <th className="py-2 px-4 border-b">Service Name</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => (
                                    <tr key={service.slist_id}>
                                        <td className="py-2 px-4 border-b">{service.slist_id}</td>
                                        <td className="py-2 px-4 border-b">{service.servicelist_name}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                onClick={() => confirmDeleteService(service.slist_id)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Add Service Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Add Service</h3>
                        <form onSubmit={(e) => { e.preventDefault(); addService(); }}>
                            <div className="mb-4">
                                <label htmlFor="serviceName" className="block text-gray-700 font-bold mb-2">Service Name</label>
                                <input
                                    type="text"
                                    id="serviceName"
                                    value={servicelistName}
                                    placeholder="Enter service name"
                                    className="w-full border border-gray-300 rounded py-2 px-3"
                                    onChange={e => setServicelistName(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add Service
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddServicesToWeb;
