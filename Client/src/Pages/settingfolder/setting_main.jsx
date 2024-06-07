// import ShopHeader from "../../Components/shopheader";
// import { useNavigate } from 'react-router-dom';


// const Setting_main = () => {

//     const navigate = useNavigate();

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <ShopHeader pageName="Settings" />
//             <div className="bg-white shadow-lg rounded-lg mx-3 my-6 p-6">
//                 <div >
//                     <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Page Section</h1>
//                     <div className="flex">
//                     <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center mt-4 w-full md:w-1/2 lg:w-1/3 mx-auto">
//                         <h3 className="text-xl font-bold mb-4">Update Booking Page Services</h3>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             onClick={() => navigate('/addservicesto_web')}>
//                             Go
//                         </button>
//                     </div>
//                     <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center mt-4 w-full md:w-1/2 lg:w-1/3 mx-auto">
//                         <h3 className="text-xl font-bold mb-4">Add Holidays</h3>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             onClick={() => navigate('/addholidays')}>
//                             Go
//                         </button>
//                     </div>
//                     </div>
//                 </div>
                
//             </div>

//         </div>
//     );
// };

// export default Setting_main;


import ShopHeader from "../../Components/shopheader";
import { useNavigate } from 'react-router-dom';

const Setting_main = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">
            <ShopHeader pageName="Settings" />
            <div className="bg-white shadow-lg rounded-lg mx-3 my-6 p-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Page Section</h1>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center mt-4 w-full md:w-1/2 lg:w-1/3 mx-2">
                            <h3 className="text-xl font-bold mb-4">Update Booking Page Services</h3>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/addservicesto_web')}>
                                Go
                            </button>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center mt-4 w-full md:w-1/2 lg:w-1/3 mx-2">
                            <h3 className="text-xl font-bold mb-4">Add Holidays</h3>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/addholidays')}>
                                Go
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-8"/>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Page Section</h1>
                    <div className="flex justify-center">
                        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center mt-4 w-full md:w-1/2 lg:w-1/3 mx-2">
                            <h3 className="text-xl font-bold mb-4">Add Packages</h3>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/deletepackages')}>
                                Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting_main;
