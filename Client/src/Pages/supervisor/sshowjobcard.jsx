// import { useState, useEffect } from 'react';
// import ShopHeader from '../../Components/shopheader';
// import axios from 'axios';

// const JobCard = ({ jobcard_id, veh_num, mileage }) => {
//     const startJob = () => {
//         // Add functionality to start job
//         console.log(`Starting job ${jobcard_id}`);
//     };

//     return (
//         <div>
           
//         <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//             <h3 className="text-xl font-bold mb-2">Job Card ID: {jobcard_id}</h3>
//             <p className="text-gray-700 mb-2">Vehicle Number: {veh_num}</p>
//             <p className="text-gray-700 mb-4">Mileage: {mileage}</p>
//             <button 
//                 onClick={startJob} 
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Start Job
//             </button>
//         </div>
//         </div>
//     );
// };

// const SupervisorDashboard = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const [jobCards, setJobCards] = useState([]);

//     useEffect(() => {
//         const fetchJobCards = async () => {
//             if (user && user.user_id) {
//                 try {
//                     const response = await axios.get('http://localhost:8800/api/supervisor/not_started_jobcards', { params: { user_id: user.user_id } });
//                     setJobCards(response.data.data);
//                 } catch (error) {
//                     console.error('Error fetching job cards:', error);
//                 }
//             }
//         };

//         fetchJobCards();
//     }, [user]);

//     return (
//         <div>
//             <ShopHeader pageName='Assign jobs'/>
//         <div className="container mx-auto p-4">
             
//             {jobCards.length > 0 ? (
//                 jobCards.map((jobCard) => (
//                     <JobCard
//                         key={jobCard.jobcard_id}
//                         jobcard_id={jobCard.jobcard_id}
//                         veh_num={jobCard.veh_num}
//                         mileage={jobCard.mileage}
//                     />
//                 ))
//             ) : (
//                 <p className="text-gray-700">No job cards assigned.</p>
//             )}
//         </div>
//        </div>
//     );
// };

// export default SupervisorDashboard;


// import { useState, useEffect } from 'react';
// import ShopHeader from '../../Components/shopheader';
// import axios from 'axios';

// const JobCard = ({ jobcard_id, veh_num, mileage }) => {
//     const startJob = () => {
//         // Add functionality to start job
//         console.log(`Starting job ${jobcard_id}`);
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl">
//             <h3 className="text-2xl font-bold mb-2">Job Card ID: {jobcard_id}</h3>
//             <p className="text-gray-600 mb-2">Vehicle Number: {veh_num}</p>
//             <p className="text-gray-600 mb-4">Mileage: {mileage}</p>
//             <button 
//                 onClick={startJob} 
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
//                 Start Job
//             </button>
//         </div>
//     );
// };

// const SupervisorDashboard = () => {
//     const [jobCards, setJobCards] = useState([]);
//     const user = JSON.parse(localStorage.getItem("user"));

//     useEffect(() => {
//         const fetchJobCards = async () => {
//             if (user && user.user_id) {
//                 try {
//                     const response = await axios.get('http://localhost:8800/api/supervisor/not_started_jobcards', { params: { user_id: user.user_id } });
//                     setJobCards(response.data.data);
//                 } catch (error) {
//                     console.error('Error fetching job cards:', error);
//                 }
//             }
//         };

//         fetchJobCards();
//     }, [user]);

//     if (!user) {
//         return <p className="text-gray-700">User not found. Please log in.</p>;
//     }

//     return (
//         <div>
//             <ShopHeader pageName='Assign jobs' />
//             <div className="container mx-auto p-6">
//                 <h2 className="text-3xl font-bold mb-6">Assigned Job Cards</h2>
//                 {jobCards.length > 0 ? (
//                     jobCards.map((jobCard) => (
//                         <JobCard
//                             key={jobCard.jobcard_id}
//                             jobcard_id={jobCard.jobcard_id}
//                             veh_num={jobCard.veh_num}
//                             mileage={jobCard.mileage}
//                         />
//                     ))
//                 ) : (
//                     <p className="text-gray-700">No job cards assigned.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SupervisorDashboard;


import { useState, useEffect } from 'react';
import ShopHeader from '../../Components/shopheader';
import axios from 'axios';


const JobCard = ({ jobcard_id, veh_num, mileage }) => {
    const startJob = async () => {
        try {
            await axios.put(`http://localhost:8800/api/supervisor/start_job/${jobcard_id}`);
            console.log(`Job ${jobcard_id} started successfully`);
            // Optionally, you can update the state or trigger a re-fetch of job cards here
        } catch (error) {
            console.error('Error starting job:', error);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Job Card ID: {jobcard_id}</h3>
            <p className="text-gray-700 mb-2">Vehicle Number: {veh_num}</p>
            <p className="text-gray-700 mb-4">Mileage: {mileage}</p>
            <button 
                onClick={startJob} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Job
            </button>
        </div>
    );
};

const SupervisorDashboard = () => {
    const [jobCards, setJobCards] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchJobCards = async () => {
            if (user && user.user_id) {
                try {
                    const response = await axios.get('http://localhost:8800/api/supervisor/not_started_jobcards', { params: { user_id: user.user_id } });
                    setJobCards(response.data.data);
                } catch (error) {
                    console.error('Error fetching job cards:', error);
                }
            }
        };

        fetchJobCards();
    }, [user]);

    if (!user) {
        return <p className="text-gray-700">User not found. Please log in.</p>;
    }

    return (
        <div>
            <ShopHeader pageName='Assign jobs' />
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold mb-6">Assigned Job Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobCards.length > 0 ? (
                        jobCards.map((jobCard) => (
                            <JobCard
                                key={jobCard.jobcard_id}
                                jobcard_id={jobCard.jobcard_id}
                                veh_num={jobCard.veh_num}
                                mileage={jobCard.mileage}
                            />
                        ))
                    ) : (
                        <p className="text-gray-700 col-span-full">No job cards assigned.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupervisorDashboard;
