import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import GoogleSheetPieChart from '../Component/GoogleSheetPieChart'
import GoogleSheetChart from '../Component/Googlesheetchart'



function Dasdboard() {
  return (
    <div>
      <Header />
      <GoogleSheetPieChart />
      <GoogleSheetChart />
     
      <Footer />
    </div>
  )
}

export default Dasdboard