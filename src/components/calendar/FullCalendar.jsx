import { useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import CalendarComponent from './CalendarComponent'

function FullCalendar (){
  const [selectedView, setSelectedView] = useState('week');
  const views = ['Today', 'Week', 'Month', 'Work Week'];
  const calendarViews = views.map((view) => 
  <button className= {`px-2 py-1  text-white ${selectedView === view ? 'bg-white' : 'bg-blue-900'}`} onClick={handleViewChange(view)} key={view}>{view}</button>
  )
  function handleViewChange(v) {
    // setSelectedView(v);
  }
  return (
    <div className="h-full">
    {/* header  */}
      <div className="flex justify-between mb-4 items-center">
        <div className="flex gap-2">
          <button className="bg-blue-900 p-2 text-white"><IoIosArrowBack className="font-bold" /></button>
          <button className="bg-blue-900 p-2 text-white"><IoIosArrowForward className="font-bold" /></button>
        </div>
        <div className="text-3xl text-blue-900">
          March 22
        </div>
        <div className="flex gap-0 shadow">
          {calendarViews}
        </div>
      </div>
      <div className="h-full">
        <CalendarComponent selectedView={selectedView}></CalendarComponent>
      </div>
    </div>

  )
}
export default FullCalendar;