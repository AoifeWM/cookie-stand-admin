import Head from 'next/head'
import { useState } from 'react';
import { timetable } from '../Components/data';
import { CreateForm } from "../Components/form";
import { ReportTable } from "../Components/table";

export default function Home() {
    const [formJson, SetFormJson] = useState();
    // state is no longer json because i dont like dealing with stringifying and parsing it. if i need to store it somewhere i will stringify it in situ
    function formHandler(event) {
        console.log("Formhandler loaded.")
        event.preventDefault();
        const formData = {
            "location":event.target.location.value,
            "minCustomers":event.target.minCustomers.value,
            "maxCustomers":event.target.maxCustomers.value,
            "avgCookies":event.target.avgCookies.value,
        }
        if(formJson){
            SetFormJson(formJson.concat([formData]));
        }else{
            SetFormJson([formData])
        }
        
        console.log("formJson = ", formJson)
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
                <CreateForm formHandler={formHandler} />
                <ReportTable formJson={formJson} />
            </main>
            <footer className="bg-cookie-dark pl-3 pt-3 pb-3">
                <p className="text-xs text-black text-opacity-60">©2021</p>
            </footer>
        </div>
    )

}
