import Head from 'next/head'
import { useState } from 'react';
import { timetable } from '../data';

export default function Home() {
    const [formJson, SetFormJson] = useState('');

    function formHandler(event) {
        event.preventDefault();
        const formData = {
            'location': event.target.location.value,
            'minCustomers': parseInt(event.target.minCustomers.value),
            'maxCustomers': parseInt(event.target.maxCustomers.value),
            'avgCookies': parseInt(event.target.avgCookies.value),
        }
        SetFormJson(JSON.stringify(formData));
    }

    return (
        <div className="bg-cookie-light min-h-screen">
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className="bg-cookie-dark pl-4 pb-3 pt-3 text-3xl font-medium">
                <h1>Cookie Stand Admin</h1>
            </header>
            <main className="flex-col min-h">
                <CreateForm formHandler={formHandler}/>
                <ReportTable />
            </main>
            <footer className="bg-cookie-dark pl-3 pt-3 pb-3">
                <p className="text-xs text-black text-opacity-60">©2021</p>
            </footer>
        </div>
    )

}

export function CreateForm(formHandler) {

    return (
        <div className="bg-cookie-medium m-auto max-w-screen-lg mt-6 mb-5 p-5 rounded text-sm">
            <form onSubmit={formHandler} className="">

                <legend className="text-2xl text-center m-auto mb-3">Create Cookie Stand</legend>
                <div className="min-w-fit flex mb-4">
                    <label className="pr-1">Location </label>
                    <input name="location" type="text" placeholder="Location" className="w-full pl-1" />
                </div>
                <div className="flex justify-center align-middle text-center">
                    <div className="w-56 mr-4">
                        <label className="">Minimum Customers per Hour</label>
                        <input name="minCustomers" type="number" placeholder="Minimum costumers" className="w-full" />
                    </div>
                    <div className="w-56 mr-4">
                        <label>Maximum Customers per Hour</label>
                        <input name="maxCustomers" type="number" placeholder="Maximum customers" className="w-full" />
                    </div>
                    <div className="w-56 mr-4">
                        <label>Average Cookies per sale</label>
                        <input name="avgCookies" type="number" step="0.1" placeholder="Average cookies/customer" className="w-full" />
                    </div>
                    <button type="submit" className="grow p-auto bg-cookie-dark h-12">Create</button>
                </div>
            </form>
        </div>
    )
}

export function ReportTable() {
    return (
        <table className="bg-cookie-dark m-auto min-w-screen-lg max-w-screen-lg w-full mt-6 mb-5 p-5 text-sm">
            <thead className='min-w-full'>
                <tr className='min-w-full'>
                    <th>Location</th>
                    {timetable.map(time => {
                        return (<th key={time.key}>{time}</th>)
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
        </table>
    )
}