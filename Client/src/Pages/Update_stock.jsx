
function AddItem() {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-8 py-5">
        <h2 className="text-xl font-bold text-center">Update Stock</h2>
        <form  className="grid grid-cols-1 gap-4 mt-4">
          <div  className="flex items-center">
            <label htmlFor="partId" className="w-1/4 text-right font-medium">Part Id:</label>
            <input type="text" id="partId" name="partId" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div className="flex items-center">
            <label htmlFor="name" className="w-1/4 text-right font-medium">Name:</label>
            <input type="text" id="name" name="name" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
          </div>
        
          <div className="flex items-center">
            <label htmlFor="quantity" className="w-1/4 text-right font-medium">Quantity:</label>
            <input type="number" id="quantity" name="quantity" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div className="flex items-center">
            <label htmlFor="minimum_limit" className="w-1/4 text-right font-medium">Minimum Limit in stock :</label>
            <input type="number" id="limit" name="limit" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" /> 
          </div>
          <div className="flex items-center">
            <label htmlFor="minimum_limit" className="w-1/4 text-right font-medium">Price</label>
            <input type="number" id="Price" name="Price" className="w-2/4 rounded-md border border-gray-300 px-3 py-2" /> 
          </div>
          <div className="flex items-center justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">Add Item</button>
        </div>
        </form>

      </div>
    </div>
  )
}

export default AddItem;
