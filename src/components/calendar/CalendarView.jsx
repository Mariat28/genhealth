import React from "react";
import FullCalendar from "./FullCalendar";
import { useState } from "react";
import TimeLine from "./TimeLine";
import {BiCollapse} from 'react-icons/bi';

function CalendarView() {
  const [isTimeLine, setIsTimeLine] = useState(false);
  function handleTimeLineDisplay() {
    setIsTimeLine(!isTimeLine);
    if(isTimeLine) {
      return <TimeLine/>
    }
    return null;

  }
  return(
    <>
      <div className="flex  justify-end text-blue-900 cursor-pointer hover:animate-pulse">
        <BiCollapse className='h-6 w-6' onClick={handleTimeLineDisplay} />
      </div>
      <div className="  p-2 lg:p-0 w-full grid xl:grid-cols-5 h-screen grid-rows-2 gap-2">
        <div className={` xl:h-screen shadow-lg h-full  min-h-full max-h-full xl:max-h-screen overflow-y-auto xl:overflow-hidden border-b p-2  mainContent
    ${!isTimeLine ? "col-span-5" : "xl:col-span-3  row-span-1"}`}>
          <div className=" h-full mb-0">
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