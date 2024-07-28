// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import ShopHeader from '../../Components/shopheader';
// import { useNavigate } from 'react-router-dom';

// // Row Component
// Row.propTypes = {
//     row: PropTypes.shape({
//         jobcard_id: PropTypes.number.isRequired,
//         veh_num: PropTypes.string.isRequired,
//         u_name: PropTypes.string.isRequired,
//         status: PropTypes.string.isRequired,
//     }).isRequired,
// };

// function Row({ row }) {
//     const [open, setOpen] = useState(false);
//     const [details, setDetails] = useState(null);
//     const navigate = useNavigate();

//     const fetchDetails = async (jobcard_id) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardDetails/${jobcard_id}`);
//             setDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching job card details:', error.message);
//         }
//     };

//     const handleButtonClick = () => {
//         if (!open) {
//             fetchDetails(row.jobcard_id);
//         }
//         setOpen(!open);
//     };

//     return (
//         <>
//             <tr className="border-b border-gray-300">
//                 <td className="p-4 text-center">
//                     <button className="text-black" onClick={handleButtonClick}>
//                         {open ? '▲' : '▼'}
//                     </button>
//                 </td>
//                 <td className="p-4 text-base" style={{ width: '20px' }}>{row.jobcard_id}</td>
//                 <td className="p-4 text-right text-base">{row.veh_num}</td>
//                 <td className="p-4 text-right text-base">{row.u_name}</td>
//                 <td className="p-4 text-right text-base">{row.status}</td>
//                 <td className="p-4 text-right text-base">
//                     <button
//                         type="button"
//                         className="bg-lightblue text-white px-4 py-2 rounded-md mr-2"
//                         onClick={() => navigate('/updateJobCard',{ state: { veh_num: row.veh_num, jobcard_id: row.jobcard_id, supervisor: row.u_name } })}
//                     >
//                         Update
//                     </button>
//                     {/* <button
//                         type="button"
//                         className="bg-lightblue text-white px-4 py-2 rounded-md mr-2"
//                         onClick={() => navigate('/updateJobCard',{ state: { veh_num: row.veh_num, jobcard_id: row.jobcard_id, supervisor: row.u_name } })}
//                     >
//                         Update
//                     </button> */}
//                 </td>
//             </tr>
//             {open && details && (
//                 <tr>
//                     <td colSpan={6} className="p-4">
//                         <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                             <h6 className="font-semibold mb-2">Service Details</h6>
//                             <table className="w-full text-base border-gray-300 mb-4">
//                                 <thead>
//                                     <tr>
//                                         <th className="text-left p-2 w-1/4">Service Name</th>
//                                         <th className="text-left p-2 w-1/4">Quantity</th>
//                                         <th className="text-left p-2 w-1/4">Worker Name</th>
//                                         <th className="text-left p-2 w-1/4">Price</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {details.services !== 'No services found' ? details.services.map((service, index) => (
//                                         <tr key={index}>
//                                             <td className="p-2">{service.service_name}</td>
//                                             <td className="p-2">{service.s_quantity}</td>
//                                             <td className="p-2">{service.worker_name}</td>
//                                             <td className="p-2">{service.s_price}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="4" className="p-2 text-center">No services found</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                             <h6 className="font-semibold mb-2">Part Details</h6>
//                             <table className="w-full text-base border-lightblue">
//                                 <thead>
//                                     <tr>
//                                         <th className="text-left p-2 w-1/4">Part Name</th>
//                                         <th className="text-left p-2 w-1/4">Part ID</th>
//                                         <th className="text-left p-2 w-1/4">Quantity</th>
//                                         <th className="text-left p-2 w-1/4">Worker Name</th>
//                                         <th className="text-left p-2 w-1/4">Price</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {details.parts !== 'No parts used' ? details.parts.map((part, index) => (
//                                         <tr key={index}>
//                                             <td className="p-2">{part.part_name}</td>
//                                             <td className="p-2">{part.upart_id}</td>
//                                             <td className="p-2">{part.u_quantity}</td>
//                                             <td className="p-2">{part.uworker_id}</td>
//                                             <td className="p-2">{part.price}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="4" className="p-2 text-center">No parts used</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </td>
//                 </tr>
//             )}
//         </>
//     );
// }

// // CollapsibleTable Component
// export default function CollapsibleTable() {
//     const [jobCards, setJobCards] = useState([]);

//     useEffect(() => {
//         fetchJobCards();
//     }, []);

//     const fetchJobCards = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/jobcard/getJobCards');
//             if (response.status !== 200) {
//                 throw new Error('Failed to fetch job cards');
//             }
//             const data = response.data;
//             setJobCards(data);
//         } catch (error) {
//             console.error('Error fetching job cards:', error.message);
//         }
//     };

