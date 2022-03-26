import { useState, useRef, useEffect } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import CalendarComponent from './CalendarComponent'

function FullCalendar (){
  let calendarRef = useRef(null);
  // const calendarInstance = calendarRef.current.getInstance();
  const [selectedView, setSelectedView] = useState('day');
  const views = ['day', 'week', 'month'];
  const calendarViews = views.map((view) => 
  <button className= {`px-2 py-1 ${selectedView === view ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`} value={view} onClick={handleViewChange} key={view}>{view}</button>
  )
  const [calendarTitleStart, setTitleStart] = useState('');
  const [calendarTitleEnd, setTitleEnd] = useState('');
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
  function handleNavButtons(e){
  const calendarInstance = calendarRef.current.getInstance();
    if(e.target.value === 'next'){
      calendarInstance.next();
      console.log(calendarInstance.getDateRangeStart(), calendarInstance.getDateRangeEnd());
    } else if(e.target.value === 'prev'){ 
      calendarInstance.prev();
    }
  }
  // useEffect(()=>{
  //   const  handleTitleDisplay = ()=>{
  //       // setTitleStart(calendarInstance.getDateRangeStart())
  //   }
  //   handleTitleDisplay();
  // }, [selectedView])
  return (
    <div className="h-full min-h-full">
    {/* header  */}
      <div className="flex justify-between mb-4 items-center">
        <div className="flex gap-2">
          <button className="bg-blue-900 p-2 text-white" value="prev" onClick={handleNavButtons}><IoIosArrowBack className="font-bold" /></button>
          <button className="bg-blue-900 p-2 text-white" value="next" onClick={handleNavButtons}><IoIosArrowForward className="font-bold" /></button>
        </div>
        <div className="text-3xl text-blue-900 flex">
          <span>{calendarTitleStart}</span><span>-{calendarTitleEnd}</span>
        </div>
        <div className="flex gap-0 shadow">
          {calendarViews}
        </div>
      </div>
      <div className=' h-fit min-h-fit  shadow'>
        <CalendarComponent selectedView={selectedView} calendarRef={calendarRef}></CalendarComponent>
      </div>
    </div>

  )
}
export default FullCalendar;