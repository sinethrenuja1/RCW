// import Royal from '../images/Royal.jpg';

// const about = () => {
//     return (
//         <div
//             className="md:px-14 p-4 max-w-s my-8 px-4 max-w-screen-2xl mx-auto"
//         >
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="md:w-1/3">
//                     <img src={Royal} alt="" className="lg:h-[400px] rounded-lg" />
//                 </div>
                

//                 <div className="md:w-4/5">
//                     <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
//                         We have been improving our product <span>for many years.</span> 
//                     </h2>
//                     <p className=" text-black text-lg mb-7">
//                         {" "}
//                         A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//                     </p>
//                     <button
//                         className="py-3 px-8 bg-red-600 font-semibold text-white rounded 
//                                 hover:bg-red-400 transition-all duration-300"
//                     >
//                         Our Services
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default about;

// import Royal from '../images/Royal.jpg';

// const About = () => {
//     return (
//         <div className="px-4 py-8 max-w-screen-2xl mx-auto">
//             <h1 className="text-4xl font-bold text-center mb-10 text-primary">About Us</h1>
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
//                 <div className="md:w-1/2">
//                     <img src={Royal} alt="Royal Car Wash" className="w-full h-auto rounded-lg shadow-md" />
//                 </div>
//                 <div className="md:w-1/2">
//                     <h2 className="text-3xl font-bold text-primary mb-4">
//                         Welcome to Royal Car Wash
//                     </h2>
//                     <p className="text-black text-lg mb-6">
//                         Situated in the heart of Hikkaduwa, Royal Car Wash has built a reputation for providing exceptional vehicle services. As a premier service station, we specialize in a range of offerings including cut and polish, detailing, oil changes, and various other vehicle replacements. Our commitment to excellence and customer satisfaction has made us a trusted name in the automotive service industry.
//                     </p>
//                     <button
//                         className="py-3 px-8 bg-red-600 font-semibold text-white rounded-full hover:bg-red-400 transition-all duration-300 shadow-md"
//                     >
//                         Our Services
//                     </button>
//                 </div>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-10">
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Our Services</h3>
//                 <ul className="list-disc list-inside mb-5 text-black text-lg">
//                     <li><strong>Cut and Polish:</strong> Restore your vehicle’s shine and remove surface imperfections.</li>
//                     <li><strong>Detailing:</strong> Comprehensive cleaning and restoration, both inside and out.</li>
//                     <li><strong>Oil Changes:</strong> Quick and efficient oil changes to keep your engine running smoothly.</li>
//                     <li><strong>Replacements:</strong> From filters to fluids, we handle all necessary replacements to ensure optimal vehicle performance.</li>
//                 </ul>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md mb-10">
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
//                 <p className="text-black text-lg mb-7">
//                     Our mission is to provide high-quality vehicle care services that exceed customer expectations. We are dedicated to using the latest technologies and best practices to deliver superior results. Our goal is to ensure every vehicle that leaves our service station is in optimal condition, and every customer is satisfied with our service.
//                 </p>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-10">
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Innovation and Technology</h3>
//                 <p className="text-black text-lg mb-7">
//                     At Royal Car Wash, we are committed to staying ahead of the curve by embracing the latest technologies. Our upcoming web-based management system is a testament to this commitment. This system is designed to streamline our operations, making it easier for our customers to book appointments, track service history, and receive timely reminders for necessary maintenance.
//                 </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md mb-10">
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Customer-Centric Approach</h3>
//                 <p className="text-black text-lg mb-7">
//                     We believe in building lasting relationships with our customers. Our team is focused on delivering personalized service tailored to the unique needs of each vehicle owner. We understand the importance of convenience, efficiency, and transparency in our services, and we strive to provide an exceptional experience every time.
//                 </p>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose Us?</h3>
//                 <ul className="list-disc list-inside mb-5 text-black text-lg">
//                     <li><strong>Expertise:</strong> Our team of experienced professionals is dedicated to maintaining the highest standards of service.</li>
//                     <li><strong>Quality:</strong> We use top-quality products and state-of-the-art equipment to ensure the best care for your vehicle.</li>
//                     <li><strong>Convenience:</strong> Our new web-based management system will allow for easy appointment scheduling and service tracking.</li>
//                     <li><strong>Satisfaction:</strong> Customer satisfaction is at the core of everything we do. We work hard to meet and exceed your expectations.</li>
//                 </ul>
//                 <h3 className="text-2xl font-semibold text-primary mb-4">Visit Us</h3>
//                 <p className="text-black text-lg mb-7">
//                     Experience the Royal Car Wash difference. Visit us in Hikkaduwa and let us take care of all your vehicle service needs. We look forward to serving you and keeping your vehicle in top-notch condition.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default About;

