// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShopHeader from '../../Components/shopheader';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import { FaReceipt } from 'react-icons/fa';

// // Helper function to format dates
// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     date.setDate(date.getDate() + 1); // Adjust for the date offset
//     return date.toISOString().split('T')[0];
// };

// // Process the income data for the chart
// const processIncomeData = (billDetails, period) => {
//     const incomeMap = billDetails.reduce((acc, bill) => {
//         const date = formatDate(bill.b_date);
//         if (!acc[date]) {
//             acc[date] = 0;
//         }
//         acc[date] += parseFloat(bill.price);
//         return acc;
//     }, {});

//     let data = Object.keys(incomeMap).map(date => ({
//         date,
//         income: parseFloat(incomeMap[date]).toFixed(2)
//     })).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

//     if (period === 'weekly') {
//         data = groupByWeek(data);
//     } else if (period === 'monthly') {
//         data = groupByMonth(data);
//     }

//     return data;
// };

// // Group data by week
// const groupByWeek = (data) => {
//     const weeklyData = [];
//     let currentWeek = [];
//     let currentWeekStart = new Date(data[0].date);
//     currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Get the start of the week (Sunday)

//     data.forEach(entry => {
//         const entryDate = new Date(entry.date);
//         if (entryDate - currentWeekStart >= 7 * 24 * 60 * 60 * 1000) { // Check if the entry is in the next week
//             weeklyData.push({
//                 date: currentWeekStart.toISOString().split('T')[0],
//                 income: currentWeek.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
//             });
//             currentWeek = [];
//             currentWeekStart = new Date(entryDate);
//             currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Get the start of the week
//         }
//         currentWeek.push(entry);
//     });

//     // Push the last week data
//     if (currentWeek.length > 0) {
//         weeklyData.push({
//             date: currentWeekStart.toISOString().split('T')[0],
//             income: currentWeek.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
//         });
//     }

//     return weeklyData;
// };

// // Group data by month
// const groupByMonth = (data) => {
//     const monthlyData = [];
//     let currentMonth = [];
//     let currentMonthStart = new Date(data[0].date);
//     currentMonthStart.setDate(1); // Get the start of the month

//     data.forEach(entry => {
//         const entryDate = new Date(entry.date);
//         if (entryDate.getMonth() !== currentMonthStart.getMonth()) { // Check if the entry is in the next month
//             monthlyData.push({
//                 date: currentMonthStart.toISOString().split('T')[0],
//                 income: currentMonth.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
//             });
//             currentMonth = [];
//             currentMonthStart = new Date(entryDate);
//             currentMonthStart.setDate(1); // Get the start of the month
//         }
//         currentMonth.push(entry);
//     });

//     // Push the last month data
//     if (currentMonth.length > 0) {
//         monthlyData.push({
//             date: currentMonthStart.toISOString().split('T')[0],
//             income: currentMonth.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
//         });
//     }

//     return monthlyData;
// };


// const Dashboard = () => {
//     const [incomeData, setIncomeData] = useState([]);
//     const [period, setPeriod] = useState('daily');
//     const [todayBookingsCount, setTodayBookingsCount] = useState(0);
//     const [todayEarnings, setTodayEarnings] = useState(0);
//     const [ongoingJobCounts, setOngoingJobCounts] = useState({ started: 0, notStarted: 0 });
//     console.log(ongoingJobCounts);
//     const [supervisorJobCounts, setSupervisorJobCounts] = useState([]);
//     console.log(supervisorJobCounts);

//     useEffect(() => {
//         const fetchBillDetails = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/dashboard/getBillDetails');
//                 if (response.data) {
//                     const processedData = processIncomeData(response.data, period);
//                     setIncomeData(processedData);
//                 } else {
//                     console.error('No data received');
//                 }
//             } catch (error) {
//                 console.error('Error fetching bill details:', error);
//             }
//         };

//         fetchBillDetails();
//     }, [period]);

//     useEffect(() => {
//         const fetchTodayBookingsCount = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/dashboard/getTodayBookingsCount');
//                 if (response.data) {
//                     setTodayBookingsCount(response.data.count);
//                 } else {
//                     console.error('No data received');
//                 }
//             } catch (error) {
//                 console.error('Error fetching today\'s bookings count:', error);
//             }
//         };

//         fetchTodayBookingsCount();
//     }, []);

//     useEffect(() => {
//         const fetchTodayEarnings = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/dashboard/getTodayEarnings');
//                 if (response.data) {
//                     setTodayEarnings(response.data.earnings);
//                 } else {
//                     console.error('No data received');
//                 }
//             } catch (error) {
//                 console.error('Error fetching today\'s earnings:', error);
//             }
//         };

//         fetchTodayEarnings();
//     }, []);

//     useEffect(() => {
//         const fetchOngoingJobCounts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/dashboard/getOngoingjob_count');
//                 if (response.data && response.data.success) {
//                     setOngoingJobCounts(response.data.data);
//                     console.log(response.data.data);
//                 } else {
//                     console.error('No data received');
//                 }
//             } catch (error) {
//                 console.error('Error fetching ongoing job counts:', error);
//             }
//         };

