import { Link } from "react-router-dom";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";
import { useEffect, useState } from "react";

function ShowServices() {
    const [serviceData, setServiceData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchServiceData = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/serviceRoutes/getAllServices');
            setServiceData(response.data);
        } catch (error) {
            console.error('Error fetching service data:', error);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    const filteredServices = serviceData.filter(service =>
        service.s_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <ShopHeader pageName="Services" />
            <div className="w-full bg-blue-50 mx-auto bg-white shadow-lg rounded-lg mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search by Service Name"
                            className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <div>
                            <Link to="/Add_service" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                                + Add Service
                            </Link>
                        </div>
                    </div>

                    <table className="table-auto w-full mt-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Service ID</th>
                                <th className="px-4 py-2 text-left">Service Name</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices.map((service) => (
                                <tr style={{height: '50px'}} key={service.service_id}>
                                    <td className="border px-4 py-2">{service.service_id}</td>
                                    <td className="border px-4 py-2">{service.s_name}</td>
                                    <td className="border px-4 py-2">{service.s_price}</td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/edit_service/${service.service_id}`} className="bg-slate-500 text-white px-4 py-2 rounded-md mr-2">
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShowServices;
