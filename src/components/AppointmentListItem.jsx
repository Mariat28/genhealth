function AppointmentListItem() {
    return(
        <>
        <div className="bg-white p-2 mt-3 max-h-full  min-h-[400px] overflow-auto">
            <div className="flex justify-between mt-3 bg-blue-50 p-3 rounded mr-3 shadow-sm cursor-pointer">
                <div className="flex">
                    <div className="rounded-full h-10 w-10">
                        {/* avatar div  */}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-blue-400 font-semibold">Mariat Ndagire</span>
                        <span className="text-sm font-thin text-blue-300">Venners</span>
                    </div>
                </div>
                <div className="mr-4">
                    <span className="text-blue-400 font-semibold">OnGoing</span>
                </div>
            </div>
            <div className="flex justify-between mt-3 bg-white p-3 rounded mr-3">
                    <div className="flex">
                        <div className="rounded-full h-10 w-10">
                            {/* avatar div  */}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-900 font-semibold">Robert Kiyosaki</span>
                            <span className="text-sm  text-slate-500">Scaling</span>
                        </div>
                    </div>
                    <div className="mr-4">
                        <span className="text-slate-600 text-3xl font-semibold">14:00</span>
                    </div>
            </div>
        </div>
        </>
    )
}
export default AppointmentListItem;