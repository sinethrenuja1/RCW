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
    <div className="flex">
      <div className="w-[256px]">
        <Dash_nav />
      </div>
      <div className="w-calc">
       <Outlet />
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
