import { timetable, salesCurve } from "./data";

export function ReportTable({ formJson }) {
    let currentTotal = 0;
    let hourlyTotals = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
    let grandTotal = 0;
    return (
        <div>
            {console.log(formJson)}
            {
                !formJson
                    ? <div><p className="text-2xl text-center m-auto mb-6">No Cookie Stands Availiable</p></div>
                    : <table className="bg-cookie-dark m-auto min-w-screen-lg max-w-screen-lg w-full mt-6 mb-5 p-5 text-sm">
                        <thead className='min-w-full'>
                            <tr className='min-w-full'>
                                <th>Location</th>
                                {timetable.map(time => {
                                    return (<th key={time.key + Math.random()}>{time}</th>)
                                })}
                                <th>Totals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formJson.map(store => {
                                currentTotal = 0
                                grandTotal = 0
                                return (
                                    <tr key={store.key}>
                                        <th key={Math.random()}>
                                            {store.location}
                                        </th>
                                        {timetable.map((time, index) => {
                                            let hourTotal = Math.round(Math.random() * salesCurve[index] * store.avgCookies * (
                                                store.maxCustomers - store.minCustomers
                                            ) + store.minCustomers)
                                            currentTotal += hourTotal;
                                            hourlyTotals[index] += hourTotal
                                            return (
                                                <td key={Math.random()}>
                                                    {hourTotal}
                                                </td>
                                            )
                                        })}
                                        <td>
                                            {currentTotal}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <td>
                                Totals:
                            </td>
                            {hourlyTotals.map(hour => {
                                grandTotal += hour;
                                return (<td key={hour.key + Math.random()}>
                                    {hour}
                                </td>)
                            })}
                            <td>
                                {grandTotal}
                            </td>
                        </tfoot>
                    </table>
            }
        </div>
    )
}