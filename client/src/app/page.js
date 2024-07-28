'use client'

import AddExpanse from "./components/addExpanse";
import ExpanseData from "./components/expanseData";
import Layout from "./components/layout";
import PortFolio from './components/portFolio'

function page() {

  return (
    <Layout>
      <div className="sm:flex sm:flex-row-reverse ">


        <div className="flex-[0.4]">


          <AddExpanse />
        </div>

        <div className="flex-[0.6]">
          <PortFolio />
          <ExpanseData />
        </div>

      </div>
    </Layout>


  )
}

export default page