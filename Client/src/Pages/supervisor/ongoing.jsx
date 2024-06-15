import { useState, useEffect } from 'react';
import ShopHeader from '../../Components/shopheader';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// JobCard Component
const JobCard = ({ jobcard_id, veh_num, mileage, status }) => {
    const navigate = useNavigate();

    const handleStartJob = () => {
        navigate(`/assignworkerstart?jobcard_id=${jobcard_id}&veh_num=${veh_num}&mileage=${mileage}`);
    };

    return (
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Job Card ID: {jobcard_id}</h3>
            <p className="text-gray-700 mb-2">Vehicle Number: {veh_num}</p>
            <p className="text-gray-700 mb-2">Mileage: {mileage}</p>
            <p className="text-gray-700 mb-2">Status: {status}</p>
            <button
                onClick={handleStartJob}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Continue Job
            </button>
        </div>
    );
};

JobCard.propTypes = {
    jobcard_id: PropTypes.string.isRequired,
    veh_num: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
};

// SupervisorDashboard Component
const SupervisorDashboardOngoing = () => {
    const [jobCards, setJobCards] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchJobCards = async () => {
            if (user && user.user_id) {
                try {
                    const response = await axios.get('http://localhost:8800/api/supervisor/started_jobcards', { params: { user_id: user.user_id } });
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
            <ShopHeader pageName='Ongoing Jobs' />
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold mb-6">Assigned Job Cards (Started)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobCards.length > 0 ? (
                        jobCards.map((jobCard) => (
                            <JobCard
                                key={jobCard.jobcard_id}
                                jobcard_id={jobCard.jobcard_id}
                                veh_num={jobCard.veh_num}
                                mileage={jobCard.mileage}
                                status={jobCard.status}
                            />
                        ))
                    ) : (
                        // <p className="text-gray-700 col-span-full">No job cards assigned.</p>

                        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-blue-400 mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m-8 0a9 9 0 1018 0 9 9 0 10-18 0z" />
                            </svg>
                            <p className="text-gray-800 text-xl font-semibold mb-2">No Ongoing Job cards</p>
                            <p className="text-gray-600 text-center">You're all caught up! There are no job cards assigned to you at the moment.</p>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SupervisorDashboardOngoing;
