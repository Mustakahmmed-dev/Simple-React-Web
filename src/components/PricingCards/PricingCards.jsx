import { use } from "react"
import Pricing from "../Pricing/Pricing";


const PricingCards = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);

    return (
        <div className="my-10 max-w-10/12 mx-auto">
            <h1 className="text-3xl font-black mb-5"> Choose your plan to enjoy our premium services. </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    pricingData.map((pricing) => <Pricing key={pricing.id} pricing={pricing}></Pricing>)
                }
            </div>
        </div>
    )
}

export default PricingCards