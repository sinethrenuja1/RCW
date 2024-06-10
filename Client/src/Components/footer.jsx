// const Footer = () => {
//     return (
//       <div className="bg-lightblue md:px-30 p-5 max-w-screen-2x1 mx-auto text-white">
//         <div className="my-12 flex flex-col md:flex-row gap-5">
//           <div className=" md:w-3/5 space-y-8">
//             <a
//               href="/"
//               className="text-6x1 font-semibold flex items-center  p-4px space-x-3 text-primary"
//             >
//               <span className=" text-white text-4xl">Royal Car Wash</span>
//             </a>
//             <p className="md:w-1/2">
//               {" "}
//               A simple paragraph is comprised of three major components. The first
//               sentence, which is often a declarative sentence.
//             </p>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Your email"
//                 className=" bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
//               />
//               <input
//                 type="submit"
//                 value="Subscribe"
//                 className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
//               />
//             </div>
//           </div>
          
//           <div>
//             <div className="flex flex-col p-4 md:flex-row flex-wrap justify-between gap-8 items-start">
//             <div className="space-y-4 mt-2">
//               <h4 className="text-xl">Help</h4>
//               <ul className=" space-y-2">
//                 <a href="/" className="block hover: text-gray-300">
//                   How does it works?
//                 </a>
//                 <a href="/" className="block hover: text-gray-300">
//                   How does it works?
//                 </a>
//                 <a href="/" className="block hover: text-gray-300">
//                   How does it works?
//                 </a>
//                 <a href="/" className="block hover: text-gray-300">
//                   How does it works?
//                 </a>
//               </ul>
//             </div>
  
//             <div className="space-y-4 mt-2">
//               <h4 className="text-xl">Contacts</h4>
//               <ul className=" space-y-3">
//                 <p className=" hover: text-gray-300"> (012) 1234-567-890</p>
//                 <p className=" hover: text-gray-300">Features</p>
//                 <p className=" hover: text-gray-300">About</p>
//                 <p className=" hover: text-gray-300">Pricing</p>
//               </ul>
//             </div>
//           </div>
//           <div>
//               <div className="flex flex-col p-4 sm:flex-row gap-4 items-center justify-between ">
//               <p>@ET LABS 2024 ... ,All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//     );
//   };
  
//   export default Footer;
  


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p>Visit us at our location or contact us through phone or email for inquiries and bookings.</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1a9 9 0 019 9c0 4.971-4.037 9-9 9a9 9 0 01-9-9c0-4.963 4.029-9 9-9zm0 2a7 7 0 00-7 7c0 1.459.459 2.809 1.242 3.919L6.5 14.5a.5.5 0 00.855-.326l.329-1.236A5.978 5.978 0 0011 9a5.978 5.978 0 00-1.716-4.223l-.329-1.236a.5.5 0 00-.855-.326l-1.258 1.422C6.459 5.191 6 6.541 6 8a7 7 0 007 7 7 7 0 000-14z" />
                </svg>
              </span>
              <p>Royal Car Wash, Hikkaduwa</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M3 8a5 5 0 014-4.9V3a1 1 0 112 0v.1a5 5 0 014 4.9A8 8 0 0117.899 13 5 5 0 1113 18H7a5 5 0 11-4.9-5.101A8 8 0 013 8zm2-2a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zM5.879 13.828a7.07 7.07 0 012.293-1.879l-.707-.707a1 1 0 111.414-1.414l.707.707a7.07 7.07 0 011.879-2.293l-.707-.707a1 1 0 011.414-1.414l.707.707a7.07 7.07 0 012.293 1.879l.707-.707a1 1 0 111.414 1.414l-.707.707a7.07 7.07 0 01-1.879 2.293l.707.707a1 1 0 01-1.414 1.414l-.707-.707a7.07 7.07 0 01-2.293 1.879l.707.707a1 1 0 11-1.414 1.414l-.707-.707a7.07 7.07 0 01-1.879-2.293l-.707.707a1 1 0 11-1.414-1.414l.707-.707zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>
              <p>+9477 713 8401</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a9 9 0 019 9c0 4.971-4.037 9-9 9a9 9 0 01-9-9c0-4.963 4.029-9 9-9zm5.554 14.653c.01-.09.023-.177.034-.265l-.021.082c-.398-1.308.055-2.693.949-3.687l.707-.707c.905-.905 2.194-1.356 3.536-.949l.264.086a9.036 9.036 0 00-.256 2.404c0 2.49-1.06 4.799-2.71 6.413a9.037 9.037 0 002.504-.271l.086.264c.407 1.342-.044 2.631-.949 3.536l-.707.707c-.905.905-2.194 1.356-3.536.949l-.253-.082a8.986 8.986 0 01-2.875-.728 12.042 12.042 0 01-1.956 1.043 1 1 0 01-1.114-1.663 10.041 10.041 0 002.525-1.92 9.006 9.006 0 01-.727-2.874l-.082-.253c-.407-1.342-.044-2.631.949-3.536l.707-.707c.905-.905 2.194-1.356 3.536-.949l.264.086a8.982 8.982 0 002.404-.256zM10 4a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                </svg>
              </span>
              <p>keshan.kalupahana@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/" className="hover:text-gray-400">Services</a></li>
              <li><a href="/" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Royal Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

