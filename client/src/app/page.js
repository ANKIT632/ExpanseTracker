'use client'

import AddExpanse from "./components/addExpanse";
import ExpanseData from "./components/expanseData";
import Layout from "./components/layout";

function page() {

  return (
    <Layout>
      <div className="sm:flex sm:flex-row-reverse ">
       
       
      <div className="flex-[0.4]">
          <AddExpanse />
        </div>

        <div className="flex-[0.6]">
          <ExpanseData />
        </div>

      </div>
    </Layout>


  )
}

export default page