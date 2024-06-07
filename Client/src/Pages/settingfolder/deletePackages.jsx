

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShopHeader from "../../Components/shopheader";
import Swal from 'sweetalert2';

const DeletePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/package/showPackages');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleDelete = async (package_id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this package!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8800/api/package/deletePackage/${package_id}`);
        setPackages(packages.filter(pkg => pkg.package_id !== package_id));
        Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
      } else {
        Swal.fire('Cancelled', 'Your package is safe!', 'info');
      }
    } catch (err) {
      console.error('Error deleting package:', err);
      Swal.fire('Error', 'There was an error deleting the package.', 'error');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <ShopHeader pageName="Show Packages" />
      <div className="flex mt-5 ml-5 mr-5 bg-primary justify-center items-center">
        <div className="bg-white rounded shadow-lg p-6">
          <Link to="/AddPackages" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Package</Link>
          
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Displayed Name</th>
                <th className="py-2">Description</th>
                <th className="py-2">Image</th>
                <th className='py-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {packages.map(pkg => (
                <tr key={pkg.package_id} className="border-b">
                  <td className="py-2 px-4">{pkg.p_name}</td>
                  <td className="py-2 px-4">{pkg.p_description}</td>
                  <td className="py-2 px-4">
                    <img src={`http://localhost:8800/public/packages/${pkg.image}`} alt={pkg.p_name} className="w-16 h-16 object-cover"/>
                  </td>
                  <td className="py-2 px-4">
                    <button className="bg-red-500 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(pkg.package_id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeletePackages;
