import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCustomer} from "../slice/CustomerSlice";
import {Customer} from "../model/Customer";
import {RootState} from "../store/CustomerStore";

export function Add() {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const customers = useSelector((state: RootState) => state.customers.customers);

    function handleSubmit() {
        const newCustomer = new Customer(name,address, email, phone);
        dispatch(setCustomer(newCustomer));
        setName('');
        setAddress('');
        setEmail('');
        setPhone('');
        // navigate('/');
    }

    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Add Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Add Customer Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input name="Name" type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input name="Address" type="text" placeholder="Address" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input name="Email" type="text" placeholder="Email" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input name="Phone" type="text" placeholder="Phone" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleSubmit}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Customer
                    </button>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers && customers.map((customer) => (
                            <tr key={customer.email}>
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.address}</td>
                                <td className="border p-2">{customer.email}</td>
                                <td className="border p-2">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Add Item Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h1>
                    </header>
                </div>
            </div>
        </div>
    );
}