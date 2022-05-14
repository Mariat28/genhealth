import Calendar from '@toast-ui/react-calendar';
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
// import moment from 'moment';
import {useCallback} from 'react';

function CalendarView(props) {
  const start = new Date();
  const end = new Date(new Date().setMinutes(start.getMinutes() + 30)); 
  const week={
    hourStart: 6,
    hourEnd: 19

  };
  const schedules =[
    {
      calendarId: "1",
      category: "time",
      isVisible: true,
      title: "Opthamology",
      id: "1",
      body: "Testing the functionality of the calendar module and making it ready for production",
      start,
      end,
      attendees:['Rania Al-Saleh', 'Ahmed Al-Saleh'],
    },
    {
      calendarId: "2",
      category: "time",
      isVisible: true,
      title: "Stakeholder Meeting",
      id: "2",
      body: "Hosted by the UN resident coordinator Rosa Malango",
      start: new Date(new Date().setHours(start.getHours() + 1)),
      end: new Date(new Date().setHours(start.getHours() + 2))
    }
  ];
  
  const calendars= [
    {
      id: "1",
      name: "Clinical department",
      color: "#ffffff",
      bgColor: "#9e5fff",
      dragBgColor: "#9e5fff",
      borderColor: "#9e5fff"
    },
    {
      id: "2",
      name: "Rosah Malango",
      color: "#ffffff",
      bgColor: "#00a9ff",
      dragBgColor: "#00a9ff",
      borderColor: "#00a9ff"
    }
  ];
  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    console.log(scheduleData);
    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw["class"]
      },
      state: scheduleData.state
    };

    props.calendarRef.calendarInst.createSchedules([schedule]);
  }, [props.calendarRef]);
  const onBeforeUpdateSchedule = useCallback ((e) =>{
      console.log(e);
      const {schedule, changes} = e;
      props.calendarRef.calendarInst.updateSchedule(
        schedule.id, schedule.calendarId, changes
      )
  }, [props.calendarRef]);
  return(
    <Calendar
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
      calendars={calendars}
      schedules={schedules}
      // template={template}
      ref ={props.calendarRef}
      onBeforeCreateSchedule={onBeforeCreateSchedule}
      onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      
    />
  )
}
export default CalendarView;