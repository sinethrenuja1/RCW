// import { Link } from "react-router-dom";
// import ShopHeader from "../../Components/shopheader";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Modal, Label, TextInput } from "flowbite-react";
// import Swal from 'sweetalert2';

// function ShowUsers() {
//     const [userData, setUserData] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [resigningUser, setResigningUser] = useState(null); // Track the user being resigned

//     const fetchUserData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/workerRoutes/user_table');
//             setUserData(response.data);
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     const fetchUserDetails = async (user_id) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/workerRoutes/getUserById/${user_id}`);
//             setSelectedUser(response.data);
//         } catch (error) {
//             console.error('Error fetching user details:', error);
//         }
//     };

//     const handleViewClick = (user_id) => {
//         fetchUserDetails(user_id);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedUser(null);
//     };

//     const handleResignClick = async (userId) => {
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
//                     setResigningUser(userId); // Disable the button for this user
//                     await axios.put(`http://localhost:8800/api/userRoutes/resignUser/${userId}`);
//                     swalWithBootstrapButtons.fire(
//                         "Resigned!",
//                         "The user has been resigned.",
//                         "success"
//                     );
//                     fetchUserData(); // Refresh the users list after resigning
//                 } catch (error) {
//                     swalWithBootstrapButtons.fire(
//                         "Error!",
//                         "An error occurred while resigning the user.",
//                         "error"
//                     );
//                     console.error('An error occurred while trying to resign the user:', error);
//                 } finally {
//                     setResigningUser(null); // Re-enable the button after action completes
//                 }
//             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                 swalWithBootstrapButtons.fire(
//                     "Cancelled",
//                     "The user is safe :)",
//                     "error"
//                 );
//             }
//         });
//     };

//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     const filteredUsers = userData.filter(user =>
//         user.user_id.includes(searchTerm) || 
//         user.u_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <ShopHeader pageName="Users" />
//             <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
//                 <div className="px-6 py-4">
//                     <div className="flex justify-between items-center">
//                         <input
//                             type="text"
//                             placeholder="Search by User ID or Name"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
//                         />
//                         <div>
//                             <Link to="/Add_users" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
//                                 + Add User
//                             </Link>
//                             <Link to="/ResignUsers" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 ml-2">
//                                 Show Resign Users
//                             </Link>
//                         </div>
//                     </div>

//                     <table className="table-auto w-full mt-8">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 text-left">User ID</th>
//                                 <th className="px-4 py-2 text-left">Name</th>
//                                 <th className="px-4 py-2 text-left">NIC</th>
//                                 <th className="px-4 py-2 text-left">Contact Number</th>
//                                 <th className="px-4 py-2 text-left">Email</th>
//                                 <th className="px-4 py-2 text-left">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredUsers.map((user) => (
//                                 <tr key={user.user_id}>
//                                     <td className="border px-4 py-2">{user.user_id}</td>
//                                     <td className="border px-4 py-2">{user.u_name}</td>
//                                     <td className="border px-4 py-2">{user.u_nic}</td>
//                                     <td className="border px-4 py-2">{user.u_connum}</td>
//                                     <td className="border px-4 py-2">{user.u_email}</td>
//                                     <td className="border px-4 py-2">
//                                         <Link to={`/edit_user/${user.user_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
//                                             Edit
//                                         </Link>
//                                         <button
//                                             className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2"
//                                             onClick={() => handleViewClick(user.user_id)}
//                                         >
//                                             View
//                                         </button>
//                                         <button
//                                             className="bg-yellow-400 text-white px-4 py-2 rounded-md"
//                                             onClick={() => handleResignClick(user.user_id)}
//                                             disabled={resigningUser === user.user_id}
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

//             {selectedUser && (
//                 <Modal show={isModalOpen} size="md" popup onClose={closeModal}>
//                     <Modal.Header>User Details</Modal.Header>
//                     <Modal.Body>
//                         <div className="space-y-4">
//                             <div>
//                                 <Label htmlFor="user_id" value="User ID" />
//                                 <TextInput id="user_id" value={selectedUser.user_id} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_name" value="Name" />
//                                 <TextInput id="u_name" value={selectedUser.u_name} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_nic" value="NIC No" />
//                                 <TextInput id="u_nic" value={selectedUser.u_nic} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_birthday" value="Birthday" />
//                                 <TextInput id="u_birthday" value={new Date(selectedUser.u_birthday).toLocaleDateString()} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_address" value="Address" />
//                                 <TextInput id="u_address" value={selectedUser.u_address} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_connum" value="Contact Number" />
//                                 <TextInput id="u_connum" value={selectedUser.u_connum} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="u_email" value="Email" />
//                                 <TextInput id="u_email" value={selectedUser.u_email} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="user_name" value="Username" />
//                                 <TextInput id="user_name" value={selectedUser.user_name} readOnly />
//                             </div>
//                             <div>
//                                 <Label htmlFor="acc_type" value="Account Type" />
//                                 <TextInput id="acc_type" value={selectedUser.acc_type} readOnly />
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </div>
//     );
// }

