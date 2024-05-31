// import { useState } from 'react';
// import ShopHeader from '../../Components/shopheader';

// function createData(name, calories, fat, carbs, protein, price) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//             {
//                 date: '2020-01-05',
//                 customerId: '11091700',
//                 amount: 3,
//             },
//             {
//                 date: '2020-01-02',
//                 customerId: 'Anonymous',
//                 amount: 1,
//             },
//         ],
//     };
// }

// function Row({ row }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <tr className="border-b border-gray-300">
//                 <td className="p-4 text-center">
//                     <button
//                         className="text-black"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? '▲' : '▼'}
//                     </button>
//                 </td>
//                 <td className="p-4 text-base">{row.name}</td>
//                 <td className="p-4 text-right text-base">{row.calories}</td>
//                 <td className="p-4 text-right text-base">{row.fat}</td>
//                 <td className="p-4 text-right text-base">{row.carbs}</td>
//                 <td className="p-4 text-right text-base">{row.protein}</td>
//             </tr>
//             {open && (
//                 <tr>
//                     <td colSpan={6} className="p-4">
//                         <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                             <h6 className="font-semibold mb-2">History</h6>
//                             <table className="w-full text-base border-gray-300 ">
//                                 <thead>
//                                     <tr>
//                                         <th className="text-left p-2">Date</th>
//                                         <th className="text-left p-2">Customer</th>
//                                         <th className="text-right p-2">Amount</th>
//                                         <th className="text-right p-2">Total price ($)</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {row.history.map((historyRow) => (
//                                         <tr key={historyRow.date}>
//                                             <td className="p-2">{historyRow.date}</td>
//                                             <td className="p-2">{historyRow.customerId}</td>
//                                             <td className="p-2 text-right">{historyRow.amount}</td>
//                                             <td className="p-2 text-right">
//                                                 {Math.round(historyRow.amount * row.price * 100) / 100}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </td>
//                 </tr>
//             )}
//         </>
//     );
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//     return (
//         <div>
//             <ShopHeader pageName="Show Job Card" />
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
//                         {rows.map((row) => (
//                             <Row key={row.name} row={row} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// import { useState, useEffect } from 'react';
// import ShopHeader from '../../Components/shopheader';
// import axios from 'axios';

// function Row({ row }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <tr className="border-b border-gray-300">
//                 <td className="p-4 text-center">
//                     <button
//                         className="text-black"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? '▲' : '▼'}
//                     </button>
//                 </td>
//                 <td className="p-4 text-base">{row.jobcard_id}</td>
//                 <td className="p-4 text-right text-base">{row.veh_num}</td>
//                 <td className="p-4 text-right text-base">{row.u_name}</td>
//                 <td className="p-4 text-right text-base">{row.status}</td>
//                 <td className="p-4 text-right text-base">Actions</td>
//             </tr>
//             {/* Second table structure and data here */}
//             {/* {open && (
//                 <tr>
//                     <td colSpan={6} className="p-4">
//                         <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                             <h6 className="font-semibold mb-2">History</h6>
//                             <table className="w-full text-base border-gray-300 ">
//                                 <thead>
//                                     <tr>
//                                         <th className="text-left p-2">Date</th>
//                                         <th className="text-left p-2">Customer</th>
//                                         <th className="text-right p-2">Amount</th>
//                                         <th className="text-right p-2">Total price ($)</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {row.history.map((historyRow) => (
//                                         <tr key={historyRow.date}>
//                                             <td className="p-2">{historyRow.date}</td>
//                                             <td className="p-2">{historyRow.customerId}</td>
//                                             <td className="p-2 text-right">{historyRow.amount}</td>
//                                             <td className="p-2 text-right">
//                                                 {Math.round(historyRow.amount * row.price * 100) / 100}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </td>
//                 </tr>
//             )} */}
//         </>
//     );
// }

// export default function CollapsibleTable() {
//     const [jobCards, setJobCards] = useState([]);

//     useEffect(() => {
//         fetchJobCards();
//     }, []);

   

//     const fetchJobCards = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/jobcard/getJobCards');
//             if (!response.status === 200) {
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
//             <ShopHeader pageName="Show Job Card" />
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
import ShopHeader from '../../Components/shopheader';
import axios from 'axios';

function Row({ row }) {
    const [open, setOpen] = useState(false);
    const [serviceDetails, setServiceDetails] = useState([]);
    const [partDetails, setPartDetails] = useState([]);

    const fetchJobCardDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardDetails/${row.jobcard_id}`);
            const data = response.data;
            console.log(data);
            setServiceDetails(data.services);
            setPartDetails(data.parts);
            setOpen(true);
        } catch (error) {
            console.error('Error fetching job card details:', error.message);
        }
    };

    return (
        <>
            <tr className="border-b border-gray-300">
                <td className="p-4 text-center">
                    <button
                        className="text-black"
                        onClick={() => {
                            if (!open) {
                                fetchJobCardDetails(jobcard_id);
                            } else {
                                setOpen(!open);
                            }
                        }}
                    >
                        {open ? '▲' : '▼'}
                    </button>
                </td>
                <td className="p-4 text-base">{row.jobcard_id}</td>
                <td className="p-4 text-right text-base">{row.veh_num}</td>
                <td className="p-4 text-right text-base">{row.u_name}</td>
                <td className="p-4 text-right text-base">{row.status}</td>
                <td className="p-4 text-right text-base">Actions</td>
            </tr>
            {open && (
                <tr>
                    <td colSpan={6} className="p-4">
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                            <h6 className="font-semibold mb-2">Services</h6>
                            <table className="w-full text-base border-gray-300 ">
                                <thead>
                                    <tr>
                                        <th className="text-left p-2">Service Name</th>
                                        <th className="text-left p-2">Quantity</th>
                                        <th className="text-right p-2">Worker ID</th>
                                        <th className="text-right p-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceDetails.map((service, index) => (
                                        <tr key={index}>
                                            <td className="p-2">{service.service_name}</td>
                                            <td className="p-2">{service.s_quantity}</td>
                                            <td className="p-2 text-right">{service.worker_id}</td>
                                            <td className="p-2 text-right">{service.s_price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h6 className="font-semibold my-4">Parts</h6>
                            <table className="w-full text-base border-gray-300 ">
                                <thead>
                                    <tr>
                                        
                                        <th className="text-left p-2">Part Name</th>
                                        <th className="text-left p-2">Quantity</th>
                                        <th className="text-right p-2">Worker ID</th>
                                        <th className="text-right p-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partDetails.map((part, index) => (
                                        <tr key={index}>
                                            console.log(part);
                                            <td className="p-2">{part.part_name}</td>
                                            <td className="p-2">{part.u_quantity}</td>
                                            <td className="p-2 text-right">{part.uworker_id}</td>
                                            <td className="p-2 text-right">{part.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}

export default function CollapsibleTable() {
    const [jobCards, setJobCards] = useState([]);

    useEffect(() => {
        fetchJobCards();
    }, []);

    const fetchJobCards = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/jobcard/getJobCards');
            if (!response.status === 200) {
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
            <ShopHeader pageName="Show Job Card" />
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

