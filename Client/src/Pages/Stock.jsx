// import ShopHeader from '../Components/dash_nav'
import { useState } from 'react';
import AddItem from './AddItem';
import Showstock from './ShowStock';
import BookingReserved from './DeleteStock';

const Booking = () => {

    const [activeTopic, setActiveTopic] = useState('DashBoard');

    const handleTopicClick = (topic) => {
        setActiveTopic(topic);
    };

    const getPageName = () => {
        switch (activeTopic) {
            case 'DashBoard':
                return 'Dashboard';
            default:
                return 'Boooking';
        }
    };

    return (
      <div>
        {/* <ShopHeader pageName={getPageName()} /> */}

        {/**start sub navbar */}
        <div className='flex bg-side-nav-bg p-2 h-9 pl-3 -10 gap-6 font-inter border-b-2'>
          <button className={`${activeTopic === 'AddItem' ? 'topic' : 'text-gray-500'}`}
            onClick={() => handleTopicClick('AddItem')}>Add Item</button>
          <button className={`${activeTopic === 'ShowStock' ? 'topic' : 'text-gray-500'}`}
            onClick={() => handleTopicClick('ShowStock')}>Show Stock</button>
          <button className={`${activeTopic === 'TodayList' ? 'topic' : 'text-gray-500'}`}
            onClick={() => handleTopicClick('TodayList')}> Reserved List</button>
        </div>
        {/**end sub nav bar */}
        <div>
          {activeTopic === 'AddItem' && <AddItem />}
          {activeTopic === 'ShowStock' && <Showstock />}
          {activeTopic === 'TodayList' && <BookingReserved />}
        </div>
      </div>
    );
};

export default Booking;