import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const data = [{
  Id: 1,
  Subject: 'Conference',
  StartTime: new Date(2018, 1, 7, 10, 0),
  EndTime: new Date(2018, 1, 7, 11, 0),
  IsAllDay: false,
}, {
  Id: 2,
  Subject: 'Meeting - 1',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 16, 12, 30),
  IsAllDay: false,
}, {
  Id: 3,
  Subject: 'Paris',
  StartTime: new Date(2018, 1, 13, 12, 0),
  EndTime: new Date(2018, 1, 13, 12, 30),
  IsAllDay: false,
}, {
  Id: 4,
  Subject: 'Vacation',
  StartTime: new Date(2018, 1, 12, 10, 0),
  EndTime: new Date(2018, 1, 12, 10, 30),
  IsAllDay: false,
}, {
  Id: 5,
  Subject: 'Scrum Meeting',
  Location: 'Office',
  StartTime: new Date(2018, 1, 12, 9, 30),
  EndTime: new Date(2018, 1, 12, 10, 30),
  RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1',
}];

export default class ScheduleControl extends React.Component {
  render() {
    return (
      <ScheduleComponent height="550px" eventSettings={ { dataSource: data } } selectedDate={new Date(2018, 1, 15)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}
