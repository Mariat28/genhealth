import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import { GoDashboard, GoThreeBars, GoCalendar } from 'react-icons/go';
import { IoIosAdd, IoMdNotifications } from 'react-icons/io';
import {ImEnvelop, ImCalendar} from 'react-icons/im';
import {HiOutlineCurrencyDollar} from 'react-icons/hi';
import { RiListSettingsLine } from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi';

function TopNav(props) {
  // detect current route 
  const [currentView, setCurrentView] = useState('');
  const [viewIcon, setViewIcon] = useState('');

  const location = useLocation();

  function currentRoute(){
    console.log('current route', location);
    if(location.pathname === '/dashboard') {
      setCurrentView(' Dashboard Overview');
      setViewIcon(<GoThreeBars className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);
    } else if(location.pathname === '/calendar') {
      setCurrentView(' Calendar View');
      setViewIcon(<ImCalendar className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);
    } else if(location.pathname === '/patients') {
      setCurrentView(' Patients');
      setViewIcon(<FiUsers className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);

    } else if(location.pathname === '/messages') {
      setCurrentView(' Inbox');
      setViewIcon(<ImEnvelop className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);

    } else if(location.pathname === '/payments') {
      setCurrentView('Payments');
      setViewIcon(<HiOutlineCurrencyDollar className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);

    } else if(location.pathname === '/settings') {
      setCurrentView('Settings');
      setViewIcon(<RiListSettingsLine className="h-5 w-5 mx-2 text-blue-900 hidden lg:block"/>);

    }
  }
  useEffect(()=>{
    currentRoute();
  })
  return (
  <div className=" h-16 flex items-center justify-between bg-blue-50 shadow ">
    <div className=" md:flex items-center justify-between w-full lg:ml-20 ml-4  hidden">
      <div className="flex items-center lg:ml-40 md:ml-12">
        {viewIcon}
        {/* <GoThreeBars className="h-5 w-5 mx-2 text-blue-900 lg:hidden" /> */}
        <p className=" text-black mx-1 text-lg font-semibold antialiased">{currentView}</p>
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
    <div className="flex items-center">
    <GoThreeBars className="h-5 w-5 mx-2 text-blue-900 md:hidden block cursor-pointer" />
    <p className=" text-black mx-1 text-lg font-semibold antialiased md:hidden block">{currentView}</p>
    </div>


  </div>
  )
}

export default TopNav;