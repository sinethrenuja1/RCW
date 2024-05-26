// import ShopHeader from '../Components/dash_nav'
import { useState } from 'react';
import AddParts from './add_replaceparts';
import AddServices from './add_services';

import ShopHeader from "../../Components/shopheader"
// import LowStock from './Low_stock'

const Booking = () => {

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
      <div className='flex bg-side-nav-bg p-2 h-9 pl-3 -10 gap-6 font-inter border-b-2'>
        <button className={`${activeTopic === 'AddServices' ? 'topic' : 'text-gray-500'}`}
          onClick={() => handleTopicClick('AddServices')}>Add Services</button>
        <button className={`${activeTopic === 'AddParts' ? 'topic' : 'text-gray-500'}`}
          onClick={() => handleTopicClick('AddParts')}>Add Parts</button>
      
      </div>
      {/**end sub nav bar */}
      <div>
        {activeTopic === 'AddParts' && <AddParts />}
        {activeTopic === 'AddServices' && <AddServices />}
        {/* {activeTopic === 'updateStock' && <UpdateStock />} */}
        {/* {activeTopic === 'TodayList' && <BookingReserved />} */}
      </div>
    </div>
  );
};

export default Booking;