import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MobNavModal from "../mobNavModal";
import ProfileModal from "../profileModal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen,setIsProfileOpen]=useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const togggleProfile=()=>{
        setIsProfileOpen((prev)=>!prev)
    }
    return <div >
        <div className="bg-slate-600 p-8 ">
            {/* {desktop-view} */}
           <div className={`lg:flex justify-between space-x-20   font-bold text-lg text-gray-100 ${isMenuOpen? "hidden":"hidden"} lg:"block`}>
         <div>  <div className="w-24 ">
            <img src="/logo site.png" alt="Site Logo" className="rounded-3xl"/>
        </div></div>
          <div className="flex space-x-9 m-8 font-extrabold text-2xl">
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/track">Track</NavLink></div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/suggest">Suggest</NavLink></div>
            <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  <NavLink to="/support">Support</NavLink></div>
            <div className="relative">
            <div className="w-10 cursor-pointer"><img src="/profile.png" className="rounded-3xl" onClick={togggleProfile}/>
            {isProfileOpen &&    <div className="absolute -right-8 mt-12 z-20">
                <ProfileModal/>
                </div>}
            </div>
            </div>
           </div>
           </div>
           {/* {mobile-view} */}
           <div>
            <div className="lg:hidden flex justify-between">
            <div className="w-24 ">
            <img src="/logo site.png" alt="Site Logo" className="rounded-3xl"/>
        </div>
           <div className="relative z-20"><button onClick={toggleMenu}>
                    <div className="space-y-3 mt-6">
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                        <div className="w-6 h-0.5 bg-gray-300"></div>
                    </div>
                    {isMenuOpen &&   <div className={`lg:hidden ${isMenuOpen?"block":"hidden"} absolute -right-7`}>
            <MobNavModal toggleMenu={toggleMenu}/>
           </div>}
                </button>
                </div>
            </div>
           </div>
        </div>
        <Outlet/>
    </div>
}
