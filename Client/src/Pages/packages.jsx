// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Packages = () => {
//   const [packages, setPackages] = useState([]);
//   const [packagesError, setPackagesError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/package/getPackage');
//         setPackages(response.data);
//       } catch (err) {
//         setPackagesError(err.response ? err.response.data.message : 'Network Error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, []);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   return (
//     <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//         {packagesError ? (
//           <p className="text-red-500">Error: {packagesError}</p>
//         ) : (
//           packages.map((pkg, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="overflow-hidden">
//                 <p className="md:text-2xl text-xl text-center font-bold mb-6">{pkg.p_name}</p>
//                 <p className="text-lg mb-6">{pkg.p_description}</p>
//                 <img
//                   src={`http://localhost:8800/public/packages/${pkg.image}`}
//                   alt={pkg.p_name}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Packages;


// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Packages = () => {
//   const [packages, setPackages] = useState([]);
//   const [packagesError, setPackagesError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/package/getPackage');
//         setPackages(response.data);
//       } catch (err) {
//         setPackagesError(err.response ? err.response.data.message : 'Network Error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, []);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   return (
//     <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//         {packagesError ? (
//           <p className="text-red-500">Error: {packagesError}</p>
//         ) : (
//           packages.map((pkg, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="overflow-hidden">
//                 <p className="md:text-2xl text-xl text-center font-bold mb-6">{pkg.p_name}</p>
//                 <p className="text-lg mb-6">{pkg.p_description}</p>
//                 <img
//                   src={`http://localhost:8800/public/packages/${pkg.image}`}
//                   alt={pkg.p_name}
//                   className="w-full h-auto object-cover mb-4 rounded-md"
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Packages;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Home from '../images/Home.jpg';

// const Packages = () => {
//   const [packages, setPackages] = useState([]);
//   const [packagesError, setPackagesError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/package/getPackage');
//         setPackages(response.data);
//       } catch (err) {
//         setPackagesError(err.response ? err.response.data.message : 'Network Error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, []);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   return (
//     <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-12">Our Packages</h1>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//         {packagesError ? (
//           <p className="text-red-500">Error: {packagesError}</p>
//         ) : (
//           packages.map((pkg, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={`http://localhost:8800/public/packages/${pkg.image}`}
//                   alt={pkg.p_name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-6">
//                   <h2 className="text-2xl font-bold mb-4">{pkg.p_name}</h2>
//                   <p className="text-gray-700 mb-6">{pkg.p_description}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Packages;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from "../images/home_back4.png";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [packagesError, setPackagesError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/package/getPackage');
        setPackages(response.data);
      } catch (err) {
        setPackagesError(err.response ? err.response.data.message : 'Network Error');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div
      className=" bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${Home})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0  opacity-50"></div>

      {/* Packages Content */}
      <div className="relative my-20 md:px-14 max-w-screen-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10 mb-10 text-gray-700">Our Packages</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          {packagesError ? (
            <p className="text-red-500">Error: {packagesError}</p>
          ) : (
            packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={`http://localhost:8800/public/packages/${pkg.image}`}
                    alt={pkg.p_name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{pkg.p_name}</h2>
                    <p className="text-gray-700 mb-6">{pkg.p_description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;
