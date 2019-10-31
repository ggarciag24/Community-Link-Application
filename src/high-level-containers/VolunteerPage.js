import React from 'react'
import CurrentEventsContainer from '../low-level-containers/CurrentEventsContainer'

class VolunteerPage extends React.Component {
  render(){

    return(
        <div>
        <CurrentEventsContainer events={this.props.events}/>
        </div>
    )
  }
}

export default VolunteerPage;
