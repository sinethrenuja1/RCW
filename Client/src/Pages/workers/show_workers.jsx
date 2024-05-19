import ShopHeader from "../../Components/shopheader";   
function new12 () {
    return (
        <div>
            <ShopHeader pageName="New12"/>
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                    + Add Worker
                </button>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Unit Name</th>
                            <th className="px-4 py-2 text-left">Year</th>
                            <th className="px-4 py-2 text-left">Unit Description</th>
                            <th className="px-4 py-2 text-left">Unit Price</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Electronics</td>
                            <td className="border px-4 py-2">2025</td>
                            <td className="border px-4 py-2">This unit consists of 5 parts that are all covered.</td>
                            <td className="border px-4 py-2">$800.00</td>
                            <td className="border px-4 py-2">
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default new12;