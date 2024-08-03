'use client'

import PortfolioLineBar from './portfolioLineBar';

function portFolio() {


      
 

  return (
    <div className="flex-1 bg-blue-100 rounded-md p-2">
        <div className="text-center text-zinc-600 text-md font-semibold"><p>Buget balance</p> <p className='text-blue-500 text-[14px]'>{4000}</p></div>

        <div>
            <p className="text-xs font-bold">Expense progress</p>
            <div>


            </div>

            <div className="flex justify-center ">
                <button className="bg-green-400 text-sm py-0.4 px-1 rounded-md text-white hover:bg-green-500 active:bg-green-600 " title="Add in total amount">Add Amount</button>
            </div>

        </div>

    </div>
  )
}

export default portFolio

