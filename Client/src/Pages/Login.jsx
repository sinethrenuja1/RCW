// import backgroundImage from '../images/homeback.png';


    import backgroundImage from '../images/homeback.png';

    const Login = () => {
        return (
            <div>
                <img src={backgroundImage} alt="" />
                <div className="flex h-screen justify-center items-center">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <div className="w-1/2 p-8 bg-blue-100 bg-opacity-50 rounded">
                            <h2 className="text-2xl font-bold mb-4">Student Login</h2>
                            <form style={{ backgroundColor: 'transparent' }}>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                                    <input type="text" id="username" className="w-full border border-gray-300 rounded py-2 px-3" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                                    <input type="password" id="password" className="w-full border border-gray-300 rounded py-2 px-3" />
                                </div>
                                <button type="submit" className="bg-blue-500 align-middle hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;



