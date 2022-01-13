import React from "react";

function topNav(props) {
  return (
  <div className="text-red-400 h-14 flex items-center justify-between bg-gray-50 shadow ">
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className=" text-black mx-1 font-semibold">Dashboard Overview</p>
    </div>
    <div className="flex items-center mr-3">
        <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
          <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-neutral-50 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search"></input>
        </div>
        <button className="rounded-full bg-blue-700 mx-2 px-1 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        </button>
        <button className="rounded-full bg-white mx-2 shadow-md px-1 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" fill="gray" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        </button>
        
        {/* <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span> */}
    </div>

  </div>
  )
}

export default topNav;