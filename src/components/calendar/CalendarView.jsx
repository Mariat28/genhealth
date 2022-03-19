import React from "react";
import FullCalendar from "@fullcalendar/react";
import DayGridView  from "@fullcalendar/daygrid";
import TimeLine from "./TimeLine";

function CalendarView() {
  return(
    <div className=" p-2 h-full  w-full grid grid-cols-5 gap-2">
      <div className="col-span-3  h-full min-h-full shadow-lg p-1">
        <div className="h-full min-h-full">
        <FullCalendar
        plugins={[DayGridView]}
        initialView="dayGridMonth"
        events={[
          { title: 'Consultation', color: '#fca1ab',  date: '2022-04-01' },
          { title: 'CheckUp', color: '#fca1ab',  date: '2022-03-22' },
          { title: 'Veneers', color: '#fca1ab',  date: '2022-03-24' },
        ]}>

        </FullCalendar>
        </div>
      </div>
      <div className="grid-cols-2 p-1">
        <TimeLine/>
      </div>

    </div>
  )
  
}
export default CalendarView;