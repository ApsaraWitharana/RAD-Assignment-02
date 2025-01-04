import { Link } from "react-router";
import "../style/Navigation.css";
import { useEffect, useState } from "react";

export function Navigation() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <header className="bg-slate-500 w-full">
                <nav className="px-4 py-2 text-xl shadow-lg flex justify-between items-center">
                    {/* Center Section */}
                    <ul className="flex text-white space-x-4">
                        <Link className="class-link" to='/'>Dashboard</Link>
                        <Link className="class-link" to='/add'>Add</Link>
                        <Link className="class-link" to='/delete'>Delete</Link>
                        <Link className="class-link" to='/update'>Update</Link>
                    </ul>
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <div className="text-white">
                            {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                        </div>
                        <img src="src/assets/images-wp-profile.jpeg" alt="User Profile" className="w-10 h-10 rounded-full border border-white"/>
                        <button className="bg-green-200 text-slate-500 px-3 py-1 rounded hover:bg-green-600">Sign In</button>
                    </div>
                </nav>
            </header>
        </>
    );
}
