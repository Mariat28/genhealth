import React from "react";
import FullCalendar from "./FullCalendar";
import TimeLine from "./TimeLine";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
function CalendarView() {
  return(
    <div className="  p-2 lg:p-0 w-full grid xl:grid-cols-5 h-screen grid-rows-2 gap-2">
      <div className="xl:col-span-3  row-span-1 xl:h-screen shadow-lg h-full  min-h-full max-h-full xl:max-h-screen overflow-y-auto xl:overflow-hidden border-b p-2  mainContent">
        {/* header  */}
        <div className="flex justify-between mb-4 items-center">
          <div className="flex gap-2">
            <button className="bg-blue-900 p-2 text-white"><IoIosArrowBack className="font-bold"/></button>
            <button className="bg-blue-900 p-2 text-white"><IoIosArrowForward className="font-bold"/></button>
          </div>
          <div className="text-3xl text-blue-900">
            March 22
          </div>
          <div className="flex gap-0 shadow">
            <button className="bg-blue-900 px-2 py-1 text-white">Today</button>
            <button className="bg-white p-2 text-blue-900">Week</button>
            <button className="bg-white p-2 text-blue-900">Month</button>
            <button className="bg-white p-2 text-blue-900">List</button>
          </div>
        </div>
        <div className=" h-full mb-0">
          <FullCalendar/>
        </div>
      </div>
      <div className="xl:col-span-2 p-1 row-span-1 h-full xl:h-screen ">
        <TimeLine/>
      </div>
    </div>
  )
  
}
export default CalendarView;