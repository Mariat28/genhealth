import React from "react";
import {BsTelephone, BsFolder2, BsChatLeft} from 'react-icons/bs';
import womanProfile from '../../assets/woman.jpg';

function NextPatient() {
    return (
        <div className="bg-white p-4 mt-3 max-h-full  min-h-[400px] overflow-auto mr-6 lg:mr-10">
            {/* profile picture */}
            <div className="flex items-center">
                <div className="bg-red-500 h-10 w-10 rounded-full overflow-hidden">
                    <img src={womanProfile} alt="profilepic" className='object-contain'/>
                    {/* avatar div  */}
                </div>
                <div className="flex flex-col ml-2">
                    <span className="text-blue-900 font-semibold">Mariat Ndagire</span>
                    <span className="text-slate-500 text-sm">Plot 65 Kampala Road,</span>
                    <span className="text-slate-500 text-sm">Kampala, Uganda</span>
                </div>
            </div>
            {/* bio data  */}
            <div className="mt-6">
                <table className="table-fixed border-collapse w-full">
                    <tr className="text-left">
                        <th className="p-2 text-slate-600 text-sm">D.O.B</th>
                        <th className="p-2 text-slate-600 text-sm">Sex</th>
                        <th className="p-2 text-slate-600 text-sm">Weight</th>
                    </tr>
                    <tr>
                        <td className="p-2  text-sm">28th April 1998</td>
                        <td className="p-2  text-sm">Female</td>
                        <td className="p-2 text-sm">60kg</td>
                    </tr>
                </table>
                <table className="table-fixed border-collapse w-full">
                    <tr className="text-left">
                        <th className="p-2 text-slate-600 text-sm">Height</th>
                        <th className="p-2 text-slate-600 text-sm">Last Appointment</th>
                        <th className="p-2 text-slate-600 text-sm">Registration Date</th>
                    </tr>
                    <tr>
                        <td className="p-2 text-sm">172cm</td>
                        <td className="p-2 text-sm">02 Jan 2022</td>
                        <td className="p-2 text-sm">20th Dec 2020</td>
                    </tr>
                </table>
                <div className="pt-4 mt-2">
                    <button className="bg-yellow-100  rounded-md text-yellow font-semibold text-yellow-300 p-1 pr-2 pl-2 lg:text-sm">Asthma</button>
                    <button className="bg-green-50  rounded-md text-yellow font-semibold text-green-300 p-1 pr-2 pl-2 ml-2 lg:text-sm">Hypertension</button>
                    <button className="bg-purple-50  rounded-md text-yellow font-semibold text-purple-300 p-1 pr-2 pl-2 ml-2 lg:text-sm">Ulcers</button>
                </div>
                <div className="pt-4 mt-2 flex">
                    <button className="flex bg-blue-400 text-white items-center rounded-md p-2 "><BsTelephone/>
                        <span className="ml-2 lg:text-sm"> (256) 705-976941</span>
                    </button>
                    <button className="flex bg-white text-blue-400 lg:text-sm items-center rounded-md p-2 pl-3 pr-4  border border-blue-400 ml-2 "><BsFolder2 className="text-lg"/>
                        <span className="ml-2"> Documents</span>
                    </button>
                    <button className="flex bg-white text-blue-400 lg:text-sm items-center rounded-md  pl-3 pr-4  border border-blue-400 ml-2 "><BsChatLeft />
                        <span className="ml-2"> Chat</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NextPatient;