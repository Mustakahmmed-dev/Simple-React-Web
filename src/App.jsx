import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingCards from './components/PricingCards/PricingCards'



const pricingDataPromise = fetch("pricingData.json").then(res => res.json());

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Pricing Cards */}
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingCards pricingDataPromise={pricingDataPromise}></PricingCards>

      </Suspense>
    </>
  )
}

export default App
