import {deleteCustomer} from "../slice/CustomerSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/CustomerStore.ts";


export function Delete() {
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);

    function handleDeleteCustomer(email:string) {
        dispatch(deleteCustomer(email));
    }
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Delete Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    {/* Customers Section */}
                    <section>
                        <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Customers</h1>
                        <table className="w-full border-collapse mt-6">
                            <thead>
                            <tr>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Address</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.email}>
                                    <td className="border p-2">{customer.name}</td>
                                    <td className="border p-2">{customer.address}</td>
                                    <td className="border p-2">{customer.email}</td>
                                    <td className="border p-2">{customer.phone}</td>
                                    <td className="border p-2">
                                        <button
                                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                            onClick={() => handleDeleteCustomer(customer.email)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                </div>
                {/* Items Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <section>
                        <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Items</h1>

                    </section>
                </div>
            </div>
        </div>
    );
}
