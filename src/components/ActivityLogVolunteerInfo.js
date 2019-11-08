import React from 'react'
import {Table} from 'semantic-ui-react'
import ActivityLogVolunteerInfoTwo from './ActivityLogVolunteerInfoTwo'

class ActivityLogVolunteerInfo extends React.Component {
  render(){
    return (
      <Table.Row>
          {this.props.events.map((indivEvent) => indivEvent.id === this.props.eventCon.event_id ?
          <ActivityLogVolunteerInfoTwo indivEvent={indivEvent} handleRemove={this.props.handleRemove}/>
        :null )}
      </Table.Row>
    )
  }
}
  export default ActivityLogVolunteerInfo
