import { useState, useRef, useEffect } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import moment from 'moment';
import CalendarComponent from './CalendarComponent'

function FullCalendar (){
  const calendarRef = useRef(null);
  const [selectedView, setSelectedView] = useState('week');
  const [controller, setController] = useState(0);
  const views = ['week', 'month', 'day'];
  const calendarViews = views.map((view) => 
  <button className= {`p-3 ${selectedView === view ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`} value={view} onClick={handleViewChange} key={view}>{view}</button>
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
    let counter = new Date().getTime();
    const calendarInstance = calendarRef.current.getInstance();
    console.log('calendarInstance 1', calendarInstance, e.target);
    if(e.target.value === 'next'){
      console.log(calendarRef.current);
      calendarInstance.next();
      setController(counter+=1);
      // console.log(calendarInstance.getDateRangeStart(), calendarInstance.getDateRangeEnd());
    } else if(e.target.value === 'prev'){ 
      calendarInstance.prev();
      setController(counter+=1);
    }
  }
  useEffect(()=>{
    const  handleTitleDisplay = ()=>{
      const calendarInstance2 = calendarRef.current.getInstance();
      const startTime = calendarInstance2.getDateRangeStart()._date.toLocaleString();
      const endTime = calendarInstance2.getDateRangeEnd()._date.toLocaleString();
      selectedView === 'month' ? setTitleStart(moment(startTime, 'DD/MM/YYYY, HH:mm:ss').format('MMMM YYYY').toUpperCase()) : setTitleStart(moment(startTime, 'DD/MM/YYYY, HH:mm:ss').format('MMM D, YYYY').toUpperCase());
      if(selectedView === 'week'){
        setTitleStart(moment(startTime, 'DD/MM/YYYY, HH:mm:ss').format('MMM D').toUpperCase());
        setTitleEnd(moment(endTime, 'DD/MM/YYYY, HH:mm:ss').format('D, YYYY'));
      } else{
        setTitleEnd(moment(endTime, 'DD/MM/YYYY, HH:mm:ss').format('MMM D, YYYY'));
      }
    }
    handleTitleDisplay();
  }, [selectedView, controller])
  return (
    <div className="h-full min-h-full">
    {/* header  */}
      <div className="flex justify-between mb-4 items-center">
        <div className="flex gap-2">
          <button className="bg-blue-900 p-3 text-white" value="prev" onClick={handleNavButtons}><IoIosArrowBack className="font-bold" /></button>
          <button className="bg-blue-900 p-3 text-white" value="next" onClick={handleNavButtons}><IoIosArrowForward className="font-bold" /></button>
        </div>
        <div className="text-3xl text-blue-900 flex font-semibold">
          <span>{calendarTitleStart}</span>{selectedView === 'week' ? <span>-{calendarTitleEnd}</span> : ''}
        </div>
        <div className="flex gap-0 shadow">
          {calendarViews}
        </div>
      </div>
      <div className=' min-h-full   shadow'>
        <CalendarComponent selectedView={selectedView} calendarRef={calendarRef}></CalendarComponent>
      </div>
    </div>

  )
}
export default FullCalendar;