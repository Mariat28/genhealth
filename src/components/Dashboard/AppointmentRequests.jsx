import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
function AppointmentRequest() {
    return(
        <div>
            <div className="bg-white p-2 mt-3 max-h-full  min-h-[400px] overflow-auto lg:mr-3 mr-6">
                <div className="flex justify-between items-center mt-3  p-3 rounded mr-3 shadow-sm cursor-pointer">
                    <div className="flex">
                        <div className="rounded-full h-10 w-10">
                            {/* avatar div  */}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-900 font-semibold">Mariat Ndagire</span>
                            <span className="text-sm  text-slate-600">Venners</span>
                            <div className="flex items-center">
                                <span className="text-sm font text-blue-900">26th February</span>
                                <span className="text-md font-bold ml-1 mr-1 mb-1 text-slate-600">.</span>
                                <span className="text-blue-900 text-sm font-semibold">10:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mr-4 flex">
                        <div className="rounded-full h-10 w-10 border-blue-400 border flex justify-center items-center animate-pulse"><AiOutlineCheck className='text-blue-400 text-lg'/></div>
                        <div className="rounded-full h-10 w-10 border-red-400 border flex justify-center items-center ml-2"><AiOutlineClose className='text-red-400 text-lg'/></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3  p-3 rounded mr-3 shadow-sm cursor-pointer">
                    <div className="flex">
                        <div className="rounded-full h-10 w-10">
                            {/* avatar div  */}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-900 font-semibold">Mariat Ndagire</span>
                            <span className="text-sm  text-slate-600">Venners</span>
                            <div className="flex items-center">
                                <span className="text-sm font text-blue-900">26th February</span>
                                <span className="text-md font-bold ml-1 mr-1 mb-1 text-slate-600">.</span>
                                <span className="text-blue-900 text-sm font-semibold">10:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mr-4 flex">
                        <button className='text-blue-400 bg-blue-50 rounded pr-2 pl-2 p-1'>Accepted</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppointmentRequest;