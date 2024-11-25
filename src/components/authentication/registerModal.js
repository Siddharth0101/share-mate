import { Form } from "react-router-dom";
// w-full max-w-lg md:max-w-md lg:max-w-[40vw] h-auto bg-white rounded-2xl p-6 m-4 md:m-16 shadow-lg
export default function RegisterModal() {
    return <div className="flex justify-center">
        <div className="lg:max-w-xl h-auto md:max-w-md  p-5 m-5  bg-white rounded-2xl  shadow-2xl ">
            <Form >
                <div className="flex justify-center text-2xl text-black font-bold ">
                    Register
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        User Name
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full text-xl"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Email
                    </div>
                    <div className="m-2">
                        <input type="email" className="bg-slate-400 rounded-md w-full text-xl"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Password
                    </div>
                    <div className="m-2">
                        <input type="password" className="bg-slate-400 rounded-md w-full text-xl"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Confirm Password
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full text-xl"/>
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="outline bg-gray-600 hover:bg-green-800 m-1 w-[50vw] rounded-3xl text-white text-2xl p-1">Register</button>
                </div>
            </Form>
        </div>
    </div>
}