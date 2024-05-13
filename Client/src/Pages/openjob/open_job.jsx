

import Garage from "../../images/openjob.png";
import ShopHeader from "../../Components/shopheader";


function open_job() {
    return (
        <div className="flex flex-col min-h-screen justify-center ">
            <ShopHeader pageName="Open Job Card"/>
        <div className="flex items-center justify-center min-h-screen">
            
            {/* Left Column */}
            <div className="flex justify-center items-center w-1/2">
                <img
                    className="max-w-md h-auto rounded-lg shadow-md"
                    src={Garage}
                    alt="Car with people around it"
                />
            </div>
            {/* Right Column */}
            <div className="flex flex-col justify-center items-center w-1/2">
                {/* Input Field */}
                <div className="mb-6">
                    <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                    <input
                        id="vehicleNumber"
                        type="text"
                        placeholder="Enter Vehicle Number"
                        className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                {/* Button */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                    Open Job
                </button>
            </div>
            
        </div>
        </div>
    );
}

export default open_job;





// import React from 'react';

// function ElegantTable() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th scope="col" className="text-left px-4 py-2 bg-gray-200 text-gray-700">
//               Column 1
//             </th>
//             <th scope="col" className="text-left px-4 py-2 bg-gray-200 text-gray-700">
//               Column 2
//             </th>
//             <th scope="col" className="text-left px-4 py-2 bg-gray-200 text-gray-700">
//               Column 3
//             </th>
//             <th scope="col" className="text-left px-4 py-2 bg-gray-200 text-gray-700">
//               Column 4
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="px-4 py-2 border border-gray-300">Data 1</td>
//             <td className="px-4 py-2 border border-gray-300">Data 2</td>
//             <td className="px-4 py-2 border border-gray-300">Data 3</td>
//             <td className="px-4 py-2 border border-gray-300">
//               <button
//                 type="button"
//                 className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//           {/* Add more table rows here */}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ElegantTable;
