import React from 'react'
import {Table} from 'semantic-ui-react'

class ActivityLogVolunteerInfoTwo extends React.Component {
  render(){
    debugger
    return (
    <React.Fragment>
          <Table.Cell> Volunteer </Table.Cell>
          <Table.Cell> {this.props.indivEvent.name} </Table.Cell>
          <Table.Cell> {this.props.indivEvent.description} </Table.Cell>
    </React.Fragment>
    )

  }
}
  export default ActivityLogVolunteerInfoTwo
