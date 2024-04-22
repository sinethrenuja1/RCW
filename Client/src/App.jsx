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

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      // {
      //   path: "/post/:id",
      //   element: <Single/>,
      // },
      // {
      //   path: "/write",
      //   element: <Write/>,
      // },
    ],
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/stock",
    element: <Stock/>,
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
