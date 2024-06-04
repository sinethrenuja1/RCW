import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.jpg';
import { HomeIcon } from '@heroicons/react/24/outline';
import { FaWarehouse } from "react-icons/fa";

const DashNav = () => {
  const [isWorkerDropdownOpen, setIsWorkerDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const toggleWorkerDropdown = () => {
    setIsWorkerDropdownOpen(!isWorkerDropdownOpen);
  };

  const toggleJobDropdown = () => {
    setIsJobDropdownOpen(!isJobDropdownOpen);
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
          <Link to="/showbooking" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Booking
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/stock" className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center">
            <FaWarehouse className="h-5 w-5 inline-block mr-2" /> Stock
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/show_services" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Services
          </Link>
        </li>
        <li className="mb-2">
          <button onClick={toggleWorkerDropdown} className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center w-full text-left">
            Workers
          </button>
          {isWorkerDropdownOpen && (
            <ul className="pl-8 mt-1">
              <li className="mb-2">
                <Link to="/show_workers" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
                  Employees
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/add_user" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
                  Users
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <button onClick={toggleJobDropdown} className="hover:bg-gray-200 text-black px-4 py-2 rounded text-lg flex items-center w-full text-left">
            Open Job
          </button>
          {isJobDropdownOpen && (
            <ul className="pl-8 mt-1">
              <li className="mb-2">
                <Link to="/openjob" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
                  Open Job Card
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/show_jobcard" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
                  Show Job Card
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/finaljobcard" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
                  Final Job Card
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-36">
          <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Reports
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/setting" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Settings
          </Link>
        </li>
        <li className="mb-2">
        <Link to="#" className="hover:bg-gray-200 text-black px-4 py-2 block rounded text-lg">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashNav;
