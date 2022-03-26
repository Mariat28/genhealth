import Calendar from '@toast-ui/react-calendar';
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

function CalendarView(props) {
  const week={
    hourStart: 6,
    hourEnd: 19

  };
  const schedules =[
    {
      id: '1',
      calendarId: '0',
      title : 'Study for test',
      start : '2022-03-26T09:00:00.000Z',
      end : '2022-03-26T09:30:00.000Z',
      categoty: 'time',
    }
  ]
  return(
    <Calendar
    ref={props.calendarRef}
      height="1000px"
      scheduleView
      view = {props.selectedView}
      taskView={false}
      week={week}
      useCreationPopup = {true}
      useDetailPopup = {true}
      disableDblClick={true}
      disableClick={false}
      isReadOnly={false}
      month={{
        startDayOfWeek: 0
      }}
      schedules={schedules}
      
    />
  )
}
export default CalendarView;