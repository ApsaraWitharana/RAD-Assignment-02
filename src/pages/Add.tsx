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
        <div>
            <h1>Add Customer</h1>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                       className="border p-2 mr-2"/>
                <input type="text" placeholder="Name" value={address} onChange={(e) => setAddress(e.target.value)}
                       className="border p-2 mr-2"/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                       className="border p-2 mr-2"/>
                <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                       className="border p-2 mr-2"/>
                <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">Add Customer</button>
            </div>
            <h2 className="text-xl font-bold mb-2">Customer List</h2>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2">Name</th>
                    <th className="py-2">Address</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Phone</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.name}>
                        <td className="border px-4 py-2">{customer.name}</td>
                        <td className="border px-4 py-2">{customer.address}</td>
                        <td className="border px-4 py-2">{customer.email}</td>
                        <td className="border px-4 py-2">{customer.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}