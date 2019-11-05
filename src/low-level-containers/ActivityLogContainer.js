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
            <Table.Cell>name </Table.Cell>
            <Table.Cell>
              description
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
export default ActivityLogContainer;
