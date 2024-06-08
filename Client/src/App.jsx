import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import { Outlet } from "react-router-dom";


import Navbar from "./Components/home_nav";
import Footer from "./Components/footer";
import Home from "./Pages/homepage";
import Login from "./Pages/Login";
import Booking from './Pages/Booking';
import Stock from './Pages/Stock';
import Openjob from "../src/Pages/openjob/open_job";
import RegisterVehicle from "./Pages/openjob/registerVehicle"; 
import CreateJob_card from "./Pages/openjob/add_services";
import Jobcard from "../src/Pages/openjob/jobcard";
import ShowVeh_details from "../src/Pages/openjob/showreg_vehdetails";
import Show_workers from "./Pages/workers/show_workers";
import Add_workers from "./Pages/workers/addworker";
import EditWorker from "./Pages/workers/edit_worker";
import AddService from "./Pages/servicejobs/addServices";
import ShowServices from "./Pages/servicejobs/showServices";
import EditService from "./Pages/servicejobs/editServices";
import Adduser from "./Pages/user/add_user";
import CreateJobcard from "./Pages/openjob/createjobcard";
import ShowJobCards from "./Pages/updatejobCard/showjobcard";
import UpdateJobCard from "./Pages/updatejobCard/updatejobCard";
import Setting_main from "./Pages/settingfolder/setting_main";
import AddService_web from "./Pages/settingfolder/addservices_web";
import AddHolidays from "./Pages/settingfolder/addHolidays";
import ShowBooking from "./Pages/booking/showbooking";
import Sshowjobcard from "./Pages/supervisor/sshowjobcard";
import AssignWorker from "./Pages/supervisor/assignworker";
import OngongJobs from "./Pages/supervisor/ongoing";
import Finishjobcard from "./Pages/updatejobCard/finishedjobcard";
import Bill from "./Pages/bill"
import Packages from "./Pages/packages";
import Dash_nav from "./Components/dash_nav";
import Supervisordash_nav from "./Components/supervisordash_nav";
import AddPackages from "./Pages/settingfolder/addPackages";
import DeletePackages from "./Pages/settingfolder/deletePackages";
import Dashboard from "./Pages/dashboard/dashboard"

const  WebLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const  DashLayout = () => {
  return (
    <div>
      
    <div className="flex">
      
      <div className="w-[256px]">
        
        <Dash_nav />
      </div>
      
      <div className="w-calc">
       <Outlet />
      </div>
    </div>
    </div>
  );
}

const  Supervisorayout = () => {
  return (
    <div>
      
    <div className="flex">
      
      <div className="w-[256px]">
        
        <Supervisordash_nav />
      </div>
      
      <div className="w-calc">
       <Outlet />
      </div>
    </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",element: <WebLayout/>,
    children: [
      {path: "/", element: <Home/>,},
      {path: "/packages", element: <Packages/>},
      ],
  },
  {path: "/booking", element: <Booking/>},
  {path: "/login", element: <Login/>},
  

  

  {
    path: "/",element: <DashLayout/>,
    children: [
      {path: "/stock" , element: <Stock/>,},
      {path: "/openjob" , element: <Openjob/>,},
      {path: "/register" , element: <RegisterVehicle/>,},
      {path: "/createjob" , element: <CreateJob_card/>,},
      {path: "/jobcard" , element: <Jobcard/>,},
      {path: "/showveh_details" , element: <ShowVeh_details/>,},
      {path: "/show_workers" , element: <Show_workers/>,},
      {path: "/add_workers" , element: <Add_workers/>,},
      {path: "/edit_worker/:worker_id", element: <EditWorker /> },
      {path: "/add_service" , element: <AddService/>,},
      {path: "/show_services" , element: <ShowServices/>,},
      {path: "/edit_service/:service_id" , element: <EditService/>,},
      {path: "/add_user" , element: <Adduser/>,},
      {path: "/create_jobcard" , element: <CreateJobcard/>,},
      {path: "/show_jobcard" , element: <ShowJobCards/>,},
      {path: "/updateJobCard" , element: <UpdateJobCard/>,},
      {path: "/setting" , element: <Setting_main/>,},
      {path: "/addservicesto_web" , element: <AddService_web/>,},
      {path: "/addholidays" , element: <AddHolidays/>,},
      {path: "/showbooking" , element: <ShowBooking/>,},
      {path: "/finishedjobcard" , element: <Finishjobcard/>,},
      {path:"/bill",element:<Bill/>},
      {path:"/addpackages",element:<AddPackages/>},
      {path:"/deletepackages",element:<DeletePackages/>},
      {path:"/dashboard",element:<Dashboard/>},
      
      ],
  },

  {
    path: "/",element: <Supervisorayout/>,
    children: [
      {path: "/sshowjobcard", element: <Sshowjobcard/>,},
      {path: "/assignworkerstart", element: <AssignWorker/>,},
      {path: "/ongoingjobs", element: <OngongJobs/>,},
      ],
  },

  

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
