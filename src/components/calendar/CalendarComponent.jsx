import Calendar from '@toast-ui/react-calendar';
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

function CalendarView(props) {
  return(
    <Calendar
      height="100%"
      view = {props.selectedView}
      taskView={false}
      calendars={[
        {
          id: '0',
          name: 'Private',
          bgColor: '#9e5fff',
          borderColor: '#9e5fff'
        },
        {
          id: '1',
          name: 'Company',
          bgColor: '#00a9ff',
          borderColor: '#00a9ff'
        }
      ]}
      disableDblClick={true}
      disableClick={false}
      isReadOnly={false}
      month={{
        startDayOfWeek: 0
      }}
    />
  )
}
export default CalendarView;