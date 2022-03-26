import { useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import CalendarComponent from './CalendarComponent'

function FullCalendar (){
  const [selectedView, setSelectedView] = useState('day');
  const views = ['day', 'week', 'month', 'Work Week'];
  const calendarViews = views.map((view) => 
  <button className= {`px-2 py-1 ${selectedView === view ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`} value={view} onClick={handleViewChange} key={view}>{view}</button>
  )
  function handleViewChange(e) {
    if(e.target.value=== 'day') {
      setSelectedView('day');
    }
    else if(e.target.value === 'month'){
      setSelectedView('month');
    } else if(e.target.value === 'week') {
      setSelectedView('week');
    }
  }
  return (
    <div className="h-full min-h-full">
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
      <div className=' h-fit min-h-fit  shadow'>
        <CalendarComponent selectedView={selectedView}></CalendarComponent>
      </div>
    </div>

  )
}
export default FullCalendar;