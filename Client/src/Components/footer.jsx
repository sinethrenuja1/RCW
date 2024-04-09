const Footer = () => {
    return (
      <div className="bg-lightblue md:px-30 p-5 max-w-screen-2x1 mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-5">
          <div className=" md:w-3/5 space-y-8">
            <a
              href="/"
              className="text-6x1 font-semibold flex items-center  p-4px space-x-3 text-primary"
            >
              <span className=" text-white text-4xl">Royal Car Wash</span>
            </a>
            <p className="md:w-1/2">
              {" "}
              A simple paragraph is comprised of three major components. The first
              sentence, which is often a declarative sentence.
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className=" bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
              />
            </div>
          </div>
          
          <div>
            <div className="flex flex-col p-4 md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-2">
              <h4 className="text-xl">Help</h4>
              <ul className=" space-y-2">
                <a href="/" className="block hover: text-gray-300">
                  How does it works?
                </a>
                <a href="/" className="block hover: text-gray-300">
                  How does it works?
                </a>
                <a href="/" className="block hover: text-gray-300">
                  How does it works?
                </a>
                <a href="/" className="block hover: text-gray-300">
                  How does it works?
                </a>
              </ul>
            </div>
  
            <div className="space-y-4 mt-2">
              <h4 className="text-xl">Contacts</h4>
              <ul className=" space-y-3">
                <p className=" hover: text-gray-300"> (012) 1234-567-890</p>
                <p className=" hover: text-gray-300">Features</p>
                <p className=" hover: text-gray-300">About</p>
                <p className=" hover: text-gray-300">Pricing</p>
              </ul>
            </div>
          </div>
          <div>
              <div className="flex flex-col p-4 sm:flex-row gap-4 items-center justify-between ">
              <p>@ET LABS 2024 ... ,All rights reserved.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default Footer;
  