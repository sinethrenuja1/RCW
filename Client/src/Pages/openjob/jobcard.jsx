
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import AddParts from './add_replaceparts';
import AddServices from './add_services';
import ShopHeader from "../../Components/shopheader";

const Jobcard_add = () => {
    const location = useLocation();
    const { jobcard_id, veh_num, mileage, supervisor } = location.state || {};
    const [activeTopic, setActiveTopic] = useState('AddServices');

    const handleTopicClick = (topic) => {
        setActiveTopic(topic);
    };

    const getPageName = () => {
        switch (activeTopic) {
            case 'AddParts':
                return 'Add Parts to job card';
            default:
                return 'Add Services';
        }
    };

    return (
        <div>
            
            <ShopHeader pageName={getPageName()} />
            {/**start sub navbar */}
            <div className='flex bg-blue-50 bg-side-nav-bg p-2 h-9 pl-3 -10 gap-6 font-inter border-b-2'>
                <button className={`${activeTopic === 'AddServices' ? 'topic' : 'text-gray-500'}`}
                    onClick={() => handleTopicClick('AddServices')}>Add Services</button>
                <button className={`${activeTopic === 'AddParts' ? 'topic' : 'text-gray-500'}`}
                    onClick={() => handleTopicClick('AddParts')}>Add Parts</button>
            </div>
            {/**end sub nav bar */}
            <div>
                {activeTopic === 'AddParts' && <AddParts jobcard_id={jobcard_id} veh_num={veh_num} mileage={mileage} supervisor={supervisor} />}
                {activeTopic === 'AddServices' && <AddServices jobcard_id={jobcard_id} veh_num={veh_num} mileage={mileage} supervisor={supervisor} />}
            </div>
        </div>
    );
};

export default Jobcard_add;
