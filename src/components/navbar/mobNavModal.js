import { NavLink } from "react-router-dom";

export default function MobNavModal() {
    return <div className="flex justify-end mt-10">
      <div className="w-80 h-56 shadow-2xl rounded-lg bg-gray-900 outline outline-gray-300">
        <ul className="text-center">
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><NavLink to="/track">Track</NavLink></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><NavLink to="/suggest">Suggest</NavLink></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><NavLink to="/support">Support</NavLink></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><NavLink to="/">Login</NavLink></li>
            <li className="font-bold text-xl p-1 text-white"><NavLink to="/">Register</NavLink></li>
        </ul>
      </div>
    </div>
}