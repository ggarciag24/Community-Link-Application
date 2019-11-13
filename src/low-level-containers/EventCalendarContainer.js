import React from 'react'
import EventCalendar from '../components/EventCalendar'

class EventCalendarContainer extends React.Component {
  render(){
    return (
      <EventCalendar events={this.props.events} eventConnect={this.props.eventConnect} currentUser={this.props.currentUser} calendarEvents={this.props.calendarEvents} finishCalendar={this.props.finishCalendar}/>
    )
  }
}
export default EventCalendarContainer
