'use client'

import ExpanseData from "./components/expanseData";
import AddExpanse from "./components/addExpanse";
import Layout from "./components/layout";


function page() {
  return (
  <Layout>
      <ExpanseData/>
      <AddExpanse/>
  </Layout>   


  )
}

export default page