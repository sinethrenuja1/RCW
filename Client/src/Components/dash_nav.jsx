import {Link} from 'react-router-dom'
const dash_nav = () => {


  return (
    <div className="bg-lightblue text-white w-64 min-h-screen p-4 fixed">
      <div className="text-xl font-bold text-white mb-4">Royal Car Wash</div>
      <ul>
      <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 bg-gray px-4 py-2 font-bold block rounded">Admin</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Home</Link>
        </li>
        <li className="mb-2">
        <Link to="/stock" className="hover:bg-gray-700 px-4 py-2 block rounded">Stock</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Notices</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Workers</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Settings</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Open Job</Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default dash_nav;