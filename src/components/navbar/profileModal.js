import { NavLink } from "react-router-dom";

export default function () {
    return (
        <div > 
            <div className="w-52 bg-slate-900 rounded-md -mt-10 mr-1 outline outline-1 outline-gray-700 shadow-lg text-lg ">
                <div className="text-center space-y-2 py-3">
                    <div className="text-blue-900 font-bold cursor-pointer hover:bg-blue-400 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                      <NavLink to="/login">Login</NavLink>
                    </div>
                    <div className="text-green-800 font-bold cursor-pointer hover:bg-green-500 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                       <NavLink to="/register">Register</NavLink>
                    </div>
                    <div className="text-red-800 font-bold cursor-pointer hover:bg-red-400 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                        <NavLink>Log Out</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
