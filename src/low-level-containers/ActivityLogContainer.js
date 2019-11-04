import React from 'react'
import { Table } from 'semantic-ui-react'

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
          <Table.Row>
            <Table.Cell>host/volunteer</Table.Cell>
            <Table.Cell> eventname</Table.Cell>
            <Table.Cell>
              Description of the event that they were a part of 
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    )
  }
}
export default ActivityLogContainer;
