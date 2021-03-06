import womanProfile from '../../assets/woman.jpg';

function TimeLine () {
    return (
        <div className="w-full h-full">
            <div className='flex justify-between items-center font-bold text-blue-900 p-2'>
                <div className="text-lg  flex items-center gap-1">
                    Appointments Timeline
                    <div className='rounded-full  bg-blue-900 text-white p-2 h-6 w-6 flex items-center text-sm justify-center'>3</div>
                </div>
            </div>
            <div className="p-0 lg:p-2 w-full flex flex-col gap-2">
                <div className="bg-white rounded shadow-sm w-full  border-l-4 border-blue-200 h-28">
                    <div className="flex justify-between items-center h-full w-full  p-3 rounded mr-3 shadow-sm cursor-pointer hover:shadow-md">
                        <div className="flex items-start">
                            <div className=" h-10 w-10 rounded-full overflow-hidden">
                                <img src={womanProfile} alt="profilepic" className='object-contain'/>
                                {/* avatar div  */}
                            </div>
                            <div className="flex flex-col ml-2">
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
                            <button className='text-blue-400 bg-blue-50 rounded pr-2 pl-2 p-1 lg:text-sm'>Accepted</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded shadow-sm w-full  border-l-4 border-red-200 h-28">
                <div className="flex justify-between items-center h-full w-full  p-3 rounded mr-3 shadow-sm cursor-pointer hover:shadow-md">
                        <div className="flex items-start">
                            <div className=" h-10 w-10 rounded-full overflow-hidden">
                                <img src={womanProfile} alt="profilepic" className='object-contain'/>
                                {/* avatar div  */}
                            </div>
                            <div className="flex flex-col ml-2">
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
                            <button className='text-red-400 bg-red-200 rounded pr-2 pl-2 p-1 lg:text-sm'>Cancelled</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded shadow-sm w-full  border-l-4 border-green-200 h-28">
                    <div className="flex justify-between items-center h-full w-full  p-3 rounded mr-3 shadow-sm cursor-pointer hover:shadow-md">
                        <div className="flex items-start">
                            <div className=" h-10 w-10 rounded-full overflow-hidden">
                                <img src={womanProfile} alt="profilepic" className='object-contain'/>
                                {/* avatar div  */}
                            </div>
                            <div className="flex flex-col ml-2">
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
                            <button className='text-green-400 bg-green-200 rounded pr-2 pl-2 p-1 lg:text-sm'>Confirmed</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TimeLine;