const dash_nav = () => {


  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-xl font-bold mb-4">Royal Car Wash</div>
      <ul>
      <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 font-bold block rounded">Admin</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded" >
            Stock
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Notices</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Workers</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Settings</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Open Job</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default dash_nav;