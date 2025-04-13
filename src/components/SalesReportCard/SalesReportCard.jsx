import { Line, LineChart } from "recharts";


const SalesReportCard = ({sale}) => {

    const { plan, client_name, amount, currency, date, team_member } = sale;

    return (
        <div>
           <LineChart width={500} height={500} data={sale} className="bg-white">
            <Line dataKey={amount}> </Line>
           </LineChart>
        </div>
    )
}


export default SalesReportCard