import Royal from '../images/Royal.jpg';

const About = () => {
    return (
        <div className="px-4 py-8 max-w-screen-2xl mx-auto">
            <h1 className="text-5xl font-extrabold text-center mb-10 text-primary">About Us</h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
                <div className="md:w-1/2">
                    <img src={Royal} alt="Royal Car Wash" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                        Welcome to Royal Car Wash
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Situated in the heart of Hikkaduwa, Royal Car Wash has built a reputation for providing exceptional vehicle services. As a premier service station, we specialize in a range of offerings including cut and polish, detailing, oil changes, and various other vehicle replacements. Our commitment to excellence and customer satisfaction has made us a trusted name in the automotive service industry.
                    </p>
                    <button
                        className="py-3 px-8 bg-gradient-to-r from-red-600 to-red-400 font-semibold text-white rounded-full hover:from-red-400 hover:to-red-600 transition-all duration-300 shadow-md"
                    >
                        Our Services
                    </button>
                </div>
            </div>

            

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
                <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                <div className="flex items-center mb-4">
                    <div className="w-1/4 flex justify-center">
                        <i className="fas fa-bullseye text-5xl text-red-600"></i>
                    </div>
                    <div className="w-3/4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to provide high-quality vehicle care services that exceed customer expectations. We are dedicated to using the latest technologies and best practices to deliver superior results. Our goal is to ensure every vehicle that leaves our service station is in optimal condition, and every customer is satisfied with our service.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-lg shadow-md mb-10">
                <h3 className="text-2xl font-semibold text-primary mb-4">Innovation and Technology</h3>
                <div className="flex items-center mb-4">
                    <div className="w-1/4 flex justify-center">
                        <i className="fas fa-cogs text-5xl text-red-600"></i>
                    </div>
                    <div className="w-3/4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Royal Car Wash, we are committed to staying ahead of the curve by embracing the latest technologies. Our upcoming web-based management system is a testament to this commitment. This system is designed to streamline our operations, making it easier for our customers to book appointments, track service history, and receive timely reminders for necessary maintenance.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
                <h3 className="text-2xl font-semibold text-primary mb-4">Customer-Centric Approach</h3>
                <div className="flex items-center mb-4">
                    <div className="w-1/4 flex justify-center">
                        <i className="fas fa-users text-5xl text-red-600"></i>
                    </div>
                    <div className="w-3/4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We believe in building lasting relationships with our customers. Our team is focused on delivering personalized service tailored to the unique needs of each vehicle owner. We understand the importance of convenience, efficiency, and transparency in our services, and we strive to provide an exceptional experience every time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose Us?</h3>
                <ul className="list-disc list-inside mb-5 text-gray-700 text-lg">
                    <li><strong>Expertise:</strong> Our team of experienced professionals is dedicated to maintaining the highest standards of service.</li>
                    <li><strong>Quality:</strong> We use top-quality products and state-of-the-art equipment to ensure the best care for your vehicle.</li>
                    <li><strong>Convenience:</strong> Our new web-based management system will allow for easy appointment scheduling and service tracking.</li>
                    <li><strong>Satisfaction:</strong> Customer satisfaction is at the core of everything we do. We work hard to meet and exceed your expectations.</li>
                </ul>
                <h3 className="text-2xl font-semibold text-primary mb-4">Visit Us</h3>
                <p className="text-gray-700 text-lg mb-7 leading-relaxed">
                    Experience the Royal Car Wash difference. Visit us in Hikkaduwa and let us take care of all your vehicle service needs. We look forward to serving you and keeping your vehicle in top-notch condition.
                </p>
            </div>
        </div>
    );
};

export default About;
