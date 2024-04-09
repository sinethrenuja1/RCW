import Nav_bar from "../Components/home_nav"; 
import Home from "../images/homeback.png";
import About from "../Components/about";


function homepage() {
    return (
        <div> 
            <div className="navbar-container relative z-10 mt-8" >
                <Nav_bar > </Nav_bar>
            </div>  
          

            <div className="pt-16 md:pt-8 mr-2 ml-2 " >
                <div className="relative">
                    <img src={Home} alt="Home"  />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-white bg-opacity-50 p-4 corner-round">
                            {/* <h1 className="text-7xl font-bold text-center text-lightblue mt-4">Welcome to Royal Car Wash</h1> */}
                            <p className="text-center md:text-5xl text-2xl text-gray-700 mt-2">The Best car wash in your city.<br />
                            We make your car absolutely clean.. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <About></About>
            </div>

            
        </div>
        
    );
}

export default homepage;