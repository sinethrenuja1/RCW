// import { useState } from "react";
// import axios from "axios";
// import ShopHeader from "../../Components/shopheader";

// function AddPackages() {
//     const [inputs, setInputs] = useState({
//         p_name: "",

//         p_description: "",
//         file: null,
//     });

//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         setInputs({ ...inputs, [e.target.name]: e.target.value });
//     };

//     const handleFile = (e) => {
//         setInputs({ ...inputs, file: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("p_name", inputs.p_name);

//             formData.append("p_description", inputs.p_description);
//             formData.append("file", inputs.file);

//             await axios.post(
//                 "http://localhost:8800/api/package/addPackage",
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             setInputs({
//                 p_name: "",

//                 p_description: "",
//                 file: null,
//             });
//             setError(null);
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.error) {
//                 setError(err.response.data.error);
//             } else {
//                 setError("Something went wrong. Please try again later.");
//             }
//         }
//     };

//     return (
//         <div className="bg-gray-200 min-h-screen">

//             <ShopHeader pageName="Settings" />
//             <div className="flex justify-center items-center  bg-gray-100 p-4">
//                 <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
//                     <h1 className="text-2xl font-bold mb-6 text-center">Add Package</h1>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="flex flex-col">
//                             <label htmlFor="p_name" className="text-sm font-medium mb-1">
//                                 Package Display Title:
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 value={inputs.p_name}
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 name="p_name"
//                                 placeholder="Package Topic"
//                                 required
//                             />
//                         </div>



//                         <div className="flex flex-col">
//                             <label htmlFor="p_description" className="text-sm font-medium mb-1">
//                                 Package Description:
//                             </label>
//                             <textarea
//                                 id="p_description"
//                                 value={inputs.p_description}
//                                 name="p_description"
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Package Description"
//                                 rows={4}
//                             />
//                         </div>

//                         <div className="flex flex-col">
//                             <label className="text-sm font-medium mb-1">Image upload:</label>
//                             <input
//                                 type="file"
//                                 id="imageUpload"
//                                 onChange={handleFile}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full px-4 py-2 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//                         >
//                             Add Packge
//                         </button>
//                     </form>
//                     {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddPackages;

// import { useState } from "react";
// import axios from "axios";
// import ShopHeader from "../../Components/shopheader";
// import Swal from 'sweetalert2';

// function AddPackages() {
//     const [inputs, setInputs] = useState({
//         p_name: "",
//         p_description: "",
//         file: null,
//     });

//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         setInputs({ ...inputs, [e.target.name]: e.target.value });
//     };

//     const handleFile = (e) => {
//         setInputs({ ...inputs, file: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("p_name", inputs.p_name);
//             formData.append("p_description", inputs.p_description);
//             formData.append("file", inputs.file);

//             await axios.post(
//                 "http://localhost:8800/api/package/addPackage",
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Package added successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });

//             setInputs({
//                 p_name: "",
//                 p_description: "",
//                 file: null,
//             });
//             setError(null);
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.error) {
//                 setError(err.response.data.error);
//                 Swal.fire({
//                     title: 'Error!',
//                     text: err.response.data.error,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             } else {
//                 setError("Something went wrong. Please try again later.");
//                 Swal.fire({
//                     title: 'Error!',
//                     text: "Something went wrong. Please try again later.",
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         }
//     };

//     return (
//         <div className="bg-gray-200 min-h-screen">
//             <ShopHeader pageName="Settings" />
//             <div className="flex justify-center items-center bg-gray-100 p-4">
//                 <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
//                     <h1 className="text-2xl font-bold mb-6 text-center">Add Package</h1>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="flex flex-col">
//                             <label htmlFor="p_name" className="text-sm font-medium mb-1">
//                                 Package Display Title:
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 value={inputs.p_name}
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 name="p_name"
//                                 placeholder="Package Topic"
//                                 required
//                             />
//                         </div>
//                         <div className="flex flex-col">
//                             <label htmlFor="p_description" className="text-sm font-medium mb-1">
//                                 Package Description:
//                             </label>
//                             <textarea
//                                 id="p_description"
//                                 value={inputs.p_description}
//                                 name="p_description"
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Package Description"
//                                 rows={4}
//                             />
//                         </div>
//                         <div className="flex flex-col">
//                             <label className="text-sm font-medium mb-1">Image upload:</label>
//                             <input
//                                 type="file"
//                                 id="imageUpload"
//                                 onChange={handleFile}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full px-4 py-2 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//                         >
//                             Add Package
//                         </button>
//                     </form>
//                     {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddPackages;


import { useState, useEffect } from "react";
import axios from "axios";
import ShopHeader from "../../Components/shopheader";
import Swal from 'sweetalert2';

function AddPackages() {
    const [inputs, setInputs] = useState({
        p_name: "",
        p_description: "",
        file: null,
    });

    const [error, setError] = useState(null);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/package/getPackage');
            setPackages(response.data);
        } catch (err) {
            console.error('Error fetching packages:', err);
        }
    };

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => {
        setInputs({ ...inputs, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("p_name", inputs.p_name);
            formData.append("p_description", inputs.p_description);
            formData.append("file", inputs.file);

            await axios.post(
                "http://localhost:8800/api/package/addPackage",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            Swal.fire({
                title: 'Success!',
                text: 'Package added successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setInputs({
                p_name: "",
                p_description: "",
                file: null,
            });
            setError(null);

            // Fetch the updated packages list
            fetchPackages();

        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
                Swal.fire({
                    title: 'Error!',
                    text: err.response.data.error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } else {
                setError("Something went wrong. Please try again later.");
                Swal.fire({
                    title: 'Error!',
                    text: "Something went wrong. Please try again later.",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            <ShopHeader pageName="Settings" />
            <div className="flex bg-blue-50 justify-center items-center bg-gray-100 p-4">
                <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add Package</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="p_name" className="text-sm font-medium mb-1">
                                Package Display Title:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={inputs.p_name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name="p_name"
                                placeholder="Package Topic"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="p_description" className="text-sm font-medium mb-1">
                                Package Description:
                            </label>
                            <textarea
                                id="p_description"
                                value={inputs.p_description}
                                name="p_description"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Package Description"
                                rows={4}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">Image upload:</label>
                            <input
                                type="file"
                                id="imageUpload"
                                onChange={handleFile}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                        >
                            Add Package
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
                </div>
            </div>

            <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="overflow-hidden">
                                <p className="md:text-2xl text-xl text-center font-bold mb-6">{pkg.p_name}</p>
                                <p className="text-lg mb-6">{pkg.p_description}</p>
                                <img
                                    src={`http://localhost:8800/public/packages/${pkg.image}`}
                                    alt={pkg.p_name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddPackages;
