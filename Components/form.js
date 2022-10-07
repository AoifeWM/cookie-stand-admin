export function CreateForm({formHandler}) {

    return (
        // <div className="bg-cookie-medium m-auto max-w-screen-lg mt-6 mb-5 p-5 rounded text-sm">
            <form onSubmit={formHandler} className="bg-cookie-medium m-auto max-w-screen-lg mt-6 mb-5 p-5 rounded text-sm">

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
                    <button className="grow p-auto bg-cookie-dark h-12">Create</button>
                </div>
            </form>
        // </div>
    )
}