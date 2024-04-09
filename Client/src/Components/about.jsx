import Royal from '../images/Royal.jpg';

const about = () => {
    return (
        <div
            className="md:px-14 p-4 max-w-s my-8 px-4 max-w-screen-2xl mx-auto"
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/3">
                    <img src={Royal} alt="" className="lg:h-[400px] rounded-lg" />
                </div>
                

                <div className="md:w-4/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                        We have been improving our product <span>for many years.</span> 
                    </h2>
                    <p className=" text-black text-lg mb-7">
                        {" "}
                        A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
                    </p>
                    <button
                        className="py-3 px-8 bg-red-600 font-semibold text-white rounded 
                                hover:bg-red-400 transition-all duration-300"
                    >
                        More About Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default about;