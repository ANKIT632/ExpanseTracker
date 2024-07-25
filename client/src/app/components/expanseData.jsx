'use client'

function expanseData() {
  return (
    <div className="m-1 mt-3 flex justify-center">

      <form className="max-sm:w-[80%] flex flex-col gap-2 sm:w-[60%] lg:w-[400px]">
        
        <div className="flex flex-col gap-1">
          <label htmlFor="expanseName" className="text-xs font-semibold">Expanse Name</label>
          <input id="expanseName" name="expanseName" placeholder="Expanse Name"  className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400  rounded-sm"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="expanseCost" className="text-xs font-semibold">Expanse cost</label>
          <input type="number" id="expanseCost" name="expanseCost" placeholder="Expanse Cost"  className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400 rounded-sm"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-xs font-semibold">Category</label>
          <input id="category" name="category" placeholder="Expanse Category"  className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400 rounded-sm"/>
        </div>  

      </form>

    </div>
  )
}

export default expanseData