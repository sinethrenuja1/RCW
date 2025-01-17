



import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ShopHeader from '../../Components/shopheader';

// Helper function to format dates
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

// Row Component
Row.propTypes = {
    row: PropTypes.shape({
        jobcard_id: PropTypes.number.isRequired,
        veh_num: PropTypes.string.isRequired,
        u_name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        b_date: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

function Row({ row }) {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);

    console.log(row);

    const fetchDetails = async (jobcard_id) => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobcard/getFinishJobCardDetails/${jobcard_id}`);
            setDetails(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching job card details:', error.message);
        }
    };

    const handleButtonClick = () => {
        if (!open) {
            fetchDetails(row.jobcard_id);
        }
        setOpen(!open);
    };

    return (
        <>
            <tr className="border-b border-gray-300">
                <td className="p-4 text-center">
                    <button className="text-black" onClick={handleButtonClick}>
                        {open ? '▲' : '▼'}
                    </button>
                </td>
                <td className="p-4 text-base" style={{ width: '20px' }}>{row.jobcard_id}</td>
                <td className="p-4 text-right text-base">{row.veh_num}</td>
                <td className="p-4 text-right text-base">{formatDate(row.b_date)}</td>
                <td className="p-4 text-right text-base">{row.price}</td>
                <td className="p-4 text-right text-base">{row.u_name}</td>
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
                                        <th className="text-left p-2 w-1/4">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.services !== 'No services found' ? details.services.map((service, index) => (
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
                                        <th className="text-left p-2 w-1/4">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.parts !== 'No parts used' ? details.parts.map((part, index) => (
                                        <tr key={index}>
                                            <td className="p-2">{part.part_name}</td>
                                            <td className="p-2">{part.upart_id}</td>
                                            <td className="p-2">{part.u_quantity}</td>
                                            <td className="p-2">{part.worker_name}</td>
                                            <td className="p-2">{part.u_price}</td>
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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        fetchJobCards();
    }, []);

    const fetchJobCards = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/jobcard/getClosedJobCards');
            if (response.status !== 200) {
                throw new Error('Failed to fetch job cards');
            }
            const data = response.data;
            setJobCards(data);
        } catch (error) {
            console.error('Error fetching job cards:', error.message);
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const filteredJobCards = jobCards.filter((jobCard) => {
        const matchesVehicleNumber = jobCard.veh_num.toLowerCase().includes(searchTerm.toLowerCase());
        const jobCardDate = new Date(jobCard.b_date).toDateString();
        const selectedFormattedDate = new Date(selectedDate).toDateString();
        const matchesDate = selectedDate ? jobCardDate === selectedFormattedDate : true;
        return matchesVehicleNumber && matchesDate;
    });

    return (
        <div>
            <ShopHeader pageName="Past Job Card" />
            <div className="mx-5 mt-8">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <div className="mb-2 md:mb-0 md:mr-4">
                        <label htmlFor="datePicker" className="block mb-1">Select a date:</label>
                        <input
                            type="date"
                            id="datePicker"
                            name="datePicker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="search" className="block mb-1">Search by vehicle number:</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by vehicle number"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4"></th>
                                <th className="p-4 text-left font-semibold">JobCard Id</th>
                                <th className="p-4 text-right font-semibold">Vehicle Number</th>
                                <th className="p-4 text-right font-semibold">Date</th>
                                <th className="p-4 text-right font-semibold">Total</th>
                                <th className="p-4 text-right font-semibold">Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobCards.map((row) => (
                                <Row key={row.jobcard_id} row={row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
