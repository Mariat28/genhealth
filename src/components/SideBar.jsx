import React from "react";
import Logo from '../assets/health-insurance.png';
import {HiOutlineChat, HiOutlineCalendar, HiOutlineUser, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { RiListSettingsLine } from 'react-icons/ri'
import { GoDashboard } from 'react-icons/go';
import { IoIosInformationCircleOutline, IoIosArrowDown} from 'react-icons/io';
import { BiUserCircle} from 'react-icons/bi';
function SideBar(){
  return(
    <div className="flex  flex-col ">
      {/* logo area  */}
      <div className="flex items-center mt-2">
        <img src={Logo} alt="app-logo" className="w-10"/>
        <div className="ml-2">
          <p className="font-bold">GenHealth</p>
          <p className="font-thin text-xs font-serif text-gray-500">Simplifying e-Health</p>
        </div>
      </div>
      {/* sidenav links */}
      <div className="flex flex-col  h-screen mt-4 justify-between">
        <div className="mt-  flex flex-col justify-between h-full">
          <ul>
            <li className="bg-blue-700 text-white pl-0 py-4 text-base">
              <div className="flex items-center">
              <GoDashboard className='h-5 w-5 ml-2'/>
              <p className="pl-4 text-sm">Overview</p>
              </div>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <div className="flex items-center">
                  <HiOutlineCalendar className='h-5 w-5 ml-2'/>
                  <p className="pl-4 text-sm">Calendar</p>
                </div>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <div className="flex items-center">
                  <HiOutlineUser className='h-5 w-5 ml-2'/>
                  <p className="pl-4 text-sm">Patient List</p>
                </div>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <div className="flex items-center">
                <HiOutlineChat className='h-5 w-5 ml-2'/>
                  <p className="pl-4 text-sm">Messages</p>
                </div>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <div className="flex items-center">
                <HiOutlineCurrencyDollar className='h-5 w-5 ml-2'/>
                  <p className="pl-4 text-sm">Payment Information</p>
                </div>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <div className="flex items-center">
                <RiListSettingsLine className='h-5 w-5 ml-2'/>
                  <p className="pl-4 text-sm">Settings</p>
                </div>
              </li>
          </ul>
          <div className=" mb-10 h-48 divide-y">
            <div className="flex items-center mb-8 ml-2">
              <IoIosInformationCircleOutline/>
              <p className="ml-2 font-sans text-sm">Help ?</p>
            </div>
            <div className=" flex items-center mt-4 pt-6 justify-between">
              <div className="flex items-center justify-start">
                  <BiUserCircle className="h-10 w-10 text-gray-500"/>
                  <div className="flex flex-col ml-2">
                    <p className="text-sm">Dr. Mariat Ndagire</p>
                    <p className="text-sm text-slate-400">Dentist</p>
                  </div>
              </div>
              <div >
              <IoIosArrowDown className="mr-5"/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  )
}
export default SideBar;