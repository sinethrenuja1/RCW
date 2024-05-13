// import ShopHeader from '../Components/dash_nav'
import { useState } from 'react';
import AddItem from '../AddItem';
import AddServices from './add_services';
import UpdateStock from '../Update_stock';
import ShopHeader from "../../Components/shopheader"
// import LowStock from './Low_stock'

const Booking = () => {

  const [activeTopic, setActiveTopic] = useState('ShowStock');

  const handleTopicClick = (topic) => {
    setActiveTopic(topic);
  };

  const getPageName = () => {
    switch (activeTopic) {
      case 'updateStock':
        return 'Update Stock';
      case 'AddItem':
        return 'Add Item';
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
        <button className={`${activeTopic === 'AddItem' ? 'topic' : 'text-gray-500'}`}
          onClick={() => handleTopicClick('AddItem')}>Add Item</button>
        <button className={`${activeTopic === 'updateStock' ? 'topic' : 'text-gray-500'}`}
          onClick={() => handleTopicClick('updateStock')}> Update Stock</button>
        {/* <button className={`${activeTopic === 'TodayList' ? 'topic' : 'text-gray-500'}`}
          onClick={() => handleTopicClick('Low')}> Low Stock</button> */}
      </div>
      {/**end sub nav bar */}
      <div>
        {activeTopic === 'AddItem' && <AddItem />}
        {activeTopic === 'AddServices' && <AddServices />}
        {activeTopic === 'updateStock' && <UpdateStock/>}
        {/* {activeTopic === 'TodayList' && <BookingReserved />} */}
      </div>
    </div>
  );
};

export default Booking;