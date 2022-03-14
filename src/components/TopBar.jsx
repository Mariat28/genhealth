import React from "react";
import { GoDashboard, GoThreeBars } from 'react-icons/go';
import { IoIosAdd, IoMdNotifications } from 'react-icons/io';
import Logo from '../assets/health-insurance.png';

function topNav(props) {
  return (
  <div className=" h-16 flex items-center justify-between bg-blue-50 shadow ">
    {/* logo area  */}
    <div className="flex items-center mt-2 hover:bg-blue-50 w-full md:w-1/4 lg:w-48 ">
        <img src={Logo} alt="app-logo" className="w-10 App-logo"/>
        <div className="md:ml-4 ml-1">
          <p className="font-bold">GenHealth</p>
          <p className="font-thin text-xs font-serif text-gray-500">Simplifying e-Health</p>
        </div>
    </div>
    <div className=" md:flex items-center justify-between w-full lg:ml-20 ml-4  hidden">
      <div className="flex items-center">
        <GoDashboard className="h-5 w-5 mx-2 text-blue-700 hidden lg:block"/>
        <GoThreeBars className="h-5 w-5 mx-2 text-blue-900 lg:hidden" />
        <p className=" text-black mx-1 font-semibold antialiased">Dashboard Overview</p>
      </div>
      <div className="flex items-center mr-3">
          <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-neutral-50 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search"></input>
          </div>
          <button className="rounded-full bg-blue-900 mx-2 px-0 py-0 text-white">
          <IoIosAdd className="text-white h-6 w-6"/>
          </button>
          <button className="rounded-full bg-white mx-2 shadow-md px-1 py-1">
          <IoMdNotifications className="text-gray-500"/>
          </button>
      </div>
    </div>
    <div className="flex items-center ">
    <GoThreeBars className="h-5 w-5 mx-2 text-blue-900 md:hidden block" />
    </div>


  </div>
  )
}

export default topNav;