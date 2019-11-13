import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../App.css'

class EventCalendar extends React.Component {
  constructor(){
    super()

    this.state = {
      calendarEvents: []
    }
  }

  componentDidMount(){
    this.userEvents()
  }

  userEvents = () => {
    let hostEv = []
    let volunteerEv = []
    let connects = []
    this.props.events.forEach((eventt) => eventt.host_id === this.props.currentUser.id
    ?
    hostEv.push({title: eventt.name, date: this.fixDate(eventt.date)})
    : null)
    this.props.eventConnect.forEach((eventCon) => eventCon.volunteer_id === this.props.currentUser.id
    ? connects.push(eventCon.event_id)
    : null)

    for(let i = 0; i < connects.length; i++ ){
    this.props.events.forEach((ev) => ev.id === connects[i]? volunteerEv.push({title: ev.name, date: this.fixDate(ev.date)}) : null)
    }

    this.setState({calendarEvents: [...this.state.calendarEvents, ...hostEv, ...volunteerEv ]})
  }



  fixDate = (date) => {
    let a = []
    let b = date.split("/")
    a.push(b[2])
    a.push(b[0])
    a.push(b[1])
    return a.join("-")
  }

  render(){
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[ dayGridPlugin ]}
        events={this.state.calendarEvents}
      />
    )
  }
}
export default EventCalendar
