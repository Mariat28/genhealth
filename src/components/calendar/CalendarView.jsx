import React from "react";
import FullCalendar from "./FullCalendar";
import { useState } from "react";
import TimeLine from "./TimeLine";
import {BiCollapse} from 'react-icons/bi';
import {IoAddOutline} from 'react-icons/io5';
function CalendarView() {
  const [isTimeLine, setIsTimeLine] = useState(true);
  function handleTimeLineDisplay() {
    setIsTimeLine(!isTimeLine);
    if(isTimeLine) {
      return <TimeLine/>
    }
    return null;

  }
  return(
    <>
      <div className="flex  justify-end items-center px-2  cursor-pointer gap-2  ">
        <button className="bg-blue-900 text-white border p-2 rounded flex gap-1 items-center hover:bg-white hover:border-blue-900 hover:text-blue-900 hover:font-semibold"><IoAddOutline className=" h-6 w-6"/> Create new appointment</button>
        <BiCollapse className='h-6 w-6 text-blue-900' onClick={handleTimeLineDisplay} />
      </div>
      <div className="  p-2 lg:p-0 w-full mt-3 grid xl:grid-cols-5 h-full grid-rows-2 gap-2">
        <div className={` xl:h-screen shadow-lg h-full   min-h-full max-h-full xl:max-h-screen  overflow-y-auto xl:overflow-hidden border-b p-2  mainContent
    ${!isTimeLine ? "col-span-5 row-span-2" : "xl:col-span-3  row-span-1"}`}>
          <div className=" h-full">
            <FullCalendar/>
          </div>
        </div>
        <div className={`p-1  ${!isTimeLine ? '' : 'xl:col-span-2 p-1 row-span-1 h-full xl:h-screen'}`}>
          {isTimeLine ? <TimeLine /> : ''}
        </div>
      </div>
      </>
  )
  
}
export default CalendarView;