// export default ShowUsers;


import { Link } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
// import Swal from 'sweetalert2';

function ShowUsers() {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    // const [resigningUser, setResigningUser] = useState(null); // Track the user being resigned

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/workerRoutes/user_table');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchUserDetails = async (user_id) => {
        try {
            const response = await axios.get(`http://localhost:8800/api/workerRoutes/getUserById/${user_id}`);
            setSelectedUser(response.data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleViewClick = (user_id) => {
        fetchUserDetails(user_id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    // const handleResignClick = async (userId) => {
    //     const swalWithBootstrapButtons = Swal.mixin({
    //         buttonsStyling: false
    //     });

    //     swalWithBootstrapButtons.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, resign!",
    //         cancelButtonText: "No, cancel!",
    //         confirmButtonClass: "btn btn-success",
    //         cancelButtonClass: "btn btn-danger",
    //         reverseButtons: true
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 setResigningUser(userId); // Disable the button for this user
    //                 await axios.put(`http://localhost:8800/api/userRoutes/resignUser/${userId}`);
    //                 swalWithBootstrapButtons.fire(
    //                     "Resigned!",
    //                     "The user has been resigned.",
    //                     "success"
    //                 );
    //                 fetchUserData(); // Refresh the users list after resigning
    //             } catch (error) {
    //                 swalWithBootstrapButtons.fire(
    //                     "Error!",
    //                     "An error occurred while resigning the user.",
    //                     "error"
    //                 );
    //                 console.error('An error occurred while trying to resign the user:', error);
    //             } finally {
    //                 setResigningUser(null); // Re-enable the button after action completes
    //             }
    //         } else if (result.dismiss === Swal.DismissReason.cancel) {
    //             swalWithBootstrapButtons.fire(
    //                 "Cancelled",
    //                 "The user is safe :)",
    //                 "error"
    //             );
    //         }
    //     });
    // };

    useEffect(() => {
        fetchUserData();
    }, []);

    const filteredUsers = userData.filter(user =>
        user.user_id.toString().includes(searchTerm) || 
        user.u_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <ShopHeader pageName="Users" />
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search by User ID or Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
                        />
                        <div>
                            <Link to="/add_user" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                                + Add User
                            </Link>
                            {/* <Link to="/ResignUsers" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 ml-2">
                                Show Resign Users
                            </Link> */}
                        </div>
                    </div>

                    <table className="table-auto w-full mt-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">User ID</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">NIC</th>
                                <th className="px-4 py-2 text-left">Contact Number</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.user_id}>
                                    
                                    <td className="border px-4 py-2">{user.user_id}</td>
                                    <td className="border px-4 py-2">{user.u_name}</td>
                                    <td className="border px-4 py-2">{user.u_nic}</td>
                                    <td className="border px-4 py-2">{user.u_connum}</td>
                                    <td className="border px-4 py-2">{user.u_email}</td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/editUser/${user.user_id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2">
                                            Edit
                                        </Link>
                                        <button
                                            className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2"
                                            onClick={() => handleViewClick(user.user_id)}
                                        >
                                            View
                                        </button>
                                        {/* <button
                                            className="bg-yellow-400 text-white px-4 py-2 rounded-md"
                                            onClick={() => handleResignClick(user.user_id)}
                                            disabled={resigningUser === user.user_id}
                                        >
                                            Resign
                                        </button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedUser && (
                <Modal show={isModalOpen} size="md" popup onClose={closeModal}>
                    <Modal.Header>User Details</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="user_id" value="User ID" />
                                <TextInput id="user_id" value={selectedUser.user_id} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_name" value="Name" />
                                <TextInput id="u_name" value={selectedUser.u_name} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_nic" value="NIC No" />
                                <TextInput id="u_nic" value={selectedUser.u_nic} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_birthday" value="Birthday" />
                                <TextInput id="u_birthday" value={new Date(selectedUser.u_birthday).toLocaleDateString()} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_address" value="Address" />
                                <TextInput id="u_address" value={selectedUser.u_address} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_connum" value="Contact Number" />
                                <TextInput id="u_connum" value={selectedUser.u_connum} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="u_email" value="Email" />
                                <TextInput id="u_email" value={selectedUser.u_email} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="user_name" value="Username" />
                                <TextInput id="user_name" value={selectedUser.user_name} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="acc_type" value="Account Type" />
                                <TextInput id="acc_type" value={selectedUser.acc_type} readOnly />
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default ShowUsers;
