import { Check } from "lucide-react";


const Pricing = ({ pricing }) => {
    const { title, price, description, features, popular } = pricing;
    // console.log(features)

    return (
        <div className="bg-slate-700 rounded p-4 flex flex-col gap-5">
            {/* Headline */}
            <div className="text-center">
                {popular && <span className="bg-orange-200 text-black text-sm rounded-full p-1">Most popular</span>}

            </div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold"> {title} </h2>
                <h3 className="text-xl text-yellow-400"> {price} </h3>
            </div>

            {/* bod of the card */}
            <div className="flex-grow-1">
                <p className="mb-2"> {description} </p>

                <h2 className="text-xl font-semibold">Features Availabe:</h2>
                {
                    features.map((feature) => <p className="flex gap-2"> <Check></Check> {feature} </p>)
                }
            </div>

            {/* footer of the card */}
            <button className="btn btn-primary">Subscribe</button>

        </div>
    )
}


export default Pricing