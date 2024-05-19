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
import New12 from "./Pages/workers/show_workers";

import Dash_nav from "./Components/dash_nav";

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

const router = createBrowserRouter([
  {
    path: "/",element: <WebLayout/>,
    children: [
      {path: "/", element: <Home/>,},
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
      {path: "/new12" , element: <New12/>,},
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
