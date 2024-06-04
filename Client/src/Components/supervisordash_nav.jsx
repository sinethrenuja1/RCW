import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
 
  BookmarkIcon,
 
} from '@heroicons/react/24/solid';
import logo from '../images/logo.jpg';

const DashNav = () => {
  
 
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
        <Link to='#'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'dashboard' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('dashboard')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Assigned to me</p>
          </div>
        </Link>

        <Link to='#'>
          <div className={`flex items-center pl-4 gap-3 py-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-200 ${activeBar === 'showbooking' ? 'text-white bg-blue-400':''}`} onClick={() => setActiveBar('showbooking')}>
            <BookmarkIcon className='h-6 w-6'/>
            <p className='text-lg'>Booking</p>
          </div>
        </Link>

        

   
      </div>
    </div>
  );
};

export default DashNav;

