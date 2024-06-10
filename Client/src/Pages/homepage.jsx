// import Nav_bar from "../Components/home_nav"; 
// import Home from "../images/home_back.png";
// import About from "../Components/about";
// import "../App.css";


// function homepage() {
//     return (
//         <div> 
//             <div
//         className="background-image bg-gray-300"
//         style={{ backgroundImage:` url(${Home})` }}
// ></div>
//             <div className="navbar-container relative z-10 mt-8" >
//                 <Nav_bar > </Nav_bar>
//             </div>  


//             <div className="pt-16 md:pt-8 mr-2 ml-2 " >
//                 <div className="relative">
//                     <img src={Home} alt="Home"  />
//                     <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//                         <div className="bg-white bg-opacity-50 p-4 corner-round">
//                             {/* <h1 className="text-7xl font-bold text-center text-lightblue mt-4">Welcome to Royal Car Wash</h1> */}
//                             <p className="text-center md:text-5xl text-2xl text-gray-700 mt-2">The Best car wash in your city.<br />
//                             We make your car absolutely clean.. </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div >
//                 <About></About>
//             </div>


//         </div>

//     );
// }

// export default homepage;


// import "../App.css";
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Home from "../images/home_back.png";
// import Homes from "../images/homeback.png";
//  import About from "../Components/about";
// // import magazine from "../assets/Mag.jpg";
// // import PG21 from '../assets/PG21.jpg';
// // import PG22 from '../assets/PG22.jpg';
// // import PG23 from '../assets/PG23.jpg';
// // import PG31 from '../assets/PG31.jpg';
// // import PG32 from '../assets/PG32.jpg';
// // import PG33 from '../assets/PG33.jpg';
// // import PG41 from '../assets/PG41.jpg';
// // import PG42 from '../assets/PG42.jpg';
// // import PG43 from '../assets/PG43.jpg';
// // import CLASS from '../assets/class.png';
// import Nav_bar from "../Components/home_nav"; 
// // import HeroNav from "../Components/HeroNav";
// // import Footer from "../Components/Footer";
// // import { FaBook, FaFlask, FaCogs } from 'react-icons/fa';  // Import icons

// const images = [Homes,Homes,Homes,Homes,Homes,Homes];

// function Home()  {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 50) {
//         document.body.classList.add('scrolled');
//       } else {
//         document.body.classList.remove('scrolled');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
//     }, 2000); // Change image every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Nav_bar />
//       <div
//         className="background-image bg-gray-300"
//         style={{ backgroundImage: `url(${Home})` }}
//       ></div>
//       <div className="content min-h-screen">
//         <div className="container mx-auto mt-20 px-4 md:px-12">
//           <div className="p-8 md:p-12">
//             <div className="flex flex-col md:flex-row-reverse items-center gap-10">
//               <div className="md:w-3/5">
//                 <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Welcome to Engineering Technology LABS
//                 </h2>
//                 <p className="text-white text-lg md:text-2xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Join Mr. Buwanekabahu Muthukumarans engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology.
//                 </p>
//                 <Link to="/Check">
//                   <button className="py-3 px-8 bg-red-800 font-semibold text-white rounded-full hover:bg-red-500 transition-all duration-300">
//                     Register Here
//                   </button>
//                 </Link>
//               </div>
//               <div>
//                 <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* New Content Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
//               <FaBook className="w-16 h-16 mb-4 text-yellow-600" />
//               <h3 className="text-2xl font-semibold text-black mb-2">Learn</h3>
//               <p className="text-lg text-black">
//               ක්‍රමානුකූලව කොටස් අඩු නැතිව සම්පූර්ණ තියරි ඒකක ආවරණය

//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
//               <FaFlask className="w-16 h-16 mb-4 text-yellow-600" />
//               <h3 className="text-2xl font-semibold text-black mb-2">Explore</h3>
//               <p className="text-lg text-black">
//               පංතිකාමරය තුලදීම ඉලෙක්ට්‍රික, මැකැනිකල් හා පරිගණක විද්‍යාත්මක පරීක්ෂණ පුහුණුව 

