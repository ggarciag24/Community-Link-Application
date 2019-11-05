import React from 'react'
import {Table} from 'semantic-ui-react'

class ActivityLogInfo extends React.Component {
  render(){

    return(
      <Table.Row>
          <Table.Cell> Host </Table.Cell>
          <Table.Cell> {this.props.eventt.name} </Table.Cell>
          <Table.Cell> {this.props.eventt.description} </Table.Cell>
      </Table.Row>
    )

  }
}
  export default ActivityLogInfo
