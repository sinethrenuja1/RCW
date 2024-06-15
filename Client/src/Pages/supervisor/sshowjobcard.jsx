
import { useState, useEffect } from 'react';
import ShopHeader from '../../Components/shopheader';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// JobCard Component
const JobCard = ({ jobcard_id, veh_num, mileage }) => {
    const navigate = useNavigate();

    const handleStartJob = () => {
        navigate(`/assignworkerstart?jobcard_id=${jobcard_id}&veh_num=${veh_num}&mileage=${mileage}`);
    };

    return (
        <div className="bg-blue-50  shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Job Card ID: {jobcard_id}</h3>
            <p className="text-gray-700 mb-2">Vehicle Number: {veh_num}</p>
            <p className="text-gray-700 mb-4">Mileage: {mileage}</p>
            <button
                onClick={handleStartJob}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Job
            </button>
        </div>
    );
};

JobCard.propTypes = {
    jobcard_id: PropTypes.string.isRequired,
    veh_num: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
};

// SupervisorDashboard Component
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
                        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 max-w-2xl mx-auto w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-blue-400 mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25M6 10.5h12M6 13.5h12" />
                            </svg>
                            <p className="text-gray-800 text-xl font-semibold mb-2">No job cards assigned for you</p>
                            <p className="text-gray-600 text-center">You're all caught up! There are no job cards assigned to you at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupervisorDashboard;
