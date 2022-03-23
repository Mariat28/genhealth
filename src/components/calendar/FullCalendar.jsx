import Calendar from "@fullcalendar/react";
import DayGridView  from "@fullcalendar/daygrid";

function FullCalendar (){
  return (
    <Calendar
    plugins={[DayGridView]}
    initialView="dayGridMonth"
    height="100%"
    headerToolbar={false}
    events={[
      { title: 'Consultation', color: '#fca1ab',  date: '2022-04-01' },
      { title: 'CheckUp', color: '#fca1ab',  date: '2022-03-22' },
      { title: 'Veneers', color: '#fca1ab',  date: '2022-03-24' },
    ]}>

    </Calendar>
  )
}
export default FullCalendar;