import React from 'react'
import { Table } from 'semantic-ui-react'
import ActivityLogInfo from '../components/ActivityLogInfo'

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
        </Table.Body>
      </Table>
    )
  }
}
export default ActivityLogContainer;
