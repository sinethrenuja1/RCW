
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopHeader from "../../Components/shopheader";

function Create_jobcard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [supervisors, setSupervisors] = useState([]);
    const [jobCardId, setJobCardId] = useState('');
    const [formData, setFormData] = useState({
        veh_num: location.state?.veh_num || '',
        mileage: '',
        supervisor: ''
    });

    useEffect(() => {
        const fetchSupervisors = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/jobRoutes/loadSupervisors');
                setSupervisors(response.data);
            } catch (error) {
                console.error('Error fetching supervisors:', error);
            }
        };

        fetchSupervisors();
    }, []);

    useEffect(() => {
        const fetchJobcardId = async () => {
            try {
                const response = await fetch('http://localhost:8800/api/jobRoutes/next-job-id');
                const data = await response.json();
                setJobCardId(data.jobcard_id);
            } catch (error) {
                console.error('Error fetching job card ID:', error);
            }
        };

        fetchJobcardId();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/api/jobRoutes/save_jobcard', {
                jobcard_id: jobCardId,
                veh_num: formData.veh_num,
                mileage: formData.mileage,
                supervisor: formData.supervisor
            });
            console.log(response.data);

            navigate('/jobcard', { 
                state: { 
                    jobcard_id: jobCardId,
                    veh_num: formData.veh_num,
                    mileage: formData.mileage,
                    supervisor: formData.supervisor 
                }
            });
        } catch (error) {
            console.error('Error saving job card:', error);
        }
    };

    return (
        <div>
            <ShopHeader pageName="Create Job Card" />
            <div className="flex bg-blue-50 justify-center py-8">
                <form onSubmit={handleSubmit} className="w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center mb-8">
                            <p className="text-3xl">Create Job Card</p>
                        </div>
                        <label htmlFor="veh_num" className="text-gray-700 font-semibold mb-2">Vehicle Number:</label>
                        <input
                            id="veh_num"
                            type="text"
                            value={formData.veh_num}
                            readOnly
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="jobcard_id" className="text-gray-700 font-semibold mb-2">Job Card ID:</label>
                        <input
                            id="jobcard_id"
                            type="text"
                            value={jobCardId}
                            readOnly
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mileage" className="text-gray-700 font-semibold mb-2">Mileage:</label>
                        <input
                            id="mileage"
                            placeholder="Enter Mileage"
                            type="text"
                            value={formData.mileage}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="supervisor" className="text-gray-700 font-semibold mb-2">Supervisor:</label>
                        <select
                            id="supervisor"
                            value={formData.supervisor}
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                        >
                            <option value="">Select a supervisor</option>
                            {supervisors.map((supervisor, index) => (
                                <option key={index} value={supervisor.u_name}>{supervisor.u_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Create_jobcard.propTypes = {
    jobcard_id: PropTypes.string,
};

export default Create_jobcard;
