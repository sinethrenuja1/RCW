// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
 
//   BookmarkIcon,
 
// } from '@heroicons/react/24/solid';
// import logo from '../images/logo.jpg';

// const DashNav = () => {
  
 
//   const [activeBar, setActiveBar] = useState('dashboard');
//   const location = useLocation();

//   useEffect(() => {
//     const currentPath = location.pathname.split('/')[1];
//     setActiveBar(currentPath);
//   }, [location]);

//   const [setUser] = useState(null);
//   const [activeBar, setActiveBar] = useState(''); // State to manage active state of the logout button

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     if (storedUser && storedUser.first_name && storedUser.last_name) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, log out!',
//       cancelButtonText: 'No, cancel!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem('jwtkey');
//         localStorage.removeItem('user');
//         Swal.fire('Logged Out!', 'You have been logged out successfully.', 'success').then(() => {
//           window.location.href = "/";
//         });
//       }
//     });
//   };
//   return (
//     <div className="fixed top-0 left-0 w-64 border-r-2 border-gray-300 bg-blue-50 h-screen p-4">
//       <div className="flex flex-col items-center mb-8">
//         <img src={logo} alt="logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
        
//       </div>

//       <div className="font-inter text-gray-800">
//         <Link to='/sshowjobcard'>
//           <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'dashboard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('dashboard')}>
//             <BookmarkIcon className='h-6 w-6'/>
//             <p className='text-lg'>Assigned to me</p>
//           </div>
//         </Link>

//         <Link to='/ongoingjobs'>
//           <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'showbooking' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('showbooking')}>
//             <BookmarkIcon className='h-6 w-6'/>
//             <p className='text-lg'>Ongoing Jobs</p>
//           </div>
//         </Link>

//         <div className="absolute bottom-4 w-full">
//         <div
//           className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'logout' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`}
//           onClick={() => {
//             setActiveBar('logout'); // Set active state for logout button
//             handleLogout(); // Call logout function
//           }}
//         >
//           <ArrowLeftIcon className='h-6 w-6' /> {/* Assuming ArrowLeftIcon is used */}
//           <p className='text-sm font-bold'>Log Out</p>
//         </div>
//       </div>

   
//       </div>
//     </div>
//   );
// };

// export default DashNav;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookmarkIcon, ArrowLeftIcon,ClockIcon } from '@heroicons/react/24/solid';
import logo from '../images/logo.jpg';
import Swal from 'sweetalert2';

const DashNav = () => {
  const [ setUser] = useState(null); // State to manage user information
  const [activeBar, setActiveBar] = useState('dashboard'); // State to manage active state of navigation links
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.first_name && storedUser.last_name) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1]; // Get the first segment of the path
    setActiveBar(currentPath);
  }, [location]);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'No, cancel',
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
    <div className="fixed top-0 left-0 w-64 border-r-2 border-gray-300 bg-blue-50 h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
      </div>

      <div className="font-inter text-gray-800">
        <Link to='/sshowjobcard'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer mb-2 hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'sshowjobcard' ? 'text-white bg-blue-400' : ''}`} onClick={() => setActiveBar('sshowjobcard')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Assigned to me</p>
          </div>
        </Link>

        <Link to='/ongoingjobs'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'ongoingjobs' ? 'text-white bg-blue-400' : ''}`} onClick={() => setActiveBar('ongoingjobs')}>
            <ClockIcon className='h-6 w-6'/>
            <p className='text-lg'>Ongoing Jobs</p>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-4 w-full">
        <div
          className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'logout' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`}
          onClick={() => {
            setActiveBar('logout'); // Set active state for logout button
            handleLogout(); // Call logout function
          }}
        >
          <ArrowLeftIcon className='h-6 w-6' />
          <p className='text-sm font-bold'>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