//         fetchOngoingJobCounts();
//     }, []);

//     useEffect(() => {
//         const fetchSupervisorJobCounts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/dashboard/getSupervisorJobCounts');
//                 if (response.data && response.data.success) {
//                     setSupervisorJobCounts(response.data.data);
//                 } else {
//                     console.error('No data received');
//                 }
//             } catch (error) {
//                 console.error('Error fetching supervisor job counts:', error);
//             }
//         };

//         fetchSupervisorJobCounts();
//     }, []);


//     return (
//         <div>
//             <ShopHeader pageName="Dashboard" />

//             <div className="container bg mx-auto p-4">
//                 <h2 className="text-2xl font-bold mb-4">Income Overview</h2>
//                 <div className="mb-4 space-x-2">
//                     <button onClick={() => setPeriod('daily')} className={`px-3 py-1 rounded ${period === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Daily</button>
//                     <button onClick={() => setPeriod('weekly')} className={`px-3 py-1 rounded ${period === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Weekly</button>
//                     <button onClick={() => setPeriod('monthly')} className={`px-3 py-1 rounded ${period === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Monthly</button>
//                 </div>
//                 <div className="flex flex-wrap -mx-4">
//                     <div className="bg-white shadow rounded-lg p-4 mb-4 w-full lg:w-1/2 px-4">
//                         <ResponsiveContainer width="100%" height={250}>
//                             <LineChart data={incomeData}>
//                                 <CartesianGrid strokeDasharray="3 3" />
//                                 <XAxis dataKey="date" />
//                                 <YAxis ticks={[20000, 40000, 60000, 80000, 150000]} />
//                                 <Tooltip />
//                                 <Legend />
//                                 <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} dot={{ r: 3 }} />
//                             </LineChart>
//                         </ResponsiveContainer>
//                     </div>
//                     <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
//                         <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <div className="flex items-center">
//                                 <FaReceipt className="text-5xl text-blue-500 mr-4" />
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-700">Ongoing Jobs</h3>
//                                     <p className="text-lg text-gray-900">Started: {ongoingJobCounts.Started}</p>
//                                     <p className="text-lg text-gray-900">Not Started: {ongoingJobCounts['not started']}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-8">

//                         {/* <div className="flex flex-wrap -mx-4"> */}

//                             <div className="w-full px-4 mb-6">
//                                 <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                                     <div className="flex flex-col">
//                                         <FaReceipt className="text-5xl text-blue-500 self-center mb-4" />
//                                         <h3 className="text-xl font-bold text-gray-700 text-center mb-4">All Supervisors Job Cards</h3>
//                                         {supervisorJobCounts.map((supervisor) => (
//                                             <p key={supervisor.user_id} className="text-lg text-gray-900">
//                                                 {supervisor.u_name}: Ongoing Job Cards: {parseInt(supervisor.started) + parseInt(supervisor.not_started)}
//                                             </p>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         {/* </div> */}
//                     </div>

//                 <div className="mt-8">
//                     <h2 className="text-2xl font-bold mb-4">Today Bookings & Earnings</h2>
//                     <div className="bg-white shadow rounded-lg p-4">
//                         <p className="text-lg">Number of scheduled bookings today: <strong>{todayBookingsCount}</strong></p>
//                         <p className="text-lg">Earnings today: <strong>${todayEarnings.toFixed(2)}</strong></p>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import { useState, useEffect } from 'react';
import axios from 'axios';
import ShopHeader from '../../Components/shopheader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaReceipt } from 'react-icons/fa';

// Helper function to format dates
const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); // Adjust for the date offset
    return date.toISOString().split('T')[0];
};

// Process the income data for the chart
const processIncomeData = (billDetails, period) => {
    const incomeMap = billDetails.reduce((acc, bill) => {
        const date = formatDate(bill.b_date);
        if (!acc[date]) {
            acc[date] = 0;
        }
        acc[date] += parseFloat(bill.price);
        return acc;
    }, {});

    let data = Object.keys(incomeMap).map(date => ({
        date,
        income: parseFloat(incomeMap[date]).toFixed(2)
    })).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

    if (period === 'weekly') {
        data = groupByWeek(data);
    } else if (period === 'monthly') {
        data = groupByMonth(data);
    }

    return data;
};

// Group data by week
const groupByWeek = (data) => {
    const weeklyData = [];
    let currentWeek = [];
    let currentWeekStart = new Date(data[0].date);
    currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Get the start of the week (Sunday)

    data.forEach(entry => {
        const entryDate = new Date(entry.date);
        if (entryDate - currentWeekStart >= 7 * 24 * 60 * 60 * 1000) { // Check if the entry is in the next week
            weeklyData.push({
                date: currentWeekStart.toISOString().split('T')[0],
                income: currentWeek.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
            });
            currentWeek = [];
            currentWeekStart = new Date(entryDate);
            currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Get the start of the week
        }
        currentWeek.push(entry);
    });

    // Push the last week data
    if (currentWeek.length > 0) {
        weeklyData.push({
            date: currentWeekStart.toISOString().split('T')[0],
            income: currentWeek.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
        });
    }

    return weeklyData;
};

