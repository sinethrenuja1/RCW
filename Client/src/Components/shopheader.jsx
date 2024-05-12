// import {BuildingStorefrontIcon} from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';
import { HiHome } from "react-icons/hi";

const ShopHeader = ({ pageName }) => {
        return (
                     <div className="bg-gray-200 h-16 flex justify-between ">
                            <p className="text-text-primary font-inter font-bold text-3xl p-3 mb-15">{pageName}</p>
                            <div className='flex items-center gap-2 p-3'>
                            <HiHome className='w-8 h-8 bg-text-primary rounded-2xl text-black  '/>
                                <p className='text-text-primary font-inter text-lg font-medium mr-4'>Mr.Sineth</p>
                                
                            </div>
                     </div>
        );
};

ShopHeader.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default ShopHeader;