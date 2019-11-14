import React from 'react'
import PersonalInfoContainer from '../low-level-containers/PersonalInfoContainer'
import ActivityLogContainer from '../low-level-containers/ActivityLogContainer'
import {Segment, Grid, Divider} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import EventCalendarContainer from '../low-level-containers/EventCalendarContainer'

class ProfilePage extends React.Component {
  constructor(){
    super()

    this.state = {
      calendarEvents: []
    }
  }

  finishCalendar = (hostEv, volunteerEv) => {
    this.setState({calendarEvents: [...this.state.calendarEvents, ...hostEv, ...volunteerEv ]})

  }

  render(){
    if (this.props.currentUser === null) {
      return <Redirect to='/'/>
    }
    return(
      <div className='profileback'>
      <h1 className='coolwhitetext'> Profile </h1>
      <Segment placeholder >
          <Grid columns={2} relaxed='very' stackable className='backimg'>
            <Grid.Column width={1}>
              </Grid.Column>
            <Grid.Column width={4} >
              <PersonalInfoContainer currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={10}>
              <ActivityLogContainer currentUser={this.props.currentUser} events={this.props.events} eventConnect={this.props.eventConnect} finishUnvolunteerSubmit={this.props.finishUnvolunteerSubmit} finishCancel={this.props.finishCancel}/>
            </Grid.Column>
          </Grid>
      </Segment>
      <EventCalendarContainer events={this.props.events} eventConnect={this.props.eventConnect} currentUser={this.props.currentUser} calendarEvents={this.state.calendarEvents} finishCalendar={this.finishCalendar}/>
      </div>
    )
  }
}

export default ProfilePage;
