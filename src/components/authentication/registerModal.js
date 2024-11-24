import { Form } from "react-router-dom";

export default function RegisterModal() {
    return <div className="lg:flex hidden  justify-center">
        <div className="w-[40vw] h-[40vh] bg-white rounded-2xl m-44">
            <Form>
                <div className="flex justify-center text-xl text-black m-1 ">
                    Register
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        User Name
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Email
                    </div>
                    <div className="m-2">
                        <input type="email" className="bg-slate-400 rounded-md w-full"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Password
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full"/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Confirm Password
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full"/>
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="outline bg-gray-600 hover:bg-green-800 m-7 w-[50vw] rounded-3xl">Register</button>
                </div>
            </Form>
        </div>
    </div>
}