import React from "react";
import {  NavLink} from 'react-router-dom';
import {HiOutlineChat, HiOutlineCalendar, HiOutlineUser, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { RiListSettingsLine } from 'react-icons/ri'
import { GoDashboard } from 'react-icons/go';
import { IoIosInformationCircleOutline, IoIosArrowDown, IoMdLogOut} from 'react-icons/io';
import { BiUserCircle} from 'react-icons/bi';


function SideBar(){
  return(
    <div className="lg:flex mt-14  flex-col shadow-xl">
      {/* sidenav NavLinks */}
      <div className="flex flex-col  shadow-2xl h-screen mt-4 justify-between">
        <div className="mt-  flex flex-col justify-between h-full">
          <ul>
            <li className=" pl-0 py-4 text-base " >
              <NavLink to="dashboard" className={({ isActive }) => isActive ? " text-blue-900 font-bold bg-red-500 shadow-lg" : 'text-black'}>
                <div className="flex items-center ">
                <GoDashboard className='h-5 w-5 ml-2'/>
                <p className="pl-4 text-sm  lg:block hidden">Overview</p>
                </div>
              </NavLink>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <NavLink to="calendar">
                  <div className="flex items-center">
                    <HiOutlineCalendar className='h-5 w-5 ml-2'/>
                    <p className="pl-4 text-sm lg:block hidden">Calendar</p>
                  </div>
                </NavLink>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <NavLink to="/patients">
                  <div className="flex items-center">
                    <HiOutlineUser className='h-5 w-5 ml-2'/>
                    <p className="pl-4 text-sm lg:block hidden">Patient List</p>
                  </div>
                </NavLink>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <NavLink to="/messages">
                  <div className="flex items-center">
                  <HiOutlineChat className='h-5 w-5 ml-2'/>
                    <p className="pl-4 text-sm lg:block hidden">Messages</p>
                  </div>
                </NavLink>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <NavLink to="/payments">
                  <div className="flex items-center">
                  <HiOutlineCurrencyDollar className='h-5 w-5 ml-2'/>
                    <p className="pl-4 text-sm lg:block hidden">Payment Information</p>
                  </div>
                </NavLink>
              </li>
              <li className="700 text-black pl-0 py-4 text-base">
                <NavLink to="/settings">
                  <div className="flex items-center">
                  <RiListSettingsLine className='h-5 w-5 ml-2'/>
                    <p className="pl-4 text-sm lg:block hidden">Settings</p>
                  </div>
                </NavLink>
              </li>
          </ul>

          <div className=" mb-10 h-48 divide-y ">
            <div className="flex items-center mb-8 ml-2">
              <IoIosInformationCircleOutline className="h-6 w-6"/>
              <p className="ml-2 font-sans text-sm lg:block hidden">Help ?</p>
            </div>
            <div className=" lg:flex items-center mt-4 pt-6 justify-between hidden">
              <div className="flex items-center justify-start">
                  <BiUserCircle className="h-10 w-10 text-gray-500"/>
                  <div className="flex flex-col ml-2 ">
                    <p className="text-sm">Dr. Mariat Ndagire</p>
                    <p className="text-sm text-slate-400">Dentist</p>
                  </div>
              </div>
              <div >
              <IoIosArrowDown className="mr-5"/>
              </div>
            </div>
            {/* logout icon  */}
            <div className="lg:hidden block ml-2 cursor-pointer hover:text-red-500">
              <IoMdLogOut className="h-6 w-6"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default SideBar;