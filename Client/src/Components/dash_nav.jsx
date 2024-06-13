

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isWorkerDropdownOpen, setIsWorkerDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(() => {
    const savedState = localStorage.getItem('isJobDropdownOpen');
    return savedState === 'true';
  });
  const [activeBar, setActiveBar] = useState('dashboard');

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

  const toggleDropdown = (dropdownSetter, dropdownState) => {
    setIsWorkerDropdownOpen(false);
    setIsJobDropdownOpen(false);
    dropdownSetter(!dropdownState);
  };

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActiveBar(currentPath);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-64 border-r-2 border-gray-300 bg-blue-50 h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="logo" className="w-24 h-24 rounded-full mb-2 shadow-lg" />
        {user && <p className="text-lg font-bold text-gray-700">{user.first_name} {user.last_name}</p>}
      </div>

      <div className="font-inter text-gray-800 mt-5">
        <Link to='/dashboard'>
          <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'dashboard' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 mb-2 hover:text-white'}`} onClick={() => setActiveBar('dashboard')}>
            <BookmarkIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Dashboard</p>
          </div>
        </Link>

        <Link to='/showbooking'>
          <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'showbooking' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 mb-2 hover:text-white'}`} onClick={() => setActiveBar('showbooking')}>
            <BookmarkIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Booking</p>
          </div>
        </Link>

        <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${isJobDropdownOpen ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 mb-2 hover:text-white'}`} onClick={() => toggleDropdown(setIsJobDropdownOpen, isJobDropdownOpen)}>
          <BriefcaseIcon className='h-6 w-6' />
          <p className='text-sm font-bold'>Jobs</p>
        </div>

        {isJobDropdownOpen && (
          <div className="ml-4">
            <Link to='/openjob'>
              <div className={`flex items-center pl-8 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'openjob' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('openjob')}>
                <FolderPlusIcon className='h-5 w-5' />
                <p className='text-sm font-bold'>Open Job</p>
              </div>
            </Link>

            <Link to='/show_jobcard'>
              <div className={`flex items-center pl-8 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'show_jobcard' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('show_jobcard')}>
                <ChartBarIcon className='h-5 w-5' />
                <p className='text-sm font-bold'>Show Job Card</p>
              </div>
            </Link>

            <Link to='/finishedjobcard'>
              <div className={`flex items-center pl-8 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'finishedjobcard' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('finishedjobcard')}>
                <IdentificationIcon className='h-5 w-5' />
                <p className='text-sm font-bold'>Final Job Card</p>
              </div>
            </Link>
          </div>
        )}

        <Link to='/stock'>
          <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'stock' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('stock')}>
            <BookmarkIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Stock</p>
          </div>
        </Link>

        <Link to='/show_services'>
          <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'show_services' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 mb-2 hover:text-white'}`} onClick={() => setActiveBar('show_services')}>
            <HandThumbUpIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Services</p>
          </div>
        </Link>

        <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${isWorkerDropdownOpen ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => toggleDropdown(setIsWorkerDropdownOpen, isWorkerDropdownOpen)}>
          <WrenchScrewdriverIcon className='h-6 w-6' />
          <p className='text-sm font-bold'>Workers</p>
        </div>

        {isWorkerDropdownOpen && (
          <div className="ml-4">
            <Link to='/show_workers'>
              <div className={`flex items-center pl-8 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'show_workers' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('show_workers')}>
                <IdentificationIcon className='h-5 w-5' />
                <p className='text-sm font-bold'>Employees</p>
              </div>
            </Link>

            <Link to='/ShowUsers'>
              <div className={`flex items-center pl-8 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'add_user' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('add_user')}>
                <InboxIcon className='h-5 w-5' />
                <p className='text-sm font-bold'>Users</p>
              </div>
            </Link>
          </div>
        )}

        <Link to='/pastjobcard'>
          <div className={`flex items-center pl-4 gap-3 py-2 mt-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'reports' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('reports')}>
            <ChartBarIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Past Service records</p>
          </div>
        </Link>

        <Link to='/setting'>
          <div className={`flex items-center pl-4 gap-3 py-2 mt-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'setting' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={() => setActiveBar('setting')}>
            <Cog8ToothIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Setting</p>
          </div>
        </Link>

        <div className="absolute bottom-4 w-full">
          <div className={`flex items-center pl-4 gap-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeBar === 'logout' ? 'text-white mb-2 bg-blue-400' : 'hover:bg-blue-400 hover:text-white'}`} onClick={handleLogout}>
            <ArrowUturnLeftIcon className='h-6 w-6' />
            <p className='text-sm font-bold'>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;