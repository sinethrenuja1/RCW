import ShopHeader from '../../Components/shopheader';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        u_name: '',
        u_nic: '',
        u_connum: '',
        u_email: '',
        u_address: '',
        user_name: '',
        acc_type: '',
        u_birthday: ''
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/workerRoutes/getUserById/${user_id}`);
                const userData = response.data;
                userData.u_birthday = new Date(userData.u_birthday).toISOString().slice(0, 10);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [user_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/api/workerRoutes/updateUserDetails/${user_id}`, user);
            alert('User details updated successfully');
            navigate('/ShowUsers');
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    return (
        <div>
            <ShopHeader pageName="Edit User" />
            <div className="container mx-auto p-4 w-2/4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            name="u_name"
                            value={user.u_name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">NIC No</label>
                        <input
                            type="text"
                            name="u_nic"
                            value={user.u_nic}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Birthday</label>
                        <input
                            type="date"
                            name="u_birthday"
                            value={user.u_birthday}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Address</label>
                        <input
                            type="text"
                            name="u_address"
                            value={user.u_address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Contact Number</label>
                        <input
                            type="text"
                            name="u_connum"
                            value={user.u_connum}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            name="u_email"
                            value={user.u_email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Username</label>
                        <input
                            type="text"
                            name="user_name"
                            value={user.user_name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Account Type</label>
                        <input
                            type="text"
                            name="acc_type"
                            value={user.acc_type}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Update User
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditUser;
