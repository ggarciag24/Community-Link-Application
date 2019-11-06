import React from 'react'
import CurrentEventsContainer from '../low-level-containers/CurrentEventsContainer'

class VolunteerPage extends React.Component {

  handleEventSignUp = (eventObj) => {
    if (this.props.eventConnect.includes(eventObj)){
      alert('Already signed up')
    } else {
    fetch('http://localhost:3000/volunteer_events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({currentUser: this.props.currentUser, event: eventObj })
    })
    .then(res => res.json())
    .then(data => {
      this.props.finishVolunteerSignUp(data)
    })
    }
  }

  render(){
    return(
        <CurrentEventsContainer events={this.props.events} handleEventSignUp={this.handleEventSignUp}/>
    )
  }
}

export default VolunteerPage;
