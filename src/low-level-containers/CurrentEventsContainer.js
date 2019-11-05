import React from 'react'
import Event from '../components/Event'

class CurrentEventsContainer extends React.Component {
  render(){
    return(
      <div>
        {this.props.events.map((event) => <Event data={event} key={event.id} handleEventSignUp={this.props.handleEventSignUp}/>)}
      </div>
    )
  }
}
export default CurrentEventsContainer;