import image1 from "../images/Set2.png";

const Why_us = () => {
    return (
        <div className="my-24 md:px-14 px-4  mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-10 text-center">Why Choose Us</h1>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="w-full">
                    <div className="grid md:grid-cols-3 sm:grid-colos-2 grid-cols-1 items-start md:gap-12 gap:8">
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                        <div>
                            <h5 className="text-3xl font-bold text-primary mb-5">Why Choose Us</h5>
                            <img src={image1} alt="Setting" />
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16" >
                        <div>
                            <h5 className="text-3xl font-bold text-primary mb-5">Why Choose Us</h5>
                            <img src={image1} alt="Setting" />
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                        <div>
                            <h5 className="text-3xl font-bold text-primary mb-5">Why Choose Us</h5>
                            <img src={image1} alt="Setting" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why_us;