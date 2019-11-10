import React from 'react'
import {Table, Button} from 'semantic-ui-react'

class ActivityLogInfo extends React.Component {
  render(){
    return(
      <Table.Row>
          <Table.Cell> Host </Table.Cell>
          <Table.Cell> {this.props.eventt.date} </Table.Cell>
          <Table.Cell> {this.props.eventt.name} </Table.Cell>
          <Table.Cell> {this.props.eventt.start_time} - {this.props.eventt.end_time} </Table.Cell>
          <Table.Cell> {this.props.eventt.description} </Table.Cell>
          <Table.Cell><Button>Cancel</Button></Table.Cell>
      </Table.Row>
    )

  }
}
  export default ActivityLogInfo
