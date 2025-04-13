import { use } from "react"
import SalesReportCard from "../SalesReportCard/SalesReportCard";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const SalesReports = ({ salesReportPromise }) => {
    const reportData = use(salesReportPromise);

    return (
        <div className="max-w-10/12 mx-auto my-10">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold">Sales Reports of this month. </h2>
            </div>
            <LineChart width={500} height={500} data={reportData}>
                <Line type="monotone" dataKey="amount" stroke="#8884d8"></Line>
                <CartesianGrid stroke="#666" strokeDasharray="5 5" ></CartesianGrid>
                <XAxis dataKey="plan"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    )
}

export default SalesReports