//     return (
//         <div>
//             <div className='header fixed-header'>
//             <ShopHeader pageName="Show Job Card" />
//             </div>
//             <div className="overflow-x-auto mx-5 mt-8">
//                 <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="p-4"></th>
//                             <th className="p-4 text-left font-semibold">JobCard Id</th>
//                             <th className="p-4 text-right font-semibold">Vehicle Number</th>
//                             <th className="p-4 text-right font-semibold">Supervisor</th>
//                             <th className="p-4 text-right font-semibold">Status</th>
//                             <th className="p-4 text-right font-semibold">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {jobCards.map((row) => (
//                             <Row key={row.jobcard_id} row={row} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ShopHeader from '../../Components/shopheader';
import { useNavigate } from 'react-router-dom';


// Row Component
Row.propTypes = {
    row: PropTypes.shape({
        jobcard_id: PropTypes.number.isRequired,
        veh_num: PropTypes.string.isRequired,
        u_name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

function Row({ row }) {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    const fetchDetails = async (jobcard_id) => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardshowDetails/${jobcard_id}`);
            setDetails(response.data);
        } catch (error) {
            console.error('Error fetching job card details:', error.message);
        }
    };
    console.log(details);

    const handleButtonClick = () => {
        if (!open) {
            fetchDetails(row.jobcard_id);
        }
        setOpen(!open);
    };

    return (
        <>
            <tr className="border-b    border-gray-300">
                <td className="p-4 text-center">
                    <button className="text-black" onClick={handleButtonClick}>
                        {open ? '▲' : '▼'}
                    </button>
                </td>
                <td className="p-4 text-base" style={{ width: '20px' }}>{row.jobcard_id}</td>
                <td className="p-4 text-right text-base">{row.veh_num}</td>
                <td className="p-4 text-right text-base">{row.u_name}</td>
                <td className="p-4 text-right text-base">{row.status}</td>
                <td className="p-4 text-right text-base">
                    <button
                        type="button"
                        className="bg-lightblue text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => navigate('/updateJobCard',{ state: { veh_num: row.veh_num, jobcard_id: row.jobcard_id, supervisor: row.u_name } })}
                    >
                        Update
                    </button>
                    {/* <button
                        type="button"
                        className="bg-lightblue text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => navigate('/updateJobCard',{ state: { veh_num: row.veh_num, jobcard_id: row.jobcard_id, supervisor: row.u_name } })}
                    >
                        Update
                    </button> */}
                </td>
            </tr>
            {open && details && (
                <tr>
                    <td colSpan={6} className="p-4">
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                            <h6 className="font-semibold mb-2">Service Details</h6>
                            <table className="w-full text-base border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="text-left p-2 w-1/4">Service Name</th>
                                        <th className="text-left p-2 w-1/4">Quantity</th>
                                        <th className="text-left p-2 w-1/4">Worker Name</th>
                                        <th className="text-left p-2 w-1/4">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.services !== 'No services found' ? details.services.map((service, index) => (
                                        console.log(service),
                                        <tr key={index}>
                                            <td className="p-2">{service.service_name}</td>
                                            <td className="p-2">{service.s_quantity}</td>
                                            <td className="p-2">{service.worker_name}</td>
                                            <td className="p-2">{service.s_price}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="p-2 text-center">No services found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <h6 className="font-semibold mb-2">Part Details</h6>
                            <table className="w-full text-base border-lightblue">
                                <thead>
                                    <tr>
                                        <th className="text-left p-2 w-1/4">Part Name</th>
                                        <th className="text-left p-2 w-1/4">Part ID</th>
                                        <th className="text-left p-2 w-1/4">Quantity</th>
                                        <th className="text-left p-2 w-1/4">Worker Name</th>
                                        <th className="text-left p-2 w-1/4">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.parts !== 'No parts used' ? details.parts.map((part, index) => (
                                        console.log(part),
                                        <tr key={index}>
                                            <td className="p-2">{part.part_name}</td>
                                            <td className="p-2">{part.part_id}</td>
                                            <td className="p-2">{part.u_quantity}</td>
                                            <td className="p-2">{part.worker_name}</td>
                                            <td className="p-2">{part.price}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="p-2 text-center">No parts used</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}

// CollapsibleTable Component
export default function CollapsibleTable() {
    const [jobCards, setJobCards] = useState([]);

    useEffect(() => {
        fetchJobCards();
    }, []);

    const fetchJobCards = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/jobcard/getJobCards');
            if (response.status !== 200) {
                throw new Error('Failed to fetch job cards');
            }
            const data = response.data;
            setJobCards(data);
        } catch (error) {
            console.error('Error fetching job cards:', error.message);
        }
    };

    return (
        <div>
            <div className='header fixed-header'>
            <ShopHeader pageName="Show Job Card" />
            </div>
            <div className="overflow-x-auto mx-5 mt-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4"></th>
                            <th className="p-4 text-left font-semibold">JobCard Id</th>
                            <th className="p-4 text-right font-semibold">Vehicle Number</th>
                            <th className="p-4 text-right font-semibold">Supervisor</th>
                            <th className="p-4 text-right font-semibold">Status</th>
                            <th className="p-4 text-right font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobCards.map((row) => (
                            <Row key={row.jobcard_id} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
