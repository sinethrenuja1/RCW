import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Cog8ToothIcon,
  // ArrowUturnLeftIcon,
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
        <img src={logo} alt="logo" className="w-24 h-24 rounded-full mb-2 shadow-lg" />
        
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

            <Link to='/finishedjobcard'>
              <div className={`flex items-center pl-8 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'finishedjobcard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('finishedjobcard')}>
                <IdentificationIcon className='h-5 w-5'/>
                <p className='text-lg'>Final Job Card</p>
              </div>
            </Link>
          </div>
        )}
          
          <Link to='/stock'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'Stock' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('showbooking')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Stock</p>
          </div>
        </Link>

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

        {/* <Link to='/'>
          <div className='fixed flex items-center pl-4 w-64 gap-3 py-3 hover:bg-blue-400 hover:text-white rounded-lg cursor-pointer bottom-6 transition-all duration-200'>
            <ArrowUturnLeftIcon className='h-6 w-6'/>
            <p className='text-lg'>Log out</p>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default DashNav;

