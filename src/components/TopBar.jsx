import React from "react";
import { GoDashboard } from 'react-icons/go';
import { IoIosAdd, IoMdNotifications } from 'react-icons/io';

function topNav(props) {
  return (
  <div className="text-red-400 h-16 flex items-center justify-between bg-gray-50 shadow ">
    <div className="flex">
      <GoDashboard className="h-5 w-5 mx-2 text-blue-700"/>
      <p className=" text-black mx-1 font-semibold antialiased">Dashboard Overview</p>
    </div>
    <div className="flex items-center mr-3">
        <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
          <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-neutral-50 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search"></input>
        </div>
        <button className="rounded-full bg-blue-700 mx-2 px-0 py-0 text-white">
        <IoIosAdd className="text-white h-6 w-6"/>
        </button>
        <button className="rounded-full bg-white mx-2 shadow-md px-1 py-1">
        <IoMdNotifications className="text-gray-500"/>
        </button>
    </div>

  </div>
  )
}

export default topNav;