// Group data by month
const groupByMonth = (data) => {
    const monthlyData = [];
    let currentMonth = [];
    let currentMonthStart = new Date(data[0].date);
    currentMonthStart.setDate(1); // Get the start of the month

    data.forEach(entry => {
        const entryDate = new Date(entry.date);
        if (entryDate.getMonth() !== currentMonthStart.getMonth()) { // Check if the entry is in the next month
            monthlyData.push({
                date: currentMonthStart.toISOString().split('T')[0],
                income: currentMonth.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
            });
            currentMonth = [];
            currentMonthStart = new Date(entryDate);
            currentMonthStart.setDate(1); // Get the start of the month
        }
        currentMonth.push(entry);
    });

    // Push the last month data
    if (currentMonth.length > 0) {
        monthlyData.push({
            date: currentMonthStart.toISOString().split('T')[0],
            income: currentMonth.reduce((sum, e) => sum + parseFloat(e.income), 0).toFixed(2)
        });
    }

    return monthlyData;
};


const Dashboard = () => {
    const [incomeData, setIncomeData] = useState([]);
    const [period, setPeriod] = useState('daily');
    const [todayBookingsCount, setTodayBookingsCount] = useState(0);
    const [todayEarnings, setTodayEarnings] = useState(0);
    const [ongoingJobCounts, setOngoingJobCounts] = useState({ started: 0, notStarted: 0 });
    console.log(ongoingJobCounts);
    const [supervisorJobCounts, setSupervisorJobCounts] = useState([]);
    console.log(supervisorJobCounts);

    useEffect(() => {
        const fetchBillDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/dashboard/getBillDetails');
                if (response.data) {
                    const processedData = processIncomeData(response.data, period);
                    setIncomeData(processedData);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching bill details:', error);
            }
        };

        fetchBillDetails();
    }, [period]);

    useEffect(() => {
        const fetchTodayBookingsCount = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/dashboard/getTodayBookingsCount');
                if (response.data) {
                    setTodayBookingsCount(response.data.count);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching today\'s bookings count:', error);
            }
        };

        fetchTodayBookingsCount();
    }, []);

    useEffect(() => {
        const fetchTodayEarnings = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/dashboard/getTodayEarnings');
                if (response.data) {
                    setTodayEarnings(response.data.earnings);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching today\'s earnings:', error);
            }
        };

        fetchTodayEarnings();
    }, []);

    useEffect(() => {
        const fetchOngoingJobCounts = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/dashboard/getOngoingjob_count');
                if (response.data && response.data.success) {
                    setOngoingJobCounts(response.data.data);
                    console.log(response.data.data);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching ongoing job counts:', error);
            }
        };

        fetchOngoingJobCounts();
    }, []);

    useEffect(() => {
        const fetchSupervisorJobCounts = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/dashboard/getSupervisorJobCounts');
                if (response.data && response.data.success) {
                    setSupervisorJobCounts(response.data.data);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching supervisor job counts:', error);
            }
        };

        fetchSupervisorJobCounts();
    }, []);


    return (
        <div>
            <ShopHeader pageName="Dashboard" />

            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Income Overview</h2>
                <div className="mb-4 space-x-2">
                    <button onClick={() => setPeriod('daily')} className={`px-3 py-1 rounded ${period === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Daily</button>
                    <button onClick={() => setPeriod('weekly')} className={`px-3 py-1 rounded ${period === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Weekly</button>
                    <button onClick={() => setPeriod('monthly')} className={`px-3 py-1 rounded ${period === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Monthly</button>
                </div>

                <div className="flex flex-wrap -mx-4 ">
                    <div className="w-full lg:w-2/3 px-4  lg:mb-0">
                        <div className="bg-white shadow rounded-lg p-4">
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={incomeData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis ticks={[20000, 40000, 60000, 80000, 150000]} />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} dot={{ r: 3 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-6">
                            <div className="flex items-center">
                                <FaReceipt className="text-5xl text-blue-500 mr-4" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-700">Ongoing Jobs</h3>
                                    <p className="text-lg text-gray-900">Started: {ongoingJobCounts.Started}</p>
                                    <p className="text-lg text-gray-900">Not Started: {ongoingJobCounts['not started']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="flex flex-col">
                                <FaReceipt className="text-5xl text-blue-500 self-center mb-4" />
                                <h3 className="text-xl font-bold text-gray-700 text-center mb-4">All Supervisors Job Cards</h3>
                                {supervisorJobCounts.map((supervisor) => (
                                    <p key={supervisor.user_id} className="text-lg text-gray-900">
                                        {supervisor.u_name}: Ongoing Job Cards: {parseInt(supervisor.started) + parseInt(supervisor.not_started)}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-2/3 mt-2  ">


                    <div className="bg-white shadow rounded-lg p-2  transform hover:scale-105 transition-transform duration-200 ease-in-out">
                        <h2 className="text-2xl font-bold mb-4">Today Bookings & Earnings</h2>
                        <p className="text-lg">Number of scheduled bookings today: <strong>{todayBookingsCount}</strong></p>
                        <p className="text-lg">Earnings today: <strong>${todayEarnings.toFixed(2)}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
