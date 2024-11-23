export default function () {
    return (
        <div > 
            <div className="w-52 bg-slate-900 rounded-md -mt-10 mr-1 outline outline-1 outline-gray-700 shadow-lg text-lg ">
                <div className="text-center space-y-2 py-3">
                    <div className="text-blue-900 font-bold cursor-pointer hover:bg-blue-400 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                        Login
                    </div>
                    <div className="text-green-800 font-bold cursor-pointer hover:bg-green-500 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                        Register
                    </div>
                    <div className="text-red-800 font-bold cursor-pointer hover:bg-red-400 hover:text-white p-2 rounded transition duration-200 ease-in-out">
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    );
}