//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
//               <FaCogs className="w-16 h-16 mb-4 text-yellow-600" />
//               <h3 className="text-2xl font-semibold text-black mb-2">Achieve</h3>
//               <p className="text-lg text-black">
//               විභගයෙන් පසු ප්‍රායෝගික පරීක්ෂණ සදහා පුහුනු කිරීමේ විශේෂ වැඩසටහන්

//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Photo Gallery Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
//             About Us
//           </h2>
//           <div className="relative w-full h-70 overflow-hidden">
//             <div
//               className="flex transition-transform duration-1000 ease-in-out"
//               style={{ transform: `translateX(-${currentImageIndex * 100 / 3}%)` }}
//             >
//               {images.map((image, index) => (
//                 <div key={index} className="flex-shrink-0 w-1/3 h-64">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Magazine Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/3">
//               <img src={magazine} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
//                 We have been improving our product <span className="text-indigo-600">for many years.</span>
//               </h2>
//               <p className="text-black text-lg mb-7">
//                 A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//               </p>
//               <a
//                 href="https://eandt.theiet.org/"
//                 className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Magazine
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Home;

// import "../App.css";
// import { useEffect, useState } from 'react';
// import Nav_bar from "../Components/home_nav";
// import AU1 from "../images/au1.jpg";
// import AU2 from "../images/au2.jpg";
// import AU3 from "../images/au3.jpg";
// import AU4 from "../images/au4.jpg";
// import AU5 from "../images/au5.jpg";
// import AU6 from "../images/au6.jpg";
// import Home from "../images/home_back3.png";
// import Homes from "../images/homeback.png";

// // Importing the required icons from react-icons
// import { FaCalendarCheck, FaWrench, FaClipboardList } from 'react-icons/fa';

// const images = [AU1,AU2,AU3,AU4,AU5,AU6];

// function HomePage() {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             if (scrollPosition > 50) {
//                 document.body.classList.add('scrolled');
//             } else {
//                 document.body.classList.remove('scrolled');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
//         }, 2000); // Change image every 2 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//             <Nav_bar />
//             <div
//                 className="background-image bg-gray-300"
//                 style={{ backgroundImage: `url(${Home})` }}
//             ></div>
//             <div className="content min-h-screen z-5">
//                 <div className="container mx-auto mt-20 px-10 flex justify-center items-center text-center">
//                     <div>
//                         <h2 className="text-3xl md:text-6xl font-bold mt-20 text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                             The Best Car Wash in Your City.
//                         </h2>
//                         <p className="text-white text-lg md:text-3xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                             We make your car absolutely clean.
//                         </p>
//                     </div>
//                 </div>

//                 {/* New Content Section */}
//                 <div className="container mx-auto my-24 px-4 md:px-12">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                         <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
//                             <FaCalendarCheck className="w-16 h-16 mb-4 text-yellow-500" />
//                             <h3 className="text-2xl font-semibold text-white mb-2">Book</h3>
//                             <p className="text-lg text-white">
//                                 Easily book a service appointment for your vehicle online. Choose the time and service that suits your schedule.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
//                             <FaWrench className="w-16 h-16 mb-4 text-yellow-500" />
//                             <h3 className="text-2xl font-semibold text-white mb-2">Service</h3>
//                             <p className="text-lg text-white">
//                                 Our expert technicians provide top-quality service to ensure your vehicle runs smoothly and safely.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
//                             <FaClipboardList className="w-16 h-16 mb-4 text-yellow-500" />
//                             <h3 className="text-2xl font-semibold text-white mb-2">Maintain</h3>
//                             <p className="text-lg text-white">
//                                 Keep track of your vehicles maintenance history and get reminders for upcoming services.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Photo Gallery Section */}
//                 <div className="container mx-auto my-24 px-4 md:px-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
//                         About Us
//                     </h2>
//                     <div className="relative w-full h-70 overflow-hidden">
//                     <div
//               className="flex transition-transform duration-1000 ease-in-out"
//               style={{ transform: `translateX(-${currentImageIndex * 100 / 3}%)` }}
// >
//                             {images.map((image, index) => (
//                                 <div key={index} className="flex-shrink-0 w-1/3 h-64">
//                                     <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
 
