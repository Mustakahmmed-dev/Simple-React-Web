import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingCards from './components/PricingCards/PricingCards'
import SalesReports from './components/SalesReports/SalesReports';



const pricingDataPromise = fetch("pricingData.json").then(res => res.json());
const salesReportPromise = fetch("salesReport.json").then(res => res.json());

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Pricing Cards */}
      <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
        <PricingCards pricingDataPromise={pricingDataPromise}></PricingCards>
      </Suspense>

      {/* Sales Report */}
      <Suspense fallback={<h3>Sales Report is loading...</h3>}>
        <SalesReports salesReportPromise={salesReportPromise}></SalesReports>
      </Suspense>
    </>
  )
}

export default App
