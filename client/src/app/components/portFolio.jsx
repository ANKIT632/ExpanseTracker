'use client'

import PortfolioLineBar from './portfolioLineBar';

function portFolio() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
          }
        ]
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

  return (
    <div className="flex-1 bg-blue-100 rounded-md ">
        <div className="text-center"><p>Total balance</p> <p>{4000}</p></div>

        <div>
            <p className="text-xs font-bold">Expense progress</p>
            <div>

            <PortfolioLineBar data={data} options={options}/>
            </div>

            <div className="flex justify-center ">
                <button className="bg-green-400 text-sm py-0.4 px-1 rounded-md text-white hover:bg-green-500 active:bg-green-600 " title="Add in total amount">Add Amount</button>
            </div>

        </div>

    </div>
  )
}

export default portFolio