'use client'


function addExpanse() {

  

  return (
    <div className="m-1 flex justify-center w-full ">

      <div className="p-3 border flex-1">
        <header className="font-bold text-blue-500 text-right  pb-2">Add Expanse</header>
        <form className=" flex flex-col gap-2  "> 

          <div className="flex flex-col gap-1">
            <label htmlFor="expanseName" className="text-xs font-semibold">Expanse Name</label>
            <input id="expanseName" name="expanseName" placeholder="Expanse Name" className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400  rounded-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="expanseCost" className="text-xs font-semibold">Expanse cost</label>
            <input type="number" id="expanseCost" name="expanseCost" placeholder="Expanse Cost" className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400 rounded-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-xs font-semibold">Date</label>
            <input type="Date" id="date" name="date" placeholder="Expanse Cost" className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400 rounded-sm" />
          </div>


          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-xs font-semibold">Category</label>
            <input id="category" name="category" placeholder="Expanse Category" className="outline-none border border-gray-300 inset-2 py-0.5 pl-2 text-sm focus:border-blue-400 rounded-sm" />
          </div>

          <div className="flex justify-center">
          <button className="border w-[50%] bg-green-400 hover:bg-green-500 active:bg-green-600  text-white font-bold rounded-md  py-0.5">Add</button>
          </div> 

        </form>
      </div>

    </div>
  )
}

export default addExpanse