import React from 'react'
import { Table } from 'semantic-ui-react'
import ActivityLogInfo from '../components/ActivityLogInfo'
import ActivityLogVolunteerInfo from '../components/ActivityLogVolunteerInfo'

class ActivityLogContainer extends React.Component {

  handleRemove = (obj) => {
    debugger
    let filteredConnections = this.props.eventConnect.filter(indiv_eventCon => indiv_eventCon.event_id === obj.id)
    let deeplyFilteredConnections = filteredConnections.filter(connections => connections.volunteer_id === this.props.currentUser.id)
    if (deeplyFilteredConnections.length > 0) {
      fetch('http://localhost:3000/volunteer_events', {
        method: 'DELETE',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
        },
        body: JSON.stringify({id: deeplyFilteredConnections[0].id})
      })
      .then(res => res.json())
      })
    }
  }

  render(){
    return(
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Event Name</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.events.map((eventt) => eventt.host_id === this.props.currentUser.id ?
            <ActivityLogInfo eventt={eventt}/>
          : null)}
          {this.props.eventConnect.map((eventCon) => eventCon.volunteer_id === this.props.currentUser.id ?
            <ActivityLogVolunteerInfo eventCon={eventCon} events={this.props.events} handleRemove={this.handleRemove}/>
          : null)}
        </Table.Body>
      </Table>
    )
  }
}
export default ActivityLogContainer;
