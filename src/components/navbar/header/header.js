import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MobNavModal from "../mobNavModal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return <div>
        <div className="bg-slate-600 p-8 ">
            {/* {desktop-view} */}
           <div className={`lg:flex justify-center space-x-20  font-bold text-lg text-gray-100 ${isMenuOpen? "hidden":"hidden"} lg:"block`}>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/track">Track</NavLink></div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/suggest">Suggest</NavLink></div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/support">Support</NavLink></div>
           </div>
           {/* {mobile-view} */}
           <div>
            <div className="lg:hidden flex justify-end">
                <button onClick={toggleMenu}>
                    <div className="space-y-3">
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                    </div>
                </button>
            </div>
           </div>
           {/* {mobile-view-navigation} */}
           <div className={`lg:hidden ${isMenuOpen?"block":"hidden"}`}>
            <MobNavModal/>
           </div>
        </div>
        <Outlet/>
    </div>
}
