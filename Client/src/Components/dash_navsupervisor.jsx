// import { Link } from 'react-router-dom';

// import logo from '../images/logo.jpg';
// import { HomeIcon } from '@heroicons/react/24/outline';
// import { FaWarehouse } from "react-icons/fa";

// const DashNav = () => {

  

//   return (
//     <div className="bg-navbar text-white w-64 min-h-screen border-r-2 border-gray-100 p-4 fixed">
//       <div>
//         <img src={logo} alt="logo" className="w-30 h-30 rounded-full mx-auto flex mt-1 mb-5 justify-center" />
//       </div>
//       <ul>
//         <li className="mb-2">
//           <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
//             <HomeIcon className="h-5 w-5 inline-block mr-2" /> Dashboard
//           </Link>
//         </li>
//         <li className="mb-2">
//           <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
//             <FaWarehouse className="h-5 w-5 inline-block mr-2" /> Stock
//           </Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/show_services" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Services
//           </Link>
//         </li>
       
//       </ul>
//     </div>
//   );
// };

// export default DashNav;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import logo from '../images/logo.jpg';
import { HomeIcon } from '@heroicons/react/24/outline';
import { FaWarehouse } from "react-icons/fa";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Assuming ArrowLeftIcon is used for logout

const DashNav = () => {
  const [setUser] = useState(null);
  const [activeBar, setActiveBar] = useState(''); // State to manage active state of the logout button

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.first_name && storedUser.last_name) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('jwtkey');
        localStorage.removeItem('user');
        Swal.fire('Logged Out!', 'You have been logged out successfully.', 'success').then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  return (
    <div className="bg-navbar text-white w-64 min-h-screen border-r-2 border-gray-100 p-4 fixed">
      <div>
        <img src={logo} alt="logo" className="w-30 h-30 rounded-full mx-auto flex mt-1 mb-5 justify-center" />
      </div>
      <ul>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
            <HomeIcon className="h-5 w-5 inline-block mr-2" /> Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
            <FaWarehouse className="h-5 w-5 inline-block mr-2" /> Stock
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/show_services" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Services
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-4 w-full">
        <div
          className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'logout' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`}
          onClick={() => {
            setActiveBar('logout'); // Set active state for logout button
            handleLogout(); // Call logout function
          }}
        >
          <ArrowLeftIcon className='h-6 w-6' /> {/* Assuming ArrowLeftIcon is used */}
          <p className='text-sm font-bold'>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
