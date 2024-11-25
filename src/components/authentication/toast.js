export default function Toast({message}) {
    return <div className="ml-64 mr-64">
        <div className="bg-red-600 lg:max-w-full h-12 flex items-center rounded-md justify-between">
            <div className="ml-1 ">{message}</div>
           <button> <div className="mr-5 text-2xl text-black">X</div></button>
        </div>
    </div>
}