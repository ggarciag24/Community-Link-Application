import React from 'react'
import {Table, Button} from 'semantic-ui-react'

class ActivityLogVolunteerInfoTwo extends React.Component {
  render(){
    return (
      <>
          <Table.Cell> Volunteer </Table.Cell>
          <Table.Cell> {this.props.indivEvent.date} </Table.Cell>
          <Table.Cell> {this.props.indivEvent.name} </Table.Cell>
          <Table.Cell> {this.props.indivEvent.start_time} - {this.props.indivEvent.end_time}</Table.Cell>
          <Table.Cell> {this.props.indivEvent.description} </Table.Cell>
          <Table.Cell><Button onClick={() => this.props.handleRemove(this.props.indivEvent)}>unVolunteer</Button></Table.Cell>
      </>
    )

  }
}
  export default ActivityLogVolunteerInfoTwo
