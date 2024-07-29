import ShopHeader from "../../Components/shopheader";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from "flowbite-react";
import axios from 'axios';

function RegisterVehicle() {
    const location = useLocation();
    const veh_num = location.state?.veh_num;

    const [vehicleDetails, setVehicleDetails] = useState({});
    const [customerDetails, setCustomerDetails] = useState({});
    const [contactNumber, setContactNumber] = useState('');
    const [showContactModal, setShowContactModal] = useState(false);
    const [showAuthorityModal, setShowAuthorityModal] = useState(false);
    const [newContactNumber, setNewContactNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [customerNotFound, setCustomerNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8800/api/jobRoutes/loadDetails/${veh_num}`);
                const data = await response.json();
                setVehicleDetails(data.vehicle);
                setCustomerDetails(data.customer);
                setContactNumber(data.customer.contact_number);
            } catch (error) {
                console.error('Error fetching vehicle details:', error);
            }
        };
        fetchData();
    }, [veh_num]);

    const updateRegDetails = async () => {
        try {
            const response = await axios.put('http://localhost:8800/api/jobcard/updateCustomerContact', {
                phone_number: contactNumber,
                fname: customerDetails.first_name,
                lname: customerDetails.last_name,
                address: customerDetails.address,
            });
            if (response.status === 200) {
                setShowContactModal(false);
                setCustomerDetails({
                    ...customerDetails,
                    contact_number: contactNumber,
                });
            }
        } catch (error) {
            console.error('Error updating customer details:', error.message);
        }
    };

    const searchCustomer = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobRoutes/searchCustomer/${newContactNumber}`);
            if (response.status === 200) {
                const customer = response.data;
                setFirstName(customer.first_name);
                setLastName(customer.last_name);
                setAddress(customer.address);
                setCustomerNotFound(false);
            } else {
                setFirstName('');
                setLastName('');
                setAddress('');
                setCustomerNotFound(true);
            }
        } catch (error) {
            setFirstName('');
            setLastName('');
            setAddress('');
            setCustomerNotFound(true);
            console.error('Error searching customer:', error.message);
        }
    };

    const handleChangeOwner = async () => {
        try {
            if (!customerNotFound) {
                await axios.put(`http://localhost:8800/api/jobRoutes/updateVehicleContact/${veh_num}`, {
                    contact_number: newContactNumber
                });
            } else {
                await axios.post('http://localhost:8800/api/jobRoutes/createCustomer', {
                    contact_number: newContactNumber,
                    first_name: firstName,
                    last_name: lastName,
                    address: address
                });
                await axios.put(`http://localhost:8800/api/jobRoutes/updateVehicleContact/${veh_num}`, {
                    contact_number: newContactNumber
                });
            }

            setVehicleDetails({
                ...vehicleDetails,
                contact_number: newContactNumber
            });

            setShowAuthorityModal(false);
        } catch (error) {
            console.error('Error changing owner:', error.message);
        }
    };

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/create_jobcard', { state: { veh_num } });
    }

    return (
        <div>
            <div className="mb-5">
                <ShopHeader pageName="Register Vehicle" />
            </div>
            <div>
                <div className="flex mt-12 bg-blue-50 justify-center">
                    <div className="bg-slate-200 flex justify-center mx-5 py-11 gap-12 rounded-lg">
                        <div className="grid-cols-1 md:grid-cols-2">
                            <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
                                <h2 className="text-lg font-bold text-black">Vehicle Details</h2>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="veh_num" className="text-black w-full">
                                        Vehicle Number:
                                    </label>
                                    <input
                                        id="veh_num"
                                        type="text"
                                        value={vehicleDetails.veh_num || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="make" className="text-black w-full">
                                        Make:
                                    </label>
                                    <input
                                        id="make"
                                        type="text"
                                        value={vehicleDetails.make || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="model" className="text-black w-full">
                                        Model:
                                    </label>
                                    <input
                                        id="model"
                                        type="text"
                                        value={vehicleDetails.model || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="engine_type" className="text-black w-full">
                                        Engine Type:
                                    </label>
                                    <input
                                        id="engine_type"
                                        type="text"
                                        value={vehicleDetails.engine_type || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid-cols-1 md:grid-cols-2">
                            <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
                                <h2 className="text-lg font-bold text-black">Customer Details</h2>
                                <div className="border p-3 rounded-md bg-slate-100">
                                    <div className="flex flex-wrap justify-between mb-3">
                                        <label htmlFor="contact_number" className="text-black w-full">
                                            Contact Number:
                                        </label>
                                        <input
                                            id="contact_number"
                                            type="text"
                                            value={customerDetails.contact_number || ""}
                                            readOnly
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        />
                                    </div>
                                    <button onClick={() => setShowContactModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
                                        Update
                                    </button>
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="first_name" className="text-black w-full">
                                        First Name:
                                    </label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        value={customerDetails.first_name || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="last_name" className="text-black w-full">
                                        Last Name:
                                    </label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        value={customerDetails.last_name || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="address" className="text-black w-full">
                                        Address:
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        value={customerDetails.address || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex justify-between gap-4">
                                    <button onClick={() => setShowAuthorityModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
                                        Change Owner
                                    </button>
                                    <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Open Job
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={showContactModal}
                onClose={() => setShowContactModal(false)}
            >
                <Modal.Header>
                    Update Customer Contact Number
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-wrap justify-between mb-3">
                        <label htmlFor="contact_number" className="text-black w-full">
                            Contact Number:
                        </label>
                        <input
                            id="contact_number"
                            type="tel"
                            maxLength={10}
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => updateRegDetails()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showAuthorityModal}
                onClose={() => setShowAuthorityModal(false)}
            >
                <Modal.Header>
                    Change Owner
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-wrap justify-between mb-3">
                        <label htmlFor="new_contact_number" className="text-black w-full">
                            Contact Number:
                        </label>
                        <div className="flex w-full">
                            <input
                                id="new_contact_number"
                                type="text"
                                value={newContactNumber}
                                onChange={(e) => setNewContactNumber(e.target.value)}
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                            />
                            <button onClick={searchCustomer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
                                Search
                            </button>
                        </div>
                    </div>
                    {customerNotFound && (
                        <div className="text-red-500 mb-3">no customer in db</div>
                    )}
                    <div className="flex flex-wrap justify-between mb-3">
                        <label htmlFor="first_name" className="text-black w-full">
                            First Name:
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />
                    </div>
                    <div className="flex flex-wrap justify-between mb-3">
                        <label htmlFor="last_name" className="text-black w-full">
                            Last Name:
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />
                    </div>
                    <div className="flex flex-wrap justify-between mb-3">
                        <label htmlFor="address" className="text-black w-full">
                            Address:
                        </label>
                        <input
                            id="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleChangeOwner} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RegisterVehicle;