//                 {/* Magazine Section */}
//                 <div className="container mx-auto my-24 px-4 md:px-12">
//                     <div className="flex flex-col md:flex-row items-center gap-8">
//                         <div className="md:w-1/3">
//                             <img src={Homes} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
//                         </div>
//                         <div className="md:w-2/3">
//                             <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
//                             Looking for the best deals and exclusive offers for your vehicle? 
//                             </h2>
//                             <p className="text-black text-lg mb-7">
//                             Discover our tailored packages designed to meet all your car care needs at unbeatable prices.  Click here to explore our packages.
//                             </p>
//                             <a
//                                 href="/packages"
//                                 className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
                                
//                                 rel="noopener noreferrer"
//                             >
//                                 More...
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default HomePage;


import "../App.css";
import { useEffect, useState } from 'react';
import Nav_bar from "../Components/home_nav";
import AU1 from "../images/au1.jpg";
import AU2 from "../images/au2.jpg";
import AU3 from "../images/au3.jpg";
import AU4 from "../images/au4.jpg";
import AU5 from "../images/au5.jpg";
import AU6 from "../images/au6.jpg";
import Home from "../images/home_back3.png";
import Homes from "../images/homeback.png";

// Importing the required icons from react-icons
import { FaCalendarCheck, FaWrench, FaClipboardList } from 'react-icons/fa';

const images = [AU1, AU2, AU3, AU4, AU5, AU6];

function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Nav_bar />
            <div
                className="background-image bg-gray-300"
                style={{ backgroundImage: `url(${Home})` }}
            ></div>
            <div className="content min-h-screen z-5">
                <div className="container mx-auto mt-20 px-10 flex justify-center items-center text-center">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-bold mt-20 text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            The Best Car Wash in Your City.
                        </h2>
                        <p className="text-white text-lg md:text-3xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            We make your car absolutely clean.
                        </p>
                    </div>
                </div>

                {/* New Content Section */}
                <div className="container mx-auto my-24 px-4 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
                            <FaCalendarCheck className="w-16 h-16 mb-4 text-yellow-500" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Book</h3>
                            <p className="text-lg text-white">
                                Easily book a service appointment for your vehicle online. Choose the time and service that suits your schedule.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
                            <FaWrench className="w-16 h-16 mb-4 text-yellow-500" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Service</h3>
                            <p className="text-lg text-white">
                                Our expert technicians provide top-quality service to ensure your vehicle runs smoothly and safely.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-blue-900 rounded-lg shadow-lg">
                            <FaClipboardList className="w-16 h-16 mb-4 text-yellow-500" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Maintain</h3>
                            <p className="text-lg text-white">
                                Keep track of your vehicles maintenance history and get reminders for upcoming services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery Section */}
                <div className="container mx-auto my-24 px-4 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
                        About Us
                    </h2>
                    <div className="relative w-full h-70 overflow-hidden">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentImageIndex * 100 / 3}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="flex-shrink-0 w-1/3 h-64">
                                    <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Magazine Section */}
                <div className="container mx-auto my-24 px-4 md:px-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3">
                            <img src={Homes} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
                                Looking for the best deals and exclusive offers for your vehicle?
                            </h2>
                            <p className="text-black text-lg mb-7">
                                Discover our tailored packages designed to meet all your car care needs at unbeatable prices. Click here to explore our packages.
                            </p>
                            <a
                                href="/packages"
                                className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
                                rel="noopener noreferrer"
                            >
                                More...
                            </a>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="container mx-auto my-24 px-4 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
                        Find Us Here
                    </h2>
                    <div className="flex justify-center items-center">
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.158668176306!2d79.98987222674384!3d6.144716202832933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae178f4dca88a37%3A0x8408b3cf3bc7e5f3!2sArachchikanda!5e0!3m2!1sen!2slk!4v1626448841258!5m2!1sen!2slk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
