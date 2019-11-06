import React from 'react'
import { Table } from 'semantic-ui-react'
import ActivityLogInfo from '../components/ActivityLogInfo'
import ActivityLogVolunteerInfo from '../components/ActivityLogVolunteerInfo'

class ActivityLogContainer extends React.Component {
  render(){
    return(
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Event Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.events.map((eventt) => eventt.host_id === this.props.currentUser.id ?
            <ActivityLogInfo eventt={eventt}/>
          : null)}
          {this.props.eventConnect.map((eventCon) => eventCon.volunteer_id === this.props.currentUser.id ?
            <ActivityLogVolunteerInfo eventCon={eventCon} events={this.props.events}/>
          : null)}
        </Table.Body>
      </Table>
    )
  }
}
export default ActivityLogContainer;
