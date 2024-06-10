import { useState } from 'react';
import Logo from '../images/logo.jpg';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom';



const home_nav = () => {
    let Links = [
        {
            name: 'Home', link: '/'
        },
        {
            name: 'About', link: '/aboutus'
        },
        {
            name: 'Packages', link: '/packages'
        },
        
    ]
    let [isOpen, setisOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10">
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center
             bg-white '>
                <div className=" flex cursor-pointer items-cente gap-2">

                    <img src={Logo} alt="Logo" className="h-12 w-auto" />
                    <span className={`font-bold text-3xl text-lightblue ml-2 ${isOpen ? 'text-xl' : ''}`} >Royal Car Wash</span>
                </div>

                {/*MENU iCON*/}
                <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                    {
                        isOpen ? <XMarkIcon></XMarkIcon> : <Bars3BottomRightIcon></Bars3BottomRightIcon>
                    }

                </div>





                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-lightblue text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'><Link to="/booking">Booking</Link></button>
                    <button className='btn bg-lightblue text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
                    <Link to="/login">Login</Link>
                    </button>
                    
                </ul>
            </div>
        </div>
    );
};

export default home_nav;

