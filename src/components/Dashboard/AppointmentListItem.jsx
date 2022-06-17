import React from 'react';
import profileImg from '../../assets/man.jpg';
import womanProfile from '../../assets/woman.jpg';

function AppointmentListItem() {
    return(
        <React.Fragment>
        <div className="bg-white p-2 mt-3 max-h-full  min-h-[400px] overflow-auto lg:mr-0 mr-6">
            <div className="flex justify-between mt-3 bg-blue-50 p-3 rounded mr-3 shadow-sm cursor-pointer hover:shadow">
                <div className="flex">
                    <div className=" h-10 w-10 rounded-full overflow-hidden">
                        <img src={profileImg} alt="profilepic" className='object-contain'/>
                        {/* avatar div  */}
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-blue-400 font-semibold">Robert Kiyosaki</span>
                        <span className="text-sm  text-blue-300">Venners</span>
                    </div>
                </div>
                <div className="mr-4 flex items-center">
                    <span className="text-blue-400 font-semibold">OnGoing</span>
                </div>
            </div>
            <div className="flex justify-between mt-3 bg-white p-3 rounded mr-3 shadow-sm cursor-pointer hover:shadow">
                    <div className="flex">
                        <div className=" h-10 w-10 rounded-full overflow-hidden">
                        <img src={womanProfile} alt="profilepic" className='object-contain'/>
                            {/* avatar div  */}
                        </div>
                        <div className="flex flex-col ml-2">
                            <span className="text-blue-900 font-semibold"> Mariat Ndagire</span>
                            <span className="text-sm  text-slate-500">Scaling</span>
                        </div>
                    </div>
                    <div className="mr-4">
                        <span className="text-slate-600 text-3xl font-semibold lg:text-2xl">14:00</span>
                    </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default AppointmentListItem;