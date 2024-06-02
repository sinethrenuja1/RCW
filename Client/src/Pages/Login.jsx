

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import backgroundImage from '../images/homeback.png';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:8800/api/userRoutes/login', { username, password });

//             // Handle successful login here
//             const { token, user } = response.data;
//             localStorage.setItem('jwtkey', token);
//             localStorage.setItem('user', JSON.stringify(user));

//             console.log(response.data);
            
//             console.log("Navigating to /stock");        
//             // Navigate to the stock page
//             navigate('/stock');
//         } catch (err) {
//             setError(err.response?.data?.error || 'An error occurred during login');
//             console.log('Error during login:', err);
//         }
//     };

//     return (
//         <div>
//             <img src={backgroundImage} alt="" />
//             <div className="flex h-screen justify-center items-center">
//                 <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
//                     <div className="w-1/2 p-8 bg-blue-100 bg-opacity-50 rounded">
//                         <h2 className="text-2xl font-bold mb-4">Student Login</h2>
//                         {error && <div className="mb-4 text-red-500">{error}</div>}
//                         <form style={{ backgroundColor: 'transparent' }} onSubmit={handleLogin}>
//                             <div className="mb-4">
//                                 <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="w-full border border-gray-300 rounded py-2 px-3"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="w-full border border-gray-300 rounded py-2 px-3"
//                                 />
//                             </div>
//                             <button type="submit" className="bg-blue-500 align-middle hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../images/homeback.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8800/api/userRoutes/login', { username, password });

            // Handle successful login here
            const { token, user } = response.data;
            localStorage.setItem('jwtkey', token);
            localStorage.setItem('user', JSON.stringify(user));

            console.log(response.data);

            if (user.acc_type === 'manager') {
                console.log("Navigating to /stock");
                // Navigate to the stock page
                navigate('/stock');
            } else {
                console.log("User is not a manager");
                setError('You do not have access to the stock page');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred during login');
            console.log('Error during login:', err);
        }
    };

    return (
        <div>
            <img src={backgroundImage} alt="" />
            <div className="flex h-screen justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="w-1/2 p-8 bg-blue-100 bg-opacity-50 rounded">
                        <h2 className="text-2xl font-bold mb-4">Student Login</h2>
                        {error && <div className="mb-4 text-red-500">{error}</div>}
                        <form style={{ backgroundColor: 'transparent' }} onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full border border-gray-300 rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-300 rounded py-2 px-3"
                                />
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
