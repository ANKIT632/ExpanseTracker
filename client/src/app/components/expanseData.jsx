'use client'
import { useState } from "react";

function expanseData() {


  const [exFilter, setExFilter] = useState('weekly');
  const [showFilter, setShowFilter] = useState(false);

  

  return (
    <div className="w-full">
      <header className="font-mono font-bold text-xl">Expanse Details</header>

      <div className=" flex justify-between px-3 relative"><p>{exFilter + " " + "Expenses"}</p> <button className="text-sm rounded-md border p-0.5 px-2 hover:bg-gray-100 active:bg-gray-200 " onClick={() => setShowFilter((pre) => !pre)}><p>Filter</p></button>

        {showFilter && <ul className="absolute right-2 top-7 text-[13px] border p-1 rounded-md ">
          <li className="border-b py-0.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer px-2">weekly</li>
          <li className="border-b  py-0.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer px-2">Monthly</li>
          <li className=" py-0.5 hover:bg-gray-100 active:bg-gray-200 px-2 cursor-pointer">Yearly</li>
        </ul>}

      </div>
    </div>

  )
}

export default expanseData;