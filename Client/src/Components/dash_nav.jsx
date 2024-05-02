import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
const dash_nav = () => {


  return (
    <div className="bg-navbar text-white w-64 min-h-screen p-4 fixed">
      {/* <div className="text-xl font-bold text-lightblue mb-4">Royal Car Wash</div> */}
      <div>
        <img src={logo} alt="logo" className="w-30 h-30 rounded-full mx-auto flex mt-1 mb-5 justify-center" />
      </div>
      <ul>
      <li className="mb-2">
          <Link to="#" className="hover:bg-gray-500 bg-navclr text-black px-4 py-2 p block rounded ">Admin</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Home</Link>
        </li>
        <li className="mb-2">
        <Link to="/stock" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Stock</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Notices</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Workers</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Settings</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Open Job</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-navclr text-black px-4 py-2 block rounded">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default dash_nav;