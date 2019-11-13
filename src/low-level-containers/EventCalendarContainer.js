import React from 'react'
import EventCalendar from '../components/EventCalendar'

class EventCalendarContainer extends React.Component {
  render(){
    return (
      <EventCalendar events={this.props.events} eventConnect={this.props.eventConnect} currentUser={this.props.currentUser} />
    )
  }
}
export default EventCalendarContainer
