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





