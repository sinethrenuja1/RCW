// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import ShopHeader from '../Components/shopheader';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function Bill() {
//     const location = useLocation();
//     const { jobcard_id } = location.state || {};
//     const [details, setDetails] = useState(null);
//     const [servicesTotal, setServicesTotal] = useState(0);
//     const [partsTotal, setPartsTotal] = useState(0);
//     const [discount, setDiscount] = useState(0);
//     const [finalTotal, setFinalTotal] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [amountPaid, setAmountPaid] = useState(0);
//     const [balance, setBalance] = useState(0);

//     useEffect(() => {
//         if (jobcard_id) {
//             fetchDetails(jobcard_id);
//         }
//     }, [jobcard_id]);

//     useEffect(() => {
//         calculateFinalTotal();
//     }, [servicesTotal, partsTotal, discount]);

//     const fetchDetails = async (jobcard_id) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardDetails/${jobcard_id}`);
//             setDetails(response.data);
//             calculateTotals(response.data);
//         } catch (error) {
//             console.error('Error fetching job card details:', error.message);
//         }
//     };

//     const calculateTotals = (details) => {
//         const servicesTotal = details.services.reduce((total, service) => total + (service.s_quantity * service.s_price), 0);
//         const partsTotal = details.parts.reduce((total, part) => total + (part.u_quantity * part.price), 0);
//         setServicesTotal(servicesTotal);
//         setPartsTotal(partsTotal);
//     };

//     const calculateFinalTotal = () => {
//         const grandTotal = servicesTotal + partsTotal;
//         const discountAmount = (discount / 100) * grandTotal;
//         setFinalTotal(grandTotal - discountAmount);
//     };

//     const handleProceedClick = () => {
//         setIsModalOpen(true);
//     };

//     const handlePayment = () => {
//         const calculatedBalance = amountPaid - finalTotal;
//         setBalance(calculatedBalance);
//     };

//     const downloadPDF = () => {
//         const doc = new jsPDF();

//         // Base64 string of the logo (replace this with your own base64 string)
//         // Replace with your actual Base64 string

//         // Add the header box with text
//         doc.setFillColor("#1B2A6E");
//         doc.rect(0, 0, doc.internal.pageSize.getWidth(), 60, 'F'); // Increase height for the logo

//         // Add the logo
        

//         // Add the header text
//         doc.setTextColor("#FFFFFF"); // Set text color to white
//         doc.setFontSize(24);
//         doc.text('Royal Car Wash & Clean Park', doc.internal.pageSize.getWidth() / 2, 25, { align: 'center' });
//         doc.setFontSize(12);
//         doc.text('The Best Car Wash in your city,\nWe make your car absolutely clean.\n077777777 / 077777778', doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });

//         // Add some spacing before the bill details
//         doc.setTextColor("#000000"); // Reset text color to black
//         doc.setFontSize(14);
//         doc.text(`Bill Details for Job Card ID: ${jobcard_id}`, 10, 70);

//         doc.autoTable({
//             startY: 80,
//             head: [['Name', 'Quantity', 'Unit Price', 'Total Price']],
//             body: [
//                 ...details.services.map(service => [
//                     service.service_name,
//                     service.s_quantity,
//                     service.s_price,
//                     (service.s_quantity * service.s_price).toFixed(2)
//                 ]),
//                 ...details.parts.map(part => [
//                     part.part_name,
//                     part.u_quantity,
//                     part.price,
//                     (part.u_quantity * part.price).toFixed(2)
//                 ])
//             ],
//             theme: 'striped',
//             styles: { halign: 'center' }
//         });

//         doc.autoTable({
//             startY: doc.autoTable.previous.finalY + 10,
//             head: [['Description', 'Amount']],
//             body: [
//                 ['Total for Services', servicesTotal.toFixed(2)],
//                 ['Total for Parts', partsTotal.toFixed(2)],
//                 ['Grand Total', (servicesTotal + partsTotal).toFixed(2)],
//                 ['Discount', `${discount}%`],
//                 ['Final Total', finalTotal.toFixed(2)],
//                 ['Amount Paid', amountPaid.toFixed(2)],
//                 ['Balance', balance.toFixed(2)]
//             ],
//             theme: 'striped',
//             styles: { halign: 'right' },
//             columnStyles: { 0: { halign: 'left' } }
//         });

//         doc.save('bill-detail.pdf');
//     };

//     if (!details) {
//         return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//     }

//     return (
//         <div>
//             <ShopHeader pageName="Bill Details" />
//             <div className="p-8 bg-gray-50 min-h-screen">
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-3xl font-bold mb-6 text-center">Bill Details for Job Card ID: {jobcard_id}</h2>
//                     <table className="w-full text-base border-collapse mb-6">
//                         <thead>
//                             <tr className="bg-gray-300">
//                                 <th className="text-left p-3">Name</th>
//                                 <th className="text-left p-3">Quantity</th>
//                                 <th className="text-left p-3">Unit Price</th>
//                                 <th className="text-left p-3 pl-7">Total Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Services Used</td>
//                             </tr>
//                             {details.services !== 'No services found' ? details.services.map((service, index) => (
//                                 <tr key={index} className="border-b hover:bg-gray-100">
//                                     <td className="p-3">{service.service_name}</td>
//                                     <td className="p-3">{service.s_quantity}</td>
//                                     <td className="p-3">{service.s_price}</td>
//                                     <td className="p-3 text-right">{(service.s_quantity * service.s_price).toFixed(2)}</td>
//                                 </tr>
//                             )) : (
//                                 <tr>
//                                     <td colSpan="4" className="p-3 text-center">No services found</td>
//                                 </tr>
//                             )}
//                             <tr>
//                                 <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Parts Used</td>
//                             </tr>
//                             {details.parts !== 'No parts used' ? details.parts.map((part, index) => (
//                                 <tr key={index} className="border-b hover:bg-gray-100">
//                                     <td className="p-3">{part.part_name}</td>
//                                     <td className="p-3">{part.u_quantity}</td>
//                                     <td className="p-3">{part.price}</td>
//                                     <td className="p-3 text-right">{(part.u_quantity * part.price).toFixed(2)}</td>
//                                 </tr>
//                             )) : (
//                                 <tr>
//                                     <td colSpan="4" className="p-3 text-center">No parts used</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                         <tfoot>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Total for Services</td>
//                                 <td className="p-3 text-right font-bold">{servicesTotal.toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Total for Parts</td>
//                                 <td className="p-3 text-right font-bold">{partsTotal.toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Grand Total</td>
//                                 <td className="p-3 text-right font-bold">{(servicesTotal + partsTotal).toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-200">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Discount (%)</td>
//                                 <td className="p-3 text-right">
//                                     <input 
//                                         type="number" 
//                                         className="w-20 p-2 border rounded" 
//                                         value={discount} 
//                                         onChange={(e) => setDiscount(e.target.value)} 
//                                     />
//                                 </td>
//                             </tr>
//                             <tr className="bg-gray-300">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Final Total</td>
//                                 <td className="p-3 text-right font-bold">{finalTotal.toFixed(2)}</td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                     <button 
//                         onClick={handleProceedClick} 
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
//                     >
//                         Proceed
//                     </button>
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4">Payment</h2>
//                         <label className="block mb-2">Amount Paid:</label>
//                         <input 
//                             type="number" 
//                             className="w-full p-2 border rounded mb-4" 
//                             value={amountPaid} 
//                             onChange={(e) => setAmountPaid(Number(e.target.value))} 
//                         />
//                         <button 
//                             onClick={handlePayment} 
//                             className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4"
//                         >
//                             Confirm Payment
//                         </button>
//                         <div>
//                             <p className="mb-2"><strong>Final Total:</strong> {finalTotal.toFixed(2)}</p>
//                             <p className="mb-2"><strong>Amount Paid:</strong> {amountPaid.toFixed(2)}</p>
//                             <p className="mb-2"><strong>Balance:</strong> {balance.toFixed(2)}</p>
//                         </div>
//                         <button 
//                             onClick={downloadPDF} 
//                             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
//                         >
//                             Download PDF
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Bill;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import ShopHeader from '../Components/shopheader';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function Bill() {
//     const location = useLocation();
//     const { jobcard_id } = location.state || {};
//     const [details, setDetails] = useState(null);
//     const [servicesTotal, setServicesTotal] = useState(0);
//     const [partsTotal, setPartsTotal] = useState(0);
//     const [discount, setDiscount] = useState(0);
//     const [finalTotal, setFinalTotal] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [amountPaid, setAmountPaid] = useState(0);
//     const [balance, setBalance] = useState(0);

//     useEffect(() => {
//         if (jobcard_id) {
//             fetchDetails(jobcard_id);
//         }
//     }, [jobcard_id]);

//     useEffect(() => {
//         calculateFinalTotal();
//     }, [servicesTotal, partsTotal, discount]);

//     const fetchDetails = async (jobcard_id) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardDetails/${jobcard_id}`);
//             setDetails(response.data);
//             calculateTotals(response.data);
//         } catch (error) {
//             console.error('Error fetching job card details:', error.message);
//         }
//     };

//     const calculateTotals = (details) => {
//         const servicesTotal = details.services.reduce((total, service) => total + (service.s_quantity * service.s_price), 0);
//         const partsTotal = details.parts.reduce((total, part) => total + (part.u_quantity * part.price), 0);
//         setServicesTotal(servicesTotal);
//         setPartsTotal(partsTotal);
//     };

//     const calculateFinalTotal = () => {
//         const grandTotal = servicesTotal + partsTotal;
//         const discountAmount = (discount / 100) * grandTotal;
//         setFinalTotal(grandTotal - discountAmount);
//     };

//     const handleProceedClick = () => {
//         setIsModalOpen(true);
//     };

//     const handlePayment = async () => {
//         const calculatedBalance = amountPaid - finalTotal;
//         setBalance(calculatedBalance);

//         // Get current date and time
//         const currentDateTime = new Date();
//         const date = currentDateTime.toISOString().split('T')[0]; // YYYY-MM-DD
//         const time = currentDateTime.toTimeString().split(' ')[0]; // HH:MM:SS

//         // Save bill details to the backend
//         try {
//             const response = await axios.post('http://localhost:8800/api/jobcard/saveBillDetails', {
//                 jobcard_id,
//                 b_date: date,
//                 b_time: time,
//                 price: finalTotal
//             });

//             if (response.status === 200) {
//                 console.log('Bill details saved successfully.');
//             }
//         } catch (error) {
//             console.error('Error saving bill details:', error.message);
//         }
//     };

//     const downloadPDF = () => {
//         const doc = new jsPDF();

//         doc.setFillColor("#1B2A6E");
//         doc.rect(0, 0, doc.internal.pageSize.getWidth(), 60, 'F');

//         doc.setTextColor("#FFFFFF");
//         doc.setFontSize(24);
//         doc.text('Royal Car Wash & Clean Park', doc.internal.pageSize.getWidth() / 2, 25, { align: 'center' });
//         doc.setFontSize(12);
//         doc.text('The Best Car Wash in your city,\nWe make your car absolutely clean.\n077777777 / 077777778', doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });

//         doc.setTextColor("#000000");
//         doc.setFontSize(14);
//         doc.text(`Bill Details for Job Card ID: ${jobcard_id}`, 10, 70);

//         doc.autoTable({
//             startY: 80,
//             head: [['Name', 'Quantity', 'Unit Price', 'Total Price']],
//             body: [
//                 ...details.services.map(service => [
//                     service.service_name,
//                     service.s_quantity,
//                     service.s_price,
//                     (service.s_quantity * service.s_price).toFixed(2)
//                 ]),
//                 ...details.parts.map(part => [
//                     part.part_name,
//                     part.u_quantity,
//                     part.price,
//                     (part.u_quantity * part.price).toFixed(2)
//                 ])
//             ],
//             theme: 'striped',
//             styles: { halign: 'center' }
//         });

//         doc.autoTable({
//             startY: doc.autoTable.previous.finalY + 10,
//             head: [['Description', 'Amount']],
//             body: [
//                 ['Total for Services', servicesTotal.toFixed(2)],
//                 ['Total for Parts', partsTotal.toFixed(2)],
//                 ['Grand Total', (servicesTotal + partsTotal).toFixed(2)],
//                 ['Discount', `${discount}%`],
//                 ['Final Total', finalTotal.toFixed(2)],
//                 ['Amount Paid', amountPaid.toFixed(2)],
//                 ['Balance', balance.toFixed(2)]
//             ],
//             theme: 'striped',
//             styles: { halign: 'right' },
//             columnStyles: { 0: { halign: 'left' } }
//         });

//         doc.save('bill-detail.pdf');
//     };

//     if (!details) {
//         return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//     }

//     return (
//         <div>
//             <ShopHeader pageName="Bill Details" />
//             <div className="p-8 bg-gray-50 min-h-screen">
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-3xl font-bold mb-6 text-center">Bill Details for Job Card ID: {jobcard_id}</h2>
//                     <table className="w-full text-base border-collapse mb-6">
//                         <thead>
//                             <tr className="bg-gray-300">
//                                 <th className="text-left p-3">Name</th>
//                                 <th className="text-left p-3">Quantity</th>
//                                 <th className="text-left p-3">Unit Price</th>
//                                 <th className="text-left p-3 pl-7">Total Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Services Used</td>
//                             </tr>
//                             {details.services !== 'No services found' ? details.services.map((service, index) => (
//                                 <tr key={index} className="border-b hover:bg-gray-100">
//                                     <td className="p-3">{service.service_name}</td>
//                                     <td className="p-3">{service.s_quantity}</td>
//                                     <td className="p-3">{service.s_price}</td>
//                                     <td className="p-3 text-right">{(service.s_quantity * service.s_price).toFixed(2)}</td>
//                                 </tr>
//                             )) : (
//                                 <tr>
//                                     <td colSpan="4" className="p-3 text-center">No services found</td>
//                                 </tr>
//                             )}
//                             <tr>
//                                 <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Parts Used</td>
//                             </tr>
//                             {details.parts !== 'No parts used' ? details.parts.map((part, index) => (
//                                 <tr key={index} className="border-b hover:bg-gray-100">
//                                     <td className="p-3">{part.part_name}</td>
//                                     <td className="p-3">{part.u_quantity}</td>
//                                     <td className="p-3">{part.price}</td>
//                                     <td className="p-3 text-right">{(part.u_quantity * part.price).toFixed(2)}</td>
//                                 </tr>
//                             )) : (
//                                 <tr>
//                                     <td colSpan="4" className="p-3 text-center">No parts used</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                         <tfoot>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Total for Services</td>
//                                 <td className="p-3 text-right font-bold">{servicesTotal.toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Total for Parts</td>
//                                 <td className="p-3 text-right font-bold">{partsTotal.toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-100">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Grand Total</td>
//                                 <td className="p-3 text-right font-bold">{(servicesTotal + partsTotal).toFixed(2)}</td>
//                             </tr>
//                             <tr className="bg-gray-200">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Discount (%)</td>
//                                 <td className="p-3 text-right">
//                                     <input 
//                                         type="number" 
//                                         className="w-20 p-2 border rounded" 
//                                         value={discount} 
//                                         onChange={(e) => setDiscount(e.target.value)} 
//                                     />
//                                 </td>
//                             </tr>
//                             <tr className="bg-gray-300">
//                                 <td colSpan="3" className="p-3 text-right font-bold">Final Total</td>
//                                 <td className="p-3 text-right font-bold">{finalTotal.toFixed(2)}</td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                     <button 
//                         onClick={handleProceedClick} 
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
//                     >
//                         Proceed
//                     </button>
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4">Payment</h2>
//                         <label className="block mb-2">Amount Paid:</label>
//                         <input 
//                             type="number" 
//                             className="w-full p-2 border rounded mb-4" 
//                             value={amountPaid} 
//                             onChange={(e) => setAmountPaid(Number(e.target.value))} 
//                         />
//                         <button 
//                             onClick={handlePayment} 
//                             className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4"
//                         >
//                             Confirm Payment
//                         </button>
//                         <div>
//                             <p className="mb-2"><strong>Final Total:</strong> {finalTotal.toFixed(2)}</p>
//                             <p className="mb-2"><strong>Amount Paid:</strong> {amountPaid.toFixed(2)}</p>
//                             <p className="mb-2"><strong>Balance:</strong> {balance.toFixed(2)}</p>
//                         </div>
//                         <button 
//                             onClick={downloadPDF} 
//                             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
//                         >
//                             Download PDF
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Bill;


import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ShopHeader from '../Components/shopheader';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Swal from 'sweetalert2';

function Bill() {
    const location = useLocation();
    const { jobcard_id } = location.state || {};
    const [details, setDetails] = useState(null);
    const [servicesTotal, setServicesTotal] = useState(0);
    const [partsTotal, setPartsTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amountPaid, setAmountPaid] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (jobcard_id) {
            fetchDetails(jobcard_id);
        }
    }, [jobcard_id]);

    useEffect(() => {
        calculateFinalTotal();
    }, [servicesTotal, partsTotal, discount]);

    const fetchDetails = async (jobcard_id) => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobcard/getJobCardDetails/${jobcard_id}`);
            setDetails(response.data);
            calculateTotals(response.data);
        } catch (error) {
            console.error('Error fetching job card details:', error.message);
        }
    };

    const calculateTotals = (details) => {
        const servicesTotal = Array.isArray(details.services)
            ? details.services.reduce((total, service) => total + (service.s_quantity * service.s_price), 0)
            : 0;
        const partsTotal = Array.isArray(details.parts)
            ? details.parts.reduce((total, part) => total + (part.u_quantity * part.price), 0)
            : 0;
        setServicesTotal(servicesTotal);
        setPartsTotal(partsTotal);
    };

    const calculateFinalTotal = () => {
        const grandTotal = servicesTotal + partsTotal;
        const discountAmount = (discount / 100) * grandTotal;
        setFinalTotal(grandTotal - discountAmount);
    };

    const handleProceedClick = () => {
        setIsModalOpen(true);
    };

    const handlePayment = async () => {
        const calculatedBalance = amountPaid - finalTotal;
        setBalance(calculatedBalance);

        // Get current date and time
        const currentDateTime = new Date();
        const date = currentDateTime.toISOString().split('T')[0]; // YYYY-MM-DD
        const time = currentDateTime.toTimeString().split(' ')[0]; // HH:MM:SS

        // Save bill details to the backend
        try {
            const response = await axios.post('http://localhost:8800/api/jobcard/saveBillDetails', {
                jobcard_id,
                b_date: date,
                b_time: time,
                price: finalTotal
            });

            if (response.status === 200) {
                console.log('Bill details saved successfully.');

                // Update job card status to Closed
                try {
                    const statusResponse = await axios.put(`http://localhost:8800/api/jobcard/updateStatus`, {
                        jobcard_id: jobcard_id,
                        status: 'Closed'
                    });

                    if (statusResponse.status === 200) {
                        console.log('Job card status updated to Closed.');
                        Swal.fire({
                            title: 'Success!',
                            text: 'Job card status has been updated to Closed.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                } catch (statusError) {
                    console.error('Error updating job card status:', statusError.message);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to update job card status.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }
        } catch (error) {
            console.error('Error saving bill details:', error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to save bill details.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFillColor("#1B2A6E");
        doc.rect(0, 0, doc.internal.pageSize.getWidth(), 60, 'F');

        doc.setTextColor("#FFFFFF");
        doc.setFontSize(24);
        doc.text('Royal Car Wash & Clean Park', doc.internal.pageSize.getWidth() / 2, 25, { align: 'center' });
        doc.setFontSize(12);
        doc.text('The Best Car Wash in your city,\nWe make your car absolutely clean.\n077777777 / 077777778', doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });

        doc.setTextColor("#000000");
        doc.setFontSize(14);
        doc.text(`Bill Details for Job Card ID: ${jobcard_id}`, 10, 70);

        doc.autoTable({
            startY: 80,
            head: [['Name', 'Quantity', 'Unit Price', 'Total Price']],
            body: [
                ...details.services.map(service => [
                    service.service_name,
                    service.s_quantity,
                    service.s_price,
                    (service.s_quantity * service.s_price).toFixed(2)
                ]),
                ...details.parts.map(part => [
                    part.part_name,
                    part.u_quantity,
                    part.price,
                    (part.u_quantity * part.price).toFixed(2)
                ])
            ],
            theme: 'striped',
            styles: { halign: 'center' }
        });

        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 10,
            head: [['Description', 'Amount']],
            body: [
                ['Total for Services', servicesTotal.toFixed(2)],
                ['Total for Parts', partsTotal.toFixed(2)],
                ['Grand Total', (servicesTotal + partsTotal).toFixed(2)],
                ['Discount', `${discount}%`],
                ['Final Total', finalTotal.toFixed(2)],
                ['Amount Paid', amountPaid.toFixed(2)],
                ['Balance', balance.toFixed(2)]
            ],
            theme: 'striped',
            styles: { halign: 'right' },
            columnStyles: { 0: { halign: 'left' } }
        });

        doc.save('bill-detail.pdf');
    };

    if (!details) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return (
        <div>
            <ShopHeader pageName="Bill Details" />
            <div className="p-8 bg-gray-50 min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Bill Details for Job Card ID: {jobcard_id}</h2>
                    <table className="w-full text-base border-collapse mb-6">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="text-left p-3">Name</th>
                                <th className="text-left p-3">Quantity</th>
                                <th className="text-left p-3">Unit Price</th>
                                <th className="text-left p-3 pl-7">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Services Used</td>
                            </tr>
                            {Array.isArray(details.services) && details.services.length > 0 ? details.services.map((service, index) => (
                                <tr key={index} className="border-b hover:bg-gray-100">
                                    <td className="p-3">{service.service_name}</td>
                                    <td className="p-3">{service.s_quantity}</td>
                                    <td className="p-3">{service.s_price}</td>
                                    <td className="p-3 text-right">{(service.s_quantity * service.s_price).toFixed(2)}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="p-3 text-center">No services found</td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan="4" className="p-3 text-center font-bold bg-gray-200">Parts Used</td>
                            </tr>
                            {Array.isArray(details.parts) && details.parts.length > 0 ? details.parts.map((part, index) => (
                                <tr key={index} className="border-b hover:bg-gray-100">
                                    <td className="p-3">{part.part_name}</td>
                                    <td className="p-3">{part.u_quantity}</td>
                                    <td className="p-3">{part.price}</td>
                                    <td className="p-3 text-right">{(part.u_quantity * part.price).toFixed(2)}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="p-3 text-center">No parts used</td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-100">
                                <td colSpan="3" className="p-3 text-right font-bold">Total for Services</td>
                                <td className="p-3 text-right font-bold">{servicesTotal.toFixed(2)}</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td colSpan="3" className="p-3 text-right font-bold">Total for Parts</td>
                                <td className="p-3 text-right font-bold">{partsTotal.toFixed(2)}</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td colSpan="3" className="p-3 text-right font-bold">Grand Total</td>
                                <td className="p-3 text-right font-bold">{(servicesTotal + partsTotal).toFixed(2)}</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td colSpan="3" className="p-3 text-right font-bold">Discount (%)</td>
                                <td className="p-3 text-right">
                                    <input 
                                        type="number" 
                                        className="w-20 p-2 border rounded" 
                                        value={discount} 
                                        onChange={(e) => setDiscount(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr className="bg-gray-300">
                                <td colSpan="3" className="p-3 text-right font-bold">Final Total</td>
                                <td className="p-3 text-right font-bold">{finalTotal.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button 
                        onClick={handleProceedClick} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                    >
                        Proceed
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Payment</h2>
                        <label className="block mb-2">Amount Paid:</label>
                        <input 
                            type="number" 
                            className="w-full p-2 border rounded mb-4" 
                            value={amountPaid} 
                            onChange={(e) => setAmountPaid(Number(e.target.value))} 
                        />
                        <button 
                            onClick={handlePayment} 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4"
                        >
                            Confirm Payment
                        </button>
                        <div>
                            <p className="mb-2"><strong>Final Total:</strong> {finalTotal.toFixed(2)}</p>
                            <p className="mb-2"><strong>Amount Paid:</strong> {amountPaid.toFixed(2)}</p>
                            <p className="mb-2"><strong>Balance:</strong> {balance.toFixed(2)}</p>
                        </div>
                        <button 
                            onClick={downloadPDF} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bill;
