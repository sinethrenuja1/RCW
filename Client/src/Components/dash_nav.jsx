// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import logo from '../images/logo.jpg';
// import { HomeIcon } from '@heroicons/react/24/outline';
// import { FaWarehouse } from "react-icons/fa";

// const DashNav = () => {
//   const [isWorkerDropdownOpen, setIsWorkerDropdownOpen] = useState(false);
//   const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

//   const toggleWorkerDropdown = () => {
//     setIsWorkerDropdownOpen(!isWorkerDropdownOpen);
//   };

//   const toggleJobDropdown = () => {
//     setIsJobDropdownOpen(!isJobDropdownOpen);
//   };

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
//           <Link to="/showbooking" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Booking
//           </Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/stock" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
//             <FaWarehouse className="h-5 w-5 inline-block mr-2" /> Stock
//           </Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/show_services" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Services
//           </Link>
//         </li>
//         <li className="mb-2">
//           <button onClick={toggleWorkerDropdown} className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center w-full text-left">
//             Workers
//           </button>
//           {isWorkerDropdownOpen && (
//             <ul className="pl-8 mt-1">
//               <li className="mb-2">
//                 <Link to="/show_workers" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//                   Employees
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/add_user" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//                   Users
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="mb-2">
//           <button onClick={toggleJobDropdown} className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center w-full text-left">
//             Open Job
//           </button>
//           {isJobDropdownOpen && (
//             <ul className="pl-8 mt-1">
//               <li className="mb-2">
//                 <Link to="/openjob" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//                   Open Job Card
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/show_jobcard" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//                   Show Job Card
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/finaljobcard" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//                   Final Job Card
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="mb-36">
//           <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Reports
//           </Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/setting" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Settings
//           </Link>
//         </li>
//         <li className="mb-2">
//         <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default DashNav;





import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Cog8ToothIcon,
  ArrowUturnLeftIcon,
  HandThumbUpIcon,
  BookmarkIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  InboxIcon,
  IdentificationIcon,
  ChartBarIcon,
  FolderPlusIcon,
} from '@heroicons/react/24/solid';
import logo from '../images/logo.jpg';

const DashNav = () => {
  const [isWorkerDropdownOpen, setIsWorkerDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(() => {
    const savedState = localStorage.getItem('isJobDropdownOpen');
    return savedState === 'true';
  });

  const toggleWorkerDropdown = () => {
    setIsWorkerDropdownOpen(!isWorkerDropdownOpen);
  };

  const toggleJobDropdown = () => {
    setIsJobDropdownOpen((prev) => {
      const newState = !prev;
      localStorage.setItem('isJobDropdownOpen', newState);
      return newState;
    });
  };

  const [activeBar, setActiveBar] = useState('dashboard');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActiveBar(currentPath);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-64 border-r-2 border-gray-300 bg-blue-50 h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
        
      </div>

      <div className="font-inter text-gray-800">
        <Link to='/dashboard'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'dashboard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('dashboard')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Dashboard</p>
          </div>
        </Link>

        <Link to='/showbooking'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'showbooking' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('showbooking')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Booking</p>
          </div>
        </Link>

        <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${isJobDropdownOpen ? 'border border-gray-300 font-bold' : ''}`} onClick={toggleJobDropdown}>
          <BriefcaseIcon className='h-6 w-6'/>
          <p className='text-lg'>Jobs</p>
        </div>

        {isJobDropdownOpen && (
          <div id='subset' className="ml-4">
            <Link to='/openjob'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'openjob' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('openjob')}>
                <FolderPlusIcon className='h-5 w-5'/>
                <p className='text-lg'>Open Job</p>
              </div>
            </Link>

            <Link to='/show_jobcard'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'show_jobcard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('show_jobcard')}>
                <ChartBarIcon className='h-5 w-5'/>
                <p className='text-lg'>Show Job Card</p>
              </div>
            </Link>

            <Link to='/finaljobcard'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'finaljobcard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('finaljobcard')}>
                <IdentificationIcon className='h-5 w-5'/>
                <p className='text-lg'>Final Job Card</p>
              </div>
            </Link>
          </div>
        )}

        <Link to='/show_services'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'show_services' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('show_services')}>
            <HandThumbUpIcon className='h-6 w-6'/>
            <p className='text-lg'>Services</p>
          </div>
        </Link>

        <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${isWorkerDropdownOpen ? 'border border-gray-300 font-bold' : ''}`} onClick={toggleWorkerDropdown}>
          <WrenchScrewdriverIcon className='h-6 w-6'/>
          <p className='text-lg'>Workers</p>
        </div>

        {isWorkerDropdownOpen && (
          <div id='subset' className="ml-4">
            <Link to='/show_workers'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'show_workers' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('show_workers')}>
                <IdentificationIcon className='h-5 w-5'/>
                <p className='text-lg'>Employees</p>
              </div>
            </Link>

            <Link to='/add_user'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'add_user' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('add_user')}>
                <InboxIcon className='h-5 w-5'/>
                <p className='text-lg'>Users</p>
              </div>
            </Link>
          </div>
        )}

        <Link to='/reports'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'reports' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('reports')}>
            <ChartBarIcon className='h-6 w-6'/>
            <p className='text-lg'>Reports</p>
          </div>
        </Link>

        <Link to='/setting'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'setting' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('setting')}>
            <Cog8ToothIcon className='h-6 w-6'/>
            <p className='text-lg'>Settings</p>
          </div>
        </Link>

        <Link to='/'>
          <div className='fixed flex items-center pl-4 w-64 gap-3 py-3 hover:bg-blue-400 hover:text-white rounded-lg cursor-pointer bottom-10 transition-all duration-200'>
            <ArrowUturnLeftIcon className='h-6 w-6'/>
            <p className='text-lg'>Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashNav;

