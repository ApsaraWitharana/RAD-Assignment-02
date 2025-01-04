import {useState} from "react";
import { Customer } from "../model/Customer.ts";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomer} from "../slice/CustomerSlice.ts";
import {RootState} from "../store/CustomerStore.ts";

export function Update() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const customers = useSelector((state: RootState) => state.customers.customers);

    function handleRowClick(customer: Customer) {
        setName(customer.name);
        setAddress(customer.address);
        setEmail(customer.email);
        setPhone(customer.phone);
    }
    function handleUpdateCustomer() {
        const updatedCustomer = { name, address, phone, email };
        dispatch(updateCustomer(updatedCustomer));
    }

    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Update Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Update Customer Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Customer</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Name" type="text"
                                   placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Address" type="text"
                                   placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input className="w-full border border-gray-300 rounded p-2" type="text" placeholder="Email"
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Phone" type="text"
                                   placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleUpdateCustomer}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update
                    </button>
                    <br/>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Actions</th>
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
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                            onClick={() => handleRowClick(customer)}>Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Update Item Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Item</h1>
                    </header>
                </div>
            </div>
        </div>
    );
}
