// import {BuildingStorefrontIcon} from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';
import { HiHome } from "react-icons/hi";

const ShopHeader = ({ pageName }) => {

    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="bg-blue-50 h-16 flex justify-between  ">
            <p className="text-text-primary font-inter font-bold text-2xl p-3 mb-15">{pageName}</p>
            <div className='flex items-center gap-2 p-3'>
                <HiHome className='w-6 h-6 bg-text-primary rounded-2xl text-black  ' />
                
                
                {/* <h1 className=" text-1xl font-semibold text-gray-600">
                    {user ? `${user.u_name}` : " User Profile"}
                    
                </h1> */}

<h1 className=" text-1xl font-semibold text-gray-600">
    {user && Object.keys(user).length > 0 ? `${user.u_name}` : " User Profile"}
</h1>
            </div>
        </div>
    );
};

ShopHeader.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default ShopHeader;

