// import ShopHeader from '../Components/dash_nav'
import { useEffect, useState } from 'react';
import AddParts from './add_replaceparts';
import AddServices from './add_services';

import ShopHeader from "../../Components/shopheader"

// import LowStock from './Low_stock'

const Booking = () => {

  const [activeTopic, setActiveTopic] = useState('AddServices');
  const [jobcard_id, setjobcard_id] = useState('');
  

  const handleTopicClick = (topic) => {
    setActiveTopic(topic);
  };
  useEffect(() => {
    const fetchjobcard_id = async () => {
      try {
        const response = await fetch('http://localhost:8800/api/jobRoutes/next-job-id');
        const data = await response.json();
        setjobcard_id(data.jobcard_id);
      } catch (error) {
        console.error('Error fetching job card ID:', error);
      }
    };

    fetchjobcard_id();
  }, []);

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
        {activeTopic === 'AddParts' && <AddParts jobcard_id={jobcard_id}/>}
        {activeTopic === 'AddServices' && <AddServices jobcard_id={jobcard_id}/>}
        {/* {activeTopic === 'updateStock' && <UpdateStock />} */}
        {/* {activeTopic === 'TodayList' && <BookingReserved />} */}
      </div>
    </div>
  );
};

export default Booking;

// import ShopHeader from '../Components/dash_nav'
// import { useEffect, useState } from 'react';
// import AddParts from './add_replaceparts';
// import AddServices from './add_services';

// import ShopHeader from "../../Components/shopheader"
// import { useNavigate } from 'react-router-dom';
// // import LowStock from './Low_stock'

// const Booking = () => {

//   const [activeTopic, setActiveTopic] = useState('AddServices');
//   const [jobcard_id, setJobCardId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobCardId = async () => {
//       try {
//         const response = await fetch('http://localhost:8800/api/jobRoutes/next-job-id');
//         const data = await response.json();
//         setJobCardId(data.jobcard_id);
//       } catch (error) {
//         console.error('Error fetching job card ID:', error);
//       }
//     };

//     fetchJobCardId();
//   }, []);

//   const handleTopicClick = (topic) => {
//     setActiveTopic(topic);
//     if (topic === 'AddServices') {
//       navigate("/job_services", { state: { jobcard_id: jobcard_id } });
//     } else if (topic === 'AddParts') {
//       navigate("/job_parts", { state: { jobcard_id: jobcard_id } });
//   }
// };

//   const getPageName = () => {
//     switch (activeTopic) {
//       case 'AddParts':
//         return 'Add Parts to job card';
//       default:
//         return 'Add Services';
//     }
//   };

//   return (
//     <div>
//       <ShopHeader pageName={getPageName()} />

//       {/**start sub navbar */}
//       <div className='flex bg-side-nav-bg p-2 h-9 pl-3 -10 gap-6 font-inter border-b-2'>
//         <button className={`${activeTopic === 'AddServices' ? 'topic' : 'text-gray-500'}`}
//           onClick={() => handleTopicClick('AddServices')}>Add Services</button>
//         <button className={`${activeTopic === 'AddParts' ? 'topic' : 'text-gray-500'}`}
//           onClick={() => handleTopicClick('AddParts')}>Add Parts</button>
      
//       </div>
//       {/**end sub nav bar */}
//       <div>
//         {activeTopic === 'AddParts' && <AddParts />}
//         {activeTopic === 'AddServices' && <AddServices />}
//         {/* {activeTopic === 'updateStock' && <UpdateStock />} */}
//         {/* {activeTopic === 'TodayList' && <BookingReserved />} */}
//       </div>
//     </div>
//   );
// };

// export default Booking;